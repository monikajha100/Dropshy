import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";

// ======================================================
// DEBUG SETTINGS
// DEBUG = true -> page ke upar "Debug log" panel dikhega (har step likha aayega)
// Kaam ho jane ke baad DEBUG ko false kar dena
// ======================================================
const DEBUG = true;
const REQUEST_TIMEOUT_MS = 20000;
const MAX_FILE_MB = 10; // backend ki limit 10MB hai

const API_URL = "http://localhost:5000";

const pages = [
  { id: "home", name: "Home", banners: 3 },
  { id: "about", name: "About Us", banners: 3 },
  { id: "services", name: "Services", banners: 1 },
  { id: "national", name: "National", banners: 1 },
  { id: "international", name: "International", banners: 1 },
  { id: "ecommerce", name: "E-Commerce", banners: 1 },
  { id: "contact", name: "Contact Us", banners: 1 },
];


// Axios error ko simple bhasha me samjhata hai (kya hua + kya karna hai)
const describeError = (error) => {
  if (error.response) {
    const { status, data } = error.response;

    let hint = "";
    if (status === 404) {
      hint =
        "Route nahi mila -> server.js me app.use('/api/banners', require('./src/routes/banner')) hona chahiye, aur backend restart karo";
    } else if (status === 400) {
      hint = "Backend ne request reject ki -> message dekho (image/page_name/banner_number galat)";
    } else if (status >= 500) {
      hint = "Backend ya DB error -> backend terminal me [FAILED] wali block dekho, wahan wajah likhi hai";
    }

    return {
      kind: "SERVER NE ERROR DIYA",
      status,
      message: data?.message || `HTTP ${status}`,
      sqlMessage: data?.sqlMessage || undefined,
      code: data?.code || undefined,
      hint,
    };
  }

  if (error.code === "ECONNABORTED") {
    return {
      kind: "TIMEOUT",
      message: error.message,
      hint: `Backend ne ${REQUEST_TIMEOUT_MS / 1000} sec me jawab nahi diya -> backend hang ho gaya ya band hai`,
    };
  }

  if (error.request) {
    return {
      kind: "BACKEND SE RESPONSE NAHI AAYA",
      message: error.message,
      hint:
        "(1) Backend chal raha hai? (2) Browser me http://localhost:5000 kholke dekho (3) F12 -> Console me CORS error hai? Hai to server.js me app.use(cors()) lagao",
    };
  }

  return {
    kind: "REQUEST BHEJNE SE PEHLE HI ERROR",
    message: error.message,
    hint: "Frontend code me error hai",
  };
};


function Services() {
  const [selectedPage, setSelectedPage] = useState("");

  // Abhi select ki gayi (par save nahi hui) images: { pageId: { index: { file, preview } } }
  const [bannerImages, setBannerImages] = useState({});

  // Database me pehle se saved banners
  const [savedBanners, setSavedBanners] = useState([]);

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null); // { type: "ok" | "error", text }

  const [debugLogs, setDebugLogs] = useState([]);
  const [showDebug, setShowDebug] = useState(true);

  const selectedPageData = pages.find((page) => page.id === selectedPage);


  // ================================
  // DEBUG HELPER (console + screen panel)
  // ================================

  const debug = (step, data) => {
    if (!DEBUG) return;

    let detail = "";

    if (data !== undefined) {
      if (data instanceof Error) {
        detail = `${data.name}: ${data.message}`;
      } else if (typeof data === "string") {
        detail = data;
      } else {
        try {
          detail = JSON.stringify(data, null, 2);
        } catch {
          detail = String(data);
        }
      }
    }

    console.log(`[BANNER-DEBUG] ${step}`, data ?? "");

    setDebugLogs((prev) => [
      ...prev.slice(-99),
      { time: new Date().toLocaleTimeString(), step, detail },
    ]);
  };

  const copyDebugLogs = async () => {
    const text = debugLogs
      .map((log) => `[${log.time}] ${log.step}${log.detail ? `\n${log.detail}` : ""}`)
      .join("\n\n");

    try {
      await navigator.clipboard.writeText(text);
      debug("Debug log copy ho gaya");
    } catch {
      debug("Copy nahi hua - panel se manually select karke copy karo");
    }
  };


  // ================================
  // BACKEND KIS DATABASE ME LIKH RAHA HAI (debug)
  // ================================

  const checkDatabase = async (label) => {
    try {
      const response = await axios.get(`${API_URL}/api/banners/debug/db`, {
        timeout: REQUEST_TIMEOUT_MS,
      });

      const d = response.data;

      debug(`${label}: BACKEND ISI DATABASE ME LIKH RAHA HAI`, {
        database: d.database,
        mysql_host: d.host,
        mysql_port: d.port,
        total_rows_in_banners_table: d.total_rows,
        columns: d.columns,
        latest_rows: d.latest_rows,
      });

      return d;
    } catch (error) {
      const info = describeError(error);

      debug(`${label}: DB CHECK ERROR`, info);

      if (info.status === 404) {
        debug(
          "HINT",
          "'/api/banners/debug/db' nahi mila -> ya to PURANA banner.js chal raha hai (naya lagao + backend restart karo), ya /api/banners route mount nahi hai"
        );
      }

      return null;
    }
  };


  // ================================
  // GET ALL BANNERS (database se)
  // ================================

  const fetchBanners = async () => {
    try {
      debug("GET /api/banners/all bhej rahe hain");

      const response = await axios.get(`${API_URL}/api/banners/all`, {
        timeout: REQUEST_TIMEOUT_MS,
      });

      debug(`GET /all -> HTTP ${response.status}`, {
        success: response.data?.success,
        rows: response.data?.data?.length,
      });

      if (response.data.success) {
        const rows = response.data.data || [];
        setSavedBanners(rows);
        return rows;
      }

      debug("GET /all: success false aaya", response.data);
    } catch (error) {
      debug("GET /all ERROR", describeError(error));
    }

    return null;
  };


  // ================================
  // PAGE LOAD
  // ================================

  useEffect(() => {
    debug("0. SERVICES.JSX (Banner Management) LOAD HUA - ye sahi file hai", {
      API_URL,
      pageUrl: window.location.href,
    });

    (async () => {
      await fetchBanners();
      await checkDatabase("0. PAGE LOAD");
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // ================================
  // HELPERS
  // ================================

  const getSavedBanner = (pageId, index) =>
    savedBanners.find(
      (banner) =>
        banner.page_name === pageId &&
        Number(banner.banner_number) === index + 1
    );

  const handlePageChange = (e) => {
    setSelectedPage(e.target.value);
    setMessage(null);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];

    if (!file) return;

    debug("1. FILE SELECT HUI", {
      page_name: selectedPage,
      banner_number: index + 1,
      name: file.name,
      type: file.type,
      sizeKB: Number((file.size / 1024).toFixed(1)),
    });

    if (!file.type.startsWith("image/")) {
      debug("STOP: image file nahi hai", file.type);
      setMessage({ type: "error", text: "Please select an image file (JPG, PNG or WEBP)." });
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      debug("STOP: file badi hai", `${(file.size / 1024 / 1024).toFixed(1)} MB`);
      setMessage({ type: "error", text: `Image must be smaller than ${MAX_FILE_MB} MB.` });
      e.target.value = "";
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setMessage(null);

    setBannerImages((prev) => {
      // Purana preview URL free karo
      const oldPreview = prev[selectedPage]?.[index]?.preview;
      if (oldPreview) URL.revokeObjectURL(oldPreview);

      return {
        ...prev,
        [selectedPage]: {
          ...(prev[selectedPage] || {}),
          [index]: {
            file: file,
            preview: imageUrl,
          },
        },
      };
    });

    // Same file dobara choose karne par bhi onChange chale
    e.target.value = "";
  };

  // Sirf abhi select ki hui (unsaved) image hatata hai
  const removeImage = (index) => {
    setBannerImages((prev) => {
      const updated = {
        ...(prev[selectedPage] || {}),
      };

      if (updated[index]?.preview) URL.revokeObjectURL(updated[index].preview);

      delete updated[index];

      return {
        ...prev,
        [selectedPage]: updated,
      };
    });
  };


  // ================================
  // SAVE BANNERS -> BACKEND -> DATABASE
  // ================================

  const handleSaveBanners = async () => {
    debug("1. SAVE BANNERS BUTTON CLICK", { selectedPage });

    if (saving) {
      debug("STOP: pehle se save chal raha hai");
      return;
    }

    const pageId = selectedPage;
    const pageImages = bannerImages[pageId] || {};

    // Jin banners me nayi image select hui hai wahi bhejenge
    const pending = Object.entries(pageImages)
      .filter(([, image]) => image?.file)
      .map(([index, image]) => ({ index: Number(index), file: image.file }));

    debug(
      "2. UPLOAD KE LIYE TAIYAR",
      pending.map((item) => ({
        page_name: pageId,
        banner_number: item.index + 1,
        file: item.file.name,
      }))
    );

    if (pending.length === 0) {
      debug("STOP: koi nayi image select nahi hui");
      setMessage({
        type: "error",
        text: "Select at least one new banner image before saving.",
      });
      return;
    }

    setSaving(true);
    setMessage(null);

    const uploaded = []; // backend ne success bola
    const failed = []; //   backend ne fail bola

    // Backend ek request me ek hi image leta hai, isliye ek-ek karke bhejte hain
    for (const item of pending) {
      const bannerNumber = item.index + 1;

      try {
        const formData = new FormData();
        formData.append("image", item.file);
        formData.append("page_name", pageId);
        formData.append("banner_number", String(bannerNumber));

        debug(`3. REQUEST SENT -> POST ${API_URL}/api/banners/upload`, {
          image: `FILE(${item.file.name})`,
          page_name: pageId,
          banner_number: String(bannerNumber),
        });

        const response = await axios.post(
          `${API_URL}/api/banners/upload`,
          formData,
          { timeout: REQUEST_TIMEOUT_MS }
        );

        debug(`4. RESPONSE AAYA (HTTP ${response.status}) - banner ${bannerNumber}`, response.data);

        if (response.data.success) {
          if (!response.data.data) {
            debug(
              "WARNING",
              "Response me 'data' (DB ki saved row) nahi hai -> PURANA banner.js chal raha hai ya koi aur server 5000 port pe hai. Naya banner.js lagao aur backend restart karo"
            );
          }

          uploaded.push({ index: item.index, bannerNumber, image: response.data.image });
        } else {
          failed.push({
            bannerNumber,
            reason: response.data.message || "Banner upload failed",
          });
        }
      } catch (error) {
        const info = describeError(error);

        debug(`ERROR: banner ${bannerNumber} UPLOAD FAIL`, info);

        failed.push({
          bannerNumber,
          reason: `${info.message}${info.hint ? ` — ${info.hint}` : ""}`,
        });
      }
    }

    // ---------- VERIFY: kya sach me DB me hai? ----------
    const rows = await fetchBanners();

    const verified = [];
    const notInDb = [];

    uploaded.forEach((item) => {
      const found = rows?.find(
        (row) =>
          row.page_name === pageId &&
          Number(row.banner_number) === item.bannerNumber
      );

      if (found && (!item.image || found.image === item.image)) {
        debug(`5. VERIFY OK: ${pageId} banner ${item.bannerNumber} DB me hai`, found);
        verified.push(item);
      } else {
        debug(
          `5. VERIFY FAIL: ${pageId} banner ${item.bannerNumber} - backend ne success bola par GET /all me nahi mila`,
          "Backend kisi aur database/table me likh raha hai ya purana server chal raha hai. 'BACKEND ISI DATABASE ME LIKH RAHA HAI' wali line dekho aur MySQL me wahi database kholo"
        );
        notInDb.push(item);
      }
    });

    // DB me confirm hui images ka local preview hata do (ab server wali image dikhegi)
    if (verified.length > 0) {
      setBannerImages((prev) => {
        const page = { ...(prev[pageId] || {}) };

        verified.forEach((item) => {
          if (page[item.index]?.preview) URL.revokeObjectURL(page[item.index].preview);
          delete page[item.index];
        });

        return { ...prev, [pageId]: page };
      });
    }

    await checkDatabase("6. SAVE KE BAAD");

    // ---------- USER KO MESSAGE ----------
    if (failed.length === 0 && notInDb.length === 0) {
      setMessage({
        type: "ok",
        text: `Banner submitted successfully — ${verified.length} banner${verified.length > 1 ? "s" : ""} saved in the database.`,
      });
    } else {
      const parts = [];

      if (verified.length > 0) {
        parts.push(`${verified.length} saved in the database`);
      }

      failed.forEach((item) => {
        parts.push(`Banner ${item.bannerNumber} failed: ${item.reason}`);
      });

      notInDb.forEach((item) => {
        parts.push(
          `Banner ${item.bannerNumber}: server said saved, but it was not found in the database (see debug log)`
        );
      });

      setMessage({ type: "error", text: parts.join(" | ") });
    }

    setSaving(false);
    debug("7. DONE");
  };

  return (
    <div className="banner-management">

      {/* HEADER */}

      <div className="banner-page-header">

        <div className="banner-header-content">

          <span className="banner-small-title">
            DROPSHY ADMIN PANEL
          </span>

          <h1>Banner Management</h1>

          <p>
            Manage banners for different pages of your website.
          </p>

        </div>

        <div className="banner-header-icon">
          🖼️
        </div>

      </div>


      {/* DEBUG PANEL (DEBUG = false karne par gayab) */}

      {DEBUG && (
        <div
          style={{
            margin: "15px 0",
            border: "1px solid #c9c9c9",
            borderRadius: "8px",
            background: "#1e1e1e",
            color: "#e6e6e6",
            fontFamily: "Consolas, Menlo, monospace",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 12px",
              borderBottom: showDebug ? "1px solid #444" : "none",
            }}
          >
            <strong>Debug log ({debugLogs.length})</strong>

            <span style={{ display: "flex", gap: "8px" }}>
              <button type="button" onClick={() => checkDatabase("MANUAL CHECK")}>
                DB check
              </button>
              <button type="button" onClick={copyDebugLogs}>Copy</button>
              <button type="button" onClick={() => setDebugLogs([])}>Clear</button>
              <button type="button" onClick={() => setShowDebug((prev) => !prev)}>
                {showDebug ? "Hide" : "Show"}
              </button>
            </span>
          </div>

          {showDebug && (
            <div style={{ maxHeight: "320px", overflow: "auto", padding: "8px 12px" }}>
              {debugLogs.length === 0 && (
                <div style={{ opacity: 0.6 }}>Abhi koi log nahi.</div>
              )}

              {debugLogs.map((log, index) => {
                const isBad = /FAIL|ERROR|STOP|WARNING|HINT/i.test(log.step);
                const isGood = /VERIFY OK|SAHI FILE/i.test(log.step);

                return (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <div
                      style={{
                        color: isBad ? "#ff7b72" : isGood ? "#7ee787" : "#79c0ff",
                      }}
                    >
                      [{log.time}] {log.step}
                    </div>

                    {log.detail && (
                      <pre
                        style={{
                          margin: "2px 0 0",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          color: "#c9d1d9",
                        }}
                      >
                        {log.detail}
                      </pre>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}


      {/* MAIN CARD */}

      <div className="banner-main-card">

        <div className="banner-card-title">

          <div>
            <h2>Website Banners</h2>

            <p>
              Select a page to manage its banners.
            </p>
          </div>

        </div>


        {/* DROPDOWN */}

        <div className="banner-select-box">

          <label htmlFor="pageSelect">
            Select Page
          </label>

          <select
            id="pageSelect"
            value={selectedPage}
            onChange={handlePageChange}
          >

            <option value="">
              Select a page
            </option>

            {pages.map((page) => (
              <option
                value={page.id}
                key={page.id}
              >
                {page.name}
              </option>
            ))}

          </select>

        </div>


        {/* BANNERS */}

        {selectedPageData && (

          <div className="selected-banner-section">

            <div className="selected-page-heading">

              <div>
                <h3>
                  {selectedPageData.name} Banners
                </h3>

                <p>
                  Upload banner images for this page.
                </p>
              </div>

              <span>
                {selectedPageData.banners} Banner
                {selectedPageData.banners > 1 ? "s" : ""}
              </span>

            </div>


            <div
              className={`banner-upload-grid ${
                selectedPageData.banners === 3
                  ? "three-banners"
                  : ""
              }`}
            >

              {Array.from({
                length: selectedPageData.banners,
              }).map((_, index) => {

                // Abhi select ki hui (unsaved) image
                const localImage =
                  bannerImages[selectedPage]?.[index];

                // Database me pehle se saved image
                const savedBanner =
                  getSavedBanner(selectedPage, index);

                const previewSrc =
                  localImage?.preview ||
                  (savedBanner?.image
                    ? `${API_URL}/uploads/banners/${savedBanner.image}`
                    : null);

                return (

                  <div
                    className="banner-upload-card"
                    key={index}
                  >

                    <div className="banner-card-number">
                      Banner {index + 1}
                    </div>


                    {previewSrc ? (

                      <div className="banner-image-preview">

                        <img
                          src={previewSrc}
                          alt={`Banner ${index + 1}`}
                          onError={() =>
                            debug(
                              "IMAGE LOAD ERROR",
                              `${previewSrc} nahi khul rahi -> server.js me app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) check karo`
                            )
                          }
                        />

                        <small style={{ display: "block", margin: "6px 0" }}>
                          {localImage
                            ? "New image selected - click Save Banners to save"
                            : "Saved in database"}
                        </small>

                        <div className="image-buttons">

                          <label
                            htmlFor={`banner-${selectedPage}-${index}`}
                            className="change-image-btn"
                          >
                            Change
                          </label>

                          {localImage && (
                            <button
                              type="button"
                              className="remove-image-btn"
                              onClick={() =>
                                removeImage(index)
                              }
                            >
                              Remove
                            </button>
                          )}

                        </div>

                      </div>

                    ) : (

                      <label
                        htmlFor={`banner-${selectedPage}-${index}`}
                        className="banner-upload-area"
                      >

                        <div className="upload-icon">
                          ↑
                        </div>

                        <h4>
                          Upload Banner
                        </h4>

                        <p>
                          Click here to select image
                        </p>

                        <small>
                          JPG, PNG or WEBP
                        </small>

                      </label>

                    )}


                    <input
                      type="file"
                      id={`banner-${selectedPage}-${index}`}
                      accept="image/png,image/jpeg,image/webp"
                      hidden
                      onChange={(e) =>
                        handleImageChange(e, index)
                      }
                    />

                  </div>

                );
              })}

            </div>


            {/* MESSAGE */}

            {message && (
              <div
                style={{
                  margin: "15px 0",
                  padding: "12px 16px",
                  background: message.type === "ok" ? "#e8f7ed" : "#fdecea",
                  color: message.type === "ok" ? "#1b7a3a" : "#b3261e",
                  borderRadius: "8px",
                  fontWeight: "600",
                }}
              >
                {message.text}
              </div>
            )}


            {/* SAVE */}

            <div className="banner-save-area">

              <button
                type="button"
                className="save-banners-btn"
                disabled={saving}
                onClick={handleSaveBanners}
              >
                {saving ? "Saving..." : "Save Banners"}
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Services;
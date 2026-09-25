import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Allbanner.css";

// ======================================================
// DEBUG SETTINGS
// DEBUG = true -> page ke upar "Debug log" panel dikhega, jisme har step
// likha aayega. Panel dikhe hi nahi to app YE file chala hi nahi rahi.
// Kaam ho jane ke baad DEBUG ko false kar dena.
// ======================================================
const DEBUG = true;
const REQUEST_TIMEOUT_MS = 20000;

const pages = [
    { id: "home", name: "Home", banners: 3 },
    { id: "about", name: "About Us", banners: 3 },
    { id: "services", name: "Services", banners: 1 },
    { id: "national", name: "National", banners: 1 },
    { id: "international", name: "International", banners: 1 },
    { id: "ecommerce", name: "E-Commerce", banners: 1 },
    { id: "contact", name: "Contact Us", banners: 1 }
];

const API_URL = "http://localhost:5000";


// Axios error ko simple bhasha me samjhata hai (kya hua + kya karna hai)
const describeError = (error) => {

    if (error.response) {

        const { status, data } = error.response;

        let hint = "";

        if (status === 404) {
            hint = "Route nahi mila -> server.js me app.use('/api/banners', require('./src/routes/banner')) hona chahiye, aur backend restart karo";
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
            hint
        };

    }

    if (error.code === "ECONNABORTED") {

        return {
            kind: "TIMEOUT",
            message: error.message,
            hint: `Backend ne ${REQUEST_TIMEOUT_MS / 1000} sec me jawab nahi diya -> backend hang ho gaya ya band hai`
        };

    }

    if (error.request) {

        return {
            kind: "BACKEND SE RESPONSE NAHI AAYA",
            message: error.message,
            hint: "(1) Backend chal raha hai? (2) Browser me http://localhost:5000 kholke dekho (3) F12 -> Console me CORS error hai? Hai to server.js me app.use(cors()) lagao"
        };

    }

    return {
        kind: "REQUEST BHEJNE SE PEHLE HI ERROR",
        message: error.message,
        hint: "Frontend code me error hai"
    };

};


function AllBanners() {

    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState({});
    const [message, setMessage] = useState(null); // { type: "ok" | "error", text }

    const [debugLogs, setDebugLogs] = useState([]);
    const [showDebug, setShowDebug] = useState(true);

    const fileInputRefs = useRef({});


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
            {
                time: new Date().toLocaleTimeString(),
                step,
                detail
            }
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

            const response = await axios.get(
                `${API_URL}/api/banners/debug/db`,
                { timeout: REQUEST_TIMEOUT_MS }
            );

            const d = response.data;

            debug(`${label}: BACKEND ISI DATABASE ME LIKH RAHA HAI`, {
                database: d.database,
                mysql_host: d.host,
                mysql_port: d.port,
                total_rows_in_banners_table: d.total_rows,
                columns: d.columns,
                latest_rows: d.latest_rows
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
    // GET ALL BANNERS
    // ================================

    const fetchBanners = async () => {

        try {

            setLoading(true);

            debug("GET /api/banners/all bhej rahe hain");

            const response = await axios.get(
                `${API_URL}/api/banners/all`,
                { timeout: REQUEST_TIMEOUT_MS }
            );

            debug(`GET /all -> HTTP ${response.status}`, {
                success: response.data?.success,
                rows: response.data?.data?.length
            });

            if (response.data.success) {

                const rows = response.data.data || [];

                setBanners(rows);

                return rows;

            }

            debug("GET /all: success false aaya", response.data);

        } catch (error) {

            debug("GET /all ERROR", describeError(error));

            console.error(
                "GET BANNERS ERROR:",
                error.response?.data || error.message
            );

        } finally {

            setLoading(false);

        }

        return null;

    };


    // ================================
    // LOAD DATA
    // ================================

    useEffect(() => {

        debug("0. ALL BANNERS FILE LOAD HUA (ye sahi file hai)", {
            API_URL,
            pageUrl: window.location.href
        });

        (async () => {
            await fetchBanners();
            await checkDatabase("0. PAGE LOAD");
        })();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // ================================
    // FIND BANNER
    // ================================

    const getBanner = (
        pageName,
        bannerNumber
    ) => {

        return banners.find(
            (banner) =>
                banner.page_name === pageName &&
                Number(banner.banner_number) ===
                    Number(bannerNumber)
        );

    };


    // ================================
    // OPEN FILE SELECTOR
    // ================================

    const handleUpdateClick = (
        pageId,
        bannerNumber
    ) => {

        const key =
            `${pageId}-${bannerNumber}`;

        const input =
            fileInputRefs.current[key];

        debug("BUTTON CLICK", {
            pageId,
            bannerNumber,
            fileInputMila: Boolean(input)
        });

        if (input) {

            input.click();

        }

    };


    // ================================
    // FILE SELECTED -> UPLOAD
    // ================================

    const handleFileChange = async (
        event,
        pageId,
        bannerNumber
    ) => {

        const file =
            event.target.files?.[0];

        if (!file) {

            debug("STOP: koi file select nahi hui");

            return;

        }

        debug("1. FILE SELECT HUI", {
            name: file.name,
            type: file.type,
            sizeKB: Number((file.size / 1024).toFixed(1)),
            page_name: pageId,
            banner_number: bannerNumber
        });


        if (!file.type.startsWith("image/")) {

            debug("STOP: image file nahi hai", file.type);

            setMessage({
                type: "error",
                text: "Please select an image file (JPG, PNG or WEBP)."
            });

            event.target.value = "";

            return;

        }


        const key =
            `${pageId}-${bannerNumber}`;


        try {

            setUploading((prev) => ({
                ...prev,
                [key]: true
            }));

            setMessage(null);


            // ================================
            // FORM DATA
            // ================================

            const formData =
                new FormData();

            formData.append(
                "image",
                file
            );

            formData.append(
                "page_name",
                pageId
            );

            formData.append(
                "banner_number",
                String(bannerNumber)
            );

            debug("2. FORMDATA READY (backend ko ye jayega)", {
                image: `FILE(${file.name})`,
                page_name: pageId,
                banner_number: String(bannerNumber)
            });


            // ================================
            // POST API
            // ================================

            debug(`3. REQUEST SENT -> POST ${API_URL}/api/banners/upload`);

            const response =
                await axios.post(
                    `${API_URL}/api/banners/upload`,
                    formData,
                    { timeout: REQUEST_TIMEOUT_MS }
                );

            debug(`4. RESPONSE AAYA (HTTP ${response.status})`, response.data);


            if (response.data.success) {

                // Naya banner.js "data" (DB ki saved row) bhejta hai
                if (!response.data.data) {

                    debug(
                        "WARNING",
                        "Response me 'data' (DB ki saved row) nahi hai -> PURANA banner.js chal raha hai ya koi aur server 5000 port pe hai. Naya banner.js lagao aur backend restart karo"
                    );

                }

                setMessage({
                    type: "ok",
                    text: `${pageId} Banner ${bannerNumber}: ${response.data.message || "Banner uploaded"}`
                });

                // ---------- VERIFY: kya sach me DB me hai? ----------
                const rows = await fetchBanners();

                const found = rows?.find(
                    (row) =>
                        row.page_name === pageId &&
                        Number(row.banner_number) === Number(bannerNumber)
                );

                if (found && (!response.data.image || found.image === response.data.image)) {

                    debug("5. VERIFY OK: banner GET /all me mil gaya (DB me hai)", found);

                } else if (found) {

                    debug(
                        "5. VERIFY FAIL: banner mila par image ka naam alag hai",
                        { upload_ki_image: response.data.image, db_ki_image: found.image }
                    );

                } else {

                    debug(
                        "5. VERIFY FAIL: backend ne success bola par banner GET /all me nahi mila",
                        "Iska matlab backend kisi aur database/table me likh raha hai ya koi purana server chal raha hai. Neeche wali 'BACKEND ISI DATABASE ME LIKH RAHA HAI' line dekho aur MySQL me wahi database kholo"
                    );

                }

                await checkDatabase("6. UPLOAD KE BAAD");

            } else {

                debug("4. FAIL: server ne success:false bheja", response.data);

                setMessage({
                    type: "error",
                    text: response.data.message || "Banner upload failed"
                });

            }

        } catch (error) {

            const info = describeError(error);

            debug("ERROR: UPLOAD FAIL", info);

            console.error(
                "UPLOAD ERROR:",
                error.response?.data ||
                error.message
            );

            setMessage({
                type: "error",
                text: `${info.message}${info.hint ? ` — ${info.hint}` : ""}`
            });

        } finally {

            setUploading((prev) => ({
                ...prev,
                [key]: false
            }));

            event.target.value = "";

            debug("7. DONE");

        }

    };


    return (

        <div className="all-banners-page">

            {/* ================================
                HEADER
            ================================= */}

            <div className="all-banners-header">

                <div>

                    <span className="all-banners-tag">
                        DROPSHY ADMIN PANEL
                    </span>

                    <h1>
                        All Banners
                    </h1>

                    <p>
                        View and manage banners for all website pages.
                    </p>

                </div>

                <div className="all-banners-icon">
                    🖼️
                </div>

            </div>


            {/* ================================
                DEBUG PANEL
                (DEBUG = false karne par gayab)
            ================================= */}

            {DEBUG && (

                <div
                    style={{
                        margin: "15px 0",
                        border: "1px solid #c9c9c9",
                        borderRadius: "8px",
                        background: "#1e1e1e",
                        color: "#e6e6e6",
                        fontFamily: "Consolas, Menlo, monospace",
                        fontSize: "12px"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "8px 12px",
                            borderBottom: showDebug ? "1px solid #444" : "none"
                        }}
                    >

                        <strong>
                            Debug log ({debugLogs.length})
                        </strong>

                        <span style={{ display: "flex", gap: "8px" }}>

                            <button
                                type="button"
                                onClick={() => checkDatabase("MANUAL CHECK")}
                            >
                                DB check
                            </button>

                            <button type="button" onClick={copyDebugLogs}>
                                Copy
                            </button>

                            <button type="button" onClick={() => setDebugLogs([])}>
                                Clear
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowDebug((prev) => !prev)}
                            >
                                {showDebug ? "Hide" : "Show"}
                            </button>

                        </span>

                    </div>

                    {showDebug && (

                        <div
                            style={{
                                maxHeight: "320px",
                                overflow: "auto",
                                padding: "8px 12px"
                            }}
                        >

                            {debugLogs.length === 0 && (

                                <div style={{ opacity: 0.6 }}>
                                    Abhi koi log nahi.
                                </div>

                            )}

                            {debugLogs.map((log, index) => {

                                const isBad = /FAIL|ERROR|STOP|WARNING|HINT/i.test(log.step);
                                const isGood = /VERIFY OK|SAHI FILE/i.test(log.step);

                                return (

                                    <div key={index} style={{ marginBottom: "10px" }}>

                                        <div
                                            style={{
                                                color: isBad
                                                    ? "#ff7b72"
                                                    : isGood
                                                        ? "#7ee787"
                                                        : "#79c0ff"
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
                                                    color: "#c9d1d9"
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


            {/* ================================
                MESSAGE
            ================================= */}

            {message && (

                <div
                    style={{
                        margin: "15px 0",
                        padding: "12px 16px",
                        background: message.type === "ok" ? "#e8f7ed" : "#fdecea",
                        color: message.type === "ok" ? "#1b7a3a" : "#b3261e",
                        borderRadius: "8px",
                        fontWeight: "600"
                    }}
                >
                    {message.text}
                </div>

            )}


            {/* ================================
                LOADING
            ================================= */}

            {loading && (

                <div
                    style={{
                        padding: "15px",
                        textAlign: "center"
                    }}
                >
                    Loading banners...
                </div>

            )}


            {/* ================================
                ALL PAGES
            ================================= */}

            <div className="all-pages-container">

                {pages.map((page) => (

                    <div
                        className="page-banner-card"
                        key={page.id}
                    >

                        {/* PAGE HEADER */}

                        <div className="page-banner-header">

                            <div>

                                <h2>
                                    {page.name}
                                </h2>

                                <p>
                                    {page.banners} Banner
                                    {page.banners > 1
                                        ? "s"
                                        : ""}
                                </p>

                            </div>

                            <span className="page-status">
                                Active
                            </span>

                        </div>


                        {/* BANNERS */}

                        <div
                            className={`all-banner-grid ${
                                page.banners === 3
                                    ? "three"
                                    : ""
                            }`}
                        >

                            {Array.from({
                                length: page.banners
                            }).map((_, index) => {

                                const bannerNumber =
                                    index + 1;

                                const key =
                                    `${page.id}-${bannerNumber}`;

                                const banner =
                                    getBanner(
                                        page.id,
                                        bannerNumber
                                    );


                                return (

                                    <div
                                        className="all-banner-box"
                                        key={key}
                                    >

                                        {/* NUMBER */}

                                        <div className="all-banner-number">

                                            Banner {bannerNumber}

                                        </div>


                                        {/* IMAGE */}

                                        <div className="all-banner-placeholder">

                                            {banner?.image ? (

                                                <img
                                                    src={`${API_URL}/uploads/banners/${banner.image}`}
                                                    alt={`${page.name} Banner ${bannerNumber}`}
                                                    style={{
                                                        width: "100%",
                                                        height: "180px",
                                                        objectFit: "cover",
                                                        borderRadius: "8px"
                                                    }}
                                                    onError={() =>
                                                        debug(
                                                            "IMAGE LOAD ERROR",
                                                            `${API_URL}/uploads/banners/${banner.image} nahi khul rahi -> server.js me app.use('/uploads', express.static(path.join(__dirname, 'uploads'))) check karo`
                                                        )
                                                    }
                                                />

                                            ) : (

                                                <>

                                                    <div className="all-banner-image-icon">
                                                        🖼️
                                                    </div>

                                                    <h3>
                                                        Banner {bannerNumber}
                                                    </h3>

                                                    <p>
                                                        No image uploaded
                                                    </p>

                                                </>

                                            )}

                                        </div>


                                        {/* HIDDEN FILE INPUT */}

                                        <input
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            style={{
                                                display: "none"
                                            }}
                                            ref={(element) => {

                                                fileInputRefs.current[key] =
                                                    element;

                                            }}
                                            onChange={(event) =>
                                                handleFileChange(
                                                    event,
                                                    page.id,
                                                    bannerNumber
                                                )
                                            }
                                        />


                                        {/* BUTTON */}

                                        <button
                                            type="button"
                                            className="update-banner-btn"
                                            disabled={
                                                uploading[key]
                                            }
                                            onClick={() =>
                                                handleUpdateClick(
                                                    page.id,
                                                    bannerNumber
                                                )
                                            }
                                        >

                                            {uploading[key]
                                                ? "Uploading..."
                                                : banner?.image
                                                    ? "Update Banner"
                                                    : "Upload Banner"}

                                        </button>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default AllBanners;
import { useState, useRef, useEffect } from "react";
import "./BlogForm.css";
import { postData } from "../../Services/FetchNodeService"; // apna path check kar lena

// ======================================================
// DEBUG SETTINGS
// DEBUG = true  -> browser console + form ke neeche "Debug log" panel me
//                  har step dikhega (kaha tak gaya, kaha atka)
// Kaam ho jane ke baad DEBUG ko false kar dena
// ======================================================
const DEBUG = true;
const REQUEST_TIMEOUT_MS = 20000; // 20 sec me server ne jawab nahi diya to "atak gaya" maan lo

const emptyStep = () => ({ title: "", description: "" });
const emptyFaq = () => ({ question: "", answer: "" });

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// FormData ke andar kya ja raha hai wo readable object me (file ka sirf naam/size)
const dumpFormData = (fd) => {
  const out = {};
  for (const [key, value] of fd.entries()) {
    if (value instanceof File) {
      out[key] = `FILE(${value.name}, ${(value.size / 1024).toFixed(1)} KB, ${value.type})`;
    } else {
      const text = String(value);
      out[key] = text.length > 80 ? `${text.slice(0, 80)}...` : text;
    }
  }
  return out;
};

// Request atak jaye to hamesha "Saving…" me na rahe
const withTimeout = (promise, ms) => {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`TIMEOUT: server ne ${ms / 1000} sec me response nahi diya`)),
      ms
    );
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
};

export default function BlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    bannerFile: null,
    bannerPreview: "",
    introductionHeading: "",
    introductionContent: "",
    introductionPoints: [""],
    overviewHeading: "",
    overviewContent: "",
    businessModelTitle: "",
    steps: [emptyStep()],
    faqHeading: "",
    faqs: [emptyFaq()],
    status: "draft",
    metaTitle: "",
    h1Heading: "",
    metaDescription: "",
  });

  // Only one section open at a time -> keeps the form short.
  const [openSection, setOpenSection] = useState("basic");
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null); // { type: "ok" | "error", text }
  const [slugTouched, setSlugTouched] = useState(false);

  // Pehli baar save hone ke baad backend jo id de, use yaha rakhte hain,
  // taaki "Save draft" ke baad "Publish" karne par naya blog na bane.
  const [blogId, setBlogId] = useState(null);

  // Debug panel
  const [debugLogs, setDebugLogs] = useState([]);
  const [showDebug, setShowDebug] = useState(true);

  const fileInputRef = useRef(null);
  const previewUrlRef = useRef(""); // current blob URL, taaki purana revoke kar sakein

  // ------------------------------------------------------
  // DEBUG HELPER: console + screen panel dono me log
  // ------------------------------------------------------
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

    console.log(`[BLOG-DEBUG] ${step}`, data ?? "");

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
      debug("Debug log clipboard me copy ho gaya");
    } catch {
      debug("Copy nahi ho paya - panel se manually select karke copy karo");
    }
  };

  // Component load hone par + kisi bhi uncaught error par log
  useEffect(() => {
    if (!DEBUG) return undefined;

    debug("0. BlogForm LOAD HUA", {
      postDataType: typeof postData, // "function" hona chahiye
      endpoint: "api/blogs/submit_blog",
    });

    const onError = (event) => debug("UNCAUGHT JS ERROR", event.message);
    const onRejection = (event) =>
      debug("UNHANDLED PROMISE ERROR", event.reason?.message || String(event.reason));

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Component hatne par blob URL free kar do (memory leak se bachne ke liye)
  useEffect(() => {
    return () => {
      if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    };
  }, []);

  const toggleSection = (id) =>
    setOpenSection((prev) => (prev === id ? "" : id));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: value,
      // keep slug in sync until the user edits it by hand
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const handleSlugChange = (e) => {
    const value = e.target.value;
    // Slug khaali kar diya to dobara title se auto-generate hone do
    setSlugTouched(value !== "");
    setFormData((prev) => ({ ...prev, slug: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    debug("IMAGE CHOSEN", {
      name: file.name,
      type: file.type,
      sizeKB: Number((file.size / 1024).toFixed(1)),
    });

    if (!file.type.startsWith("image/")) {
      debug("IMAGE REJECTED: image file nahi hai");
      setSaveMessage({ type: "error", text: "Please choose an image file (JPG, PNG or WEBP)." });
      e.target.value = "";
      return;
    }

    if (previewUrlRef.current) URL.revokeObjectURL(previewUrlRef.current);
    const previewUrl = URL.createObjectURL(file);
    previewUrlRef.current = previewUrl;

    setSaveMessage(null);
    setFormData((prev) => ({
      ...prev,
      bannerFile: file,
      bannerPreview: previewUrl,
    }));

    // same file dobara choose karne par bhi onChange chale
    e.target.value = "";
  };

  // Introduction points
  const handlePointChange = (index, value) => {
    setFormData((prev) => {
      const points = [...prev.introductionPoints];
      points[index] = value;
      return { ...prev, introductionPoints: points };
    });
  };
  const addPoint = () =>
    setFormData((prev) => ({
      ...prev,
      introductionPoints: [...prev.introductionPoints, ""],
    }));
  const removePoint = (index) =>
    setFormData((prev) => ({
      ...prev,
      introductionPoints: prev.introductionPoints.filter((_, i) => i !== index),
    }));

  // Steps
  const handleStepChange = (index, field, value) => {
    setFormData((prev) => {
      const steps = [...prev.steps];
      steps[index] = { ...steps[index], [field]: value };
      return { ...prev, steps };
    });
  };
  const addStep = () =>
    setFormData((prev) => ({ ...prev, steps: [...prev.steps, emptyStep()] }));
  const removeStep = (index) =>
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index),
    }));

  // FAQs
  const handleFaqChange = (index, field, value) => {
    setFormData((prev) => {
      const faqs = [...prev.faqs];
      faqs[index] = { ...faqs[index], [field]: value };
      return { ...prev, faqs };
    });
  };
  const addFaq = () =>
    setFormData((prev) => ({ ...prev, faqs: [...prev.faqs, emptyFaq()] }));
  const removeFaq = (index) =>
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));

  // status is passed in directly (not read from state) so the two buttons
  // below don't race with React's async setState.
  const saveBlog = async (status) => {
    debug("1. BUTTON CLICK", { status, saving, blogId });

    if (saving) {
      debug("STOP: pehle se save chal raha hai");
      return; // double click se do baar save na ho
    }

    if (!formData.title.trim()) {
      debug("STOP: title khaali hai");
      setSaveMessage({ type: "error", text: "Add a title before saving." });
      setOpenSection("basic");
      return;
    }

    // Slug hamesha clean karke bhejo (title se fallback)
    const finalSlug = slugify(formData.slug || formData.title);
    if (!finalSlug) {
      debug("STOP: slug khaali hai (title me letters/numbers nahi)");
      setSaveMessage({ type: "error", text: "Add a slug using letters or numbers." });
      setOpenSection("basic");
      return;
    }

    // Khaali points / steps / FAQs backend ko mat bhejo
    const points = formData.introductionPoints.map((p) => p.trim()).filter(Boolean);
    const steps = formData.steps.filter((s) => s.title.trim() || s.description.trim());
    const faqs = formData.faqs.filter((f) => f.question.trim() || f.answer.trim());

    debug("2. VALIDATION OK", {
      finalSlug,
      points: points.length,
      steps: steps.length,
      faqs: faqs.length,
      hasBanner: Boolean(formData.bannerFile),
    });

    setSaving(true);
    setSaveMessage(null);

    const fd = new FormData();
    if (blogId) fd.append("id", blogId);
    fd.append("title", formData.title.trim());
    fd.append("slug", finalSlug);
    fd.append("metaTitle", formData.metaTitle);
    fd.append("h1Heading", formData.h1Heading);
    fd.append("metaDescription", formData.metaDescription);
    fd.append("introductionHeading", formData.introductionHeading);
    fd.append("introductionContent", formData.introductionContent);
    fd.append("introductionPoints", JSON.stringify(points));
    fd.append("overviewHeading", formData.overviewHeading);
    fd.append("overviewContent", formData.overviewContent);
    fd.append("businessModelTitle", formData.businessModelTitle);
    fd.append("faqHeading", formData.faqHeading);
    fd.append("steps", JSON.stringify(steps));
    fd.append("faqs", JSON.stringify(faqs));
    fd.append("status", status);
    if (formData.bannerFile) fd.append("bannerImage", formData.bannerFile);

    if (DEBUG) debug("3. PAYLOAD READY (backend ko ye jayega)", dumpFormData(fd));

    const startedAt = performance.now();

    try {
      if (typeof postData !== "function") {
        throw new Error(
          "postData function nahi mila - FetchNodeService ka import path ya export name check karo"
        );
      }

      debug("4. REQUEST SENT -> postData('api/blogs/submit_blog')");

      // postData service se call — backend "/api" prefix ke saath mount hai
      const response = await withTimeout(
        postData("api/blogs/submit_blog", fd),
        REQUEST_TIMEOUT_MS
      );

      const ms = Math.round(performance.now() - startedAt);

      debug(`5. RESPONSE AAYA (${ms} ms)`, {
        type: typeof response,
        constructor: response?.constructor?.name,
        keys: response && typeof response === "object" ? Object.keys(response) : null,
        response,
      });

      // Kuch backends "status" ki jagah "success" bhejte hain, dono chalega
      const ok = Boolean(response && (response.status || response.success));

      if (ok) {
        // Backend se id mile to yaad rakho (response ka shape apne backend ke hisaab se check kar lena)
        const newId = response.id ?? response.blog_id ?? response.insertId ?? response.data?.id;
        if (newId) setBlogId(newId);

        debug("6. SAVE SUCCESS", { newId: newId ?? "backend ne id nahi bheji" });

        setFormData((prev) => ({ ...prev, status, slug: finalSlug }));
        setSaveMessage({
          type: "ok",
          text:
            response.message ||
            (status === "published" ? "Blog published." : "Draft saved."),
        });
      } else if (!response) {
        debug(
          "6. SAVE FAIL: response khaali hai (undefined/null)",
          "postData ne kuch return nahi kiya. Aksar iska matlab: backend band hai, URL galat hai, ya CORS/network error (Network tab dekho)"
        );
        setSaveMessage({
          type: "error",
          text: "No response from the server. Check that the backend is running and the API URL is correct.",
        });
      } else {
        debug("6. SAVE FAIL: server ne success nahi bheja", response);
        setSaveMessage({
          type: "error",
          text: response.message || "Could not save the blog. Please try again.",
        });
      }
    } catch (error) {
      const ms = Math.round(performance.now() - startedAt);
      const isTimeout = String(error.message).startsWith("TIMEOUT");

      debug(`ERROR after ${ms} ms`, error);
      if (isTimeout) {
        debug(
          "ATAK GAYA: request bhej di gayi par jawab nahi aaya",
          "Backend terminal dekho: request pahunchi ya nahi? Route hang ho gaya, ya server band hai."
        );
      }
      console.error("SAVE BLOG ERROR:", error);

      setSaveMessage({
        type: "error",
        text: isTimeout
          ? "The server is not responding. Check that the backend is running."
          : `Could not save the blog: ${error.message}`,
      });
    } finally {
      // Error aaye tab bhi buttons dobara enable ho jayein
      setSaving(false);
      debug("7. DONE (buttons dobara enable)");
    }
  };

  const handleSubmit = (e) => e.preventDefault(); // buttons below trigger saveBlog directly

  const metaTitleLen = formData.metaTitle.length;
  const metaDescLen = formData.metaDescription.length;

  return (
    <form className="bf" onSubmit={handleSubmit}>
      <header className="bf-header">
        <div>
          <p className="bf-eyebrow">Blog editor</p>
          <h1 className="bf-title">{formData.title || "Untitled post"}</h1>
        </div>
        <div className="bf-header-actions">
          <span className={`bf-status-pill bf-status-${formData.status}`}>
            {formData.status === "draft" ? "Draft" : "Published"}
          </span>
        </div>
      </header>

      <div className="bf-layout">
        {/* LEFT: content accordion */}
        <div className="bf-main">
          {/* 0. Basic details */}
          <section className={`bf-acc ${openSection === "basic" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("basic")}>
              <span className="bf-acc-num">1</span>
              <span className="bf-acc-label">Basic details</span>
              <span className="bf-acc-hint">{formData.title || "Not set"}</span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "basic" && (
              <div className="bf-acc-body">
                <label className="bf-label">Title</label>
                <input
                  className="bf-input"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleTitleChange}
                  placeholder="Enter blog title"
                />

                <label className="bf-label">Slug</label>
                <input
                  className="bf-input"
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleSlugChange}
                  placeholder="auto-generated-from-title"
                />
              </div>
            )}
          </section>

          {/* 1. Banner */}
          <section className={`bf-acc ${openSection === "banner" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("banner")}>
              <span className="bf-acc-num">2</span>
              <span className="bf-acc-label">Banner image</span>
              <span className="bf-acc-hint">
                {formData.bannerFile ? formData.bannerFile.name : "No image chosen"}
              </span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "banner" && (
              <div className="bf-acc-body">
                <div
                  className="bf-dropzone"
                  role="button"
                  tabIndex={0}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  style={
                    formData.bannerPreview
                      ? { backgroundImage: `url(${formData.bannerPreview})` }
                      : undefined
                  }
                >
                  {!formData.bannerPreview && (
                    <span>Click to upload a banner image</span>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </div>
            )}
          </section>

          {/* 2. Introduction */}
          <section className={`bf-acc ${openSection === "intro" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("intro")}>
              <span className="bf-acc-num">3</span>
              <span className="bf-acc-label">Business introduction</span>
              <span className="bf-acc-hint">{formData.introductionHeading || "Not set"}</span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "intro" && (
              <div className="bf-acc-body">
                <label className="bf-label">Heading</label>
                <input
                  className="bf-input"
                  type="text"
                  name="introductionHeading"
                  value={formData.introductionHeading}
                  onChange={handleChange}
                  placeholder="e.g. Who we are"
                />

                <label className="bf-label">Content</label>
                <textarea
                  className="bf-textarea"
                  name="introductionContent"
                  value={formData.introductionContent}
                  onChange={handleChange}
                  placeholder="Introduce the business..."
                  rows="4"
                />

                <label className="bf-label">Key points</label>
                {formData.introductionPoints.map((point, index) => (
                  <div className="bf-row" key={index}>
                    <input
                      className="bf-input"
                      type="text"
                      value={point}
                      onChange={(e) => handlePointChange(index, e.target.value)}
                      placeholder={`Point ${index + 1}`}
                    />
                    {formData.introductionPoints.length > 1 && (
                      <button
                        type="button"
                        className="bf-icon-btn"
                        onClick={() => removePoint(index)}
                        aria-label="Remove point"
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" className="bf-add-btn" onClick={addPoint}>
                  + Add point
                </button>
              </div>
            )}
          </section>

          {/* 3. Overview */}
          <section className={`bf-acc ${openSection === "overview" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("overview")}>
              <span className="bf-acc-num">4</span>
              <span className="bf-acc-label">Business overview</span>
              <span className="bf-acc-hint">{formData.overviewHeading || "Not set"}</span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "overview" && (
              <div className="bf-acc-body">
                <label className="bf-label">Heading</label>
                <input
                  className="bf-input"
                  type="text"
                  name="overviewHeading"
                  value={formData.overviewHeading}
                  onChange={handleChange}
                  placeholder="e.g. What we offer"
                />

                <label className="bf-label">Content</label>
                <textarea
                  className="bf-textarea"
                  name="overviewContent"
                  value={formData.overviewContent}
                  onChange={handleChange}
                  placeholder="Describe the business in detail..."
                  rows="6"
                />
              </div>
            )}
          </section>

          {/* 4. Steps */}
          <section className={`bf-acc ${openSection === "steps" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("steps")}>
              <span className="bf-acc-num">5</span>
              <span className="bf-acc-label">How the business model works</span>
              <span className="bf-acc-hint">{formData.steps.length} step(s)</span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "steps" && (
              <div className="bf-acc-body">
                <label className="bf-label">Section heading</label>
                <input
                  className="bf-input"
                  type="text"
                  name="businessModelTitle"
                  value={formData.businessModelTitle}
                  onChange={handleChange}
                  placeholder="e.g. How it works"
                />

                {formData.steps.map((step, index) => (
                  <div className="bf-card" key={index}>
                    <div className="bf-card-head">
                      <span className="bf-card-tag">Step {index + 1}</span>
                      {formData.steps.length > 1 && (
                        <button
                          type="button"
                          className="bf-icon-btn"
                          onClick={() => removeStep(index)}
                          aria-label="Remove step"
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <input
                      className="bf-input"
                      type="text"
                      value={step.title}
                      onChange={(e) => handleStepChange(index, "title", e.target.value)}
                      placeholder="Step title"
                    />
                    <textarea
                      className="bf-textarea"
                      value={step.description}
                      onChange={(e) => handleStepChange(index, "description", e.target.value)}
                      placeholder="Step description"
                      rows="3"
                    />
                  </div>
                ))}
                <button type="button" className="bf-add-btn" onClick={addStep}>
                  + Add step
                </button>
              </div>
            )}
          </section>

          {/* 5. FAQs */}
          <section className={`bf-acc ${openSection === "faqs" ? "is-open" : ""}`}>
            <button type="button" className="bf-acc-head" onClick={() => toggleSection("faqs")}>
              <span className="bf-acc-num">6</span>
              <span className="bf-acc-label">FAQs</span>
              <span className="bf-acc-hint">{formData.faqs.length} question(s)</span>
              <span className="bf-acc-chevron">⌄</span>
            </button>

            {openSection === "faqs" && (
              <div className="bf-acc-body">
                <label className="bf-label">Section heading</label>
                <input
                  className="bf-input"
                  type="text"
                  name="faqHeading"
                  value={formData.faqHeading}
                  onChange={handleChange}
                  placeholder="e.g. Frequently asked questions"
                />

                {formData.faqs.map((faq, index) => (
                  <div className="bf-card" key={index}>
                    <div className="bf-card-head">
                      <span className="bf-card-tag">FAQ {index + 1}</span>
                      {formData.faqs.length > 1 && (
                        <button
                          type="button"
                          className="bf-icon-btn"
                          onClick={() => removeFaq(index)}
                          aria-label="Remove FAQ"
                        >
                          ×
                        </button>
                      )}
                    </div>
                    <input
                      className="bf-input"
                      type="text"
                      value={faq.question}
                      onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                      placeholder="Question"
                    />
                    <textarea
                      className="bf-textarea"
                      value={faq.answer}
                      onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                      placeholder="Answer"
                      rows="3"
                    />
                  </div>
                ))}
                <button type="button" className="bf-add-btn" onClick={addFaq}>
                  + Add FAQ
                </button>
              </div>
            )}
          </section>
        </div>

        {/* RIGHT: SEO panel, always visible */}
        <aside className="bf-seo">
          <h2 className="bf-seo-title">SEO details</h2>

          <label className="bf-label">Meta title</label>
          <input
            className="bf-input"
            type="text"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            placeholder="Enter meta title"
            maxLength={70}
          />
          <span className={`bf-counter ${metaTitleLen > 60 ? "is-over" : ""}`}>
            {metaTitleLen}/60
          </span>

          <label className="bf-label">H1 heading</label>
          <input
            className="bf-input"
            type="text"
            name="h1Heading"
            value={formData.h1Heading}
            onChange={handleChange}
            placeholder="Enter H1 heading"
          />

          <label className="bf-label">Meta description</label>
          <textarea
            className="bf-textarea"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            placeholder="Enter meta description"
            rows="4"
            maxLength={170}
          />
          <span className={`bf-counter ${metaDescLen > 160 ? "is-over" : ""}`}>
            {metaDescLen}/160
          </span>

          <div className="bf-serp">
            <p className="bf-serp-title">{formData.metaTitle || "Your meta title"}</p>
            <p className="bf-serp-url">yourdomain.com › blog</p>
            <p className="bf-serp-desc">
              {formData.metaDescription || "Your meta description will preview here."}
            </p>
          </div>
        </aside>
      </div>

      {/* BUTTONS */}
      <div className="bf-actions">
        {saveMessage && (
          <span className={`bf-save-msg bf-save-${saveMessage.type}`}>{saveMessage.text}</span>
        )}
        <button
          type="button"
          className="bf-btn bf-btn-ghost"
          disabled={saving}
          onClick={() => saveBlog("draft")}
        >
          {saving ? "Saving…" : "Save draft"}
        </button>
        <button
          type="button"
          className="bf-btn bf-btn-solid"
          disabled={saving}
          onClick={() => saveBlog("published")}
        >
          {saving ? "Saving…" : "Publish blog"}
        </button>
      </div>

      {/* DEBUG PANEL (DEBUG = false karne par gayab ho jata hai) */}
      {DEBUG && (
        <div
          style={{
            marginTop: "24px",
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
                <div style={{ opacity: 0.6 }}>Abhi koi log nahi. Save draft ya Publish dabao.</div>
              )}
              {debugLogs.map((log, index) => {
                const isBad = /FAIL|ERROR|STOP|ATAK|TIMEOUT/i.test(log.step);
                const isGood = /SUCCESS/i.test(log.step);
                return (
                  <div key={index} style={{ marginBottom: "10px" }}>
                    <div style={{ color: isBad ? "#ff7b72" : isGood ? "#7ee787" : "#79c0ff" }}>
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
    </form>
  );
}
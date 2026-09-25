import * as React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const API_BASE = "http://localhost:5000";

const DISPLAY_ALL_URL = API_BASE + "/api/blogs/display_all";

// Token ki zarurat nahi hai
function getAuthHeaders() {
  return {};
}

const statusColor = {
  published: "success",
  draft: "default",
};


// =========================
// HELPERS
// =========================

// Field kisi bhi naam se aaye (snake_case ya camelCase) - pehla mila hua value le lo
function pick(obj, ...keys) {
  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) {
      return obj[key];
    }
  }
  return undefined;
}

// Backend se steps/faqs/points kabhi stringified JSON (kabhi double-stringified) aa sakte hain.
// allowText = true ho to plain text ko ek item ki list bana deta hai (key points ke liye)
function safeParseArray(value, allowText = false) {
  let result = value;

  for (let i = 0; i < 2; i++) {
    if (typeof result === "string" && result.trim()) {
      try {
        result = JSON.parse(result);
      } catch (e) {
        return allowText ? [result] : [];
      }
    }
  }

  return Array.isArray(result) ? result : [];
}

// Image ka full URL banata hai ("/uploads/blogs/a.jpg" ya "uploads/blogs/a.jpg" dono chalenge)
// Agar DB me sirf file ka naam (a.jpg) save hai to yaha folder ka path jodna padega
function imageUrl(path) {
  if (!path) return undefined;

  const clean = String(path).replace(/\\/g, "/");

  if (/^https?:\/\//i.test(clean)) return clean;

  return `${API_BASE}${clean.startsWith("/") ? "" : "/"}${clean}`;
}

function formatDate(value, withTime = false) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);

  return withTime ? date.toLocaleString() : date.toLocaleDateString();
}

// DB ki ek row ko frontend ke naam me convert karta hai (form ke SAARE fields)
function normalizeBlog(b) {
  return {
    raw: b, // DB se jo aaya wo poora, kuch bhi miss na ho

    id: b.id,

    // Basic details
    title: pick(b, "title"),
    slug: pick(b, "slug"),
    bannerImage: pick(b, "banner_image", "bannerImage", "banner"),
    status: pick(b, "status"),
    createdAt: pick(b, "created_at", "createdAt"),
    updatedAt: pick(b, "updated_at", "updatedAt"),

    // SEO fields
    metaTitle: pick(b, "meta_title", "metaTitle"),
    h1Heading: pick(b, "h1_heading", "h1Heading"),
    metaDescription: pick(b, "meta_description", "metaDescription"),

    // Introduction section
    introductionHeading: pick(b, "introduction_heading", "introductionHeading"),
    introductionContent: pick(b, "introduction_content", "introductionContent"),
    introductionPoints: safeParseArray(
      pick(b, "introduction_points", "introductionPoints"),
      true
    ),

    // Overview section
    overviewHeading: pick(b, "overview_heading", "overviewHeading"),
    overviewContent: pick(b, "overview_content", "overviewContent"),

    // Business model steps
    businessModelTitle: pick(b, "business_model_title", "businessModelTitle"),
    steps: safeParseArray(pick(b, "steps")),

    // FAQs
    faqHeading: pick(b, "faq_heading", "faqHeading"),
    faqs: safeParseArray(pick(b, "faqs")),
  };
}


// Ek line ka text cell (lamba ho to ... se kat jata hai, hover par poora dikhta hai)
function TextCell({ value, maxWidth = 200 }) {
  const text = value ? String(value) : "-";

  return (
    <Typography
      title={text}
      sx={{
        maxWidth,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Typography>
  );
}

// Dialog me label + value
function Field({ label, value }) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography sx={{ whiteSpace: "pre-wrap" }}>{value || "-"}</Typography>
    </Box>
  );
}


// =========================
// TABLE COLUMNS
// Header aur cell ek hi jagah define hain, isliye columns kabhi aage-peeche
// ya duplicate nahi honge.
// =========================
const columns = [
  {
    id: "sno",
    label: "S.No.",
    minWidth: 60,
    render: (row, serial) => serial,
  },
  {
    id: "banner",
    label: "Banner",
    minWidth: 80,
    render: (row) => (
      <Avatar
        variant="rounded"
        sx={{ width: 55, height: 45 }}
        src={imageUrl(row.bannerImage)}
      >
        {row.title?.charAt(0)?.toUpperCase()}
      </Avatar>
    ),
  },
  {
    id: "title",
    label: "Title",
    minWidth: 220,
    render: (row) => <TextCell value={row.title || "Untitled"} maxWidth={220} />,
  },
  {
    id: "slug",
    label: "Slug",
    minWidth: 160,
    render: (row) => <TextCell value={row.slug} maxWidth={160} />,
  },
  {
    id: "metaTitle",
    label: "Meta Title",
    minWidth: 200,
    render: (row) => <TextCell value={row.metaTitle} />,
  },
  {
    id: "h1Heading",
    label: "H1 Heading",
    minWidth: 200,
    render: (row) => <TextCell value={row.h1Heading} />,
  },
  {
    id: "metaDescription",
    label: "Meta Description",
    minWidth: 240,
    render: (row) => <TextCell value={row.metaDescription} maxWidth={240} />,
  },
  {
    id: "introductionHeading",
    label: "Intro Heading",
    minWidth: 200,
    render: (row) => <TextCell value={row.introductionHeading} />,
  },
  {
    id: "overviewHeading",
    label: "Overview Heading",
    minWidth: 200,
    render: (row) => <TextCell value={row.overviewHeading} />,
  },
  {
    id: "businessModelTitle",
    label: "Steps Heading",
    minWidth: 200,
    render: (row) => <TextCell value={row.businessModelTitle} />,
  },
  {
    id: "steps",
    label: "Steps",
    minWidth: 80,
    render: (row) => row.steps.length,
  },
  {
    id: "faqs",
    label: "FAQs",
    minWidth: 80,
    render: (row) => row.faqs.length,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 110,
    render: (row) => (
      <Chip
        label={row.status || "draft"}
        size="small"
        color={statusColor[row.status] || "default"}
        variant={row.status === "published" ? "filled" : "outlined"}
      />
    ),
  },
  {
    id: "createdAt",
    label: "Created",
    minWidth: 140,
    render: (row) => formatDate(row.createdAt),
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 160,
    align: "right",
    render: (row, serial, actions) => (
      <>
        {/* VIEW FULL DETAILS (form ka poora data dialog me) */}
        <Button
          size="small"
          variant="outlined"
          sx={{ mr: 1 }}
          onClick={() => actions.onView(row)}
        >
          View
        </Button>

        {/* DELETE */}
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => actions.onDelete(row.id)}
        >
          Delete
        </Button>
      </>
    ),
  },
];


export default function DisplayallBlog() {
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Details dialog ke liye
  const [selectedBlog, setSelectedBlog] = React.useState(null);

  // =========================
  // GET ALL BLOGS (form me jo submit hota hai, wahi saare fields yahan fetch)
  // =========================
  const fetchBlogs = React.useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      let res;

      try {
        res = await fetch(DISPLAY_ALL_URL, {
          method: "GET",
          headers: {
            ...getAuthHeaders(),
          },
        });
      } catch (networkError) {
        throw new Error(
          `Could not reach the server. Check that the backend is running on ${API_BASE}.`
        );
      }

      const json = await res.json();

      console.log("DISPLAY BLOG RESPONSE:", json);

      if (!res.ok) {
        throw new Error(json.message || `Server error: ${res.status}`);
      }

      if (!json.status) {
        throw new Error(json.message || "Failed to load blogs");
      }

      const list = json.data || [];

      // Backend se kaunse fields aa rahe hain (koi field na dikhe to yahan check karo)
      if (list.length > 0) {
        console.log("BLOG FIELDS FROM DB:", Object.keys(list[0]));
      }

      const normalized = list.map(normalizeBlog);

      // Oldest first
      const sorted = normalized.sort((a, b) => Number(a.id) - Number(b.id));

      setRows(sorted);
    } catch (err) {
      console.error("DISPLAY BLOG ERROR:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // =========================
  // LOAD BLOGS ON PAGE LOAD
  // =========================
  React.useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // =========================
  // DELETE BLOG
  // =========================
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/api/blogs/${id}`, {
        method: "DELETE",
        headers: {
          ...getAuthHeaders(),
        },
      });

      const json = await res.json();

      console.log("DELETE RESPONSE:", json);

      if (!res.ok) {
        throw new Error(json.message || "Delete failed");
      }

      setRows((prev) => prev.filter((row) => row.id !== id));

      alert("Blog deleted successfully");
    } catch (err) {
      console.error("DELETE BLOG ERROR:", err);
      alert(err.message);
    }
  };

  // =========================
  // PAGINATION
  // =========================
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const actions = {
    onView: setSelectedBlog,
    onDelete: handleDelete,
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Loading blogs...</Typography>
      </Box>
    );
  }

  // =========================
  // ERROR
  // =========================
  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" color="error" sx={{ mb: 2 }}>
          Couldn't load blogs
        </Typography>

        <Typography color="error">{error}</Typography>

        <Button variant="contained" sx={{ mt: 2 }} onClick={fetchBlogs}>
          Refresh
        </Button>
      </Box>
    );
  }

  // =========================
  // MAIN TABLE
  // =========================
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          All Blogs ({rows.length})
        </Typography>

        <Button variant="outlined" size="small" onClick={fetchBlogs}>
          Refresh
        </Button>
      </Box>

      {/* TABLE */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="all blogs table">
            {/* TABLE HEADER */}
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || "left"}
                    sx={{ minWidth: column.minWidth, fontWeight: "bold" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* TABLE BODY */}
            <TableBody>
              {/* NO DATA */}
              {rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center" sx={{ py: 5 }}>
                    <Typography>No blogs submitted yet.</Typography>
                  </TableCell>
                </TableRow>
              )}

              {/* BLOG ROWS - har row me utne hi cells jitne header me columns */}
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const serial = page * rowsPerPage + index + 1;

                  return (
                    <TableRow hover key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align || "left"}>
                          {column.render(row, serial, actions)}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* PAGINATION */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* =========================
          FULL DETAILS DIALOG
          Form me jo bhi submit hota hai - sab yahan, form ke order me
      ========================= */}
      <Dialog
        open={Boolean(selectedBlog)}
        onClose={() => setSelectedBlog(null)}
        fullWidth
        maxWidth="md"
      >
        {selectedBlog && (
          <>
            <DialogTitle>{selectedBlog.title || "Untitled post"}</DialogTitle>

            <DialogContent dividers>
              {/* 1. BASIC DETAILS */}
              <Typography variant="h6" gutterBottom>
                Basic details
              </Typography>

              <Field label="ID" value={selectedBlog.id} />
              <Field label="Title" value={selectedBlog.title} />
              <Field label="Slug" value={selectedBlog.slug} />

              <Box sx={{ mb: 1.5 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Status
                </Typography>
                <Chip
                  label={selectedBlog.status || "draft"}
                  size="small"
                  color={statusColor[selectedBlog.status] || "default"}
                  variant={selectedBlog.status === "published" ? "filled" : "outlined"}
                />
              </Box>

              <Field label="Created" value={formatDate(selectedBlog.createdAt, true)} />
              <Field label="Last updated" value={formatDate(selectedBlog.updatedAt, true)} />

              <Divider sx={{ my: 2 }} />

              {/* 2. BANNER IMAGE */}
              <Typography variant="h6" gutterBottom>
                Banner image
              </Typography>

              {selectedBlog.bannerImage ? (
                <>
                  <Box
                    component="img"
                    src={imageUrl(selectedBlog.bannerImage)}
                    alt={selectedBlog.title}
                    sx={{ width: "100%", maxHeight: 260, objectFit: "cover", borderRadius: 1, mb: 1 }}
                  />
                  <Field label="Image path in database" value={selectedBlog.bannerImage} />
                </>
              ) : (
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  No banner image.
                </Typography>
              )}

              <Divider sx={{ my: 2 }} />

              {/* 3. BUSINESS INTRODUCTION */}
              <Typography variant="h6" gutterBottom>
                Business introduction
              </Typography>

              <Field label="Heading" value={selectedBlog.introductionHeading} />
              <Field label="Content" value={selectedBlog.introductionContent} />

              <Typography variant="subtitle2" color="text.secondary">
                Key points
              </Typography>
              {selectedBlog.introductionPoints.length > 0 ? (
                <ul style={{ marginTop: 4 }}>
                  {selectedBlog.introductionPoints.map((point, i) => (
                    <li key={i}>
                      <Typography>{String(point)}</Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  No key points added.
                </Typography>
              )}

              <Divider sx={{ my: 2 }} />

              {/* 4. BUSINESS OVERVIEW */}
              <Typography variant="h6" gutterBottom>
                Business overview
              </Typography>

              <Field label="Heading" value={selectedBlog.overviewHeading} />
              <Field label="Content" value={selectedBlog.overviewContent} />

              <Divider sx={{ my: 2 }} />

              {/* 5. HOW THE BUSINESS MODEL WORKS */}
              <Typography variant="h6" gutterBottom>
                How the business model works
              </Typography>

              <Field label="Section heading" value={selectedBlog.businessModelTitle} />

              {selectedBlog.steps.length > 0 ? (
                selectedBlog.steps.map((step, i) => (
                  <Box key={i} sx={{ mb: 1.5 }}>
                    <Typography fontWeight="600">
                      {i + 1}. {step?.title || "Untitled step"}
                    </Typography>
                    <Typography sx={{ whiteSpace: "pre-wrap" }}>
                      {step?.description || "-"}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography color="text.secondary">No steps added.</Typography>
              )}

              <Divider sx={{ my: 2 }} />

              {/* 6. FAQs */}
              <Typography variant="h6" gutterBottom>
                FAQs
              </Typography>

              <Field label="Section heading" value={selectedBlog.faqHeading} />

              {selectedBlog.faqs.length > 0 ? (
                selectedBlog.faqs.map((faq, i) => (
                  <Accordion key={i} disableGutters>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight="500">
                        {faq?.question || "Untitled question"}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ whiteSpace: "pre-wrap" }}>
                        {faq?.answer || "-"}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))
              ) : (
                <Typography color="text.secondary">No FAQs added.</Typography>
              )}

              <Divider sx={{ my: 2 }} />

              {/* 7. SEO DETAILS */}
              <Typography variant="h6" gutterBottom>
                SEO details
              </Typography>

              <Field label="Meta title" value={selectedBlog.metaTitle} />
              <Field label="H1 heading" value={selectedBlog.h1Heading} />
              <Field label="Meta description" value={selectedBlog.metaDescription} />

              <Divider sx={{ my: 2 }} />

              {/* 8. RAW DATA - DB se jo bhi aaya, ek bhi field miss nahi hoga */}
              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight="500">
                    All raw fields from database
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    component="pre"
                    sx={{
                      m: 0,
                      fontSize: 12,
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                    }}
                  >
                    {JSON.stringify(selectedBlog.raw, null, 2)}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </DialogContent>

            <DialogActions>
              <Button onClick={() => setSelectedBlog(null)}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
import React, { useEffect, useState } from "react";
import AdminServices from "../Services/Services";

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

export default function AdminDashboard() {

    // =========================
    // ACTIVE PAGE
    // =========================

    const [activePage, setActivePage] = useState("dashboard");


    // =========================
    // USERS
    // =========================

    const [users, setUsers] = useState([]);
    const [usersLoading, setUsersLoading] = useState(false);
    const [usersError, setUsersError] = useState("");


    // =========================
    // SELLERS
    // =========================

    const [sellers, setSellers] = useState([]);
    const [sellersLoading, setSellersLoading] = useState(false);
    const [sellersError, setSellersError] = useState("");


    // =========================
    // ADMIN DATA
    // =========================

    const admin = JSON.parse(
        localStorage.getItem("ADMIN") || "null"
    );


    // =========================
    // FETCH USERS
    // =========================

    const fetchUsers = async () => {

        try {

            setUsersLoading(true);
            setUsersError("");

            const response = await fetch(
                "http://localhost:5000/api/users/all"
            );

            const data = await response.json();

            console.log("USERS API RESPONSE:", data);

            if (!response.ok || !data.success) {

                throw new Error(
                    data.message || "Users fetch failed"
                );

            }

            setUsers(data.users || []);

        } catch (error) {

            console.error(
                "FETCH USERS ERROR:",
                error
            );

            setUsersError(error.message);

        } finally {

            setUsersLoading(false);

        }

    };


    // =========================
    // FETCH SELLERS
    // =========================

    const fetchSellers = async () => {

        try {

            setSellersLoading(true);
            setSellersError("");

            const response = await fetch(
                "http://localhost:5000/api/sellers/all"
            );

            const data = await response.json();

            console.log("SELLERS API RESPONSE:", data);

            if (!response.ok || !data.success) {

                throw new Error(
                    data.message || "Sellers fetch failed"
                );

            }

            setSellers(data.sellers || []);

        } catch (error) {

            console.error(
                "FETCH SELLERS ERROR:",
                error
            );

            setSellersError(error.message);

        } finally {

            setSellersLoading(false);

        }

    };


    // =========================
    // AUTO FETCH
    // =========================

    useEffect(() => {

        fetchUsers();
        fetchSellers();

    }, []);


    // =========================
    // LOGOUT
    // =========================

    const handleLogout = () => {

        localStorage.removeItem("ADMIN");

        window.location.href = "/adminlogin";

    };


    // =========================
    // DASHBOARD
    // =========================

    const handleDashboard = () => {

        setActivePage("dashboard");

    };


    // =========================
    // SERVICES
    // =========================

    const handleServices = () => {

        setActivePage("services");

    };


    // =========================
    // BLOGS
    // =========================

    const handleBlogs = () => {

        window.location.href = "/admin/blog-form";

    };


    // =========================
    // USERS PAGE
    // =========================

    const handleUsers = () => {

        setActivePage("users");

        fetchUsers();

    };


    // =========================
    // SELLERS PAGE
    // =========================

    const handleSellers = () => {

        setActivePage("sellers");

        fetchSellers();

    };


    return (

        <Box
            sx={{
                minHeight: "100vh",
                background: "#f5f7fa"
            }}
        >

            {/* ==================================================
                HEADER
            ================================================== */}

            <AppBar
                position="static"
                sx={{
                    background: "#ffffff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
                }}
            >

                <Toolbar>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center"
                        }}
                    >

                        <img
                            src="/logo.png"
                            alt="Dropshy"
                            style={{
                                width: 130,
                                height: "auto"
                            }}
                        />

                    </Box>


                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2
                        }}
                    >

                        <Box
                            sx={{
                                textAlign: "right"
                            }}
                        >

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    color: "#888"
                                }}
                            >
                                Welcome
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                    color: "#222"
                                }}
                            >
                                {admin?.name || "Admin"}
                            </Typography>

                        </Box>


                        <Button
                            variant="outlined"
                            onClick={handleLogout}
                            sx={{
                                borderColor: "#11A7E6",
                                color: "#11A7E6",
                                borderRadius: "8px",
                                textTransform: "none",
                                fontWeight: 600,

                                "&:hover": {
                                    borderColor: "#0d8fc5",
                                    background: "#eefaff"
                                }
                            }}
                        >
                            Logout
                        </Button>

                    </Box>

                </Toolbar>

            </AppBar>


            {/* ==================================================
                MAIN AREA
            ================================================== */}

            <Box
                sx={{
                    display: "flex",
                    minHeight: "calc(100vh - 64px)"
                }}
            >


                {/* ==================================================
                    SIDEBAR
                ================================================== */}

                <Box
                    sx={{
                        width: 250,
                        flexShrink: 0,
                        background: "#ffffff",
                        borderRight: "1px solid #e5e5e5",
                        paddingTop: 2
                    }}
                >

                    <List>


                        {/* DASHBOARD */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleDashboard}
                                selected={
                                    activePage === "dashboard"
                                }
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10px",

                                    "&.Mui-selected": {
                                        background: "#eefaff",
                                        color: "#11A7E6"
                                    },

                                    "&.Mui-selected:hover": {
                                        background: "#e5f7ff"
                                    }
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        📊
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Dashboard"
                                />

                            </ListItemButton>

                        </ListItem>


                        <Divider />


                        {/* SERVICES */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleServices}
                                selected={
                                    activePage === "services"
                                }
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10px",

                                    "&.Mui-selected": {
                                        background: "#eefaff",
                                        color: "#11A7E6"
                                    },

                                    "&.Mui-selected:hover": {
                                        background: "#e5f7ff"
                                    }
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        ⚙️
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Services"
                                />

                            </ListItemButton>

                        </ListItem>


                        <Divider />


                        {/* BLOGS */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleBlogs}
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        📝
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Blogs"
                                />

                            </ListItemButton>

                        </ListItem>


                        <Divider />


                        {/* USERS */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleUsers}
                                selected={
                                    activePage === "users"
                                }
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10px",

                                    "&.Mui-selected": {
                                        background: "#eefaff",
                                        color: "#11A7E6"
                                    },

                                    "&.Mui-selected:hover": {
                                        background: "#e5f7ff"
                                    }
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        👤
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Users"
                                />

                            </ListItemButton>

                        </ListItem>


                        <Divider />


                        {/* SELLERS */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleSellers}
                                selected={
                                    activePage === "sellers"
                                }
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10",

                                    "&.Mui-selected": {
                                        background: "#eefaff",
                                        color: "#11A7E6"
                                    },

                                    "&.Mui-selected:hover": {
                                        background: "#e5f7ff"
                                    }
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        🏪
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Sellers"
                                />

                            </ListItemButton>

                        </ListItem>


                        <Divider />


                        {/* LOGOUT */}

                        <ListItem disablePadding>

                            <ListItemButton
                                onClick={handleLogout}
                                sx={{
                                    margin: "4px 10px",
                                    borderRadius: "10px"
                                }}
                            >

                                <ListItemIcon>
                                    <Typography sx={{ fontSize: 23 }}>
                                        🚪
                                    </Typography>
                                </ListItemIcon>

                                <ListItemText
                                    primary="Logout"
                                />

                            </ListItemButton>

                        </ListItem>

                    </List>

                </Box>


                {/* ==================================================
                    RIGHT CONTENT
                ================================================== */}

                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: 0,
                        padding: {
                            xs: 2,
                            sm: 3,
                            md: 4
                        },
                        boxSizing: "border-box"
                    }}
                >


                    {/* ==================================================
                        DASHBOARD
                    ================================================== */}

                    {activePage === "dashboard" && (

                        <>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: "#222",
                                    marginBottom: 1
                                }}
                            >
                                Dashboard
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#777",
                                    marginBottom: 4
                                }}
                            >
                                Manage your Dropshy website
                                from the admin panel.
                            </Typography>


                            <Grid
                                container
                                spacing={3}
                            >

                                {/* SERVICES CARD */}

                                <Grid
                                    xs={12}
                                    sm={6}
                                    md={4}
                                >

                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            height: "100%",
                                            boxShadow:
                                                "0 4px 15px rgba(0,0,0,0.08)"
                                        }}
                                    >

                                        <CardContent>

                                            <Typography
                                                sx={{
                                                    fontSize: 45,
                                                    marginBottom: 1
                                                }}
                                            >
                                                ⚙️
                                            </Typography>

                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 600,
                                                    marginBottom: 1
                                                }}
                                            >
                                                Services
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#777",
                                                    minHeight: 60,
                                                    marginBottom: 3
                                                }}
                                            >
                                                Manage National,
                                                International and
                                                E-Commerce services.
                                            </Typography>

                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={handleServices}
                                                sx={{
                                                    background: "#11A7E6",
                                                    borderRadius: "8px",
                                                    padding: "10px",
                                                    textTransform: "none",
                                                    fontWeight: 600,

                                                    "&:hover": {
                                                        background: "#0d8fc5"
                                                    }
                                                }}
                                            >
                                                Manage Services
                                            </Button>

                                        </CardContent>

                                    </Card>

                                </Grid>


                                {/* BLOG CARD */}

                                <Grid
                                    xs={12}
                                    sm={6}
                                    md={4}
                                >

                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            height: "100%",
                                            boxShadow:
                                                "0 4px 15px rgba(0,0,0,0.08)"
                                        }}
                                    >

                                        <CardContent>

                                            <Typography
                                                sx={{
                                                    fontSize: 45,
                                                    marginBottom: 1
                                                }}
                                            >
                                                📝
                                            </Typography>

                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 600,
                                                    marginBottom: 1
                                                }}
                                            >
                                                Blogs
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    color: "#777",
                                                    minHeight: 60,
                                                    marginBottom: 3
                                                }}
                                            >
                                                Add, edit and manage
                                                your Dropshy blogs.
                                            </Typography>

                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={handleBlogs}
                                                sx={{
                                                    background: "#F59A1B",
                                                    borderRadius: "8px",
                                                    padding: "10px",
                                                    textTransform: "none",
                                                    fontWeight: 600,

                                                    "&:hover": {
                                                        background: "#d9820d"
                                                    }
                                                }}
                                            >
                                                Manage Blogs
                                            </Button>

                                        </CardContent>

                                    </Card>

                                </Grid>

                            </Grid>

                        </>

                    )}


                    {/* ==================================================
                        SERVICES
                    ================================================== */}

                    {activePage === "services" && (

                        <AdminServices />

                    )}


                    {/* ==================================================
                        USERS
                    ================================================== */}

                    {activePage === "users" && (

                        <Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 3
                                }}
                            >

                                <Box>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#222"
                                        }}
                                    >
                                        Users
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#777",
                                            marginTop: 0.5
                                        }}
                                    >
                                        All Create Account users
                                    </Typography>

                                </Box>


                                <Button
                                    variant="contained"
                                    onClick={fetchUsers}
                                    sx={{
                                        background: "#11A7E6",
                                        textTransform: "none",
                                        borderRadius: "8px",

                                        "&:hover": {
                                            background: "#0d8fc5"
                                        }
                                    }}
                                >
                                    Refresh
                                </Button>

                            </Box>


                            {usersLoading && (

                                <Typography sx={{ marginBottom: 2 }}>
                                    Loading users...
                                </Typography>

                            )}


                            {usersError && (

                                <Typography
                                    sx={{
                                        color: "red",
                                        marginBottom: 2
                                    }}
                                >
                                    Error: {usersError}
                                </Typography>

                            )}


                            {!usersLoading &&
                                !usersError &&
                                users.length === 0 && (

                                    <Typography>
                                        No users found.
                                    </Typography>

                                )}


                            {users.length > 0 && (

                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow:
                                            "0 4px 15px rgba(0,0,0,0.08)"
                                    }}
                                >

                                    <Table>

                                        <TableHead>

                                            <TableRow>

                                                <TableCell>
                                                    <b>ID</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Name</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Email</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Phone</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Created At</b>
                                                </TableCell>

                                            </TableRow>

                                        </TableHead>


                                        <TableBody>

                                            {users.map((user) => (

                                                <TableRow
                                                    key={user.id}
                                                    hover
                                                >

                                                    <TableCell>
                                                        {user.id}
                                                    </TableCell>

                                                    <TableCell>
                                                        {user.name || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {user.email || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {user.phone || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {user.created_at
                                                            ? new Date(
                                                                user.created_at
                                                            ).toLocaleString()
                                                            : "-"
                                                        }
                                                    </TableCell>

                                                </TableRow>

                                            ))}

                                        </TableBody>

                                    </Table>

                                </TableContainer>

                            )}

                        </Box>

                    )}


                    {/* ==================================================
                        SELLERS
                    ================================================== */}

                    {activePage === "sellers" && (

                        <Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 3
                                }}
                            >

                                <Box>

                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#222"
                                        }}
                                    >
                                        Sellers
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#777",
                                            marginTop: 0.5
                                        }}
                                    >
                                        All registered sellers
                                    </Typography>

                                </Box>


                                <Button
                                    variant="contained"
                                    onClick={fetchSellers}
                                    sx={{
                                        background: "#11A7E6",
                                        textTransform: "none",
                                        borderRadius: "8px",

                                        "&:hover": {
                                            background: "#0d8fc5"
                                        }
                                    }}
                                >
                                    Refresh
                                </Button>

                            </Box>


                            {sellersLoading && (

                                <Typography sx={{ marginBottom: 2 }}>
                                    Loading sellers...
                                </Typography>

                            )}


                            {sellersError && (

                                <Typography
                                    sx={{
                                        color: "red",
                                        marginBottom: 2
                                    }}
                                >
                                    Error: {sellersError}
                                </Typography>

                            )}


                            {!sellersLoading &&
                                !sellersError &&
                                sellers.length === 0 && (

                                    <Typography>
                                        No sellers found.
                                    </Typography>

                                )}


                            {sellers.length > 0 && (

                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        borderRadius: 2,
                                        boxShadow:
                                            "0 4px 15px rgba(0,0,0,0.08)",
                                        overflowX: "auto"
                                    }}
                                >

                                    <Table
                                        sx={{
                                            minWidth: 1200
                                        }}
                                    >

                                        <TableHead>

                                            <TableRow>

                                                <TableCell>
                                                    <b>ID</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Enrollment No.</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Full Name</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Mobile</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Alt Mobile</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Email</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>WhatsApp</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Address</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>City</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>State</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Pincode</b>
                                                </TableCell>

                                                <TableCell>
                                                    <b>Created At</b>
                                                </TableCell>

                                            </TableRow>

                                        </TableHead>


                                        <TableBody>

                                            {sellers.map((seller) => (

                                                <TableRow
                                                    key={seller.id}
                                                    hover
                                                >

                                                    <TableCell>
                                                        {seller.id}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.enrollmentNumber || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.fullName || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.mobile || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.altMobile || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.email || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.whatsapp || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.address || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.city || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.state || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.pincode || "-"}
                                                    </TableCell>

                                                    <TableCell>
                                                        {seller.created_at
                                                            ? new Date(
                                                                seller.created_at
                                                            ).toLocaleString()
                                                            : "-"
                                                        }
                                                    </TableCell>

                                                </TableRow>

                                            ))}

                                        </TableBody>

                                    </Table>

                                </TableContainer>

                            )}

                        </Box>

                    )}

                </Box>

            </Box>

        </Box>

    );

}
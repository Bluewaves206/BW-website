import { NavLink } from "react-router-dom";
import logo from '../assets/bw.png';
import { Box, Drawer, } from "@mui/material";
export default function DrawerMini({ open, togglerDrawer }: { open: boolean, togglerDrawer: (newOpen: boolean) => () => void }) {
    return (
        <>
            <Drawer anchor="left" open={open} onClose={togglerDrawer(false)}>
                <Box
                    sx={{
                        width: 280,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        p: 3,
                        backgroundColor: "#f8f9fa",
                    }}
                    role="presentation"
                    onClick={togglerDrawer(false)}
                >
                    <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box component={"img"} src={logo} alt="logo" width={"35%"} />
                    </Box>
                    <br /><br />

                    <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                            style={{ color: "red !important" }}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                        >
                            About Us
                        </NavLink>

                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                        >
                            Blogs
                        </NavLink>
                    </nav>
                </Box>
            </Drawer>
        </>
    )
}
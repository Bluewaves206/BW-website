import { NavLink } from "react-router-dom";
import logo from '../assets/bw.png';
import { Box, Drawer, } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";
export default function DrawerMini({ open, togglerDrawer, setOpen }: { open: boolean, togglerDrawer: (newOpen: boolean) => () => void, setOpen: (a: boolean) => void }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const closeDrawer = () => {
        setIsOpen(false);
        setOpen(false);
    };
    return (
        <>
            <Drawer anchor="left" open={open} onClose={togglerDrawer(false)}>
                <Box
                    sx={{
                        width: 235,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        p: 3,
                        pb: 6, // 👈 extra padding at bottom
                        backgroundColor: "#f8f9fa",
                        overflowY: "auto", // enable scrolling
                    }}
                    role="presentation"
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
                            onClick={togglerDrawer(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                            onClick={togglerDrawer(false)}
                        >
                            About Us
                        </NavLink>

                        <Box
                            className={"navLink nav-min"}
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer"
                            }}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Services
                            <Icon
                                icon="material-symbols:expand-more-rounded"
                                style={{
                                    fontSize: "1.5rem",
                                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease"
                                }}
                            />
                        </Box>
                        {isOpen && (
                            <Box sx={{ pl: 3, display: "flex", flexDirection: "column", gap: 3,borderLeft: "1px solid #ccc" }}>
                                <NavLink
                                    to="/whatsapp"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    WhatsApp Verified
                                </NavLink>
                                <NavLink
                                    to="/Vmsg"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    Voice Message
                                </NavLink>
                                <NavLink
                                    to="/Vmail"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    Voice Mail
                                </NavLink>
                                <NavLink
                                    to="/Bmail"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    Bulk Mail
                                </NavLink>
                                <NavLink
                                    to="/WebDev"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    Website Development
                                </NavLink>
                                <NavLink
                                    to="/crm"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    CRM
                                </NavLink>
                                <NavLink
                                    to="/ivr"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    IVR
                                </NavLink>
                                <NavLink
                                    to="/sms"
                                    className={({ isActive }) =>
                                        isActive ? "navLink active nav-min" : "navLink nav-min"
                                    }
                                    onClick={closeDrawer}
                                >
                                    SMS
                                </NavLink>

                            </Box>
                        )}

                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "navLink active nav-min" : "navLink nav-min"
                            }
                            onClick={togglerDrawer(false)}
                        >
                            Blogs
                        </NavLink>
                    </nav>
                </Box>
            </Drawer>
        </>
    )
}
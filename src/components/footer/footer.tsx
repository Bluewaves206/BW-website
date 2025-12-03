import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import bluewaves from "../../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
    const isMobile = useMediaQuery("(max-width:1000px)");

    const linkStyle = {
        textDecoration: "none",
        transition: "color 0.25s ease",
    };

    const linkText = {
        cursor: "pointer",
        fontFamily: "Archivo, sans-serif",
        fontWeight: 500,
        color: "#0F1011",
        fontSize: { xs: "10px", sm: "12px", md: "16px" },
        transition: "color 0.25s ease",
        "&:hover": { color: "#555" },
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                p: { xs: 2, sm: 3, md: 7 },
                gap: { xs: 4, md: 8 },
                backgroundColor: "#fff",
                width: "100%",
            }}
        >

            {/* LEFT SIDE */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                {/* Tagline */}
                <Typography
                    sx={{
                        fontFamily: "Archivo",
                        fontWeight: 500,
                        fontSize: { xs: "14px", sm: "22px", md: "32px" },
                    }}
                >
                    “You focus on success, we handle your digital
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: "Archivo",
                            fontWeight: 500,
                            ml: 1,
                            fontSize: { xs: "15px", sm: "25px", md: "35px" },
                            color: "#8E8E8E",
                        }}
                    >
                        growth
                    </Typography>
                    .”
                </Typography>

                <Box
                    sx={{
                        my: { xs: 2, sm: 3, md: 4 },
                        width: "100%",
                        borderBottom: "1px solid #bebebe",
                    }}
                />

                {/* MENU LINKS */}
                <Box sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            my: 1,
                            display: "flex",
                            gap: 1,
                            whiteSpace: "nowrap",
                            overflowX: "auto",
                            pb: 1,
                            mb: 2
                        }}
                    >
                        <Link to="/" style={linkStyle}><Typography sx={linkText}>Home</Typography></Link>
                        <span>/</span>

                        <Link to="/about" style={linkStyle}><Typography sx={linkText}>About Us</Typography></Link>
                        <span>/</span>

                        <Link to="/services" style={linkStyle}><Typography sx={linkText}>Services</Typography></Link>
                        <span>/</span>

                        <Link to="/blogs" style={linkStyle}><Typography sx={linkText}>Blogs</Typography></Link>
                        <span>/</span>

                        <Link to="/contact" style={linkStyle}><Typography sx={linkText}>Contacts</Typography></Link>
                    </Box>
                </Box>

                {/* SOCIAL ICONS */}
                <Box sx={{ mt: "auto", gap: 3, display: "flex", flexDirection: "row" }}>
                    {[
                        "mdi:facebook",
                        "fa6-brands:x-twitter",
                        "mdi:linkedin",
                        "mdi:instagram",
                    ].map((icon) => (
                        <Box
                            key={icon}
                            sx={{
                                width: { xs: 22, md: 30 },
                                height: { xs: 22, md: 30 },
                                cursor: "pointer",
                                "&:hover": { transform: "scale(1.15)" },
                                transition: "0.2s",
                            }}
                        >
                            <Icon icon={icon} color="#0F1011" width="100%" height="100%" />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* RIGHT SIDE — SAME ALIGNMENT AS DESKTOP */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Box sx={{ width: "100%", borderBottom: "1.5px solid #858484" }} />

                {/* EXACT DESKTOP ALIGNMENT */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",       // ALWAYS ROW LIKE DESKTOP
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: 2,
                    }}
                >

                    {/* OUR CONTACTS SECTION */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 1,
                            width: "33%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Archivo",
                                fontWeight: 600,
                                fontSize: { xs: "1.2rem", md: "2rem" },
                            }}
                        >
                            Our
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Archivo",
                                fontWeight: 600,
                                fontSize: { xs: "1.2rem", md: "2rem" },
                                color: "#8F9096",
                            }}
                        >
                            Contacts.
                        </Typography>

                        {/* BUTTON — SMALLER IN MOBILE */}
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: { xs: 36, sm: 42, md: 60 },
                                    height: { xs: 36, sm: 42, md: 60 },
                                    borderRadius: "50%",
                                    minWidth: 0,
                                    p: 0,
                                }}
                            >
                                <Icon
                                    icon="solar:arrow-right-up-linear"
                                    width={isMobile ? 20 : 25}
                                    height={isMobile ? 20 : 25}
                                    color="#fff"
                                />
                            </Button>
                        </Link>
                    </Box>

                    {/* CONTACT DETAILS */}
                    <Box
                        sx={{
                            width: "33%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography
                            component="a"
                            href="tel:+918777247832"
                            sx={{
                                fontFamily: "Outfit",
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                            }}
                        >
                            +91 8777247832
                        </Typography>

                        <Typography
                            component="a"
                            href="tel:+918276882339"
                            sx={{
                                fontFamily: "Outfit",
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                            }}
                        >
                            +918276882339
                        </Typography>

                        <Typography
                            component="a"
                            href="mailto:sales@bluewavesmedia.in"
                            sx={{
                                fontFamily: "Outfit",
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                            }}
                        >
                            sales@bluewavesmedia.in
                        </Typography>
                    </Box>

                    {/* LOGO — SMALLER IN MOBILE */}
                    <Box
                        component="img"
                        src={bluewaves}
                        alt="logo"
                        sx={{
                            width: { xs: "26%", sm: "30%", md: "33%" },
                            maxWidth: "110px",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {/* BOTTOM SECTION */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        mt: "auto",
                        gap: 1,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Archivo",
                            fontSize: { xs: "10px", md: "12px" },
                        }}
                    >
                        © {new Date().getFullYear()} Bluewaves Media. All rights reserved.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 3 }}>
                        <Link to="/privacy" style={linkStyle}><Typography sx={linkText}>Privacy</Typography></Link>
                        <Link to="/disclaimer" style={linkStyle}><Typography sx={linkText}>Disclaimer</Typography></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

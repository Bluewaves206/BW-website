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
        "&:active": { color: "#7e7e7e" },
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
                    height: "100%",
                }}
            >
                {/* Tagline */}
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Archivo, sans-serif",
                        fontWeight: 500,
                        color: "#0F1011",
                        fontSize: { xs: "14px", sm: "22px", md: "32px" },
                        lineHeight: 1.3,
                    }}
                >
                    “You focus on success, we handle your digital
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: "Archivo, sans-serif",
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
                            flexDirection: "row",
                            alignItems: "center",
                            columnGap: 1,
                            flexWrap: { xs: "nowrap", md: "wrap" },     // ⭐ MOBILE: NO WRAP
                            whiteSpace: "nowrap",                       // ⭐ FORCE SINGLE ROW
                            overflowX: { xs: "auto", md: "visible" },   // ⭐ SCROLL IF NEEDED
                            pb: 1,                                      // ⭐ SMALL GAP BELOW
                            mb: 2                                       // ⭐ GAP BEFORE NEXT SECTION
                        }}
                    >
                        <Link to="/" style={linkStyle}>
                            <Typography sx={linkText}>Home</Typography>
                        </Link>
                        <span>/</span>

                        <Link to="/about" style={linkStyle}>
                            <Typography sx={linkText}>About Us</Typography>
                        </Link>
                        <span>/</span>

                        <Link to="/services" style={linkStyle}>
                            <Typography sx={linkText}>Services</Typography>
                        </Link>
                        <span>/</span>

                        <Link to="/blogs" style={linkStyle}>
                            <Typography sx={linkText}>Blogs</Typography>
                        </Link>
                        <span>/</span>

                        <Link to="/contact" style={linkStyle}>
                            <Typography sx={linkText}>Contacts</Typography>
                        </Link>
                    </Box>

                </Box>


                {/* SOCIAL ICONS */}
                <Box
                    sx={{
                        mt: "auto",
                        gap: 3,
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                    }}
                >
                    {[
                        "mdi:facebook",
                        "fa6-brands:x-twitter",
                        "mdi:linkedin",
                        "mdi:instagram",
                    ].map((icon) => (
                        <Box
                            key={icon}
                            sx={{
                                width: { xs: 22, sm: 24, md: 30 },
                                height: { xs: 22, sm: 24, md: 30 },
                                cursor: "pointer",
                                transition: "transform 0.2s ease",
                                "&:hover": { transform: "scale(1.15)" },
                                "&:active": { opacity: 0.6 },
                            }}
                        >
                            <Icon
                                icon={icon}
                                color="#0F1011"
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* RIGHT SIDE */}
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        borderBottom: "1.5px solid #858484",
                    }}
                />

                {/* CONTACTS + BUTTON + LOGO (responsive) */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        width: "100%",
                        gap: { xs: 2, sm: 1 },
                    }}
                >
                    {/* CONTACT HEADING + BUTTON TOGETHER ON MOBILE */}
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "33%" },
                            display: "flex",
                            flexDirection: { xs: "row", md: "column" },
                            alignItems: { xs: "center", md: "flex-start" },
                            justifyContent: { xs: "flex-start", md: "flex-start" },
                            gap: { xs: "4px", md: 0.3 },   // ⭐ FIXED GAP FOR MOBILE
                        }}
                    >
                        {/* Heading */}
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Archivo, sans-serif",
                                    fontWeight: 600,
                                    fontSize: { xs: "1.2rem", md: "2rem", lg: "2.5rem" },
                                }}
                            >
                                Our
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Archivo, sans-serif",
                                    fontWeight: 600,
                                    fontSize: { xs: "1.2rem", md: "2rem", lg: "2.5rem" },
                                    color: "#8F9096",
                                }}
                            >
                                Contacts.
                            </Typography>
                        </Box>

                        {/* ROUND BUTTON */}
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: { xs: 48, sm: 50, md: 60 },   // ⭐ mobile view bigger button
                                    height: { xs: 48, sm: 50, md: 60 },  // ⭐ mobile view bigger button
                                    minWidth: 0,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    icon="solar:arrow-right-up-linear"
                                    width={isMobile ? 30 : 25}     // ⭐ MOBILE → 30px icon, DESKTOP → 25px
                                    height={isMobile ? 30 : 25}
                                    color="#FFFFFF"
                                />
                            </Button>

                        </Link>
                    </Box>


                    {/* Phone + Email */}
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "40%", md: "33%" },
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography component="a" href="tel:+918777247832"
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                                "&:hover": { color: "#555" },
                            }}
                        >
                            +91 8777247832 
                        </Typography>

                        <Typography component="a" href="tel:+918276882339 "
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                                "&:hover": { color: "#555" },
                            }}
                        >
                            +918276882339
                        </Typography>

                        <Typography component="a" href="mailto:sales@bluewavesmedia.in"
                            sx={{
                                fontFamily: "Outfit",
                                fontWeight: 400,
                                textDecoration: "none",
                                fontSize: { xs: "13px", md: "17px" },
                                color: "#0F1011",
                                "&:hover": { color: "#555" },
                            }}
                        >
                            sales@bluewavesmedia.in
                        </Typography>
                    </Box>

                    {/* LOGO */}
                    <Box
                        component="img"
                        src={bluewaves}
                        alt="logo"
                        sx={{
                            width: { xs: "40%", sm: "30%", md: "33%" },
                            objectFit: "contain",
                            alignSelf: { xs: "flex-start", sm: "center" },
                        }}
                    />
                </Box>

                {/* BOTTOM FOOTER */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 1, sm: 0 },
                        width: "100%",
                        mt: "auto",
                    }}
                >
                    {/* Copyright */}
                    <Typography
                        sx={{
                            fontFamily: "Archivo, sans-serif",
                            fontWeight: 400,
                            fontSize: { xs: "10px", md: "12px" },
                            textAlign: "center",
                            width: "100%",
                        }}
                    >
                        © {new Date().getFullYear()} Bluewaves Media. All rights reserved.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <Link to="/privacy" style={linkStyle}>
                            <Typography sx={linkText}>Privacy</Typography>
                        </Link>

                        <Link to="/disclaimer" style={linkStyle}>
                            <Typography sx={linkText}>Disclaimer</Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

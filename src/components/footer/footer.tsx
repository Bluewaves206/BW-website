import { Button, Box, Typography, useMediaQuery } from "@mui/material";
import bluewaves from "../../assets/logo.png";
import { Icon } from "@iconify/react";



const Footer = () => {
    const isMobile = useMediaQuery('(max-width:1000px)');
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: { xs: 1, sm: 3, md: 7 }, gap: { xs: 1, sm: 2, md: 8 }, height: { xs: "25vh", sm: "35vh", md: "50vh" }, backgroundColor: "#fff" }}>
            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Archivo, sans-serif",
                        fontWeight: 500,
                        color: "#0F1011",
                        fontSize: {
                            xs: "9px", // mobile
                            sm: "22px", // tablets
                            md: "32.96px", // desktop
                        },
                        lineHeight: 1.3,
                    }}
                >
                    “You focus on success, we
                    handle your digital
                    <Typography
                        component="span"
                        sx={{
                            fontFamily: "Archivo, sans-serif",
                            fontWeight: 500,
                            ml: 1,
                            fontSize: {
                                xs: "12px",
                                sm: "25px",
                                md: "35.96px",
                            },
                            color: "#8E8E8E",
                        }}
                    >
                        growth
                    </Typography>

                    .”

                </Typography>

                <Box sx={{ my: { xs: 2, sm: 3, md: 4 }, width: "100%", height: 0, border: "1px solid #bebebe" }} />
                <Box sx={{ width: "100%" }}>
                    <Box sx={{
                        my: 1, display: "flex", columnGap: { xs: 1, sm: 2, md: 4 },
                        rowGap: 1, flexWrap: "wrap", alignItems: "center"
                    }}>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>Home</Typography>
                        <span>/</span>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>About Us</Typography>
                        <span>/</span>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>Services</Typography>
                        <span>/</span>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>Blogs</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex", columnGap: { xs: 1, sm: 2, md: 4 },
                        rowGap: 1, flexWrap: "wrap", alignItems: "center"
                    }}>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>Pricing</Typography>
                        <span>/</span>
                        <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", fontSize: { xs: "9px", sm: "12px", md: "16px" } }}>Contacts</Typography>
                    </Box>
                </Box>
                <Box sx={{ mt: "auto", gap: 4, display: "flex", flexDirection: "row", width: "100%" }}>
                    <Box
                        key={"mdi:facebook"}
                        sx={{
                            width: { xs: 18, sm: 19, md: 30 }, // responsive icon size
                            height: { xs: 18, sm: 19, md: 30 },
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.15)",
                            },
                        }}
                    >
                        <Icon icon={"mdi:facebook"} color="#0F1011" width="100%" height="100%" />
                    </Box>
                    <Box
                        key={"fa6-brands:x-twitter"}
                        sx={{
                            width: { xs: 18, sm: 19, md: 30 }, // responsive icon size
                            height: { xs: 18, sm: 19, md: 30 },
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.15)",
                            },
                        }}
                    >
                        <Icon icon={"fa6-brands:x-twitter"} color="#0F1011" width="100%" height="100%" />
                    </Box>
                    <Box
                        key={"mdi:linkedin"}
                        sx={{
                            width: { xs: 18, sm: 19, md: 30 }, // responsive icon size
                            height: { xs: 18, sm: 19, md: 30 },
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.15)",
                            },
                        }}
                    >
                        <Icon icon={"mdi:linkedin"} color="#0F1011" width="100%" height="100%" />
                    </Box>
                    <Box
                        key={"mdi:instagram"}
                        sx={{
                            width: { xs: 18, sm: 19, md: 30 }, // responsive icon size
                            height: { xs: 18, sm: 19, md: 30 },
                            cursor: "pointer",
                            transition: "transform 0.2s ease",
                            "&:hover": {
                                transform: "scale(1.15)",
                            },
                        }}
                    >
                        <Icon icon={"mdi:instagram"} color="#0F1011" width="100%" height="100%" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-start", height: "100%" }}>
                <Box sx={{ width: "100%", height: "1.56px", border: "1.5px solid #858484" }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 2 }}>
                    <Box
                        width={{ xs: "100%", sm: "60%", md: "40%", lg: "33.33%" }}
                        sx={{
                            overflow: "hidden",          // prevents overflow
                            textOverflow: "ellipsis",    // optional: adds "..." if needed
                            wordWrap: "nowrap",      // ensures long words wrap
                            display: isMobile ? "none" : "block",  // hide on mobile
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                mt: 1,
                                fontFamily: "Archivo, sans-serif",
                                fontWeight: 500,
                                fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.6rem", lg: "2.5rem", xl: "3rem" }, // responsive + capped
                                color: "#0F1011",
                                lineHeight: 1.2,
                            }}
                        >
                            Our
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mt: -1,
                                fontFamily: "Archivo, sans-serif",
                                fontWeight: 500,
                                fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.6rem", lg: "2.5rem", xl: "3rem" }, // responsive + capped
                                color: "#8F9096",
                                lineHeight: 1.2,
                            }}
                        >
                            Contacts.
                        </Typography>
                    </Box>

                    <Box width={isMobile ? "50%" : "33.33%"} sx={{ display: "flex", alignItems: "flex-start", gap: { md: 4, xs: 2 }, flexDirection: "column" }} >
                        <Typography variant="body1" sx={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: { xs: "8px", sm: "10px", md: "14px" }, color: "#0F1011" }}>+91 9830048870</Typography>
                        <Typography variant="body1" sx={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: { xs: "8px", sm: "10px", md: "14px" }, color: "#0F1011" }}>+918276882339</Typography>
                        <Typography variant="body1" sx={{ fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: { xs: "8px", sm: "10px", md: "14px" }, color: "#0F1011" }}>sales@bluewavesmedia.in</Typography>

                    </Box>

                    <Box
                        component="img"
                        src={bluewaves}
                        alt="Image"
                        sx={{
                            mt: 1,
                            width: isMobile ? "50%" : "33.33%",
                            objectFit: "contain",  // maintain visual balance
                        }}
                    />


                </Box>
                <Box sx={{ display: "flex", width: "100%", }}>
                    <Button variant="contained" sx={{
                        width: { xs: 30, sm: 50, md: 60 },
                        height: { xs: 30, sm: 50, md: 60 },
                        minWidth: 0,          // prevents MUI from enforcing a min width
                        borderRadius: "50%",  // makes it circular
                        p: 0,                 // removes extra padding
                        display: "flex",      // centers the icon
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Icon icon="solar:arrow-right-up-linear" width="25" height="25" color="#FFFFFF" />
                    </Button>
                </Box>
                <Box sx={{ display: "flex", gap: 5, justifyContent: "space-between", width: "100%", mt: "auto" }}>

                    <Typography variant="body1" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: { xs: "6px", sm: "9px", md: "11.72px" }, color: "#0F1011" }}>Privacy</Typography>

                    <Typography variant="body1" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: { xs: "6px", sm: "9px", md: "11.72px" }, color: "#0F1011" }}>© 2023 — Copyright</Typography>
                    <Typography variant="body1" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: { xs: "6px", sm: "9px", md: "11.72px" }, color: "#0F1011" }}>Disclaimer</Typography>


                </Box>
            </Box>
        </Box >
    );
};
export default Footer;
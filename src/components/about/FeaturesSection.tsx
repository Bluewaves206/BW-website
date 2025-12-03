import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

export default function FeaturesSection() {
    const features = [
        {
            icon: "material-symbols-light:support-agent-sharp",
            title: "24/7 customer support",
        },
        {
            icon: "mdi:register",
            title: "DLT Registration",
        },
        {
            icon: "ic:baseline-whatsapp",
            title: "Whatsapp On Boarding",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#BCD7FF",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: { xs: "flex-start", md: "space-around" },
                alignItems: "center",
                px: { xs: 3, sm: 4, md: 8 },
                py: { xs: 4, md: 8 },
                gap: { xs: 4, md: 0 },
            }}
        >
            {/* LEFT TITLE */}
            <Typography
                variant="h3"
                sx={{
                    letterSpacing: { xs: 1, md: 4 },
                    fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.6rem" },
                    textAlign: { xs: "center", md: "left" },
                    fontWeight: 700,
                    lineHeight: 1.3,
                    mb: { xs: 1, md: 0 },
                }}
            >
                Our <br />
                <span
                    style={{
                        color: "#fff",
                        backgroundColor: "black",
                        padding: "8px 14px",
                        borderRadius: "15px",
                        display: "inline-block",
                        marginTop: "6px",
                    }}
                >
                    Features
                </span>
            </Typography>

            {/* FEATURES LIST */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 2.5, sm: 3, md: 5 }, // reduced gap
                    mt: { xs: 1, sm: 0 },
                }}
            >
                {features.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 240,          // smaller width
                            height: 240,         // smaller height → less blank space
                            borderRadius: "30px",
                            backgroundColor: "transparent",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            textAlign: "center",
                            color: "#000",

                            /** HOVER ONLY ON DESKTOP **/
                            transition: "all 0.4s ease",
                            "&:hover": {
                                backgroundColor: { xs: "transparent", md: "#3F8CFF" }, // NO HOVER ON MOBILE
                                color: { xs: "#000", md: "white" },
                                cursor: { xs: "default", md: "pointer" },
                                transform: { xs: "none", md: "translateY(-5px)" },
                            },
                        }}
                    >
                        {/* ICON BOX */}
                        <Box
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "20px",
                                width: 110,
                                height: 100,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#3F8CFF",
                                fontSize: "3rem",
                                transition: "0.3s",

                                // icon stays same size in mobile
                            }}
                        >
                            <Icon icon={item.icon} fontSize={48} />
                        </Box>

                        {/* TITLE */}
                        <Typography sx={{ fontSize: "1rem", fontWeight: 500 }}>
                            {item.title}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

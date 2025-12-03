import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import heroImg1 from "../../assets/aboutHeroImg1.png";
import heroImg2 from "../../assets/aboutHeroImg2.png";

export default function AboutHeroSection() {
    return (
        <Box
            sx={{
                px: { xs: 2, sm: 4, md: 10 },
                width: "100%",
                display: "flex",

                // ⭐ TEXT FIRST ON MOBILE, IMAGES FIRST ON DESKTOP
                flexDirection: { xs: "column", md: "row" },

                alignItems: "center",
                justifyContent: "center",
                minHeight: "70vh",
                gap: 4,
            }}
        >
            {/* ⭐ RIGHT TEXT CONTENT → shown first on mobile */}
            <Box
                sx={{
                    order: { xs: 1, md: 2 },
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{ color: "#3F8CFF", fontFamily: "Evanston Tavern 1846" }}
                >
                    ABOUT US
                </Typography>

                <Typography variant="h3" sx={{ fontWeight: 600, fontFamily: "Outfit" }}>
                    What is <br /> Bluewavesmedia for?
                </Typography>

                <Typography
                    variant="h6"
                    sx={{ color: "#555555", fontFamily: "Lato", lineHeight: 1.5 }}
                >
                    “Bluewaves Media is a dynamic digital solutions company that thrives on
                    creativity and innovation. We craft engaging websites, intuitive
                    experiences, and result-driven digital campaigns. We don’t just deliver
                    services — we create experiences that inspire and drive growth.”
                </Typography>

                <Button
                    component="a"
                    href="/#"
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                        bgcolor: "#3F8CFF",
                        color: "#fff",
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        width: "fit-content",
                        mt: 2,
                        "&:hover": { bgcolor: "#3575D9" },
                    }}
                    endIcon={
                        <Box
                            sx={{
                                border: "2px solid #fff",
                                borderRadius: "50%",
                                width: 42,
                                height: 42,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                ml: 1,
                            }}
                        >
                            <Icon icon="formkit:arrowright" fontSize={18} color="#fff" />
                        </Box>
                    }
                >
                    Read More
                </Button>
            </Box>

            {/* ⭐ LEFT IMAGES → shown after text on mobile */}
            <Box
                sx={{
                    order: { xs: 2, md: 1 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3,
                    width: { xs: "100%", md: "50%" },
                }}
            >
                {/* Left Main Image */}
                <Box
                    component="img"
                    src={heroImg1}
                    alt="Office"
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        height: { xs: "260px", md: "100%" },
                        objectFit: "cover",
                        borderRadius: 3,
                    }}
                />

                {/* Right Column Images */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                    }}
                >
                    {/* Badge */}
                    <Box
                        sx={{
                            backgroundColor: "#222",
                            color: "#fff",
                            borderRadius: 4,
                            height: "120px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h4" fontWeight={700}>
                            +10 Years
                        </Typography>
                        <Typography color="#ccc">Experience</Typography>
                    </Box>

                    {/* Bottom Image */}
                    <Box
                        component="img"
                        src={heroImg2}
                        alt="Building"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: 3,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

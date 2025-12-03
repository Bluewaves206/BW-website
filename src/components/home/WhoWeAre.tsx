import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import LineImg from "../../assets/lineImg.png";
import WhoImg from "../../assets/whoImg.png";

export default function WhoWeAre() {
    return (
        <Box
            sx={{
                backgroundColor: "#d4dff0",
                py: { xs: 4, md: 6 },
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 8, md: 15 },
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Decorative Line */}
            <Box
                component={"img"}
                src={LineImg}
                alt="lineImg"
                sx={{
                    width: "100%",
                    position: "absolute",
                    top: { xs: "5%", md: "15%" },
                    zIndex: 0,
                    opacity: { xs: 0.4, md: 1 },
                }}
            />

            {/* MAIN SECTION */}
            <Box
                sx={{
                    position: "relative",
                    px: { xs: 2, sm: 3, md: 7 },

                    backgroundImage: `url(${WhoImg})`,
                    backgroundSize: { xs: "contain", sm: "contain", md: "contain" },
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: { xs: "top center", md: "center" },

                    height: { xs: 520, sm: 580, md: 680 },
                    width: "100%",

                    display: "flex",
                    flexDirection: "column",

                    justifyContent: { xs: "flex-end", md: "center" },
                    alignItems: { xs: "center", md: "flex-end" },

                    textAlign: { xs: "center", md: "left" },
                    pb: { xs: 5, md: 0 },
                }}
            >
                {/* CONTENT BOX */}
                <Box
                    sx={{
                        width: { xs: "90%", sm: "80%", md: "55%" },
                        zIndex: 2,

                        /* MOBILE readability improvement */
                        ...(theme => ({
                            [theme.breakpoints.down("sm")]: {
                                background: "rgba(255, 255, 255, 0.55)",
                                backdropFilter: "blur(4px)",
                                borderRadius: "12px",
                                padding: "16px 14px",
                            }
                        })),
                    }}
                >
<Typography
    variant="h2"
    sx={{
        fontWeight: 700,
        fontSize: {
            xs: "2.2rem",   
            sm: "2.6rem",   
            md: "3.2rem"    
        },
    }}
>
    Who we are
</Typography>


                    <Typography
                        variant="h6"
                        sx={{
                            color: "#64748B",
                            lineHeight: 1.4,
                            my: 3,
                            fontSize: { xs: ".95rem", sm: "1rem", md: "1.1rem" },
                        }}
                    >
                        We're more than a digital agency – we're your strategic partners in
                        creating meaningful digital experiences that drive growth and build
                        lasting connections with your audience.
                    </Typography>

                    {/* BUTTON */}
                    <Button
                        variant="contained"
                        size="large"
                        disableElevation
                        sx={{
                            bgcolor: "#3F8CFF",
                            color: "#fff",
                            borderRadius: "30px",
                            textTransform: "none",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            fontWeight: 600,
                            px: 2.5,
                            boxShadow: "none",
                            "&:hover": { bgcolor: "#3575D9" },

                            // CENTER BUTTON ON MOBILE
                            alignSelf: { xs: "center", md: "flex-start" },
                            mt: { xs: 1, md: 0 },
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
                                    mr: "-10px",
                                }}
                            >
                                <Icon icon="formkit:arrowright" style={{ fontSize: 18, color: "white" }} />
                            </Box>
                        }
                    >
                        Read More
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

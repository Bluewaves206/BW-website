import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import WhoImg from "../../assets/whoImg.png";

export default function WhoWeAreSection() {
    return (
        <Box
            sx={{
                position: "relative",
                mt: { xs: 8, md: 12 },
                px: { xs: 3, sm: 5, md: 7 },
                py: { xs: 6, md: 10 },
                backgroundImage: `url(${WhoImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: { xs: 420, sm: 500, md: 650, lg: 700 },
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
            }}
        >
            {/* RIGHT SIDE CONTENT */}
            <Box sx={{ width: { xs: "100%", sm: "80%", md: "55%", lg: "50%" } }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: "1.8rem",
                            sm: "2.2rem",
                            md: "2.6rem",
                            lg: "3rem"
                        }
                    }}
                >
                    About{" "}
                    <span style={{ color: "#3F8CFF" }}>Blue Waves Media</span>
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        color: "#64748B",
                        lineHeight: 1.55,
                        my: 3,
                        fontSize: {
                            xs: "0.9rem",
                            sm: "1rem",
                            md: "1.1rem"
                        }
                    }}
                >
                    We're more than a digital agency – we're your strategic partners in
                    creating meaningful digital experiences that drive growth and build
                    lasting connections with your audience.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                        bgcolor: "#3F8CFF",
                        color: "#fff",
                        borderRadius: "30px",
                        fontFamily: "Outfit, sans-serif",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        px: 3,
                        py: 1.2,
                        boxShadow: "none",
                        "&:hover": { bgcolor: "#3575D9" },
                        ".MuiButton-endIcon": { marginLeft: 1 },
                    }}
                    endIcon={
                        <Box
                            sx={{
                                border: "2px solid #fff",
                                borderRadius: "50%",
                                width: 38,
                                height: 38,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: "-10px",
                            }}
                        >
                            <Icon icon="formkit:arrowright" width={18} color="white" />
                        </Box>
                    }
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
}

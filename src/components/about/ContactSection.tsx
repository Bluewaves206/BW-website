import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import FooterImg from "../../assets/footerTopimage.png";

export default function ContactSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: { xs: 10, sm: 12, md: 16 },
                px: { xs: 2, sm: 4, md: 8 },
                position: "relative",
            }}
        >
            {/* GLASS CARD */}
            <Paper
                elevation={3}
                sx={{
                    borderRadius: "22px",
                    backgroundColor: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(14px)",
                    p: { xs: 3, sm: 4 },
                    width: { xs: "95%", sm: "75%", md: "50%", lg: "42%" },
                    position: "relative",
                    zIndex: 2,
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        mb: 3,
                        fontFamily: "Outfit, sans-serif",
                        fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                        fontWeight: 600,
                    }}
                >
                    Please Contact Us Today!
                </Typography>

                {/* FORM */}
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 2, sm: 2.5 },
                        mt: 2,
                    }}
                >
                    <TextField
                        fullWidth
                        placeholder="Enter Your Contact Number"
                        variant="outlined"
                        size="medium"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            "& fieldset": { borderRadius: "10px" },
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Enter Your Email Address"
                        variant="outlined"
                        size="medium"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            "& fieldset": { borderRadius: "10px" },
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Question?"
                        variant="outlined"
                        size="medium"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: 2,
                            "& fieldset": { borderRadius: "10px" },
                        }}
                    />

                    {/* SEND BUTTON */}
                    <Button
                        variant="contained"
                        size="large"
                        disableElevation
                        sx={{
                            bgcolor: "#3F8CFF",
                            color: "#fff",
                            borderRadius: "30px",
                            textTransform: "none",
                            fontFamily: "Outfit",
                            fontSize: { xs: "1rem", sm: "1.15rem" },
                            fontWeight: 600,
                            px: 3,
                            mt: 1,
                            boxShadow: "none",
                            "&:hover": { bgcolor: "#3575D9" },
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    border: "2px solid #fff",
                                    borderRadius: "50%",
                                    width: 32,
                                    height: 32,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mr: "-8px",
                                }}
                            >
                                <Icon icon="formkit:arrowright" width={18} color="#fff" />
                            </Box>
                        }
                    >
                        Send
                    </Button>
                </Box>
            </Paper>

            {/* FOOTER IMAGE */}
            <Box
                component="img"
                src={FooterImg}
                alt="Footer Banner"
                sx={{
                    width: "100%",
                    mt: { xs: 12, sm: 14, md: 8 },
                    zIndex: 1,
                }}
            />
        </Box>
    );
}

import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import footerImg from "../../assets/footerTopimage.png";

export default function NewsletterSection() {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundImage: `url(${footerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mt: 15,
                height: 320,
                position: "relative",
            }}
        >
            <Paper
                elevation={1}
                sx={{
                    borderRadius: "20px",
                    p: 4,
                    width: "90%",
                    backdropFilter: "blur(43.39px)",
                    boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        borderRadius: "15.78px",
                        padding: "2px",
                        background:
                            "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                        WebkitMask:
                            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                        maskComposite: "exclude",
                        pointerEvents: "none",
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "Outfit, sans-serif",
                    }}
                    gutterBottom
                >
                    Join Our Newsletter
                </Typography>

                {/* Form Row */}
                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "60%", md: "40%" },
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "white",
                            borderRadius: "50px",
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                            overflow: "hidden",
                            p: "4px",
                        }}
                    >
                        <TextField
                            placeholder="Enter Your Email"
                            variant="outlined"
                            size="small"
                            sx={{ width: "85%" }}
                            InputProps={{
                                sx: {
                                    border: "none",
                                    "& fieldset": { border: "none" },
                                    fontSize: "15px",
                                    pl: 2,
                                },
                            }}
                        />

                        {/* Responsive Button */}
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "40px",
                                textTransform: "none",
                                fontWeight: 600,
                                px: { xs: 1.5, sm: 3 },
                                minWidth: { xs: "45px", sm: "auto" },
                                height: "38px", // FIXED HEIGHT FOR ALIGNMENT
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", // FIX → centers icon perfectly
                                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                                "&:hover": {
                                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                                },
                            }}
                        >
                            {/* TEXT — Desktop only */}
                            <Box
                                sx={{
                                    display: { xs: "none", sm: "block" },
                                    whiteSpace: "nowrap", // prevents breaking into 2 lines
                                }}
                            >
                                Join Us
                            </Box>

                            {/* ICON — Mobile only */}
                            <Box
                                sx={{
                                    display: { xs: "flex", sm: "none" },
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon icon="mdi:send" width="22" />
                            </Box>
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

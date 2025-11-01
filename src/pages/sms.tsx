import { Icon } from "@iconify/react";
import { Box, Button, Typography } from "@mui/material";

export default function SMS() {
    return (
        <>
            <Box sx={{ px: 7, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box width={"50%"}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1, backgroundColor: "#CCE0FF", color: "#3F8CFF", borderRadius: 3, gap: 1, width: "fit-content" }}>
                        <Icon icon={'mingcute:paint-brush-ai-fill'} style={{ width: "25px", height: "25px" }} />
                        <Typography variant="h6">Next-Gen Messaging</Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 800,
                                color: "#7D8592",
                                fontSize: {
                                    xs: "2rem",   // mobile (like h4)
                                    sm: "3rem",   // tablet (like h3)
                                    md: "4rem",   // desktop (like h2)
                                    lg: "5rem",   // large screen (like h1)
                                },
                                display: "inline"
                            }}
                        >
                            <span>Reach Thousands Instantly with</span>
                            <span style={{ color: "#3F8CFF", marginLeft: "16px" }}>Bulk SMS</span>
                        </Typography>

                        <Button
                            sx={{
                                mt: { xs: 3, md: 2 },
                                backgroundColor: "#D7D7D7",
                                color: "#4E5156",
                                px: 2,
                                py: 1,
                                fontSize: { xs: "1rem", md: "1.7rem" },
                                borderRadius: 7,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mx: { xs: 0, sm: 3 },
                                mb: { xs: 0, sm: 8 },
                            }}
                            endIcon={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#3F8CFF",
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                    }}
                                >
                                    <Icon icon={'tabler:arrow-up-right'} />
                                </Box>
                            }
                        >
                            Book a Demo
                        </Button>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 200, color: "#535353" }}>Send personalized messages to your customers at lightning speed. Maximize engagement, drive sales, and stay connected effortlessly.</Typography>
                </Box>
            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
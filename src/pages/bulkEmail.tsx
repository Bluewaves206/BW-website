import { Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/bullkmailhero.png"
import { Icon } from "@iconify/react";

export default function BulkEmail() {
    return (
        <>
            <Box
                sx={{
                    mx: 10,              // remove side margins
                    p: 4,
                    backgroundImage: `url(${heroImg})`,
                    backgroundSize: "cover",    // make it cover the entire box
                    backgroundRepeat: "no-repeat", // prevent repetition
                    backgroundPosition: "center",  // center the image
                    borderRadius: 5,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    flexDirection: "column"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 1, backgroundColor: "#CCE0FF", color: "#3F8CFF", borderRadius: 3, gap: 1, width: "fit-content" }}>
                    <Icon icon={'mingcute:paint-brush-ai-fill'} style={{ width: "25px", height: "25px" }} />
                    <Typography variant="h6">Next-Gen Messaging</Typography>
                </Box>
                <Box
                    sx={{
                        textAlign: { xs: "center", md: "left" },
                        width: { xs: "100%", md: "50%" },
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            color: "#fff",
                            fontSize: {
                                xs: "2rem",   // mobile (like h4)
                                sm: "3rem",   // tablet (like h3)
                                md: "4rem",   // desktop (like h2)
                                lg: "5rem",   // large screen (like h1)
                            },
                            display: "inline",
                        }}
                    >
                        Powerful Email Marketing Platform
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 200, color: "#a3a3a3" }}>Send beautiful, targeted email campaigns that drive engagement and conversions. Our bulk email service delivers results with advanced automation and analytics.</Typography>
                </Box>

                <Button
                    sx={{
                        mt: { xs: 3, md: 2 },
                        backgroundColor: "#3F8CFF",
                        color: "#D7D7D7",
                        px: 2,
                        py: 1,
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        borderRadius: 7,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: { xs: 0, sm: 8 },
                    }}
                    endIcon={
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff",
                                width: "40px",
                                height: "40px",
                                borderRadius: "50%",
                                color: "#3F8CFF"
                            }}
                        >
                            <Icon icon={'tabler:arrow-up-right'} />
                        </Box>
                    }
                >
                    Book a Demo
                </Button>
            </Box>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}
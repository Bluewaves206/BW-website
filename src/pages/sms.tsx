import { Icon } from "@iconify/react";
import { Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/smsHeroImg.png";
import whySmsImg from "../assets/whySmsImg.png";
import footerImg from "../assets/smsFooterImg.png"
import smsfootImg from "../assets/smsLastImg.png"
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
                    <Typography variant="h5" sx={{ fontWeight: 200, color: "#535353" }}>Send personalized messages to your customers at lightning speed. Maximize engagement, drive sales, and stay connected effortlessly.</Typography>
                </Box>
                <Box component={"img"} src={heroImg} width={"50%"} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2, mt: 20 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#777E90" }}>LEARN HOW TO GET STARTED</Typography>
                <Typography variant="h2" sx={{ fontWeight: 600 }}>Beyond Traditional SMS</Typography>
                <Typography variant="overline" sx={{ mt: 3, wordSpacing: 1, fontWeight: 100 }}>Unlock powerful features that transform how you communicate with customers</Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, mt: 6, width: "60%" }}>
                    <Box
                        sx={{
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 3
                        }}
                    >
                        <Box sx={{ backgroundColor: "#3F8CFF", padding: 4, borderRadius: 4 }}>
                            <Icon icon={"streamline-cyber:headphone"} style={{ width: "55px", height: "50px", color: "#CDE1FF" }} />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                color: "#0F1011",
                                fontWeight: 500,
                                textAlign: "center",
                                mt: 1,
                            }}
                        >
                            Global Coverage
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 3
                        }}
                    >
                        <Box sx={{ backgroundColor: "#CDE1FF", padding: 4, borderRadius: 4 }}>
                            <Icon icon={"bi:shield-shaded"} style={{ width: "55px", height: "50px", color: "#3F8CFF" }} />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                color: "#0F1011",
                                fontWeight: 500,
                                textAlign: "center",
                                mt: 1,
                            }}
                        >
                            Global Coverage
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 3
                        }}
                    >
                        <Box sx={{ backgroundColor: "#CDE1FF", padding: 4, borderRadius: 4 }}>
                            <Icon icon={"bi:shield-shaded"} style={{ width: "55px", height: "50px", color: "#3F8CFF" }} />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                color: "#0F1011",
                                fontWeight: 500,
                                textAlign: "center",
                                mt: 1,
                            }}
                        >
                            Global Coverage
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            borderRadius: "20px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 3
                        }}
                    >
                        <Box sx={{ backgroundColor: "#CDE1FF", padding: 4, borderRadius: 4 }}>
                            <Icon icon={"bi:shield-shaded"} style={{ width: "55px", height: "50px", color: "#3F8CFF" }} />
                        </Box>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                color: "#0F1011",
                                fontWeight: 500,
                                textAlign: "center",
                                mt: 1,
                            }}
                        >
                            Global Coverage
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-start", mt: 10, px: 10, }}>
                <Box sx={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Box component={"img"} src={whySmsImg} width={"80%"} />
                </Box>
                <Box sx={{ width: "60%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column", gap: 2, px: 4 }}>
                    <Typography variant="h1" sx={{ color: "#595f6d" }}>Why Choose <span style={{ color: "#3F8CFF" }}>Bulk SMS?</span></Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#777E90" }}>SMS remains one of the most effective communication channels with unmatched open rates and instant delivery. Our platform makes it easy to leverage this power.</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: "#595f6d" }}>98% Open Rate within 3 Minutes</Typography>
                    <Typography variant="body2" sx={{ color: "#777E90", mb: 4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus cupiditate eveniet amet alias perferendis distinctio sapiente dolorum fugiat sit saepe cum tempora, ducimus optio suscipit adipisci libero quos natus?</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: "#595f6d" }}>API Integration Available</Typography>
                    <Typography variant="body2" sx={{ color: "#777E90", mb: 4 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus cupiditate eveniet amet alias perferendis distinctio sapiente dolorum fugiat sit saepe cum tempora, ducimus optio suscipit adipisci libero quos natus?</Typography>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: "#595f6d" }}>Two-Way SMS Conversations</Typography>
                    <Typography variant="body2" sx={{ color: "#777E90", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam necessitatibus cupiditate eveniet amet alias perferendis distinctio sapiente dolorum fugiat sit saepe cum tempora, ducimus optio suscipit adipisci libero quos natus?</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${footerImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%",
                    mt: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    py: 10,
                    px: 10
                }}
            >
                <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", width: "50%" }}>
                    <Typography variant="h2" sx={{ color: "white", fontWeight: 600 }} gutterBottom>Creative Digital Marketing Agency</Typography>
                    <Typography variant="body1" sx={{ color: "#4E5156" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae sunt quaerat iste dolorem nesciunt ipsa, vitae quibusdam amet deserunt quisquam dicta culpa ea eum fugiat eveniet magnam, excepturi cupiditate.</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5, width: "70%" }}>
                        <Button variant="contained" disableElevation sx={{ borderRadius: 5, backgroundColor: "#4E5156", color: "white", px: 2, py: 1, fontWeight: 500 }}>Contact Us</Button>
                        <span style={{ color: "white" }}>or</span>
                        <Typography sx={{ color: "white", fontWeight: 500 }}><Icon icon={"ion:call-sharp"} style={{ color: "#4E5156", marginRight: "10px", width: "25px", height: "20px" }} />+91 8715246912</Typography>
                    </Box>
                </Box>
                <Box sx={{ width: "50%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                    <Box component={"img"} src={smsfootImg} width={"60%"} />
                </Box>
            </Box>
        </>
    )
}
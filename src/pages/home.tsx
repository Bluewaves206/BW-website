import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import HomeImg from '../assets/homePageTop.png';
import FooterImg from '../assets/footerTopimage.png';
import LineImg from '../assets/lineImg.png';
import WhoImg from "../assets/whoImg.png"
import ContactImg from "../assets/contactHome.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";


import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <>

            <Box component={'img'} src={HomeImg} alt="HomeImg" sx={{ backgroundSize: "cover", width: "900px", position: "absolute", top: "0", right: "0" }} />
            <Box component={'img'} src={LineImg} alt="lineImg" sx={{ backgroundSize: "cover", width: "100%", position: "absolute", top: 360 }} />
            <Container maxWidth="xl" sx={{ position: "relative" }}>
                <Typography variant="h1" sx={{ fontSize: "5.6rem", wordSpacing: 8 }}>Your Partner, <span style={{ color: "#3F8CFF" }}>Digital</span><br />Growth &<br />Communication</Typography>
                <Typography variant="h4" sx={{ color: "#64748B", lineHeight: 1.4 }}>“From messaging to web solutions, we’ve got you<br />covered.”</Typography>
                <Paper
                    elevation={1}
                    sx={{
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.6)",
                        p: 4,
                        mt: 5,
                        width: "70%"
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#0069AB",
                            mb: 4,
                            fontFamily: "Outfit, sans-serif",
                        }}
                    >
                        Easily book an appointment in 3 simple steps
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
                        {/* Email Address */}
                        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 1,
                                    color: "#5a5a5a",
                                    fontFamily: "Outfit, sans-serif",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                }}
                            >
                                <Icon icon="mdi:email" width="20" height="20" color="#3F8CFF" /> Email Address
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter Your Email Address"
                                variant="outlined"
                                size="medium"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    "& fieldset": { borderRadius: "10px" },
                                }}
                            />
                        </Box>

                        {/* Contact Number */}
                        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 1,
                                    color: "#5a5a5a",
                                    fontFamily: "Outfit, sans-serif",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                }}
                            >
                                <Icon icon="mdi:phone" width="20" height="20" color="#3F8CFF" /> Contact Number
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter Your Contact Number"
                                variant="outlined"
                                size="medium"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    "& fieldset": { borderRadius: "10px" },
                                }}
                            />
                        </Box>

                        {/* Date of Appointment */}
                        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 1,
                                    color: "#5a5a5a",
                                    fontFamily: "Outfit, sans-serif",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                }}
                            >
                                <Icon icon="mdi:calendar" width="20" height="20" color="#3F8CFF" /> Date of Appointment
                            </Typography>
                            <TextField
                                fullWidth
                                type="date"
                                variant="outlined"
                                size="medium"
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    "& fieldset": { borderRadius: "10px" },
                                }}
                            />
                        </Box>

                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<Icon icon="teenyicons:tick-circle-solid" width="24" height="24" />}
                            sx={{
                                background: "linear-gradient(90deg, hsla(215, 66%, 94%, 1) 0%, hsla(216, 100%, 62%, 1) 44%, hsla(211, 100%, 50%, 1) 100%)",
                                color: "#fff",
                                borderRadius: "10px",
                                px: 4,
                                py: 1.5,
                                fontFamily: "Outfit, sans-serif",
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": {
                                    background: "linear-gradient(90deg, #007BFF 0%, #3F8CFF 100%)",
                                },
                            }}
                        >
                            Book Now
                        </Button>

                    </Box>
                </Paper>
                <Box sx={{ mt: 12, mb: 9 }}>
                    <Typography variant="h5" sx={{ fontFamily: "Outfit, sans-serif", mb: 3, wordSpacing: 8, fontWeight: 500, color: "#979797" }}><span style={{ color: "#fff" }}>Featured in</span> <span style={{ color: "#5a5a5a", fontWeight: 100, fontSize: "1.8rem" }}>|</span> Our Certification</Typography>
                    <Swiper spaceBetween={20} slidesPerView={4} loop={true} modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,   // time in ms between slides
                            disableOnInteraction: false, // keeps autoplay even after user swipes
                        }}>
                        <SwiperSlide>

                            <Box component={'img'} src="https://picsum.photos/800/300?random=1" alt="slide1" width="100%" sx={{ borderRadius: "12px" }} />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Box component={'img'} src="https://picsum.photos/800/300?random=3" alt="slide1" width="100%" sx={{ borderRadius: "12px" }} />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Box component={'img'} src="https://picsum.photos/800/300?random=4" alt="slide1" width="100%" sx={{ borderRadius: "12px" }} />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Box component={'img'} src="https://picsum.photos/800/300?random=5" alt="slide1" width="100%" sx={{ borderRadius: "12px" }} />

                        </SwiperSlide>
                        <SwiperSlide>

                            <Box component={'img'} src="https://picsum.photos/800/300?random=2" alt="slide2" width="100%" sx={{ borderRadius: "12px" }} />

                        </SwiperSlide>
                    </Swiper>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        mt: "10rem",
                        px: 7,
                        backgroundImage: `url(${WhoImg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        height: 680,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "center",

                    }}
                >
                    <Box sx={{ width: "55%" }}>
                        <Typography variant="h2" sx={{ fontWeight: 600 }}>Who we are</Typography>
                        <Typography variant="h6" sx={{ color: "#64748B", lineHeight: 1.4, my: 3 }}>We're more than a digital agency – we're your strategic partners in creating meaningful digital experiences that drive growth and build lasting connections with your audience.</Typography>
                        <Button
                            variant="contained"
                            size="large"
                            disableElevation
                            sx={{
                                bgcolor: "#3F8CFF",
                                color: "#fff",
                                borderRadius: "30px", // pill
                                fontFamily: "Outfit, sans-serif",
                                textTransform: "none",
                                fontSize: "1.2rem",
                                fontWeight: 600,
                                px: 2.5,
                                boxShadow: "none",
                                overflow: "visible", // allow the circle to hang outside
                                "&:hover": { bgcolor: "#3575D9", boxShadow: "none" },
                                ".MuiButton-endIcon": { marginLeft: 1 }, // smaller gap between text and circle
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
                                        mr: "-10px", // pull the circle slightly outside the button edge
                                        bgcolor: "transparent",
                                    }}
                                >
                                    <Icon
                                        icon="formkit:arrowright"
                                        style={{ fontSize: 18, color: "white" }}
                                    />
                                </Box>
                            }

                        >
                            Read More
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", width: "100%", marginTop: "10rem" }}>
                    <Box
                        sx={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            p: 3
                        }}
                    >
                        <Box component={'img'} src={ContactImg} alt="randomImg" borderRadius={"20px"} width={"90%"} />
                    </Box>
                    <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>as</Box>
                </Box>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
            <Box component={'img'} src={FooterImg} alt="footerImg" sx={{ backgroundSize: "cover", width: "100%", position: "relataive" }} />

        </>
    );
}
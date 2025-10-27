import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function Partner() {
    return (
        <>
            <Box sx={{ px: 10, width: { sm: "100%", md: "80%" }, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, gap: 1, mt: { xs: 20, sm: 0 } }}>
                <Box sx={{ backgroundColor: "#EFEBFE", color: "#3F8CFF", p: 1, display: "flex", alignItems: "center", gap: 1, borderRadius: 3, fontSize: "1.7rem", }}>
                    <Icon icon={'fluent:people-team-16-regular'} />
                    <span style={{ fontSize: "1.3rem" }}>Our Team</span>
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
                                sm: "4rem",   // tablet (like h3)
                                md: "5rem",   // desktop (like h2)
                                lg: "6rem",   // large screen (like h1)
                            },
                            display: "inline"
                        }}
                    >
                        <span>Let's Build Something</span>
                        <span style={{ color: "#3F8CFF", marginLeft: "16px" }}>Amazing Together</span>
                    </Typography>

                    <Button
                        sx={{
                            mt: { xs: 3, md: 2 },
                            backgroundColor: "#2C313F",
                            color: "white",
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
                        Become a Partner
                    </Button>
                </Box>

                <Typography variant="h6" sx={{ color: "#7D8592", textAlign: { xs: "center", md: "left" } }}>Join our growing network of partners and unlock new opportunities for growth, innovation, and success.<br /> Together, we can achieve more than we ever could alone.</Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#5AC4FF",
                    mt: 8,
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* The inner container that scrolls */}
                <Box
                    sx={{
                        display: "inline-flex",
                        whiteSpace: "nowrap",
                        animation: "scrollLoop 15s linear infinite",
                        "@keyframes scrollLoop": {
                            "0%": { transform: "translateX(0)" },
                            "100%": { transform: "translateX(-50%)" },
                        },
                    }}
                >
                    {/* First copy */}
                    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                        <Typography variant="h2" sx={{ color: "#2C313F", fontWeight: 800, mx: 5, fontSize: { xs: '1.5rem', md: '3.5rem' } }}>
                            Let's Talk
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#2C313F", fontWeight: 600, mx: 5, }}>
                            GET IN TOUCH
                        </Typography>
                        <Typography variant="h2" sx={{ color: "#2C313F", fontWeight: 800, mx: 5, fontSize: { xs: '1.5rem', md: '3.5rem' } }}>
                            Let's Talk
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#2C313F", fontWeight: 600, mx: 5, }}>
                            GET IN TOUCH
                        </Typography>
                    </Box>

                    {/* Second copy for seamless looping */}
                    <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                        <Typography variant="h2" sx={{ color: "#2C313F", fontWeight: 800, mx: 5, fontSize: { xs: '1.5rem', md: '3.5rem' } }}>
                            Let's Talk
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#2C313F", fontWeight: 600, mx: 5, }}>
                            GET IN TOUCH
                        </Typography>
                        <Typography variant="h2" sx={{ color: "#2C313F", fontWeight: 800, mx: 5, fontSize: { xs: '1.5rem', md: '3.5rem' } }}>
                            Let's Talk
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#2C313F", fontWeight: 600, mx: 5, }}>
                            GET IN TOUCH
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10, backgroundColor: "white", py: 10, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 3 }}>
                <Box sx={{ backgroundColor: "#EFEBFE", color: "#3F8CFF", p: 1, display: "flex", alignItems: "center", gap: 1, borderRadius: 3, fontSize: "1.7rem" }}>
                    <Icon icon={'fluent:people-team-16-regular'} />
                    <span style={{ fontSize: "1.3rem" }}>Our Team</span>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "center", px: 1 }}>Why Partner with BlueWaves Media?</Typography>
                <Typography variant="body1" sx={{ color: "#5A5C62", wordSpacing: 2, textAlign: "center", px: 1 }}>Our partnerships are built on trust, innovation, and mutual success. Discover the benefits of joining our partner ecosystem.</Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", gap: { xs: 3, md: 6 }, flexWrap: "wrap", px: 2 }}>
                    <Box
                        sx={{
                            width: { xs: 200, md: 200 },
                            height: {
                                xs: 280, md: 300, lg: 350
                            },
                            backgroundColor: "#E9F3FF",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            px: 3,
                            py: 4,
                            boxShadow: "0 8px 16px rgba(90, 196, 255, 0.3)",
                        }}
                    >
                        <Icon icon={'streamline-plump:graph-bar-increase-solid'} style={{ color: "#3D8BFF", fontSize: "5rem" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#3D8BFF",
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Mutual Growth
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#333",
                                lineHeight: 1.6,
                            }}
                        >
                            Together we achieve more. Our partnerships are built on shared success and continuous growth opportunities.
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                            width: { xs: 200, md: 200 },
                            height: {
                                xs: 280, md: 300, lg: 350
                            },
                            backgroundColor: "#E9F3FF",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            px: 3,
                            py: 4,
                            boxShadow: "0 8px 16px rgba(90, 196, 255, 0.3)",
                        }}
                    >
                        <Icon icon={'tabler:rocket'} style={{ color: "#3D8BFF", fontSize: "5rem" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#3D8BFF",
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Expanded Reach
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#333",
                                lineHeight: 1.6,
                            }}
                        >
                            Equipped with the right tools and resources, you'll bring your startup from concept to creation, ready to enter the market.
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                            width: { xs: 200, md: 200 },
                            height: {
                                xs: 280, md: 300, lg: 350
                            },
                            backgroundColor: "#E9F3FF",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            px: 3,
                            py: 4,
                            boxShadow: "0 8px 16px rgba(90, 196, 255, 0.3)",
                        }}
                    >
                        <Icon icon={'system-uicons:paper-plane'} style={{ color: "#3D8BFF", fontSize: "5rem" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#3D8BFF",
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Expanded Reach
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#333",
                                lineHeight: 1.6,
                            }}
                        >
                            Together we achieve more. Our partnerships are built on shared success and continuous growth opportunities.
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                            width: { xs: 200, md: 200 },
                            height: {
                                xs: 280, md: 300, lg: 350
                            },
                            backgroundColor: "#E9F3FF",
                            borderRadius: "16px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            px: 3,
                            py: 4,
                            boxShadow: "0 8px 16px rgba(90, 196, 255, 0.3)",
                        }}
                    >
                        <Icon icon={'circum:globe'} style={{ color: "#3D8BFF", fontSize: "5rem" }} />
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#3D8BFF",
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Community
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#333",
                                lineHeight: 1.6,
                            }}
                        >
                            Join a like-minded community of highly motivated ndividuals, fostering connections that propel your personal and professional growth.
                        </Typography>

                    </Box>
                </Box>
            </Box >
            <Box sx={{ width: "100%", py: 8, background: "linear-gradient(45deg, hsla(216, 48%, 89%, 1) 36%, hsla(216, 61%, 83%, 1) 80%, hsla(216, 97%, 65%, 1) 100%)", mt: 7, display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column", px: { xs: 4, sm: 6, md: 8 }, }}>

                <Typography variant="subtitle1" sx={{ color: "#4E5156", fontWeight: 600, letterSpacing: 2, display: "flex", alignItems: "center", gap: 2 }}><Icon icon={'streamline:star-2-solid'} style={{ color: "#3F8CFF", }} />Partners & Sponsors</Typography>
                <Typography variant="h2" sx={{ fontWeight: 600, color: "#4E5156" }} gutterBottom>Our program is backed by the best.</Typography>
                <Typography variant="h6" sx={{ color: "#4E5156" }}>We have a dynamic network of companies and schools that support our mission.</Typography>
                <Box sx={{ width: "100%", mt: 8 }}>
                    <Swiper modules={[Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            0: { slidesPerView: 1 },      // mobile
                            580: { slidesPerView: 2 },    // small screen
                            768: { slidesPerView: 4 },    // tablet
                            1200: { slidesPerView: 5 },   // large screen
                        }}
                        loop={true}
                        allowTouchMove={false}          // disables swiping
                        speed={3000}                    // makes slide transition slow and smooth
                        autoplay={{
                            delay: 0,                     // no delay between slides
                            disableOnInteraction: false,
                        }}
                        grabCursor={false}              // removes cursor change
                        slidesPerGroup={1}>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>
                <Box sx={{ width: "100%", mt: 2 }}>
                    <Swiper modules={[Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            0: { slidesPerView: 1 },      // mobile
                            580: { slidesPerView: 2 },    // small screen
                            768: { slidesPerView: 4 },    // tablet
                            1200: { slidesPerView: 5 },   // large screen
                        }}
                        loop={true}
                        allowTouchMove={false}          // disables swiping
                        speed={3000}                    // makes slide transition slow and smooth
                        autoplay={{
                            delay: 0,                     // no delay between slides
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        grabCursor={false}              // removes cursor change
                        slidesPerGroup={1}>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box sx={{ background: " linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)", display: "flex", alignItems: "center", justifyContent: "center", height: "130px", borderRadius: 4 }}>
                                <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>Company 1</Typography>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>
            </Box>
            <Box sx={{
                display: "flex", alignItems: "center", justifyContent: "center", mt: 10, width: "100%", py: 10, background: "#B8CEEE",
                flexDirection: "column"
            }}>
                <Typography variant="h2" sx={{ fontWeight: 600, textAlign: "center" }}>How to Become a<br /><span style={{ color: "white", backgroundColor: "#2C313F", borderRadius: 10, paddingLeft: "25px", paddingRight: "25px", paddingTop: "6px", paddingBottom: "6px" }}>Partner</span></Typography>
                <Typography variant="h6" sx={{ mt: 4, textAlign: "center", color: "#4E5156", fontWeight: 500, px: 1 }}>Our streamlined process ensures a smooth journey from initial contact to successful partnership.</Typography>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5, width: { md: "70%", sm: "80%", xs: "90%" }, gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                    <Box sx={{ backgroundColor: "#ADDCE3", p: 2, border: "1px solid #97bcf59d", borderRadius: 4, width: "300px", minHeight: "160px", maxHeight: "210px" }}>
                        <Typography variant="h6" gutterBottom>Initial Consultation</Typography>
                        <Typography variant="body2">We discuss your goals, capabilities, and how we can work together effectively.</Typography>
                    </Box>
                    <Box sx={{ background: "linear-gradient(270deg, hsla(239, 52%, 80%, 1) 28%, hsla(239, 78%, 79%, 1) 64%, hsla(239, 89%, 74%, 1) 100%)", p: 2, borderRadius: 4, width: "300px", minHeight: "160px", maxHeight: "210px" }}>
                        <Typography variant="h6" gutterBottom>Initial Consultation</Typography>
                        <Typography variant="body2">We discuss your goals, capabilities, and how we can work together effectively.</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "#CDB8FF", p: 2, borderRadius: 4, width: "300px", minHeight: "160px", maxHeight: "210px" }}>
                        <Typography variant="h6" gutterBottom>Initial Consultation</Typography>
                        <Typography variant="body2">We discuss your goals, capabilities, and how we can work together effectively.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", backgroundColor: "white", py: 10, flexDirection: { xs: "column", md: "row" } }}>
                <Box width={"50%"} height={"100%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>

                    <Typography variant="h2" sx={{ fontWeight: 600, mb: 4, textAlign: "center", width: "60%" }}>
                        <span style={{ color: "white", backgroundColor: "#2C313F", padding: "8px", borderRadius: "15px" }}>Goals</span>
                        of Our Wholesale Company
                    </Typography>
                    <Typography sx={{ textAlign: "center", width: { sx: "80%", md: "60%" } }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos accusamus quo beatae ab dolore animi neque perferendis possimus numquam tempora suscipit, in sint qui ea sapiente doloremque, nemo amet! lore
                    </Typography>

                </Box>
                <Box width={"50%"} height={"100%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 3 }}>
                    <Box sx={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        p: 3,
                        pl: 5,
                        maxWidth: 500,
                        position: "relative",
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: 50,
                                left: -30,
                                color: "white",
                                backgroundColor: "#3F8CFF"
                            }}
                        >
                            <Icon icon="healthicons:man-outline" style={{ fontSize: 40 }} />
                        </Avatar>
                    </Box>
                    <Box sx={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        p: 3,
                        maxWidth: 500,
                        pl: 5,
                        position: "relative"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: 50,
                                left: -30,
                                color: "white",
                                backgroundColor: "#3F8CFF"
                            }}
                        >
                            <Icon icon="healthicons:man-outline" style={{ fontSize: 40 }} />
                        </Avatar>
                    </Box>
                    <Box sx={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: "20px",
                        p: 3,
                        maxWidth: 500,
                        pl: 5,
                        position: "relative"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: 50,
                                left: -30,
                                color: "white",
                                backgroundColor: "#3F8CFF"
                            }}
                        >
                            <Icon icon="healthicons:man-outline" style={{ fontSize: 40 }} />
                        </Avatar>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ backgroundColor: "#F4F9FD", width: "100%", height: "60vh", p: 12 }}>
                <Typography variant="subtitle1" sx={{ color: "#4E5156", fontWeight: 600, letterSpacing: 2, display: "flex", alignItems: "center", gap: 2 }}><Icon icon={'streamline:star-2-solid'} style={{ color: "#3F8CFF", }} />Partners & Sponsors</Typography>
                <Typography variant="h2" sx={{ color: "#3F8CFF", fontWeight: 600 }} gutterBottom>Have Questions About Partnership?</Typography>
                <Typography variant="h5" sx={{ color: "#4E5156", fontWeight: 500 }}>Our partnership team is here to help you understand how we can work together.</Typography>
                <Box sx={{ backgroundColor: "rgba(255, 255, 255,0.3)", boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)", borderRadius: 10, p: 3, mt: 4, backdropFilter: "blur(10px)", }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", justifyContent: "space-between", gap: 2 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                borderRadius: "12px",
                                p: 2.5,
                                maxWidth: "45%",
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "#E8F1FF",
                                    color: "#2E77FF",
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                }}
                            >
                                <Icon icon={"mdi:location"} />
                            </Avatar>

                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#9AA0A6", fontWeight: 400, mb: 0.5 }}
                                >
                                    Address
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600, color: "#000", lineHeight: 1.2 }}
                                >
                                    Mahendra Tower
                                </Typography>

                                <Typography variant="body2" sx={{ color: "#4E5156", lineHeight: 1.4 }}>
                                    43A, Tollygunge Circular Road
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#4E5156", lineHeight: 1.4 }}>
                                    Suit No. 3B, 3rd Floor, Kolkata - 53
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                borderRadius: "12px",
                                p: 2.5,
                                maxWidth: "45%",
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "#E8F1FF",
                                    color: "#2E77FF",
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                }}
                            >
                                <Icon icon={"material-symbols:call"} />
                            </Avatar>

                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#9AA0A6", fontWeight: 400, mb: 0.5 }}
                                >
                                    Contact Phone
                                </Typography>

                                <Typography variant="body2" sx={{ color: "#4E5156", lineHeight: 1.4 }}>
                                    +91 9025783351
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#4E5156", lineHeight: 1.4 }}>
                                    +91 9025783351
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                borderRadius: "12px",
                                p: 2.5,
                                maxWidth: "45%",
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "#E8F1FF",
                                    color: "#2E77FF",
                                    width: 42,
                                    height: 42,
                                    mr: 2,
                                }}
                            >
                                <Icon icon={"ic:outline-email"} />
                            </Avatar>

                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#9AA0A6", fontWeight: 400, mb: 0.5 }}
                                >
                                    Email
                                </Typography>

                                <Typography variant="body2" sx={{ color: "#4E5156", lineHeight: 1.4 }}>
                                    bw@gmail.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
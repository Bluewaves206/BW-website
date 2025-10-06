import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import heroImg1 from "../assets/aboutHeroImg1.png";
import heroImg2 from "../assets/aboutHeroImg2.png";
import team from "../assets/TeamMem.png";
import WhoImg from "../assets/whoImg.png"
import FooterImg from '../assets/footerTopimage.png';
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

export default function About() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (!video) return; // safeguard

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };
    return (
        <>
            <Box sx={{ pt: "8rem" }}>
                <Box sx={{ px: 10, width: "100%" }}>
                    <div className="parent">
                        <div className="div1">
                            <Box component={"img"} src={heroImg1} alt="heroImg1" sx={{ width: "100%" }} />
                        </div>
                        <div className="div2">
                            <Box component={"img"} src={heroImg2} alt="heroImg1" sx={{ width: "100%" }} />
                        </div>
                        <div className="div3">
                            <Box sx={{ width: "100%", backgroundColor: "black", color: "white", borderRadius: "35px", textAlign: "center", py: 4 }}>
                                <Typography variant="h2" sx={{ fontFamily: "Sarpanch" }}>+10 YEARS</Typography>
                                <Typography variant="h6" fontFamily={"Lato"}>Experience</Typography>
                            </Box></div>
                        <div className="div4">
                            <Box sx={{ p: 2 }}>
                                <Typography variant="h5" sx={{ color: "#3F8CFF", marginBottom: "1rem" }} fontFamily={"Evanston Tavern 1846"}>ABOUT US</Typography>
                                <Typography variant="h2" sx={{ fontWeight: 600, fontFamily: "Outfit" }} gutterBottom>What is<br />Bluewaveasmedia for ?</Typography>
                                <Typography variant="h6" sx={{ color: "#555555", fontFamily: "Lato" }}>“Bluewaves Media is a dynamic digital solutions company that thrives on creativity and innovation. We specialize in crafting engaging websites, intuitive user experiences, and result-driven digital campaigns that help businesses stand out in the competitive online landscape. Our team is passionate about turning ideas into reality, combining cutting-edge technology with strategic design to create meaningful connections between brands and their audiences. At Bluewaves Media, we don’t just deliver services—we create experiences that inspire, engage, and drive growth for our clients.”</Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    disableElevation
                                    sx={{
                                        bgcolor: "#3F8CFF",
                                        marginTop: "7rem",
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
                        </div>
                    </div>
                </Box>

                <Box sx={{ px: 10, width: "100%", textAlign: "center", my: 20 }}>
                    <Typography variant="h2" gutterBottom sx={{ fontFamily: "Inter", fontWeight: 600, wordSpacing: 10 }}>THE BULK <span style={{ color: "#fff", backgroundColor: "#161B20", padding: "7px", borderRadius: "15px" }}>SERVICES</span> WE<br /> PROVIDE FOR YOU</Typography>
                    <Typography variant="body2" sx={{ width: "60%", margin: "auto", color: "#666666", fontFamily: "Outfit" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt iusto, adipisci exercitationem ducimus aspernatur mollitia voluptatum facilis a maiores id nemo? Doloribus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                        bus alias pariatur esse rerum corporis quasi dolorum!
                    </Typography>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", gap: 4, mt: 10 }}>
                        <Box sx={{ color: "white", backgroundColor: "#3F8CFF", p: 3, borderRadius: "30px" }}>
                            <Typography variant="h5" gutterBottom>Freshness Guaranteed</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ex doloremque, tempore aspernatur molestiae eum perspiciatis. Harum, dolores obcaecati, consequuntur commodi, consectetur aliquam quasi minus ipsa quod deleniti voluptatem.</Typography>
                        </Box>
                        <Box sx={{ color: "#161B20", backgroundColor: "#fff", p: 3, borderRadius: "30px" }}>
                            <Typography variant="h5" gutterBottom>Freshness Guaranteed</Typography>
                            <Typography variant="body2" color="#666666">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ex doloremque, tempore aspernatur molestiae eum perspiciatis. Harum, dolores obcaecati, consequuntur commodi, consectetur aliquam quasi minus ipsa quod deleniti voluptatem.</Typography>
                        </Box>
                        <Box sx={{ color: "white", backgroundColor: "#3F8CFF", p: 3, borderRadius: "30px" }}>
                            <Typography variant="h5" gutterBottom>Freshness Guaranteed</Typography>
                            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ex doloremque, tempore aspernatur molestiae eum perspiciatis. Harum, dolores obcaecati, consequuntur commodi, consectetur aliquam quasi minus ipsa quod deleniti voluptatem.</Typography>
                        </Box>
                        <Box sx={{ color: "#161B20", backgroundColor: "#fff", p: 3, borderRadius: "30px" }}>
                            <Typography variant="h5" gutterBottom>Freshness Guaranteed</Typography>
                            <Typography variant="body2" color="#666666">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ex doloremque, tempore aspernatur molestiae eum perspiciatis. Harum, dolores obcaecati, consequuntur commodi, consectetur aliquam quasi minus ipsa quod deleniti voluptatem.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "100%", my: 20, backgroundColor: "#fff", px: 10, py: 4 }}>
                    <Box sx={{ display: "flex", width: "8rem", alignItems: "center", gap: 1, fontSize: "2rem", backgroundColor: "#EFEBFE", color: "#3F8CFF", p: 1, borderRadius: "12px", mb: 3 }}>
                        <Icon icon="fluent:people-team-20-regular" />
                        <Typography style={{ display: "inline-block" }}>Our Team</Typography>
                    </Box>
                    <Typography variant="h4" fontWeight={600} gutterBottom>Meet our team members</Typography>
                    <Typography variant="body2">Complete the form below to send us a message. Our support team will promptly respond to your request.</Typography>
                    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                        <Button
                            endIcon={<Icon icon={"basil:arrow-right-outline"} style={{ fontSize: "2rem" }} />}
                            sx={{
                                color: "black",
                                textTransform: "none", // <-- add this
                                backgroundColor: "#F8F8F8",
                                borderRadius: "20px",
                            }}
                            size="large"
                        >
                            Apply Now
                        </Button>
                        <Button variant="contained" sx={{ backgroundColor: "#3F8CFF", textTransform: "none", borderRadius: "20px" }} size="large">Contact Us</Button>
                    </Box>
                    <Box sx={{ display: "flex", gap: 2, mt: 2, alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: "190px",
                            backgroundImage: `url(${team})`,
                            backgroundSize: "cover", height: "490px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white"
                        }}>
                            <Box sx={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 2, alignItems: "center", borderRadius: "15px" }}>
                                <Typography fontWeight={600}>Ashish Kalankoria</Typography>
                                <Typography>CEO</Typography>
                                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                                    <Icon icon={"mdi:facebook"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"fa6-brands:x-twitter"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                    <Icon icon={"mdi:linkedin"} width="20" height="20" color="#fff" style={{ cursor: "pointer" }} />
                                </Box>
                            </Box>
                        </Box>

                    </Box>

                </Box>
                <Box sx={{ backgroundColor: "#BCD7FF", display: "flex", justifyContent: "space-around", alignItems: "center", px: 6, py: 3 }}>
                    <Typography variant="h2" sx={{ letterSpacing: 5 }}>Our<br /><span style={{ color: "#fff", backgroundColor: "black", padding: 8, borderRadius: "15px" }}>Features</span></Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#3F8CFF", width: 300, height: 330, borderRadius: "30px", gap: 3 }}>
                        <Box sx={{ cursor: "pointer", color: "#3F8CFF", backgroundColor: "white", borderRadius: "15px", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                            <Icon icon="material-symbols-light:support-agent-sharp" />
                        </Box>
                        <Typography sx={{ color: "white", textAlign: "center" }}>24/7<br />customer support</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#3F8CFF", width: 300, height: 330, borderRadius: "30px", gap: 3 }}>
                        <Box sx={{ cursor: "pointer", color: "#3F8CFF", backgroundColor: "white", borderRadius: "15px", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                            <Icon icon="mdi:register" />
                        </Box>
                        <Typography sx={{ color: "white", textAlign: "center" }}>DLT<br />Registration</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#3F8CFF", width: 300, height: 330, borderRadius: "30px", gap: 3 }}>
                        <Box sx={{ cursor: "pointer", color: "#3F8CFF", backgroundColor: "white", borderRadius: "15px", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                            <Icon icon="ic:baseline-whatsapp" />
                        </Box>
                        <Typography sx={{ color: "white", textAlign: "center" }}>Whatsapp<br />On Boarding</Typography>
                    </Box>
                </Box>
                <Box sx={{ px: 20, width: "100%", mt: 8 }}>
                    <Typography>BLUE WAVES MEDIA</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography variant="h3" sx={{ display: "inline-block" }}>Book a Product Demo</Typography>
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

                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                        <video
                            ref={videoRef}
                            width="100%"
                            poster="src\assets\DemoVid.png" // Replace with your preview image
                            onClick={handlePlayPause}
                            onEnded={() => setIsPlaying(false)}
                            style={{
                                borderRadius: "12px",
                                cursor: "pointer",
                                display: "block",
                                marginTop: "3rem",
                            }}
                        >
                            <source src="/your-video.mp4" type="video/mp4" /> {/* Replace with your video file */}
                            Your browser does not support the video tag.
                        </video>

                        {!isPlaying && (
                            <Icon
                                icon="mdi:play-circle" style={{ fontSize: 80, color: "white", position: "absolute" }} />
                        )}
                    </Box>

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
                    <Box sx={{ width: "52%" }}>
                        <Typography variant="h2" sx={{ fontWeight: 600 }}>About <span style={{ color: "#3F8CFF" }}>Blue Waves Media</span></Typography>
                        <Typography variant="h6" sx={{ color: "#64748B", lineHeight: 1.4, my: 3 }}>We're more than a digital agency – we're your strategic partners<br /> in creating meaningful digital experiences that drive growth and <br />build lasting connections with your audience.</Typography>
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
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position: "relative" }}>
                    <Paper
                        elevation={1}
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',    // very transparent
                            backdropFilter: "blur(15px)",
                            p: 4,
                            mt: 5,
                            width: "40%",
                            position: "relative",
                            top: 200,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 4,
                                fontFamily: "Outfit, sans-serif",
                            }}
                        >
                            Please Contact us today!
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
                            {/* Contact Number */}
                            <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
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

                            {/* Email Address */}
                            <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
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

                            {/* Date of Appointment */}
                            <Box sx={{ flex: "1 1 250px", minWidth: "100%" }}>
                                <TextField
                                    fullWidth
                                    type="text"
                                    variant="outlined"
                                    size="medium"
                                    placeholder="Question?"
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
                                            width: 30,
                                            height: 30,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            
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
                                Send
                            </Button>
                        </Box>
                    </Paper>
                    <Box component={"img"} src={FooterImg} width={"100%"} />
                </Box>
            </Box>


        </>
    );
}
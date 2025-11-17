import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import HomeImg from '../assets/homePageTop.mp4';
import LineImg from "../assets/lineImg.png"
import states from "../assets/homeStates image.png";
import WhoImg from "../assets/whoImg.png"
import homeArticle from "../assets/HomeArticleImg.png";
import "swiper/swiper-bundle.css";


import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <>

            <Box
                component="video"
                src={HomeImg}
                autoPlay
                loop
                muted
                playsInline
                sx={{
                    width: "100%",
                    height: "800px",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                }}
            />
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "center", flexDirection: "column", pt: { xs: 2, sm: 4, md: 5, lg: 7 }, px: 11, position: "relative" }}>
                <Box sx={{ width: "60%" }}>
                    <Typography variant="h1" sx={{ wordSpacing: 8, color: "white", fontWeight: 700 }} gutterBottom><span style={{ backgroundColor: "#F4F9FD", color: "#3F8CFF", padding: 13, borderRadius: 10 }}>The Future of</span> communication. The Force <span style={{ backgroundColor: "#F4F9FD", color: "#4E5156", padding: 7, borderRadius: 10 }}>Behind Growth</span></Typography>
                    <Typography variant="h6" sx={{ color: "#fff", lineHeight: 1.4, }}>“We enhances businesses' ability to boost customer engagement through the
                        integration of personalized and interactive elements into their videos.”</Typography>
                    <Button
                        variant="contained"
                        size="medium"
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
                            mt: 3
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


                <Paper
                    elevation={1}
                    sx={{
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.6)",
                        p: 4,
                        mt: 5,
                        width: "70%",
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
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", my: 5, px: 10 }}>
                <Typography variant="h3" sx={{ fontWeight: 600 }} gutterBottom>Our Services</Typography>
                <Typography variant="subtitle2" sx={{ width: { md: "30%", sm: "60%", xs: "70%" }, textAlign: "center" }}>You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!</Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { md: "repeat(4, 1fr)", sm: "repeat(2, 0.5fr)", xs: "repeat(1, 1fr)" },
                        direction: "ltr", // makes grid flow from right to left
                        columnGap: "5px", // reduce horizontal space between columns
                        rowGap: "20px",   // increase vertical space between rows
                        width: "100%",
                        mt: 5
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"material-symbols-light:sms"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            SMS
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            Promotional SMS now facilitates deeper engagement through interactive features like personalized offers,
                            surveys, and event registrations for direct response marketing.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"mingcute:whatsapp-fill"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            Whatsapp
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            WhatsApp green tick verification is a process that elevates a business account to an 'official
                            business account' status, marked by a green tick.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"fluent-mdl2:b-i-dashboard"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            CRM
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            CRM system can be a game-changer for your business — especially for a service provider where client relationships, campaigns, and communication tracking are key.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"streamline-ultimate:coding-apps-website-web-form-text-area-1"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            Web Development
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            Bluewaves Media is a trailblazer in delivering groundbreaking IT solutions that enable businesses
                            to flourish in the digital era. Our team of visionaries specializes in crafting cutting-edge
                            digital products
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"mingcute:mail-fill"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            Bulk Email
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            Bulk email is a cost-effective marketing tool used to reach a wide audience with customized
                            messages for specific demographics or customer segments.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 3,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                background: 'linear-gradient(135deg, #3BAFDA, #007FFF)',
                                width: 48,
                                height: 48,
                                color: "whitesmoke",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3
                            }}
                        >
                            <Icon icon={"iconoir:voice"} height={"50%"} />
                        </Box>

                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: '#333', mt: 1 }}
                        >
                            Voice Message
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: 'text.secondary', lineHeight: 1.6 }}
                        >
                            Our Voice Call service maximizes ROI with ease. Simply send us a recorded voice
                            message, and we'll do the rest. Our service reaches millions quickly and cost-effectively.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 1,
                            p: 2.5,
                            width: "100%",
                            borderRadius: 5,
                            backgroundColor: "#ADDCE3",
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0px 4px 16px rgba(0,0,0,0.12)',
                            },
                        }}
                    >


                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 600, color: '#000', mt: 1 }}
                        >
                            Need Custome Support?
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', lineHeight: 1.6, mt: 2, textAlign: "center" }}
                        >
                            We’ll tailor our services to your business goals.
                        </Typography>
                        <Button size="large" sx={{ backgroundColor: "white", color: "#3F8CFF", fontSize: "1.5rem", px: 2, borderRadius: 10 }}>Call Us Now</Button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: "#d4dff0", py: 6, position: "relative", display: "flex", flexDirection: "column", gap: 15, alignItems: "center" }}>
                <Box component={'img'} src={LineImg} alt="lineImg" sx={{ backgroundSize: "cover", width: "100%", position: "absolute", top: "15%" }} />
                <Box
                    sx={{
                        position: "relative",
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
                <Box
                    sx={{
                        backgroundImage: `url(${states})`,
                        backgroundSize: 'cover',        // makes the image cover the entire box
                        backgroundRepeat: 'no-repeat',  // prevents tiling
                        backgroundPosition: 'center',   // centers the image
                        width: '80%',                  // full width
                        height: '500px',                // set desired height
                        borderRadius: 5,                // rounded corners
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ backgroundColor: "#4E5156", py: 5, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        <Box width={"25%"} sx={{ borderRight: "1px solid white", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">13<span style={{ color: "#3F8CFF" }}>+</span></Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>Years of  Experience</Typography>
                        </Box>
                        <Box width={"25%"} sx={{ borderRight: "1px solid white", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">2010</Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>Funded</Typography>
                        </Box>
                        <Box width={"25%"} sx={{ borderRight: "1px solid white", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">7K<span style={{ color: "#3F8CFF" }}>+</span></Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>Satisfied Clients</Typography>
                        </Box>
                        <Box width={"25%"} sx={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 1 }}>
                            <Typography variant="h3">12<span style={{ color: "#3F8CFF" }}>+</span></Typography>
                            <Typography variant="body2" sx={{ color: "white" }}>Team Members</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <Typography gutterBottom variant="h2" sx={{ textAlign: "center", width: "60%", fontWeight: 700 }}><span style={{ color: "#3F8CFF" }}>New Articles</span> and Knowledge</Typography>
                    <Typography variant="subtitle2" sx={{ width: "70%", textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut ipsam veniam alias quis exercitationem, possimus vel expedita repellat eum in rerum quia modi tempora dolor? Vero tempora deleniti laborum.</Typography>
                    <Box sx={{ mt: 6, display: "flex", alignItems: "center", justifyContent: "space-between", px: 10, gap: 10 }}>
                        <Box sx={{ width: "350px" }}>
                            <Box component={"img"} src={homeArticle} alt="homeArticle" sx={{ width: "100%" }} />
                            <Typography variant="subtitle1" sx={{ color: "#545971", fontWeight: 600 }}>19 Jan 2023</Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%' // adjust as needed
                                }}
                            >
                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    maxWidth: '100%',
                                    color: "#545971",
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: "1.4rem",   // FIX
                                    maxHeight: "2.8rem"     // 2 × line-height (prevents card stretching)
                                }}
                            >

                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ad debitis commodi provident necessitatibus fugiat voluptate omnis nostrum perspiciatis, veritatis, illum ipsa magnam. Sed aliquam hic quidem, libero odio sint?
                            </Typography>
                        </Box>
                        <Box sx={{ width: "350px" }}>
                            <Box component={"img"} src={homeArticle} alt="homeArticle" sx={{ width: "100%" }} />
                            <Typography variant="subtitle1" sx={{ color: "#545971", fontWeight: 600 }}>19 Jan 2023</Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%' // adjust as needed
                                }}
                            >
                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    maxWidth: '100%',
                                    color: "#545971",
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: "1.4rem",   // FIX
                                    maxHeight: "2.8rem"     // 2 × line-height (prevents card stretching)
                                }}
                            >

                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ad debitis commodi provident necessitatibus fugiat voluptate omnis nostrum perspiciatis, veritatis, illum ipsa magnam. Sed aliquam hic quidem, libero odio sint?
                            </Typography>
                        </Box>
                        <Box sx={{ width: "350px" }}>
                            <Box component={"img"} src={homeArticle} alt="homeArticle" sx={{ width: "100%" }} />
                            <Typography variant="subtitle1" sx={{ color: "#545971", fontWeight: 600 }}>19 Jan 2023</Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '100%' // adjust as needed
                                }}
                            >
                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    maxWidth: '100%',
                                    color: "#545971",
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    lineHeight: "1.4rem",   // FIX
                                    maxHeight: "2.8rem"     // 2 × line-height (prevents card stretching)
                                }}
                            >

                                lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ad debitis commodi provident necessitatibus fugiat voluptate omnis nostrum perspiciatis, veritatis, illum ipsa magnam. Sed aliquam hic quidem, libero odio sint?
                            </Typography>
                        </Box>

                    </Box>
                    <Button variant="text" size="large" sx={{ color: "#15B2F5", mt: 10 }} endIcon={<Icon icon="ri:arrow-right-s-line" />}>View More</Button>
                </Box>
            </Box>

            <Box sx={{ mt: 10, display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
                <Box width={"40%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography variant="h2" sx={{ textAlign: "center", mb: 10 }}>Hear from Our Happy Clients</Typography>
                </Box>
                <Box width={"70%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 3 }}>
                    <Button
                        sx={{
                            backgroundColor: "#E3E6F0",
                            height: 65,
                            width: 40,          // same as height → circle
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            "&:hover": {
                                backgroundColor: "#15B2F5"
                            }
                        }}
                    >
                        <Icon
                            icon="mynaui:arrow-left"
                            style={{ width: "20px", height: "20px", color: "#FFFFFF" }}
                        />
                    </Button>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
                        <Typography variant="h6" sx={{ textAlign: "center" }}>“Bluewaves Media transformed our customer engagement strategy completely. Their RCS and SMS automation boosted our campaign conversions by over 40%.”</Typography>
                        <Typography variant="h6" sx={{ textAlign: "center", color: "#000", fontWeight: 600 }}>John Doe</Typography>
                        <Typography variant="overline" sx={{ textAlign: "center", color: "#000" }}>CEO, Blue Waves Media</Typography>
                    </Box>
                    <Button
                        sx={{
                            backgroundColor: "#E3E6F0",
                            height: 65,
                            width: 40,          // same as height → circle
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            "&:hover": {
                                backgroundColor: "#15B2F5"
                            }
                        }}
                    >
                        <Icon
                            icon="mynaui:arrow-right"
                            style={{ width: "20px", height: "20px", color: "#FFFFFF" }}
                        />
                    </Button>

                </Box>

            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />



        </>
    );
}
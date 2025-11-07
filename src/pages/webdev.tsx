import heroBg from "../assets/webdevHeroBg.png";
import customeWebImg from "../assets/customeWebImg1.png";
import customeWebImg2 from "../assets/customeWebImg2.png";
import customeWebImg3 from "../assets/customeWebImg3.png";
import clientGif from "../assets/clientOpinon.gif";
import howItWorks from "../assets/webdevhowitworks.png";
import webImg from "../assets/webprojects.png";
import { Icon } from "@iconify/react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function WebDev() {
    return (
        <>
            <Box
                component={'img'}
                src={heroBg}
                alt=""
                sx={{
                    width: "100%",
                    height: "800px",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "relative" }}>
                <Box sx={{ color: "#002B6B", backgroundColor: "white", px: 2, py: 1, borderRadius: 5, display: "flex", alignItems: "center", gap: 1, position: "relative", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)" }}>
                    <Icon icon={"uil:bag"} style={{ width: 18, height: 18 }} /><Typography variant="body1">Your #1 Web Service</Typography>
                </Box>
                <Typography variant="h1" sx={{ textAlign: "center", color: "#4E5156", position: "relative", zIndex: 1, width: "70%", mt: 5, fontWeight: 600 }}>Transform Your Online Presence with Cutting-Edge  </Typography>
                <Typography variant="h1" sx={{ mt: 0, textAlign: "center", color: "#3F8CFF", position: "relative", zIndex: 1, width: "60%", fontWeight: 600 }} >Web Solutions</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", color: "#4E5156", position: "relative", zIndex: 1, fontWeight: 600, mt: 2 }}>We design and develop websites that deliver real results.</Typography>
                <Button
                    sx={{
                        mt: { xs: 3, md: 2 },
                        backgroundColor: "#2C313F",
                        color: "white",
                        px: 2,
                        py: 1,
                        fontSize: { xs: "1rem", md: "1.5rem" },
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
                    Get Started
                </Button>
            </Box>
            <Box sx={{ position: "relative", px: 10, mt: { xs: 5, md: 10, lg: 20 } }}>
                <Typography variant="h1" width={"80%"} sx={{ fontWeight: 500 }}>Custom <span style={{ color: "#8F9096" }}>Websites</span> & <span style={{ color: "#8F9096" }}>Digital Solutions </span></Typography>
                <Typography variant="h6" sx={{ color: "#404040", fontWeight: 600 }}>From interactive websites to scalable applications, we build solutions that elevate your business online.</Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "stretch",
                        gap: 2,
                        mt: 6,
                        height: "500px"
                    }}
                >
                    {/* Left Large Image */}
                    <Box
                        sx={{
                            flex: "1 1 60%",
                            borderRadius: "12px",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={customeWebImg}
                            alt="Main"
                            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </Box>

                    {/* Right Two Smaller Images */}
                    <Box
                        sx={{
                            flex: "1 1 50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="img"
                                src={customeWebImg3}
                                alt="Top Right"
                                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                borderRadius: "12px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="img"
                                src={customeWebImg2}
                                alt="Bottom Right"
                                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{ mt: 10, backgroundColor: "white", py: 12, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 2, width: "80%" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3">22K<span style={{ color: "#3F8CFF" }}>+</span></Typography>
                        <Typography variant="body2">A modest number to start off<br />the metrics section.</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3">64M<span style={{ color: "#3F8CFF" }}>+</span></Typography>
                        <Typography variant="body2">A modest number to start off<br />the metrics section.</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h3">94<span style={{ color: "#3F8CFF" }}>%</span></Typography>
                        <Typography variant="body2">A modest number to start off<br />the metrics section.</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10, py: 8, backgroundColor: "white", px: 25 }}>
                <Typography variant="h2" gutterBottom>What our clients say</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 7 }}>
                    <Box width={"50%"} sx={{ p: 4, backgroundColor: "#1E242C", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

                        <Typography variant="body1" sx={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ marginRight: "10px" }}>Sarah Johns</span><Box sx={{ backgroundColor: "white", p: "3px", borderRadius: "50%" }}></Box><span style={{ marginLeft: "10px", color: "#AAB1BA" }}>Client</span></Typography>
                        <Typography variant="h4" sx={{ textAlign: "center", color: "white" }}>“Working with Blue Waves Media has been a seamless and refreshing experience—professional, creative, and truly collaborative.”</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, mt: 1 }}>
                            <Button variant="contained" sx={{ color: "#0066FF", backgroundColor: "white", borderColor: "white", borderRadius: "50%", height: "65px", width: "50px", fontSize: "1rem" }}><Icon icon="si:arrow-left-duotone" width={"30px"} height={"30px"} /></Button>
                            <Button variant="contained" sx={{ color: "white", borderColor: "white", borderRadius: "50%", height: "65px", width: "50px", fontSize: "1rem" }}><Icon icon="si:arrow-right-duotone" width={"30px"} height={"30px"} /></Button>
                        </Box>

                    </Box>
                    <Box width={"50%"} component={"img"} src={clientGif} sx={{ borderRadius: 5 }} />
                </Box>
            </Box>
            <Box sx={{ py: 10, display: "flex", justifyContent: "center", alignItems: "center", px: 20 }}>
                <Box sx={{ p: 10, width: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2 }}>
                    <Typography variant="h3">How it Works</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography variant="h2" sx={{ color: "#859cc2" }}>01</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "15px", p: 2 }}>
                            <Box sx={{ backgroundColor: "#E1E9FE", p: 1, borderRadius: "50%", width: 50, height: 45, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon icon="tabler:arrow-bar-to-left" width={"20px"} height={"20px"} style={{ color: "#0066FF" }} /></Box>
                            <Box>
                                <Typography variant="h6">Share Your Vision</Typography>
                                <Typography variant="body2">Tell us about your business goals, brand style, and design preferences.</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "15px", p: 2 }}>
                            <Box sx={{ backgroundColor: "#FFEED2", p: 1, borderRadius: "50%", width: 50, height: 45, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon icon="material-symbols:upload-rounded" width={"20px"} height={"20px"} style={{ color: "#FF9900" }} /></Box>
                            <Box>
                                <Typography variant="h6">Design & Develop</Typography>
                                <Typography variant="body2">We create responsive, high-speed pages that reflect your brand perfectly.</Typography>
                            </Box>
                        </Box>
                        <Typography variant="h2" sx={{ color: "#859cc2" }}>02</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography variant="h2" sx={{ color: "#859cc2" }}>03</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "15px", p: 2 }}>
                            <Box sx={{ backgroundColor: "#F6E2FF", p: 1, borderRadius: "50%", width: 50, height: 45, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon icon="streamline:discount-percent-coupon" width={"20px"} height={"20px"} style={{ color: "#AA16EF" }} /></Box>
                            <Box>
                                <Typography variant="h6">Launch & Grow</Typography>
                                <Typography variant="body2">Go live in record time and watch your online presence thrive.</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box component={"img"} src={howItWorks} width={"50%"} />
            </Box>
            <Box sx={{ py: 8, px: 15, backgroundColor: "white", mb: 5 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ color: "#3F8CFF" }}>Our Most Popular one</Typography>
                        <Typography variant="h3">Website</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#363D4F", width: "40%" }}>We build stunning, high-performing websites — from corporate portfolios to dynamic eCommerce stores.</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Card sx={{ width: "20%" }} elevation={0}>
                        <CardMedia>
                            <Box component={"img"} src={webImg} width={"100%"} />
                        </CardMedia>
                        <CardContent sx={{ px: 0 }}>
                            <Typography variant="h5">Custom Website</Typography>
                            <Typography variant="caption" sx={{ color: "#363D4F" }}>
                                Dive into the realm of limitless creativity as we
                                explore the techniques and inspirations behind
                                crafting visually stunning and timeless designs that
                                captivate hearts and minds.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" sx={{ borderRadius: 5, color: "#060B13", borderColor: "#060B13" }} endIcon={<Icon icon={"ix:arrow-down-right"} />}>Link</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "20%" }} elevation={0}>
                        <CardMedia>
                            <Box component={"img"} src={webImg} width={"100%"} />
                        </CardMedia>
                        <CardContent sx={{ px: 0 }}>
                            <Typography variant="h5">Custom Website</Typography>
                            <Typography variant="caption" sx={{ color: "#363D4F" }}>
                                Dive into the realm of limitless creativity as we
                                explore the techniques and inspirations behind
                                crafting visually stunning and timeless designs that
                                captivate hearts and minds.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" sx={{ borderRadius: 5, color: "#060B13", borderColor: "#060B13" }} endIcon={<Icon icon={"ix:arrow-down-right"} />}>Link</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "20%" }} elevation={0}>
                        <CardMedia>
                            <Box component={"img"} src={webImg} width={"100%"} />
                        </CardMedia>
                        <CardContent sx={{ px: 0 }}>
                            <Typography variant="h5">Custom Website</Typography>
                            <Typography variant="caption" sx={{ color: "#363D4F" }}>
                                Dive into the realm of limitless creativity as we
                                explore the techniques and inspirations behind
                                crafting visually stunning and timeless designs that
                                captivate hearts and minds.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" sx={{ borderRadius: 5, color: "#060B13", borderColor: "#060B13" }} endIcon={<Icon icon={"ix:arrow-down-right"} />}>Link</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ width: "20%" }} elevation={0}>
                        <CardMedia>
                            <Box component={"img"} src={webImg} width={"100%"} />
                        </CardMedia>
                        <CardContent sx={{ px: 0 }}>
                            <Typography variant="h5">Custom Website</Typography>
                            <Typography variant="caption" sx={{ color: "#363D4F" }}>
                                Dive into the realm of limitless creativity as we
                                explore the techniques and inspirations behind
                                crafting visually stunning and timeless designs that
                                captivate hearts and minds.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" sx={{ borderRadius: 5, color: "#060B13", borderColor: "#060B13" }} endIcon={<Icon icon={"ix:arrow-down-right"} />}>Link</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Box>
        </>
    );
}
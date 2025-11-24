import { Avatar, Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/bullkmailhero.png"
import emailArticle from "../assets/emailArticles.png";
import { Icon } from "@iconify/react";
import footerImg from "../assets/smsLastImg.png";

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
            <Box sx={{ pt: 10, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 600, textAlign: "center" }}>Everything You Need for Email Success</Typography>
                <Typography variant="subtitle1" sx={{ color: "#4E5156" }}>Tools to create, send and track your email campaigns</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: 3, mt: 5, flexWrap: "wrap", px: 10 }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "20%",
                            height: "fit-content",
                            borderRadius: 10,
                            overflow: "hidden",
                            border: "1px solid transparent",
                            transition: "all 0.3s ease-in-out",
                            p: 1,
                            cursor: "pointer",
                            "&:hover": {
                                border: "1px solid #3F8CFF"
                            }
                        }}>
                        <Box component={"img"} src={emailArticle} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                        <Box sx={{ px: 2, mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>

                            <Typography variant="body2" sx={{ textAlign: "center", color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            width: "20%",
                            height: "fit-content",
                            borderRadius: 10,
                            overflow: "hidden",
                            border: "1px solid transparent",
                            transition: "all 0.3s ease-in-out",
                            p: 1,
                            cursor: "pointer",
                            "&:hover": {
                                border: "1px solid #3F8CFF"
                            }
                        }}>
                        <Box component={"img"} src={emailArticle} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                        <Box sx={{ px: 2, mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>

                            <Typography variant="body2" sx={{ textAlign: "center", color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            width: "20%",
                            height: "fit-content",
                            borderRadius: 10,
                            overflow: "hidden",
                            border: "1px solid transparent",
                            transition: "all 0.3s ease-in-out",
                            p: 1,
                            cursor: "pointer",
                            "&:hover": {
                                border: "1px solid #3F8CFF"
                            }
                        }}>
                        <Box component={"img"} src={emailArticle} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                        <Box sx={{ px: 2, mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>

                            <Typography variant="body2" sx={{ textAlign: "center", color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            width: "20%",
                            height: "fit-content",
                            borderRadius: 10,
                            overflow: "hidden",
                            border: "1px solid transparent",
                            transition: "all 0.3s ease-in-out",
                            p: 1,
                            cursor: "pointer",
                            "&:hover": {
                                border: "1px solid #3F8CFF"
                            }
                        }}>
                        <Box component={"img"} src={emailArticle} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                        <Box sx={{ px: 2, mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>

                            <Typography variant="body2" sx={{ textAlign: "center", color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: 10, backgroundColor: "#DFF2FF", py: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="overline" sx={{ color: "#777E90", fontWeight: 600 }}>LEARN HOW TO GET STARTED</Typography>
                <Typography variant="h3" sx={{ fontWeight: 600 }}>Perfect For Every Campaign Type</Typography>
                <Box sx={{ display: "flex", gap: 1, alignItems: "flex-start", justifyContent: "space-between", width: "70%", mt: 8 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3, borderRadius: 7, backgroundColor: "#CDE1FF", border: "1px solid #96C9D1" }}>
                            <Icon icon={'fluent-emoji-flat:e-mail'} style={{ width: "45px", height: "45px" }} />
                        </Box>
                        <Typography>Newsletters</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3, borderRadius: 7, backgroundColor: "#CDE1FF", border: "1px solid #96C9D1" }}>
                            <Icon icon={'material-symbols:campaign-sharp'} style={{ width: "45px", height: "45px" }} />
                        </Box>
                        <Typography>Promotional Campaign</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3, borderRadius: 7, backgroundColor: "#CDE1FF", border: "1px solid #96C9D1" }}>
                            <Icon icon={'bi:graph-up-arrow'} style={{ width: "45px", height: "45px" }} />
                        </Box>
                        <Typography>Product<br />Announcement</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3, borderRadius: 7, backgroundColor: "#CDE1FF", border: "1px solid #96C9D1" }}>
                            <Icon icon={'clarity:event-solid'} style={{ width: "45px", height: "45px" }} />
                        </Box>
                        <Typography>Event Information</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", backgroundColor: "white", py: 10, flexDirection: { xs: "column", md: "row" }, gap: 7 }}>
                <Box width={{ xs: "100%", sm: "40%" }} height={"100%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>

                    <Typography variant="h2" sx={{ fontWeight: 600, mb: 4, textAlign: "center", width: { xs: "70%", md: "50%" } }}>
                        <span style={{ color: "white", backgroundColor: "#2C313F", padding: "8px", borderRadius: "15px" }}>Goals</span>
                        of Our Wholesale Company
                    </Typography>
                    <Typography sx={{ textAlign: "center", width: { xs: "80%", md: "60%" } }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos accusamus quo beatae ab dolore animi neque perferendis possimus numquam tempora suscipit, in sint qui ea sapiente doloremque, nemo amet! lore
                    </Typography>

                </Box>
                <Box width={{ xs: "100%", sm: "60%" }} height={"100%"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 3 }}>
                    <Box sx={{
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        p: 3,
                        pl: 5,
                        maxWidth: { xs: 300, sm: 400, md: 500 },
                        position: "relative",
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: "30%",
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
                        maxWidth: { xs: 300, sm: 400, md: 500 },
                        pl: 5,
                        position: "relative"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: "30%",
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
                        maxWidth: { xs: 300, sm: 400, md: 500 },
                        pl: 5,
                        position: "relative"
                    }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>Contact Satisfaction</Typography>
                        <Typography variant="caption" sx={{ color: "#666666" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ullam incidunt asperiores, porro, sit explicabo tempora placeat mpore odit fuga.</Typography>
                        <Avatar
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                width: 60,   // increases Avatar width
                                height: 60,  // increases Avatar height
                                position: "absolute",
                                bottom: "30%",
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
            <Box
                sx={{
                    height: "52vh",
                    mt: 4,
                    backgroundSize: "cover",
                    p: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}
            >
                <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column", width: "50%" }}>
                    <Typography variant="h2" sx={{ fontWeight: 600 }} gutterBottom>Creative Digital Marketing Agency</Typography>
                    <Typography variant="body1" sx={{ color: "#4E5156" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum beatae sunt quaerat iste dolorem nesciunt ipsa, vitae quibusdam amet deserunt quisquam dicta culpa ea eum fugiat eveniet magnam, excepturi cupiditate.</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 5, width: "70%" }}>
                        <Button variant="contained" sx={{ borderRadius: 5, backgroundColor: "#3F8CFF",  px: 2, py: 1, fontWeight: 500 }}>Contact Us</Button>
                        <span style={{ }}>or</span>
                        <Typography sx={{  fontWeight: 500 }}><Icon icon={"ion:call-sharp"} style={{ color: "#3F8CFF", marginRight: "10px", width: "25px", height: "20px" }} />+91 8715246912</Typography>
                    </Box>
                </Box>
                <Box component={"img"} src={footerImg} height={"80%"} />
            </Box>
        </>
    )
}
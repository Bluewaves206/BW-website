import { Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/whatsappHeroImg.png"
import articleImg from "../assets/whatsappArticle.png";
import { Icon } from "@iconify/react";

export default function Whatsapp() {
    return (
        <>
            <Box sx={{ px: 10 }}>
                <Box
                    sx={{
                        background: `url(${heroImg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        minHeight: "70vh",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        borderRadius: 5,
                        px: 10,
                        py: 4,
                        justifyContent: "center",
                        mb: 4
                    }}
                >
                    <Box sx={{ backgroundColor: "#fff", color: "#22A456", p: 1, display: "flex", alignItems: "center", gap: 1, borderRadius: 5, fontSize: "1.5rem", width: "fit-content", mb: 3 }}>
                        <Icon icon={'fluent:comment-text-20-filled'} />
                        <span style={{ fontSize: "1.1rem" }}>Our Team</span>
                    </Box>
                    <Typography variant="h1" sx={{ width: "70%", fontWeight: 500, color: "white" }}>Get Verified with WhatsApp <span style={{ color: "#21A871" }}>Blue Tick</span></Typography>
                    <Typography variant="h6" sx={{ width: "60%", color: "#c7c7c7" }}>Boost your brand credibility and let your customers know it’s really you. Apply for the official WhatsApp Verified Badge today.</Typography>
                    <Button
                        variant="contained"
                        size="medium"
                        disableElevation
                        sx={{
                            bgcolor: "#ffffff6c",
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
                            mt: 3,
                            width: "fit-content"
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    borderRadius: "50%",
                                    width: 42,
                                    height: 42,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mr: "-10px", // pull the circle slightly outside the button edge
                                    color: "transparent",
                                    bgcolor: "#22A456",
                                }}
                            >
                                <Icon
                                    icon="ri:arrow-right-up-line"
                                    style={{ fontSize: 18, color: "white" }}
                                />
                            </Box>
                        }

                    >
                        Read More
                    </Button>
                </Box>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column", mt: 10 }}>
                    <Typography variant="caption" sx={{ textAlign: "center" }}>LEARN HOW TO STARTED</Typography>
                    <Typography variant="h2" sx={{ fontWeight: 500 }} gutterBottom>Powerful Features for Your Business</Typography>
                    <Typography variant="body1" sx={{ color: "#777E90" }}>Everything you need to communicate effectively with your customers</Typography>
                    <Box width={"100%"} sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", mt: 3 }}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "25%",
                                height: "fit-content",
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                p: 1,
                                cursor: "pointer",
                                "&:hover": {
                                    border: "1px solid #22A456"
                                }
                            }}>
                            <Box component={"img"} src={articleImg} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                            <Box sx={{ px: 2, mt: 1 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                                    <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                                    <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                                </Box>
                                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                                <Button
                                    variant="contained"
                                    size="small"
                                    disableElevation
                                    sx={{
                                        bgcolor: "#22A456",
                                        color: "#fff",
                                        borderRadius: "25px", // pill
                                        fontFamily: "Outfit, sans-serif",
                                        textTransform: "none",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        px: 1,
                                        boxShadow: "none",
                                        overflow: "visible", // allow the circle to hang outside
                                        "&:hover": { bgcolor: "#3575D9", boxShadow: "none" },
                                        ".MuiButton-endIcon": { marginLeft: 1 }, // smaller gap between text and circle
                                        mt: 2,
                                        width: "fit-content"
                                    }}
                                    endIcon={
                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                width: 42,
                                                height: 42,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mr: "-7px", // pull the circle slightly outside the button edge
                                                color: "transparent",
                                                bgcolor: "#22A456",
                                                border: "1px solid #fff"
                                            }}
                                        >
                                            <Icon
                                                icon="ri:arrow-right-up-line"
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
                                position: "relative",
                                width: "25%",
                                height: "fit-content",
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                p: 1,
                                cursor: "pointer",
                                "&:hover": {
                                    border: "1px solid #22A456"
                                }
                            }}>
                            <Box component={"img"} src={articleImg} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                            <Box sx={{ px: 2, mt: 1 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                                    <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                                    <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                                </Box>
                                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                                <Button
                                    variant="contained"
                                    size="small"
                                    disableElevation
                                    sx={{
                                        bgcolor: "#22A456",
                                        color: "#fff",
                                        borderRadius: "25px", // pill
                                        fontFamily: "Outfit, sans-serif",
                                        textTransform: "none",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        px: 1,
                                        boxShadow: "none",
                                        overflow: "visible", // allow the circle to hang outside
                                        "&:hover": { bgcolor: "#3575D9", boxShadow: "none" },
                                        ".MuiButton-endIcon": { marginLeft: 1 }, // smaller gap between text and circle
                                        mt: 2,
                                        width: "fit-content"
                                    }}
                                    endIcon={
                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                width: 42,
                                                height: 42,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mr: "-7px", // pull the circle slightly outside the button edge
                                                color: "transparent",
                                                bgcolor: "#22A456",
                                                border: "1px solid #fff"
                                            }}
                                        >
                                            <Icon
                                                icon="ri:arrow-right-up-line"
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
                                position: "relative",
                                width: "25%",
                                height: "fit-content",
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid transparent",
                                transition: "all 0.3s ease-in-out",
                                p: 1,
                                cursor: "pointer",
                                "&:hover": {
                                    border: "1px solid #22A456"
                                }
                            }}>
                            <Box component={"img"} src={articleImg} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
                            <Box sx={{ px: 2, mt: 1 }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                                    <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                                    <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                                </Box>
                                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                                <Button
                                    variant="contained"
                                    size="small"
                                    disableElevation
                                    sx={{
                                        bgcolor: "#22A456",
                                        color: "#fff",
                                        borderRadius: "25px", // pill
                                        fontFamily: "Outfit, sans-serif",
                                        textTransform: "none",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        px: 1,
                                        boxShadow: "none",
                                        overflow: "visible", // allow the circle to hang outside
                                        "&:hover": { bgcolor: "#3575D9", boxShadow: "none" },
                                        ".MuiButton-endIcon": { marginLeft: 1 }, // smaller gap between text and circle
                                        mt: 2,
                                        width: "fit-content"
                                    }}
                                    endIcon={
                                        <Box
                                            sx={{
                                                borderRadius: "50%",
                                                width: 42,
                                                height: 42,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mr: "-7px", // pull the circle slightly outside the button edge
                                                color: "transparent",
                                                bgcolor: "#22A456",
                                                border: "1px solid #fff"
                                            }}
                                        >
                                            <Icon
                                                icon="ri:arrow-right-up-line"
                                                style={{ fontSize: 18, color: "white" }}
                                            />
                                        </Box>
                                    }

                                >
                                    Read More
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Typography variant="h2" sx={{ textAlign: "center", mt: 5 }}>Why Choose <span style={{ color: "white", padding: "8px 12px", backgroundColor: "#21A871", borderRadius: 20 }}>Whatsapp</span> Verified</Typography>
                <Typography variant="body1" sx={{ textAlign: "center", color: "#667085", mt: 6 }}>Your customers trust what they can verify — and a verified badge builds that trust instantly.</Typography>
            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
}
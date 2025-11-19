import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import heroImg from "../assets/whatsappHeroImg.png"
import articleImg from "../assets/whatsappArticle.png";
import whatsappAboutImg from "../assets/whatsappAbout.png";
import whatsappFooter from "../assets/whatsappFooter.png";
import footerImg from "../assets/smsLastImg.png"
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
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { md: "65% 35%", xs: "1fr" },
                        columnGap: "5px",
                        rowGap: "20px",
                        width: "100%",
                        mt: 4,
                        px: 10
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <Typography variant="h4">Our pool experts are committed to providing reliable, affordable services to every customer. What separates us from other pool service companies? We’re glad you asked.</Typography>
                        <Box
                            sx={{
                                width: "100%",       // full width
                                maxHeight: 800,      // height of scrollable area
                                display: "flex",     // enable flexbox
                                flexDirection: "column",
                                alignItems: "center",
                                overflowY: "auto",   // enable vertical scroll
                                px: 2,               // padding on sides
                                py: 1,
                                "&::-webkit-scrollbar": { width: 8 }, // optional: custom scrollbar
                                "&::-webkit-scrollbar-thumb": { backgroundColor: "#ccc", borderRadius: 4 },
                                "&::-webkit-scrollbar-track": { backgroundColor: "#f0f0f0" },
                            }}
                        >
                            {[1, 2, 3].map((item, index) => (
                                <>
                                    <Box key={index} mb={1}>
                                        <Accordion
                                            sx={{
                                                width: "100%",
                                                borderRadius: 4,
                                                overflow: "hidden",
                                                p: 2,
                                                backgroundColor: "transparent",
                                                "&.Mui-expanded": {
                                                    borderRadius: 4,
                                                    backgroundColor: "#fff",
                                                    margin: "auto",
                                                },
                                                boxShadow: "none",
                                            }}
                                            elevation={0}
                                        >
                                            <AccordionSummary
                                                expandIcon={<Icon icon={"mdi:chevron-down"} fontSize="2rem" />}
                                                aria-controls={`panel${item}-content`}
                                                id={`panel${item}-header`}
                                                sx={{
                                                    borderRadius: 2,
                                                    backgroundColor: "transparent",
                                                }}
                                            >
                                                <Typography component="span">
                                                    Why should I choose Bluewaves Media? {item}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </AccordionDetails>
                                        </Accordion>
                                    </Box>
                                    {index != 2 && <hr style={{ width: "95%", marginTop: 3, marginBottom: 10 }} />}
                                </>
                            ))}
                        </Box>
                    </Box>

                    <Box
                        component="img"
                        src={whatsappAboutImg}
                        sx={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "100%",
                            objectFit: "contain"   // or "cover" if you want it to fill
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    background: `url('${whatsappFooter}')`,
                    height: "52vh",
                    mt: 8,
                    backgroundSize: "cover",
                    p: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
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
                <Box component={"img"} src={footerImg} height={"80%"} />
            </Box>
        </>
    );
}
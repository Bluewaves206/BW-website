import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import HeroImg from "../assets/contactImg.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contact() {
    const [active, setActive] = useState<string>("General");

    const filters = ["General", "RCS Messaging", "CRM", "IVR", "SMS", "RCS", "Website Development", "WhatsApp Messaging"];
    return (
        <>
            <Box
                component="img"
                src={HeroImg}
                alt="HeroImg"
                sx={{
                    width: "100%",
                    height: { xs: "1400px", md: "1000px" }, // or any fixed height like '500px'
                    objectFit: "cover", // keeps aspect ratio, crops overflow
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    px: { xs: 2, sm: 4, md: 7 },
                    gap: { xs: 4, md: 2, lg: 0 },
                }}>
                {/* Contact Us from */}
                <Box
                    sx={{
                        backdropFilter: "blur(15px)",
                        boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                        position: "relative",
                        width: { xs: "100%", sm: "80%", md: "70%", lg: "38%" },
                        borderRadius: 5,
                        bgcolor: "rgba(255, 255, 255, 0.3)",
                        p: { xs: 3, md: 4 },
                        overflow: "hidden",
                        "&::before": { content: '""', position: "absolute", inset: 0, borderRadius: "15.78px", padding: "2px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", pointerEvents: "none" },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 2,
                    }}>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>Get in touch</Typography>
                    <Typography variant="body1" sx={{ color: "#777E90", width: { xs: "100%", sm: "90%", md: "80%", }, textAlign: "center", fontWeight: 500 }}>Your email address will not be published. Required fields are marked *</Typography>
                    <TextField label="Name" variant="outlined"
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "75%", lg: "70%" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "22px", // make it fully rounded
                            },
                        }}
                    />
                    <TextField label="Email" variant="outlined"
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "75%", lg: "70%" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "22px", // make it fully rounded
                            },
                        }}
                    />
                    <TextField
                        label="Interested Services"
                        variant="outlined"
                        multiline
                        rows={4} // default visible rows
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "75%", lg: "70%" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "22px", // fully rounded
                                padding: "10px", // optional, for better spacing
                            },
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "black", // default (unchecked) color
                                    "&.Mui-checked": {
                                        color: "black", // checked color
                                    },
                                }}
                            />
                        }
                        sx={{
                            color: "#777E90",
                            width: { xs: "100%", sm: "80%", md: "75%", lg: "70%" },
                            "& .MuiFormControlLabel-label": {
                                fontSize: '0.9rem', // decrease font size
                            },
                        }}

                        label="I agree to receive promotional offers and updates from Bluewaves Media via RCS, SMS and WhatsApp"
                    />

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            backgroundColor: "#3F8CFF",
                            color: "white",
                            borderRadius: 6,
                            fontFamily: 'Outfit, sans-serif',
                            textTransform: "none", // <-- add this
                            fontSize: { xs: "1.5rem", sm: "1.2rem" },
                            boxShadow: "none",
                            mt: 2,
                        }}
                        endIcon={
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    width: { xs: 40, sm: 30 },
                                    height: { xs: 40, sm: 30 },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    icon="formkit:arrowright"
                                    style={{ fontSize: "0.9rem", color: "black" }}
                                />
                            </Box>
                        }

                    >
                        Contact
                    </Button>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3, mt: 2 }}>
                        <Icon icon={"ic:baseline-facebook"} color="#777E90" />
                        <Icon icon={"mdi:instagram"} color="#777E90" />
                        <Icon icon={"mdi:twitter"} color="#777E90" />
                        <Icon icon={"mdi:linkedin"} color="#777E90" />
                    </Box>

                </Box>
                {/* Visit Our Office */}
                <Box sx={{ width: { xs: "100%", sm: "80%", md: "70%", lg: "40%" }, backgroundColor: "rgba(255, 255, 255)", boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)", zIndex: 1, borderRadius: 5, p: { xs: 2, md: 3 }, }}>
                    <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1, textAlign: { xs: "center", md: "left" } }}>Visit Our Office</Typography>
                    <Box sx={{ display: "flex", alignItems: { xs: "center", md: "flex-start" }, flexWrap: "wrap", justifyContent: "space-between", gap: 2, flexDirection: { xs: "column", md: "row" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                borderRadius: "12px",
                                p: 2.5,
                                width: { xs: "100%", sm: "55%", md: "45%" },
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
                                width: { xs: "100%", sm: "55%", md: "45%" },
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
                                width: { xs: "100%", sm: "55%", md: "45%" },
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

            </Box >

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0205130097374!2d88.33624097591655!3d22.503413535501387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ac74c990e9%3A0xc5b31adf61cf073f!2sBlue%20Waves%20Media!5e0!3m2!1sen!2sin!4v1759925909341!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0, position: "relative", width: "90%", borderRadius: "30px" }}
                    allowFullScreen    // ✅ correct casing, no quotes needed
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"  // ✅ camelCase
                />
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 10, flexDirection: "column", gap: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "center", fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" } }}>Frequently Asked Questions</Typography>
                <Typography variant="body2" sx={{ color: "#4E5156",textAlign:"center",px:2 }} >Quick answers to common questions about working with BlueWaves Media</Typography>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",

                    }}
                >
                    {filters.map((item) => (
                        <Button
                            key={item}
                            variant="contained"
                            onClick={() => setActive(item)}
                            disableElevation
                            sx={{
                                background: active === item ? "#111" : "transparent",
                                color: active === item ? "#fff" : "#333",
                                border: "none",
                                borderRadius: "20px",
                                padding: "8px 18px",
                                fontWeight: active === item ? "600" : "500",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>
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
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
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
                            {index != 5 && <hr style={{ width: "60%", marginTop: 3, marginBottom: 10 }} />}
                        </>
                    ))}
                </Box>


            </Box>
        </>
    )
}
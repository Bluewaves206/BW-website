import { Avatar, Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import HeroImg from "../assets/contactImg.png";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contact() {
    const [active, setActive] = useState<string>("General");

    // accordion open/close state
    const [expanded, setExpanded] = useState<number | false>(false);


    const filters = ["General", "RCS ", "CRM", "IVR", "Website Development"];

    return (
        <>
            <Box
                component="img"
                src={HeroImg}
                alt="HeroImg"
                sx={{
                    width: "100%",
                    height: { xs: "1400px", md: "1000px" },
                    objectFit: "cover",
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
                
{/* MAIN WRAPPER */}
<Box
    sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "stretch",
        flexWrap: "wrap",
        gap: 3,
    }}
>

{/* LEFT CARD — CONTACT FORM */}
<Box
    sx={{
        flex: 1,
        maxWidth: { xs: "100%", sm: "80%", md: "70%", lg: "38%" },
        backdropFilter: "blur(15px)",
        boxShadow: "16.44px 17.09px 65.75px rgba(41,95,131,0.08)",
        borderRadius: 5,
        bgcolor: "rgba(255,255,255,0.3)",
        p: { xs: 2, md: 3 },
        display: "flex",
        flexDirection: "column",

        // ⭐ IMPORTANT FIX → allows button to align right without affecting layout
        alignItems: "stretch",

        gap: 2,
    }}
>

    {/* HEADING */}
    <Typography
        variant="h4"
        sx={{
            fontWeight: 600,
            textAlign: "left",
            width: "100%",
            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2rem" },
        }}
    >
        Get in <span style={{ color: "#8E8E8E" }}>touch</span>
    </Typography>

    {/* SUBTEXT */}
    <Typography
        variant="body1"
        sx={{
            color: "#777E90",
            width: "90%",
            textAlign: "left",
            fontWeight: 500,
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
        }}
    >
        Your email address will not be published. Required fields are marked *
    </Typography>

    {/* NAME + EMAIL ROW */}
    <Box
        sx={{
            display: "flex",
            width: "90%",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
        }}
    >
        <TextField
            label="Name"
            variant="outlined"
            sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": { borderRadius: "22px" },
            }}
        />

        <TextField
            label="Email"
            variant="outlined"
            sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": { borderRadius: "22px" },
            }}
        />
    </Box>

    {/* PHONE */}
    <TextField
        label="Phone Number"
        variant="outlined"
        sx={{
            width: "90%",
            "& .MuiOutlinedInput-root": { borderRadius: "22px" },
        }}
    />

    {/* SERVICES */}
    <TextField
        label="Interested Services"
        variant="outlined"
        multiline
        rows={4}
        sx={{
            width: "90%",
            "& .MuiOutlinedInput-root": {
                borderRadius: "22px",
                padding: "10px",
            },
        }}
    />

    {/* CHECKBOX */}
    <FormControlLabel
        control={
            <Checkbox
                defaultChecked
                sx={{
                    color: "black",
                    "&.Mui-checked": { color: "black" },
                }}
            />
        }
        sx={{
            color: "#777E90",
            width: "90%",
            "& .MuiFormControlLabel-label": {
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
            },
        }}
        label="I agree to receive promotional offers and updates from Bluewaves Media via RCS, SMS and WhatsApp"
    />

    {/* BUTTON */}
<Box 
    sx={{ 
        width: "90%", 
        display: "flex", 
        justifyContent: "flex-end",
        mt: 1 
    }}
>
    <Button
        variant="contained"
        size="large"
        sx={{
            backgroundColor: "#3F8CFF",
            color: "white",
            borderRadius: 6,
            textTransform: "none",

            px: { xs: 1.5, sm: 2, md: 3 },
            py: { xs: 0.7, sm: 1, md: 1.2 },

            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            boxShadow: "none",
        }}
        endIcon={
            <Box
                sx={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: { xs: 26, sm: 32, md: 40 },
                    height: { xs: 26, sm: 32, md: 40 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Icon icon="formkit:arrowright" style={{ fontSize: "0.75rem", color: "black" }} />
            </Box>
        }
    >
        Contact
    </Button>
</Box>


</Box>


{/* RIGHT CARD — OFFICE INFO */}
<Box
    sx={{
        flex: 1,
        maxWidth: { xs: "100%", sm: "80%", md: "65%", lg: "40%" },
        background: "rgba(255, 255, 255, 0.32)",
        backdropFilter: "blur(16px)",
        borderRadius: "26px",
        boxShadow: "0px 18px 40px rgba(0,0,0,0.1)",
        p: { xs: 2.5, md: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 3,
    }}
>
    {/* CONTENT */}
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
<Typography 
    variant="h4" 
    sx={{ 
        fontWeight: 700, 
        fontSize: { xs: "1.6rem", md: "2rem" }
    }}
>
    Visit Our <span style={{ color: "#8E8E8E" }}>Office</span>
</Typography>


        <Typography sx={{ color: "#3A3A3A", fontSize: { xs: "13px", md: "15px" }, fontWeight: 600 }}>
            BlueWaves Media Headquarters
        </Typography>

        <Typography sx={{ color: "#4F5560", fontSize: { xs: "13px", md: "14px" }, lineHeight: 1.6 }}>
            Helping businesses with CRM, automation, and digital growth solutions.
        </Typography>

        {/* ADDRESS */}
        <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 54, height: 54 }}>
                <Icon icon="mdi:location" width={27} />
            </Avatar>

            <Box>
                <Typography sx={{ color: "#9AA0A6", fontSize: { xs: "13px", md: "14px" } }}>
                    Office Address
                </Typography>
                <Typography sx={{ fontWeight: 600 }}>
                    Mahendra Tower, 43A Tollygunge Circular Road
                </Typography>
                <Typography>3rd Floor, Suit No 3B, Kolkata – 700053</Typography>
            </Box>
        </Box>

        <Box sx={{ height: 1, width: "100%", background: "#DDE2E8" }} />

        {/* EMAIL + PHONE */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>          

            {/* EMAIL */}
            <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 54, height: 54 }}>
                    <Icon icon="ic:outline-email" width={27} />
                </Avatar>

                <Box>
                    <Typography sx={{ color: "#9AA0A6", fontSize: { xs: "13px", md: "14px" } }}>
                        Email
                    </Typography>

                    <Typography
                        component="a"
                        href="mailto:support@bluewavesmedia.com"
                        sx={{
                            color: "#2E77FF",
                            fontWeight: 600,
                            fontSize: { xs: "14px", md: "15px" },
                            textDecoration: "none",
                            "&:hover": { textDecoration: "underline" },
                        }}
                    >
                        support@bluewavesmedia.com
                    </Typography>
                </Box>
            </Box>

            {/* PHONE */}
            <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#E8F1FF", color: "#2E77FF", width: 54, height: 54 }}>
                    <Icon icon="material-symbols:call" width={27} />
                </Avatar>

                <Box>
                    <Typography sx={{ color: "#9AA0A6", fontSize: { xs: "13px", md: "14px" } }}>
                        Phone
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { md: "center" },
                            gap: { xs: 0.5, md: 1.5 },
                            whiteSpace: { md: "nowrap" },
                        }}
                    >
                        <Typography
                            component="a"
                            href="tel:+12295550109"
                            sx={{
                                color: "#2E77FF",
                                fontSize: { xs: "14px", md: "15px" },
                                fontWeight: 600,
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            +918777247832 
                        </Typography>

                        <Typography
                            sx={{
                                display: { xs: "none", md: "block" },
                                color: "#6F7480",
                                fontWeight: 600,
                            }}
                        >
                            |
                        </Typography>

                        <Typography
                            component="a"
                            href="tel:+12295552872"
                            sx={{
                                color: "#2E77FF",
                                fontSize: { xs: "14px", md: "15px" },
                                fontWeight: 600,
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            +918276882339                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>

    {/* SOCIAL BAR */}
    <Box
        sx={{
            borderTop: "1px solid #D8DFE6",
            pt: 2.5,
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <Typography 
            sx={{ 
                fontWeight: 700, 
                fontSize: { xs: "13px", md: "15px" }, 
                color: "#4E5156" 
            }}
        >
            Follow Us
        </Typography>

        <Box
            sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                "& svg": {
                    color: "#6F7480",
                    width: { xs: 26, md: 34 },
                    height: { xs: 26, md: 34 },
                    cursor: "pointer",
                    transition: "0.25s ease",
                },
                "& svg:hover": {
                    color: "#2E77FF",
                    transform: "scale(1.2)",
                },
            }}
        >
            <Icon icon="ic:baseline-facebook" />
            <Icon icon="mdi:instagram" />
            <Icon icon="mdi:twitter" />
            <Icon icon="mdi:linkedin" />
        </Box>
    </Box>
</Box>

</Box>
</Box >

{/* MAP */}
<Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: 5 }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0205130097374!2d88.33624097591655!3d22.503413535501387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ac74c990e9%3A0xc5b31adf61cf073f!2sBlue%20Waves%20Media!5e0!3m2!1sen!2sin!4v1759925909341!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, position: "relative", width: "90%", borderRadius: "30px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    />
</Box>

{/* FAQ SECTION - UPDATED */}
<Box sx={{ width: "100%", display: "flex", justifyContent: "center", my: 10, flexDirection: "column", gap: 3, px: { xs: 2, sm: 3, md: 4 } }}>
<Typography
    variant="h3"
    sx={{
        fontWeight: 600,
        textAlign: "center",
        fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
    }}
>
    Before You{" "}
    <span style={{ color: "#8E8E8E" }}>Ask</span>
</Typography>

    <Typography variant="body2" sx={{ color: "#4E5156", textAlign:"center", px:2, maxWidth: "800px", mx: "auto" }}>
        Quick answers to common questions about working with BlueWaves Media
    </Typography>

    {/* Horizontal Scrollable Filter Buttons for Mobile */}
    <Box
        sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "center" },
            gap: 2,
            flexWrap: { xs: "nowrap", sm: "wrap" },
            overflowX: { xs: "auto", sm: "visible" },
            px: { xs: 2, sm: 0 },
            pb: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            maxWidth: "100%",
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
                    border: "1px solid",
                    borderColor: active === item ? "#111" : "#E0E0E0",
                    borderRadius: "20px",
                    padding: "8px 18px",
                    fontWeight: active === item ? "600" : "500",
                    transition: "all 0.3s ease",
                    flexShrink: 0,
                    "&:hover": {
                        background: active === item ? "#111" : "rgba(0,0,0,0.05)",
                        borderColor: active === item ? "#111" : "#333",
                    },
                }}
            >
                {item}
            </Button>
        ))}
    </Box>

    {/* FAQ CARDS WITH SMOOTH ANIMATION */}
    <Box
        sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            px: { xs: 1, sm: 2 },
        }}
    >
        {[1, 2, 3, 4, 5, 6].map((item) => (
            <Box 
                key={item}
                sx={{
                    width: { xs: "100%", sm: "90%", md: "80%", lg: "70%" }, 
                    maxWidth: "800px",
                    mx: "auto",
                    transition: "all 0.3s ease",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: expanded === item ? "#FFFFFF" : "#F8FAFC",
                        borderRadius: 3,
                        overflow: "hidden",
                        boxShadow: expanded === item 
                            ? "0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.03)"
                            : "0 4px 20px rgba(0,0,0,0.05)",
                        border: "1px solid",
                        borderColor: expanded === item ? "#E5E7EB" : "transparent",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                            boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                            borderColor: "#D1D5DB",
                        },
                    }}
                >
                    <Box
                        onClick={() => setExpanded(expanded === item ? false : item)}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            p: { xs: 3, sm: 3.5 },
                            cursor: "pointer",
                            userSelect: "none",
                        }}
                    >
                        <Typography 
                            sx={{ 
                                fontWeight: 700, 
                                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                                color: "#111827",
                                flex: 1,
                                pr: 2,
                            }}
                        >
                            Why should I choose Bluewaves Media? {item}
                        </Typography>
                        
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: expanded === item ? "#3F8CFF" : "#E5E7EB",
                                borderRadius: "50%",
                                width: { xs: 32, sm: 36 },
                                height: { xs: 32, sm: 36 },
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                transform: expanded === item ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                        >
                            <Icon 
                                icon="mdi:chevron-down" 
                                style={{ 
                                    fontSize: "1.5rem", 
                                    color: expanded === item ? "#FFFFFF" : "#6B7280" 
                                }} 
                            />
                        </Box>
                    </Box>

                    {/* Animated Content */}
                    <Box
                        sx={{
                            overflow: "hidden",
                            maxHeight: expanded === item ? "500px" : "0px",
                            transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                    >
                        <Box
                            sx={{
                                p: { xs: 3, sm: 3.5 },
                                pt: 0,
                                color: "#6B7280",
                                lineHeight: 1.6,
                                fontSize: { xs: "0.95rem", sm: "1rem" },
                                borderTop: "1px solid #F3F4F6",
                            }}
                        >
                            We provide modern, reliable solutions designed to help your business grow. Our team focuses on quality, speed, and creating the results you need to succeed.
                        </Box>
                    </Box>
                </Box>
            </Box>
        ))}
    </Box>
</Box>
</>
    )
}
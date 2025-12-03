import { Box, Button, Typography, TextField, Modal } from "@mui/material";
import { Icon } from "@iconify/react";
import HomeImg from "../../assets/homePageTop.mp4";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormState {
    email: string;
    phone: string;
    date: string;
}

interface ErrorState {
    email?: string;
    phone?: string;
    date?: string;
}

export default function HeroSection() {
    const navigate = useNavigate();

    const [form, setForm] = useState<FormState>({ email: "", phone: "", date: "" });
    const [errors, setErrors] = useState<ErrorState>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    // FORM HANDLERS -----------------------
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = (): boolean => {
        const temp: ErrorState = {};
        if (!form.email) temp.email = "Email required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid";
        
        if (!form.phone) temp.phone = "Phone required";
        else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) temp.phone = "Phone must be 10 digits";
        
        if (!form.date) temp.date = "Select a date";
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setForm({ email: "", phone: "", date: "" });

            setTimeout(() => {
                setSuccess(false);
                setOpen(false);
            }, 1500);
        }, 1200);
    };

    return (
        <Box sx={{ position: "relative", overflow: "hidden" }}>
            {/* BACKGROUND VIDEO */}
            <Box
                component="video"
                src={HomeImg}
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    width: "100%",
                    height: { xs: "480px", sm: "550px", md: "700px", lg: "750px" },
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                    zIndex: 0,
                }}
            />

            {/* OVERLAY FOR BETTER TEXT READABILITY */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: { xs: "480px", sm: "550px", md: "700px", lg: "750px" },
                    background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)",
                    zIndex: 1,
                }}
            />

            {/* HERO CONTENT */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: { xs: "480px", sm: "550px", md: "700px", lg: "750px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: { xs: 2, sm: 3, md: 6, lg: 10 },
                    maxWidth: { lg: "1400px", xl: "1600px" },
                    mx: "auto",
                }}
            >
                <Box sx={{ 
                    width: { 
                        xs: "100%", 
                        sm: "100%", 
                        md: "80%", 
                        lg: "65%", 
                        xl: "55%" 
                    },
                    pr: { md: 2 }
                }}>
                    {/* HEADING */}
                    <Typography
                        component="div"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            lineHeight: { xs: 1.15, sm: 1.2, md: 1.3 },
                            fontSize: { 
                                xs: "1.8rem", 
                                sm: "2.3rem", 
                                md: "2.8rem", 
                                lg: "3.2rem",
                                xl: "3.5rem" 
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.8, sm: 1 },
                            mb: { xs: 2, sm: 2.5, md: 3 }
                        }}
                    >
                        <Box sx={{ 
                            background: "#F4F9FD", 
                            color: "#3F8CFF", 
                            px: { xs: 1.2, sm: 1.5, md: 1.8 }, 
                            py: { xs: 0.6, sm: 0.8, md: 1 }, 
                            borderRadius: "10px", 
                            width: "fit-content",
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            lineHeight: "inherit"
                        }}>
                            The Future of
                        </Box>

                        <Box sx={{ 
                            display: "inline",
                            mr: 1
                        }}>
                            Communication. The
                        </Box>

                        <Box sx={{ 
                            background: "#F4F9FD", 
                            color: "#4E5156", 
                            px: { xs: 1.2, sm: 1.5, md: 1.8 }, 
                            py: { xs: 0.6, sm: 0.8, md: 1 }, 
                            borderRadius: "10px", 
                            width: "fit-content",
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            lineHeight: "inherit",
                            mt: { xs: 0.5, sm: 0 }
                        }}>
                            Force Behind Growth.
                        </Box>
                    </Typography>

                    {/* SUBTEXT */}
                    <Typography
                        sx={{
                            color: "#fff",
                            lineHeight: { xs: 1.5, sm: 1.6, md: 1.65 },
                            fontSize: { 
                                xs: "0.875rem", 
                                sm: "0.95rem", 
                                md: "1.05rem", 
                                lg: "1.15rem" 
                            },
                            mb: { xs: 3, sm: 4, md: 4.5 },
                            pr: { md: 4, lg: 8 },
                            maxWidth: { md: "90%", lg: "85%" }
                        }}
                    >
                        “We enhance businesses' ability to boost customer engagement through
                        personalized and interactive video experiences.”
                    </Typography>

                    {/* BUTTON ROW */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 2, sm: 2, md: 3 },
                            alignItems: { xs: "stretch", sm: "center" },
                            flexWrap: "wrap"
                        }}
                    >
                        {/* READ MORE */}
                        <Button
                            variant="contained"
                            onClick={() => navigate("/about")}
                            sx={{
                                bgcolor: "#3F8CFF",
                                color: "#fff",
                                textTransform: "none",
                                borderRadius: "30px",
                                px: { xs: 2.5, sm: 3, md: 3.5 },
                                py: { xs: 1, sm: 1.2, md: 1.4 },
                                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                                fontWeight: 600,
                                minWidth: { xs: "100%", sm: "auto" },
                                width: { xs: "100%", sm: "auto" },
                                "&:hover": { 
                                    bgcolor: "#3575D9",
                                    transform: "translateY(-2px)",
                                    transition: "transform 0.2s"
                                },
                                transition: "all 0.2s"
                            }}
                            endIcon={
                                <Box
                                    sx={{
                                        border: "2px solid #fff",
                                        borderRadius: "50%",
                                        width: { xs: 26, sm: 30, md: 34 },
                                        height: { xs: 26, sm: 30, md: 34 },
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        ml: 0.5
                                    }}
                                >
                                    <Icon icon="formkit:arrowright" width={14} color="#fff" />
                                </Box>
                            }
                        >
                            Read More
                        </Button>

                        {/* BOOK DEMO */}
                        <Button
                            variant="outlined"
                            onClick={() => setOpen(true)}
                            sx={{
                                borderRadius: "30px",
                                borderColor: "#fff",
                                color: "#fff",
                                px: { xs: 2.5, sm: 3, md: 3.5 },
                                py: { xs: 1, sm: 1.2, md: 1.4 },
                                fontSize: { xs: "0.875rem", sm: "0.95rem", md: "1rem" },
                                fontWeight: 600,
                                minWidth: { xs: "100%", sm: "auto" },
                                width: { xs: "100%", sm: "auto" },
                                "&:hover": {
                                    borderColor: "#3F8CFF",
                                    backgroundColor: "rgba(63, 140, 255, 0.1)",
                                    transform: "translateY(-2px)",
                                    transition: "transform 0.2s"
                                },
                                transition: "all 0.2s"
                            }}
                            startIcon={
                                <Icon 
                                    icon="mdi:calendar-clock" 
                                    width={18} 
                                    style={{ marginRight: "8px" }} 
                                />
                            }
                        >
                            Book Demo
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* POPUP FORM */}
            <Modal 
                open={open} 
                onClose={() => setOpen(false)}
                sx={{
                    display: "flex",
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "center",
                    overflow: "auto",
                    py: { xs: 2, sm: 0 }
                }}
            >
                <Box
                    sx={{
                        width: { 
                            xs: "calc(100% - 32px)", 
                            sm: "420px", 
                            md: "450px" 
                        },
                        maxWidth: "95vw",
                        background: "#fff",
                        borderRadius: "18px",
                        p: { xs: 3, sm: 4 },
                        mx: "auto",
                        my: { xs: "auto", sm: "auto" },
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                        maxHeight: { xs: "90vh", sm: "auto" },
                        overflow: "auto"
                    }}
                >
                    <Typography 
                        sx={{ 
                            fontSize: { xs: "1.2rem", sm: "1.4rem" }, 
                            fontWeight: 700, 
                            mb: 3,
                            textAlign: "center"
                        }}
                    >
                        Book Your Demo
                    </Typography>

                    <Box sx={{ display: "grid", gap: 2.5 }}>
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            size="medium"
                        />

                        <TextField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            fullWidth
                            size="medium"
                        />

                        <TextField
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            error={!!errors.date}
                            helperText={errors.date}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            size="medium"
                        />

                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={loading}
                            sx={{
                                background: success ? "#22C55E" : "#3F8CFF",
                                py: 1.5,
                                borderRadius: "10px",
                                fontWeight: 600,
                                fontSize: "1rem",
                                mt: 1,
                                "&:hover": {
                                    background: success ? "#16a34a" : "#3575D9"
                                }
                            }}
                            fullWidth
                        >
                            {loading ? "Booking..." : success ? "Success! Redirecting..." : "Submit"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
import { Box, Button, Typography, TextField, Modal, IconButton } from "@mui/material";
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = (): boolean => {
        const temp: ErrorState = {};
        if (!form.email) temp.email = "Email required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Email is invalid";

        if (!form.phone) temp.phone = "Phone required";
        else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "")))
            temp.phone = "Phone must be 10 digits";

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
            }, 1200);
        }, 1200);
    };

    const handleClose = () => {
        setOpen(false);
        setSuccess(false);
        setLoading(false);
        setErrors({});
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

            {/* DARK OVERLAY */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: { xs: "480px", sm: "550px", md: "700px", lg: "750px" },
                    background: "linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.22) 100%)",
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
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "100%",
                            md: "80%",
                            lg: "65%",
                            xl: "55%",
                        },
                        pr: { md: 2 },
                    }}
                >

                    {/* HEADINGS */}
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
                                xl: "3.5rem",
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 0.8, sm: 1 },
                            mb: { xs: 2, sm: 2.5, md: 3 },
                        }}
                    >
                        <Box
                            sx={{
                                background: "#F4F9FD",
                                color: "#3F8CFF",
                                px: { xs: 1.2, sm: 1.5, md: 1.8 },
                                py: { xs: 0.6, sm: 0.8, md: 1 },
                                borderRadius: "10px",
                                width: "fit-content",
                            }}
                        >
                            The Future of
                        </Box>

                        <Box>Communication. The</Box>

                        <Box
                            sx={{
                                background: "#F4F9FD",
                                color: "#4E5156",
                                px: { xs: 1.2, sm: 1.5, md: 1.8 },
                                py: { xs: 0.6, sm: 0.8, md: 1 },
                                borderRadius: "10px",
                                width: "fit-content",
                            }}
                        >
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
                                lg: "1.15rem",
                            },
                            mb: { xs: 3, sm: 4, md: 4.5 },
                            pr: { md: 4, lg: 8 },
                            maxWidth: { md: "90%", lg: "85%" },
                        }}
                    >
                        "We enhance businesses' ability to boost customer engagement
                        through personalized and interactive video experiences."
                    </Typography>

                    {/* BUTTONS */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 2, sm: 2, md: 3 },
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => navigate("/about")}
                            sx={{
                                bgcolor: "#3F8CFF",
                                color: "#fff",
                                borderRadius: "30px",
                                px: { xs: 2.5, sm: 3 },
                                py: { xs: 1, sm: 1.2 },
                                fontWeight: 600,
                            }}
                        >
                            Read More
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => setOpen(true)}
                            sx={{
                                borderRadius: "30px",
                                borderColor: "#fff",
                                color: "#fff",
                                px: { xs: 2.5, sm: 3 },
                                py: { xs: 1, sm: 1.2 },
                                fontWeight: 600,
                            }}
                            startIcon={<Icon icon="mdi:calendar-clock" width={18} />}
                        >
                            Book Demo
                        </Button>
                    </Box>
                </Box>
            </Box>

            
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    alignItems: { xs: "flex-start", sm: "center" },
                    justifyContent: "center",
                    py: { xs: 2, sm: 0 },

                    /*  BRIGHT CLEAN GLASS BACKDROP */
                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",

                    backgroundColor: "rgba(255,255,255,0.25)", // light & clean
                }}
            >
                <Box
                    sx={{
                        width: { xs: "calc(100% - 32px)", sm: "420px", md: "450px" },

                        /*  PURE BRIGHT GLASSMORPHISM */
                        background: "rgba(255,255,255,0.40)",
                        backdropFilter: "blur(22px)",
                        WebkitBackdropFilter: "blur(22px)",

                        borderRadius: "20px",
                        border: "1px solid rgba(255,255,255,0.45)",
                        boxShadow:
                            "0 12px 35px rgba(0,0,0,0.12)", // soft shadow, not dark
                        p: { xs: 3, sm: 4 },

                        position: "relative",

                        transition: "all 0.3s ease",
                        animation: "popupScale 0.35s ease-out",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "20px",
                            background:
                                "linear-gradient(145deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))",
                            pointerEvents: "none",
                        },
                    }}
                >

                    {/* CLOSE BUTTON */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.35)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255,255,255,0.5)",
                            "&:hover": {
                                background: "rgba(255,255,255,0.55)",
                                transform: "scale(1.08)",
                                transition: "0.25s",
                            },
                        }}
                    >
                        <Icon icon="material-symbols:close" width={20} />
                    </IconButton>

                    {/* TITLE */}
                    <Typography
                        sx={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            mb: 3,
                            textAlign: "center",
                            color: "#1f2937",
                        }}
                    >
                        Book Your Demo
                    </Typography>

                    {/* FORM */}
                    <Box sx={{ display: "grid", gap: 2 }}>
                        <TextField
                            label="Email Address"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.55)",
                                    backdropFilter: "blur(12px)",
                                },
                            }}
                        />

                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.55)",
                                    backdropFilter: "blur(12px)",
                                },
                            }}
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
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.55)",
                                    backdropFilter: "blur(12px)",
                                },
                            }}
                        />

                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            disabled={loading || success}
                            fullWidth
                            sx={{
                                background: success
                                    ? "#22C55E"
                                    : "linear-gradient(90deg,#60A5FA,#3B82F6)",
                                color: "#fff",
                                py: 1.3,
                                borderRadius: "12px",
                                fontWeight: 700,
                                fontSize: "1rem",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 10px 20px rgba(59,130,246,0.28)",
                                },
                                transition: "all 0.25s ease",
                            }}
                        >
                            {loading
                                ? "Booking..."
                                : success
                                ? "Success!"
                                : "Submit Request"}
                        </Button>
                    </Box>

                    {success && (
                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: "center",
                                color: "#22C55E",
                                fontWeight: 700,
                            }}
                        >
                            Thank you! We'll contact you shortly.
                        </Typography>
                    )}
                </Box>
            </Modal>

            <style>{`
                @keyframes popupScale {
                    0% { opacity: 0; transform: scale(0.85); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </Box>
    );
}

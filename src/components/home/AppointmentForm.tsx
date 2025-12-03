import { Box, Button, Typography, TextField } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function CallToActionSection() {
    type FormState = {
        email: string;
        phone: string;
        date: string;
    };

    type ErrorsState = {
        email?: string;
        phone?: string;
        date?: string;
    };

    const [form, setForm] = useState<FormState>({
        email: "",
        phone: "",
        date: "",
    });

    const [errors, setErrors] = useState<ErrorsState>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const temp: ErrorsState = {};

        if (!form.email) temp.email = "Email is required";
        if (!form.phone) temp.phone = "Phone number is required";
        if (!form.date) temp.date = "Please select a date";

        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);

            // RESET FORM COMPLETELY
            setForm({ email: "", phone: "", date: "" });

            // Remove success after 2 seconds
            setTimeout(() => setSuccess(false), 2000);
        }, 1200);
    };

    return (
        <Box
            sx={{
                width: "95%",
                mx: "auto",
                mt: 6,
                mb: 10,
                background: "linear-gradient(135deg, #E6F6FF, #FFFFFF)",
                border: "1px solid #C7E9FF",
                borderRadius: "28px",
                p: { xs: 3, md: 5 },
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                textAlign: "left",

                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "center", md: "flex-start" },
            }}
        >
            {/* TITLE */}
            <Typography
                sx={{
                    fontSize: { xs: "1.35rem", md: "1.8rem" },
                    fontWeight: 600,
                    color: "#2F495E",
                    mb: 4,
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                Easily book a Demo in 3 simple steps
            </Typography>

            {/* 👇 KEY FIX FOR FULL FORM RESET */}
            <Box
                key={success ? "reset_form_1" : "reset_form_0"}
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr auto",
                    },
                    gap: 3,
                    alignItems: "flex-start",
                    width: "100%",
                }}
            >
                {/* EMAIL FIELD */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            mb: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#2F495E",
                        }}
                    >
                        <Icon icon="mdi:email-outline" width="20" />
                        Email Address <span style={{ color: "red" }}>*</span>
                    </Typography>

                    <TextField
                        name="email"
                        placeholder="Enter Your Email Address"
                        fullWidth
                        value={form.email}
                        onChange={handleChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                background: "#fff",
                            },
                        }}
                    />
                </Box>

                {/* PHONE FIELD */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            mb: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#2F495E",
                        }}
                    >
                        <Icon icon="mdi:phone" width="20" />
                        Contact Number <span style={{ color: "red" }}>*</span>
                    </Typography>

                    <TextField
                        name="phone"
                        placeholder="Enter Your Contact Number"
                        fullWidth
                        value={form.phone}
                        onChange={handleChange}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone}
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                background: "#fff",
                            },
                        }}
                    />
                </Box>

                {/* DATE FIELD */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "0.9rem",
                            mb: 0.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#2F495E",
                        }}
                    >
                        <Icon icon="mdi:calendar" width="20" />
                        Date of Demo's <span style={{ color: "red" }}>*</span>
                    </Typography>

                    <TextField
                        type="date"
                        name="date"
                        fullWidth
                        value={form.date}
                        onChange={handleChange}
                        error={Boolean(errors.date)}
                        helperText={errors.date}
                        InputProps={{
                            sx: {
                                borderRadius: "12px",
                                background: "#fff",
                                pr: 1,
                            },
                        }}
                    />
                </Box>

                {/* BUTTON WITH SUCCESS ANIMATION */}
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                        background: success
                            ? "#22C55E"
                            : "linear-gradient(135deg, #3FA9F5, #007BFF)",
                        px: 4,
                        py: 2,
                        borderRadius: "12px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        width: { xs: "100%", sm: "100%", md: "auto" },
                        mt: { xs: 2, sd: 2, md: 3.8 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        transition: "0.3s ease",
                    }}
                >
                    {loading ? (
                        <Icon icon="eos-icons:loading" width={26} />
                    ) : success ? (
                        <>
                            Success <Icon icon="lets-icons:check-fill" width={24} />
                        </>
                    ) : (
                        <>
                            Book Now <Icon icon="mdi:check-circle" width={22} />
                        </>
                    )}
                </Button>
            </Box>
        </Box>
    );
}

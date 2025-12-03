import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function CallToActionSection() {
    const phoneNumber = "+918777247832";
    const [copied, setCopied] = useState(false);

    const handleCallClick = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            navigator.clipboard.writeText(phoneNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        }
    };

    return (
        <Box
            sx={{
                width: "95%",
                margin: "0 auto",
                background: "#BFDDE8",
                py: { xs: 2.5, md: 3 },   // 🔥 reduced height
                px: { xs: 3, md: 10 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: { xs: "auto", md: "220px" }, // 🔥 reduced min-height
                borderRadius: "30px",
                overflow: "hidden",
                mb: 8,
                gap: { xs: 3, md: 0 },
            }}
        >
            {/* LEFT CONTENT */}
            <Box
                sx={{
                    width: { xs: "100%", md: "55%" },
                    textAlign: { xs: "center", md: "left" },
                }}
            >
                <Typography
                    variant="h4"          // 🔥 smaller title
                    sx={{
                        fontWeight: 700,
                        color: "#30343F",
                        mb: 1,
                        lineHeight: 1.2,
                        fontSize: { xs: "1.5rem", md: "1.9rem" },
                    }}
                >
                    Ready to Transform <br /> Your Digital Presence?
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: "#2F495E",
                        mb: 2,
                        width: { xs: "100%", md: "85%" },
                        mx: { xs: "auto", md: 0 },
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                    }}
                >
                    Let's work together to create something extraordinary for your brand.
                </Typography>

                <Button
                    variant="contained"
                    onClick={handleCallClick}
                    sx={{
                        background: copied ? "#22C55E" : "#3F8CFF",
                        color: "#fff",
                        px: { xs: 3, sm: 4 },
                        py: 1,
                        borderRadius: "30px",
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1.5,
                        mx: { xs: "auto", md: 0 },
                        transition: "0.3s",
                        "&:hover": {
                            background: copied ? "#16A34A" : "#3575D9",
                        },
                    }}
                >
                    {copied ? "Copied!" : "Call Us Now"}

                    <Icon
                        icon={copied ? "lets-icons:check-fill" : "ic:round-phone"}
                        width="20"
                    />
                </Button>
            </Box>

            {/* RIGHT IMAGE */}
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src="/callusnow.png"
                    alt="Call Us"
                    sx={{
                        width: { xs: "70%", sm: "60%", md: "80%" }, // 🔥 slightly smaller image
                        maxWidth: "260px",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Box>
    );
}

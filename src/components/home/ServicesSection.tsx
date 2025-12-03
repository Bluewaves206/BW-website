import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";

export default function ServicesSection() {
    const [active, setActive] = useState<number | null>(null);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const services = [
        {
            icon: "material-symbols-light:sms",
            title: "SMS",
            description:
                "Promotional SMS enables higher engagement with personalized offers, surveys, and event-driven responses.",
        },
        {
            icon: "mingcute:whatsapp-fill",
            title: "Whatsapp",
            description:
                "WhatsApp green-tick verification builds trust while enabling secure and effective customer communication.",
        },
        {
            icon: "fluent-mdl2:b-i-dashboard",
            title: "CRM",
            description:
                "Automate follow-ups, track clients, manage campaigns, and increase conversions with a powerful CRM.",
        },
        {
            icon: "streamline-ultimate:coding-apps-website-web-form-text-area-1",
            title: "Web Development",
            description:
                "We create responsive, lightning-fast websites and apps tailored to your brand and customer experience.",
        },
        {
            icon: "mingcute:mail-fill",
            title: "Bulk Email",
            description:
                "Send large-volume marketing emails with personalization, segmentation, and high deliverability rates.",
        },
        {
            icon: "iconoir:voice",
            title: "Voice Message",
            description:
                "Deliver pre-recorded voice messages to thousands instantly — reliable, fast, and cost-efficient.",
        },
    ];

    // Start hold timer
    const startHold = (index: number) => {
        timer.current = setTimeout(() => setActive(index), 500);
    };

    const stopHold = () => {
        if (timer.current) clearTimeout(timer.current);
    };

    const handleTap = (index: number) => {
        setActive(active === index ? null : index);
    };

    return (
        <Box
            sx={{
                textAlign: "center",
                my: 10,
                px: { xs: 2, sm: 4, md: 10 },
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
            >
                Our Services
            </Typography>

            <Typography
                sx={{
                    width: { xs: "95%", sm: "70%", md: "40%" },
                    mx: "auto",
                    mt: 1,
                    color: "#555",
                    lineHeight: 1.6,
                }}
            >
                Explore powerful tools and digital solutions crafted to help your business grow.
            </Typography>

            {/* GRID */}
            <Box
                sx={{
                    mt: 6,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "1fr 1fr 1fr",
                    },
                    gap: { xs: 3, sm: 4, md: 5 },
                }}
            >
                {services.map((service, index) => {
                    const isOpen = active === index;

                    return (
                        <Box
                            key={index}
                            onMouseEnter={() => setActive(index)}
                            onMouseLeave={() => setActive(null)}
                            onTouchStart={() => startHold(index)}
                            onTouchEnd={() => {
                                stopHold();
                                handleTap(index);
                            }}
                            sx={{
                                p: 3,
                                background: "#fff",
                                borderRadius: "18px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                                transition: "0.4s ease",
                                cursor: "pointer",
                                "&:hover": {
                                    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                                    transform: "translateY(-6px)",
                                },
                            }}
                        >
                            {/* ICON + TITLE */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                <Box
                                    sx={{
                                        background: "linear-gradient(135deg,#3BAFDA,#007FFF)",
                                        width: 55,
                                        height: 55,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Icon icon={service.icon} height="55%" color="#fff" />
                                </Box>

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#222",
                                        fontSize: { xs: "1.1rem", md: "1.2rem" },
                                    }}
                                >
                                    {service.title}
                                </Typography>
                            </Box>

                            {/* DESCRIPTION */}
                            <Box
                                sx={{
                                    mt: 2,
                                    maxHeight: isOpen ? "500px" : "52px", // FIXED: no more clipping
                                    overflow: "hidden",
                                    opacity: isOpen ? 1 : 0.75,
                                    transition: `
                                        max-height 1s cubic-bezier(0.25, 0.1, 0.25, 1),
                                        opacity 0.6s ease
                                    `,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#555",
                                        lineHeight: 1.6,
                                        fontSize: { xs: "0.9rem", md: "1rem" },
                                        display: "-webkit-box",
                                        WebkitLineClamp: isOpen ? "unset" : 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}

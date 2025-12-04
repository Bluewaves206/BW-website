import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
    const [active, setActive] = useState<number | null>(null);

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

    const isMobile = () => window.innerWidth < 768;

    const getActiveState = (index: number) =>
        isMobile() ? active === index : active === index;

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
                    const isOpen = getActiveState(index);

                    return (
                        <motion.div
                            key={index}
                            onMouseEnter={() => !isMobile() && setActive(index)}
                            onMouseLeave={() => !isMobile() && setActive(null)}
                            onClick={() =>
                                isMobile()
                                    ? setActive(isOpen ? null : index)
                                    : setActive(index)
                            }
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{ cursor: "pointer", position: "relative" }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "20px",
                                    p: 3,

                                    // DEFAULT COLORS
                                    background: "white",
                                    color: "#3F8CFF",

                                    minHeight: { xs: "230px", md: "250px" },
                                    transition: "0.4s ease",
                                }}
                            >
                                {/* BLUE FILL (ANIMATION) */}
                                <motion.div
                                    animate={{ width: isOpen ? "100%" : "0%" }}
                                    transition={{ duration: 0.45, ease: "easeInOut" }}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        height: "100%",
                                        backgroundColor: "#3F8CFF",
                                        zIndex: 0,
                                    }}
                                />

                                {/* CONTENT */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        zIndex: 1,
                                        color: isOpen ? "white" : "#3F8CFF", // TEXT CHANGES WHEN ACTIVE
                                        transition: "0.3s",
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
                                                fontSize: { xs: "1.1rem", md: "1.2rem" },
                                                color: isOpen ? "white" : "#3F8CFF",
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                    </Box>

                                    {/* DESCRIPTION */}
                                    <Box
                                        sx={{
                                            mt: 2,
                                            maxHeight: isOpen ? "300px" : "48px",
                                            overflow: "hidden",
                                            opacity: isOpen ? 1 : 0.75,
                                            transition: `
                                                max-height 0.8s ease,
                                                opacity 0.5s ease
                                            `,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: isOpen ? "white" : "#555",
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
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}

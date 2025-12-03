import { Box, Typography, Avatar, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Olivia Brown",
            role: "Creative Director",
            image: "/profile1.jpg",
            text: "Bluewaves Media elevated our brand experience completely. Their creative execution feels premium and highly polished.",
        },
        {
            name: "Amit Verma",
            role: "Marketing Lead, Nexa Group",
            image: "/profile2.jpg",
            text: "Their automation workflow improved our efficiency drastically. One of the best teams we’ve collaborated with.",
        },
        {
            name: "Priya Sharma",
            role: "Founder, Growth Labs",
            image: "/profile3.jpg",
            text: "They understand what modern brands need. Smooth process, fast delivery, and outstanding support.",
        },
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 120 : -120,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (direction: number) => ({
            x: direction > 0 ? -120 : 120,
            opacity: 0,
        }),
    };

    return (
        <Box
            sx={{
                mt: 14,
                px: { xs: 2, sm: 4, md: 10 },
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Heading */}
            <Typography
                variant="h3"
                sx={{
                    textAlign: "center",
                    mb: { xs: 6, md: 8 },
                    fontWeight: 700,
                    fontSize: { xs: "1.9rem", md: "2.5rem" },
                }}
            >
                Loved by Clients
            </Typography>

            {/* Slider */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "900px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {/* - Left Arrow - */}
                <Button
                    onClick={prev}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "absolute",
                        top: "50%",
                        left: "-60px",
                        transform: "translateY(-50%)",
                        width: 45,
                        height: 45,
                        minWidth: 0,
                        background: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                        "&:hover": { background: "#E8F1FF" },
                    }}
                >
                    <Icon icon="mynaui:arrow-left" width={22} color="#3F8CFF" />
                </Button>

                {/* Testimonial Card */}
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.45 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.25}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -60) next();
                            if (info.offset.x > 60) prev();
                        }}
                        style={{ width: "100%" }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                background: "rgba(255,255,255,0.85)",
                                backdropFilter: "blur(12px)",
                                borderRadius: "22px",
                                p: { xs: 4, md: 5 },
                                boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                                textAlign: "center",
                                position: "relative",
                            }}
                        >
                            {/* FIXED: Avatar doesn't overlap on mobile */}
                            <Avatar
                                src={testimonials[index].image}
                                sx={{
                                    width: { xs: 70, md: 85 },
                                    height: { xs: 70, md: 85 },
                                    position: "absolute",
                                    top: { xs: "-30px", md: "-42px" },
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    border: "4px solid white",
                                    boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                                    zIndex: 2,
                                }}
                            />

                            {/* Quote */}
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: { xs: 7, md: 6 }, // FIXED SPACING
                                    mb: 3,
                                    color: "#475569",
                                    lineHeight: 1.7,
                                    fontSize: { xs: "1rem", md: "1.15rem" },
                                }}
                            >
                                “{testimonials[index].text}”
                            </Typography>

                            {/* Name */}
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 700 }}
                            >
                                {testimonials[index].name}
                            </Typography>

                            {/* Role */}
                            <Typography
                                variant="subtitle2"
                                sx={{ color: "#64748B" }}
                            >
                                {testimonials[index].role}
                            </Typography>
                        </Box>
                    </motion.div>
                </AnimatePresence>

                {/* - Right Arrow - */}
                <Button
                    onClick={next}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "absolute",
                        top: "50%",
                        right: "-60px",
                        transform: "translateY(-50%)",
                        width: 45,
                        height: 45,
                        minWidth: 0,
                        background: "#fff",
                        borderRadius: "50%",
                        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
                        "&:hover": { background: "#E8F1FF" },
                    }}
                >
                    <Icon icon="mynaui:arrow-right" width={22} color="#3F8CFF" />
                </Button>
            </Box>

            {/* Pagination Dots */}
            <Box sx={{ display: "flex", gap: 1.2, mt: 3 }}>
                {testimonials.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIndex(i)}
                        sx={{
                            width: index === i ? 12 : 10,
                            height: index === i ? 12 : 10,
                            borderRadius: "50%",
                            background: index === i ? "#3F8CFF" : "#BFC9D9",
                            cursor: "pointer",
                            transition: "0.2s",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

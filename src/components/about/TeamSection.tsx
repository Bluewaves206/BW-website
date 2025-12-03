import { Box, Button, Typography, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import teamImg from "../../assets/TeamMem.png";
import { useEffect, useRef } from "react";

export default function TeamSection() {
    const teamMembers = [
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
        { name: "Ashish Kalankoria", role: "CEO", img: teamImg },
    ];

    const scrollRef = useRef<HTMLDivElement | null>(null);

    // ⭐ AUTO SCROLL ONLY ON MOBILE
    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        if (window.innerWidth > 768) return; // Only mobile

        const scrollAmount = 1;
        let direction = 1;

        const interval = setInterval(() => {
            if (!container) return;

            container.scrollLeft += scrollAmount * direction;

            if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                direction = -1;
            } else if (container.scrollLeft <= 0) {
                direction = 1;
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    // ⭐ Manual Scroll Buttons (Mobile)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ width: "100%", my: 12, px: { xs: 3, sm: 6, md: 10 } }}>

            {/* Label */}
            <Box
                sx={{
                    display: "flex",
                    width: "fit-content",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "2rem",
                    backgroundColor: "#EFEBFE",
                    color: "#3F8CFF",
                    p: 1.5,
                    borderRadius: "12px",
                    mb: 2,
                }}
            >
                <Icon icon="fluent:people-team-20-regular" />
                <Typography fontWeight={600}>Our Team</Typography>
            </Box>

            {/* Heading */}
            <Typography variant="h4" fontWeight={600} gutterBottom>
                Meet our team members
            </Typography>

            {/* Subtitle */}
            <Typography variant="body1" sx={{ maxWidth: "600px", color: "#666" }}>
                Complete the form below to send us a message. Our support team will promptly respond to your request.
            </Typography>

            {/* Buttons row (always one row) */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    mt: 3,
                    flexWrap: "nowrap",
                }}
            >
                <Button
                    endIcon={<Icon icon="basil:arrow-right-outline" style={{ fontSize: "2rem" }} />}
                    sx={{
                        color: "black",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "20px",
                        textTransform: "none",
                        px: 3,
                        py: 1.2,
                        fontSize: "1rem",
                        whiteSpace: "nowrap",
                    }}
                >
                    Apply Now
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#3F8CFF",
                        borderRadius: "20px",
                        textTransform: "none",
                        px: 3,
                        py: 1.2,
                        fontSize: "1rem",
                        whiteSpace: "nowrap",
                    }}
                >
                    Contact Us
                </Button>
            </Box>

            {/* ⭐ Mobile Arrows + Slider */}
            <Box sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center", mt: 4, gap: 1 }}>

                {/* LEFT ARROW */}
                <IconButton
                    onClick={scrollLeft}
                    sx={{
                        background: "#3F8CFF",
                        color: "white",
                        "&:hover": { background: "#3575D9" },
                        borderRadius: "50%",
                    }}
                >
                    <Icon icon="mdi:chevron-left" width="28" />
                </IconButton>

                {/* MOBILE SCROLL CONTAINER */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        overflowX: "auto",
                        gap: 3,
                        scrollBehavior: "smooth",
                        pb: 1,
                        width: "100%",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {teamMembers.map((member, i) => (
                        <Box
                            key={i}
                            sx={{
                                minWidth: "180px",
                                height: "420px",
                                borderRadius: "15px",
                                backgroundImage: `url(${member.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                flexShrink: 0,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                color: "white",
                            }}
                        >
                            <Box
                                sx={{
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))",
                                    p: 2,
                                    borderRadius: "15px",
                                    textAlign: "center",
                                }}
                            >
                                <Typography fontWeight={600}>{member.name}</Typography>
                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    {member.role}
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                                    <Icon icon="mdi:facebook" width="20" />
                                    <Icon icon="fa6-brands:x-twitter" width="20" />
                                    <Icon icon="mdi:linkedin" width="20" />
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* RIGHT ARROW */}
                <IconButton
                    onClick={scrollRight}
                    sx={{
                        background: "#3F8CFF",
                        color: "white",
                        "&:hover": { background: "#3575D9" },
                        borderRadius: "50%",
                    }}
                >
                    <Icon icon="mdi:chevron-right" width="28" />
                </IconButton>
            </Box>

            {/* ⭐ Desktop Grid */}
            <Box
                sx={{
                    display: { xs: "none", sm: "grid" },
                    gridTemplateColumns: {
                        sm: "repeat(3, 1fr)",
                        md: "repeat(4, 1fr)",
                        lg: "repeat(6, 1fr)",
                    },
                    gap: 3,
                    mt: 5,
                }}
            >
                {teamMembers.map((member, i) => (
                    <Box
                        key={i}
                        sx={{
                            backgroundImage: `url(${member.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "420px",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            color: "white",
                        }}
                    >
                        <Box
                            sx={{
                                background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9))",
                                p: 2,
                                borderRadius: "15px",
                                textAlign: "center",
                            }}
                        >
                            <Typography fontWeight={600}>{member.name}</Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                {member.role}
                            </Typography>

                            <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                                <Icon icon="mdi:facebook" width="20" />
                                <Icon icon="fa6-brands:x-twitter" width="20" />
                                <Icon icon="mdi:linkedin" width="20" />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BulkServicesSection() {
    const services = [
        {
            title: "Freshness Guaranteed",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam ex doloremque, tempore aspernatur molestiae eum perspiciatis."
        },
        {
            title: "Freshness Guaranteed",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores obcaecati commodi, consectetur quasi minus ipsa."
        },
        {
            title: "Freshness Guaranteed",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus alias pariatur esse rerum corporis quasi dolorum!"
        },
        {
            title: "Freshness Guaranteed",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur commodi, consectetur quasi minus ipsa quod deleniti voluptatem."
        }
    ];

    const [active, setActive] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    const getActiveState = (index: number) => {
        const isMobile = window.innerWidth < 768;
        return isMobile ? active === index : hoverIndex === index;
    };

    return (
        <Box
            sx={{
                px: { xs: 2, sm: 4, md: 10 },
                width: "100%",
                textAlign: "center",
                my: { xs: 8, md: 18 }
            }}
        >
            {/* FIXED MOBILE HEADING */}
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    wordSpacing: { xs: 2, md: 5 },
                    fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2.4rem" },
                    lineHeight: { xs: 1.3, sm: 1.35 },
                    px: { xs: 1 },
                }}
            >
                THE BULK{" "}
                <span
                    style={{
                        color: "#fff",
                        backgroundColor: "#161B20",
                        padding: "6px 10px",
                        borderRadius: "15px",
                        whiteSpace: "nowrap",
                    }}
                >
                    SERVICES
                </span>{" "}
                WE PROVIDE FOR YOU
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
                    mx: "auto",
                    color: "#666666",
                    fontFamily: "Outfit",
                    mt: 2,
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
                incidunt iusto, adipisci exercitationem ducimus aspernatur mollitia.
            </Typography>

            {/* SERVICES GRID */}
            <Box
                sx={{
                    mt: 6,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                        md: "repeat(4, 1fr)"
                    },
                    gap: 4,
                }}
            >
                {services.map((item, index) => {
                    const isActive = getActiveState(index);

                    return (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            onClick={() => {
                                if (window.innerWidth < 768) setActive(index);
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{ cursor: "pointer" }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    height: "280px",               // REDUCED height slightly
                                    borderRadius: "30px",
                                    backgroundColor: "#3F8CFF",
                                    color: isActive ? "#3F8CFF" : "white",
                                    p: 3,

                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",

                                    textAlign: "center",
                                    transition: "color 0.35s ease",
                                }}
                            >
                                {/* LEFT TO RIGHT WHITE FILL */}
                                <motion.div
                                    animate={{ width: isActive ? "100%" : "0%" }}
                                    transition={{ duration: 0.45, ease: "easeInOut" }}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        height: "100%",
                                        backgroundColor: "white",
                                        zIndex: 0,
                                    }}
                                />

                                {/* TEXT */}
                                <Box sx={{ position: "relative", zIndex: 1, px: 2 }}>
                                    <Typography
                                        variant="h5"
                                        fontWeight={700}
                                        sx={{
                                            fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.35rem" },
                                            mb: 1.5,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: { xs: "0.95rem", sm: "1rem" },
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}

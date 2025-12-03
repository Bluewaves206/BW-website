import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import homeArticle from "../../assets/HomeArticleImg.png";

export default function ArticlesSection() {
    return (
        <Box
            sx={{
                backgroundColor: "#d4dff0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                py: 10,
                px: { xs: 2, sm: 4, md: 10 },
            }}
        >
            {/* Heading */}
            <Typography
                gutterBottom
                variant="h2"
                sx={{
                    textAlign: "center",
                    width: { xs: "100%", md: "60%" },
                    fontWeight: 700,
                    fontSize: { xs: "1.7rem", md: "2.5rem" },
                    lineHeight: 1.3,
                }}
            >
                <span style={{ color: "#3F8CFF" }}>New Articles</span> and Knowledge
            </Typography>

            <Typography
                variant="subtitle2"
                sx={{
                    width: { xs: "100%", md: "70%" },
                    textAlign: "center",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    color: "#545971",
                }}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ut ipsam veniam alias quis exercitationem,
                possimus vel expedita repellat eum in rerum quia modi tempora dolor?
            </Typography>

            {/* Articles Grid */}
            <Box
                sx={{
                    mt: 6,
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",               // mobile: 1 card
                        sm: "repeat(2, 1fr)",     // small screens: 2 cards
                        md: "repeat(3, 1fr)",     // desktop: 3 cards
                    },
                    gap: { xs: 4, sm: 5, md: 6 },
                    width: "100%",
                }}
            >
                {[1, 2, 3].map((item) => (
                    <Box
                        key={item}
                        sx={{
                            width: "100%",
                            background: "#ffffff",
                            borderRadius: "14px",
                            p: 2,
                            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                            transition: "0.3s ease",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                            },
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={homeArticle}
                            alt="homeArticle"
                            sx={{
                                width: "100%",
                                borderRadius: "10px",
                                mb: 1,
                                objectFit: "cover",
                            }}
                        />

                        {/* Date */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: "#545971",
                                fontWeight: 600,
                                mt: 1,
                                fontSize: { xs: "0.85rem", md: "1rem" },
                            }}
                        >
                            19 Jan 2023
                        </Typography>

                        {/* Title */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                mb: 1,
                                fontSize: { xs: "1rem", md: "1.2rem" },
                            }}
                        >
                            lorem ipsum dolor sit amet consecte asndlansdlaldaldmlaskd
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "#545971",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                fontSize: { xs: "0.85rem", md: "1rem" },
                                lineHeight: "1.4rem",
                                maxHeight: "2.8rem",
                            }}
                        >
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut ipsam veniam alias quis
                            exercitationem, possimus expedita repellat eum in rerum quia modi tempora dolor?
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* View More Button */}
            <Button
                variant="text"
                size="large"
                sx={{
                    color: "#15B2F5",
                    mt: 10,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                }}
                endIcon={<Icon icon="ri:arrow-right-s-line" />}
            >
                View More
            </Button>
        </Box>
    );
}

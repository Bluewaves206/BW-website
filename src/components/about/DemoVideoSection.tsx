import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

export default function DemoVideoSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <Box sx={{ px: { xs: 4, md: 10, lg: 20 }, width: "100%", mt: 10 }}>
            
            {/* SUBTITLE */}
            <Typography sx={{ fontSize: "0.9rem", color: "#3F8CFF" }}>
                BLUE WAVES MEDIA
            </Typography>

            {/* TITLE + BUTTON ROW */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: 1,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 600,
                        display: "inline-block",
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                >
                    Book a Product Demo
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                        bgcolor: "#3F8CFF",
                        color: "#fff",
                        borderRadius: "30px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        px: 3,
                        ".MuiButton-endIcon": { marginLeft: 1 },
                        "&:hover": { bgcolor: "#3575D9" },
                    }}
                    endIcon={
                        <Box
                            sx={{
                                border: "2px solid #fff",
                                borderRadius: "50%",
                                width: 36,
                                height: 36,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: "-10px",
                            }}
                        >
                            <Icon icon="formkit:arrowright" width={18} color="#fff" />
                        </Box>
                    }
                >
                    Read More
                </Button>
            </Box>

            {/* VIDEO WRAPPER */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 5,
                    position: "relative",
                }}
            >
                <video
                    ref={videoRef}
                    width="100%"
                    poster="src/assets/DemoVid.png" // replace with your file
                    onClick={handlePlayPause}
                    onEnded={() => setIsPlaying(false)}
                    style={{
                        borderRadius: "14px",
                        cursor: "pointer",
                        display: "block",
                    }}
                >
                    <source src="/your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* PLAY ICON OVERLAY */}
                {!isPlaying && (
                    <Icon
                        icon="mdi:play-circle"
                        style={{
                            fontSize: 80,
                            color: "white",
                            position: "absolute",
                        }}
                    />
                )}
            </Box>

        </Box>
    );
}

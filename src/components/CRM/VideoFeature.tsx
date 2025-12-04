import { Box, Typography, Button, Stack, IconButton, Slider } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

export default function VideoFeatureSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(true);

const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const resetHideTimer = useCallback(() => {
        setShowControls(true);

        if (hideTimer.current) clearTimeout(hideTimer.current);

        hideTimer.current = setTimeout(() => {
            setShowControls(false);
        }, 3000);
    }, []);

    useEffect(() => {
        resetHideTimer();

        const container = videoContainerRef.current;
        if (!container) return;

        const events = ["mousemove", "touchstart"];

        events.forEach((ev) => {
            container.addEventListener(ev, resetHideTimer);
        });

        return () => {
            events.forEach((ev) => {
                container.removeEventListener(ev, resetHideTimer);
            });
        };
    }, [resetHideTimer]);

    // NORMAL PLAY
    const normalPlay = async () => {
        if (!videoRef.current) return;

        try {
            await videoRef.current.play();
            setIsPlaying(true);
        } catch (error) {
            console.log("Play error:", error);
        }
    };

    // FULLSCREEN PLAY FOR WATCH DEMO
    const playWithFullscreen = async () => {
        if (!videoRef.current) return;

        try {
            await videoRef.current.play();
            setIsPlaying(true);

            if (videoRef.current.requestFullscreen) {
                await videoRef.current.requestFullscreen();
            }
        } catch (error) {
            console.log("Fullscreen play blocked:", error);
        }
    };

    const handleWatchDemo = async () => {
        if (!videoContainerRef.current) return;

        videoContainerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        setTimeout(() => {
            playWithFullscreen();
        }, 500);
    };

    const togglePlayPause = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            normalPlay();
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;

        const percent =
            (videoRef.current.currentTime / videoRef.current.duration) * 100;

        setProgress(percent);
    };

    const handleSeek = (_: Event, value: number | number[]) => {
        if (videoRef.current) {
            const numValue = Array.isArray(value) ? value[0] : value;
            const newTime =
                (numValue / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(numValue);
        }
    };

    const handleFullscreen = () => {
        if (videoRef.current?.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    // Auto pause when out of view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting && videoRef.current) {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.3 }
        );

        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ width: "100%", background: "#fff", py: { xs: 10, md: 14 } }}>
            <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>

                {/* HEADER SECTION */}
                <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontSize: { xs: "32px", md: "40px" }, fontWeight: 700, maxWidth: "400px" }}>
                            The best software teams ship quickly and often.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography sx={{ fontSize: "16px", color: "#555", maxWidth: "430px", mb: 2 }}>
                            With its intuitive interface and powerful features, Stellar empowers
                            businesses to leverage technology for growth.
                        </Typography>

                        <Button
                            onClick={handleWatchDemo}
                            sx={{
                                background: "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "30px",
                                px: 3,
                                py: 1,
                                fontWeight: 600,
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >
                            Watch Demo <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                        </Button>
                    </motion.div>
                </Stack>

                {/* VIDEO PLAYER */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <Box
                        ref={videoContainerRef}
                        sx={{
                            mt: 6,
                            position: "relative",
                            width: "100%",
                            maxWidth: "900px",
                            mx: "auto",
                            borderRadius: "22px",
                            overflow: "hidden",
                            boxShadow: "0px 12px 30px rgba(0,0,0,0.10)",
                            cursor: "pointer",
                        }}
                        onClick={togglePlayPause}
                    >
                        <video
                            ref={videoRef}
                            src="crm/crmvideo.mp4"
                            width="100%"
                            controls={false}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onTimeUpdate={handleTimeUpdate}
                            style={{ display: "block" }}
                        />

                        {/* OVERLAY PLAY BUTTON */}
                        {!isPlaying && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    background: "rgba(40, 167, 226, 0.45)",
                                    px: { xs: 2, md: 3 },
                                    py: 1,
                                    borderRadius: "30px",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    backdropFilter: "blur(6px)",
                                }}
                            >
                                <PlayCircleFilledWhiteIcon sx={{ fontSize: 28 }} />

                                {/* DESKTOP ONLY TEXT */}
                                <Typography sx={{ display: { xs: "none", md: "block" } }}>
                                    Play Video
                                </Typography>
                            </Box>
                        )}

                        {/* AUTO-HIDE CUSTOM CONTROLS */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                bgcolor: "rgba(0,0,0,0.45)",
                                backdropFilter: "blur(6px)",
                                p: 1.2,
                                display: showControls ? "flex" : "none",
                                alignItems: "center",
                                gap: 2,
                                transition: "opacity 0.3s ease",
                            }}
                        >
                            <IconButton onClick={togglePlayPause} sx={{ color: "#2795f0" }}>
                                {isPlaying ? <PauseIcon /> : <PlayCircleFilledWhiteIcon />}
                            </IconButton>

                            <IconButton onClick={toggleMute} sx={{ color: "#2795f0" }}>
                                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                            </IconButton>

                            <Slider
                                value={progress}
                                onChange={handleSeek}
                                sx={{ color: "#2795f0", flexGrow: 1 }}
                            />

                            <IconButton onClick={handleFullscreen} sx={{ color: "#2795f0" }}>
                                <FullscreenIcon />
                            </IconButton>
                        </Box>
                    </Box>

                    <Typography
                        sx={{
                            mt: 2,
                            fontSize: "16px",
                            color: "#666",
                            maxWidth: "900px",
                            mx: "auto",
                            textAlign: "left",
                        }}
                    >
                        business. Our state-of-the-art SaaS and technology
                    </Typography>
                </motion.div>
            </Box>
        </Box>
    );
}

import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const MotionBox = motion(Box);

export default function HeroSection(): React.JSX.Element {
  // Animation Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "100vh", md: "120vh" },
        backgroundImage: 'url("crm/herobackground.png")',
        backgroundSize: "cover",  
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        pt: { xs: 8, md: 14 },
        pb: { xs: 10, md: 14 },
        px: { xs: 2, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* WATCH DEMO – hidden on mobile, bg removed */}
      <MotionBox
        initial={{ opacity: 0, x: 35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "absolute",
          right: { xs: "-999px", sm: "-999px", md: 14 }, // hide mobile
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 20,
        }}
      >
        <Box
          sx={{
            transform: "rotate(-90deg)",
            display: "flex",
            alignItems: "center",
            gap: 1,
            userSelect: "none",
          }}
        >
          <Box sx={{ transform: "rotate(90deg)" }}>
            <PlayCircleFilledWhiteIcon sx={{ fontSize: 26, color: "#fff" }} />
          </Box>

<Typography
  sx={{
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: 0.6,
  }}
>
  WATCH DEMO
</Typography>

        </Box>
      </MotionBox>

      {/* Badge */}
<MotionBox initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      px: 2,
      py: 1.2,
      pr: 2.5,
      borderRadius: "40px",
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      width: "fit-content",
    }}
  >
    {/* LEFT "NEW" BADGE */}
    <Box
      sx={{
        bgcolor: "rgba(99,127,255,0.25)",
        color: "#5261FF",
        fontWeight: 700,
        px: 2,
        py: 0.7,
        borderRadius: "30px",
        fontSize: 13,
      }}
    >
      New
    </Box>

    {/* CENTER TEXT */}
    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 600,
        color: "#2E2F3E",
        whiteSpace: "nowrap",
      }}
    >
      Smart CRM Platform
    </Typography>

    {/* RIGHT ARROW ICON */}
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "transparent",
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 16, color: "#2E2F3E" }} />
    </Box>
  </Box>
</MotionBox>


      {/* Title */}
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideLeft}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "30px", sm: "42px", md: "56px" },
            lineHeight: 1.2,
            color: "#000",
          }}
        >
          Grow Your Business <br />
          with{" "}
          <Box component="span" sx={{ color: "#2b77ff" }}>
            Smart CRM
          </Box>
        </Typography>
      </MotionBox>
      {/* Subtitle */}
      <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <Typography
          sx={{
            mt: 2,
            maxWidth: 700,
            color: "#444",
            fontSize: { xs: 14, sm: 16 },
            mx: "auto",
            lineHeight: 1.5,
          }}
        >
          Build stronger customer relationships, make more sales and save time.
          Blue Waves makes it easy to build the exact CRM your business needs.
        </Typography>
      </MotionBox>

      {/* Buttons */}
      <MotionBox initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight}>
        <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
          {/* Get Started */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Button
              sx={{
                background: "linear-gradient(90deg, #559dff, #326df8)",
                color: "white",
                px: 4,
                py: 1.3,
                borderRadius: "30px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Learn More */}
          <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Button
              sx={{
                color: "#111",
                fontWeight: 600,
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.3,
                borderRadius: "30px",
                background: "rgba(255,255,255,0.95)",
              }}
            >
              Learn More
              <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </Button>
          </motion.div>
        </Stack>
      </MotionBox>

      {/* Dashboard Image */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        sx={{ mt: 10 }}
      >
        <Box
          component="img"
          src="/crm/crm-dashboard.png"
          sx={{
            width: "100%",
            maxWidth: 1100,
            borderRadius: "20px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          }}
        />
      </MotionBox>

      {/* SCROLL DOWN */}
<MotionBox
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  sx={{
    position: "absolute",
    right: { xs: "-999px", sm: "-999px", md: 70 }, 
    bottom: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
  }}
>
  {/* VERTICAL TEXT */}
  <Typography
    sx={{
      fontSize: 15,
      fontWeight: 700,
      color: "#fff",
      writingMode: "vertical-rl",
      textOrientation: "upright",
      letterSpacing: "3px",
    }}
  >
    SCROLL DOWN
  </Typography>

  {/* DOWN ARROW */}
  <KeyboardArrowDownIcon
    sx={{
      fontSize: 26,
      color: "#fff",
      mt: 1,
    }}
  />
</MotionBox>
{/* Publishers Row Section */}
<MotionBox
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }}
  sx={{
    mt: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1.5,
    cursor: "pointer",
  }}
  onClick={() => {
    window.location.hash = "publishers";
  }}
>
  <Typography
    sx={{
      fontSize: 15,
      color: "#333",
      fontWeight: 500,
    }}
  >
    Publishers who trust us
  </Typography>

  <ArrowForwardIosIcon
    sx={{ fontSize: 16, color: "#00A8A4" }}
  />
</MotionBox>



    </Box>
  );
}

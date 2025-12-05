import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function IVRHero() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "85vh", md: "90vh" },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        gap: 4,

        // Keep original padding
        px: { xs: 2, md: "60px 0px" },
        py: { xs: 6, md: 10 },

background: `
  linear-gradient(
    180deg,
    #7396f7 0%,
    #A5C3FF 35%,
    #C9D9FF 70%,
    #E4ECFF 100%
  )
`
      }}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}

        // ⭐ Added left margin here
        style={{ marginLeft: "40px" }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              backgroundColor: "white",
              color: "#3A68FF",
              px: 2,
              py: 1,
              borderRadius: 3,
              fontWeight: 400,
              fontSize: "0.9rem",
              mb: 3,
            }}
          >
            <Icon icon="ic:baseline-phone-in-talk" />
            Interactive Voice Response
          </Box>
        </motion.div>

        {/* Heading */}
        <Typography
          component={motion.h1}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          sx={{
            fontSize: { xs: "2rem", md: "3.5rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#1A1A1A",
            width: { xs: "100%", md: "90%" },
            mb: 2,
          }}
        >
          Smart <span style={{ color: "#3A68FF" }}>IVR</span> Solutions for Your
          Business
        </Typography>

        {/* Paragraph */}
        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#4A4A4A",
            width: { xs: "100%", md: "80%" },
            mb: 4,
          }}
        >
          Transform your customer experience with intelligent automated phone
          systems. Reduce wait times, improve efficiency, and deliver exceptional
          service 24/7.
        </Typography>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Button
            variant="contained"
            component="a"
            href="/contact"
            sx={{
              backgroundColor: "#2E2E2E",
              color: "#fff",
              px: 3,
              py: 1.3,
              borderRadius: "40px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "none",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              "&:hover": { backgroundColor: "#1F1F1F" },
              textDecoration: "none",
            }}
          >
            GET STARTED

            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#2F7CFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 1,
              }}
            >
              <Icon
                icon="ri:arrow-right-up-line"
                style={{ color: "white", fontSize: 18 }}
              />
            </Box>
          </Button>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE IMAGE — FULL RIGHT ALIGN */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Box
          component="img"
          src="/IVR/HERO.png"
          alt="IVR Interface"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 0,
            objectFit: "cover",
            objectPosition: "right",
            transform: { md: "scale(1.05)", xs: "scale(1)" },
            m: 0,
            p: 0,
          }}
        />
      </motion.div>
    </Box>
  );
}

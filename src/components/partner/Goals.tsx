// components/partner/Goals.tsx
import { Avatar, Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ FIXED type-only import

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Typed animation variants (TypeScript safe)
const slideSpring: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 80,
    },
  },
};

const cardMotion: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 90,
    },
  }),
};

export default function Goals() {
  return (
    <MotionBox
      variants={slideSpring}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        py: { xs: 6, md: 10 },
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 10 },
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      {/* LEFT SIDE */}
      <MotionBox
        variants={slideSpring}
        sx={{
          width: { xs: "100%", md: "45%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <MotionTypography
          variants={slideSpring}
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.25,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            px: 2,
            "& .goalsBadge": {
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "12px",
              lineHeight: 1,
            },
          }}
        >
          <span
            className="goalsBadge"
            style={{
              color: "white",
              backgroundColor: "#2C313F",
            }}
          >
            Goals
          </span>
          <br />
          of Our Wholesale Company
        </MotionTypography>

        <MotionTypography
          variants={slideSpring}
          sx={{
            width: { xs: "100%", md: "75%" },
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            color: "#555",
            px: 1,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dignissimos accusamus quo beatae ab dolore animi neque perferendis
          possimus numquam tempora suscipit.
        </MotionTypography>
      </MotionBox>

      {/* RIGHT SIDE CARDS */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, md: 5 },
          alignItems: "center",
        }}
      >
        {[
          {
            icon: "healthicons:man-outline",
            title: "Customer Satisfaction",
            text: "We prioritize long-term relationships and ensure wholesale clients receive unmatched service quality.",
          },
          {
            icon: "mdi:bullseye-arrow",
            title: "Achieve Business Targets",
            text: "Providing the tools and assistance to help your business scale seamlessly across markets.",
          },
          {
            icon: "mdi:handshake",
            title: "Reliable Partnerships",
            text: "We establish long-term trust and build a sustainable ecosystem that supports mutual growth.",
          },
        ].map((item, i) => (
          <MotionBox
            key={i}
            custom={i}
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{
              width: "100%",
              maxWidth: 550,
              backgroundColor: "white",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            {/* ICON (Visible on mobile + desktop) */}
            <Avatar
              sx={{
                width: 70,
                height: 70,
                position: "absolute",
                left: -20,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#3F8CFF",
                color: "white",
                display: "flex",
                boxShadow: "0 4px 12px rgba(63,140,255,0.4)",
              }}
            >
              <Icon icon={item.icon} style={{ fontSize: 38 }} />
            </Avatar>

            {/* TEXT CONTENT */}
            <Box sx={{ pl: 8 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 1, color: "#2C313F" }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  color: "#555",
                  lineHeight: 1.5,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </MotionBox>
        ))}
      </Box>
    </MotionBox>
  );
}

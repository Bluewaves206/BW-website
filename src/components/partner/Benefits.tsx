import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Parent animation definition (fade + slide)
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.15 },
  },
};

// Child animation
const childFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Benefits() {
  return (
    <>
      {/* ======================================
          WHY PARTNER WITH US
      ======================================= */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          mt: { xs: 8, md: 6 },
          backgroundColor: "white",
          py: { xs: 8, md: 6 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: { xs: 3, md: 2 },
        }}
      >
        {/* Tag */}
        <MotionBox
          variants={childFadeUp}
          sx={{
            backgroundColor: "#EFEBFE",
            color: "#3F8CFF",
            p: 1.2,
            px: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            borderRadius: 3,
            fontSize: "1.4rem",
          }}
        >
          <Icon icon={"fluent:people-team-16-regular"} />
          <span style={{ fontSize: "1.2rem" }}>Our Team</span>
        </MotionBox>

        {/* Heading */}
        <MotionTypography
          variants={childFadeUp}
          variant="h3"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            px: { xs: 1, md: 0 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Why Partner with BlueWaves Media?
        </MotionTypography>

        {/* Sub text */}
        <MotionTypography
          variants={childFadeUp}
          variant="body1"
          sx={{
            color: "#5A5C62",
            textAlign: "center",
            px: { xs: 2, md: 10 },
            maxWidth: "800px",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          Our partnerships are built on trust, innovation, and mutual success.
        </MotionTypography>

        {/* BENEFIT CARDS */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: { xs: 3, sm: 4, md: 6 },
            flexWrap: "wrap",
            mt: 4,
          }}
        >
          {[
            {
              icon: "streamline-plump:graph-bar-increase-solid",
              title: "Mutual Growth",
              text: "Together we achieve more...",
            },
            {
              icon: "tabler:rocket",
              title: "Expanded Reach",
              text: "Equipped with the right tools...",
            },
            {
              icon: "system-uicons:paper-plane",
              title: "Expanded Reach",
              text: "Our partnerships are built on shared success...",
            },
            {
              icon: "circum:globe",
              title: "Community",
              text: "Join a like-minded community...",
            },
          ].map((item, i) => (
            <MotionBox
              key={i}
              variants={childFadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              sx={{
                width: {
                  xs: "100%",
                  sm: "45%",
                  md: 220,
                },
                mx: { xs: 1, sm: 0 }, // 🔥 slight side gap ONLY on mobile
                minHeight: { xs: 200, md: 260 },
                backgroundColor: "#E9F3FF",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                px: { xs: 3, sm: 3 },
                py: { xs: 3, sm: 4 },
                boxShadow: "0 8px 16px rgba(90, 196, 255, 0.3)",
              }}
            >
              <Icon
                icon={item.icon}
                style={{
                  color: "#3D8BFF",
                  fontSize: "3rem",
                  marginBottom: 12,
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  color: "#3D8BFF",
                  fontWeight: 600,
                  mb: 1,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "#333",
                  fontSize: { xs: "0.85rem", md: "0.95rem" },
                  lineHeight: 1.5,
                }}
              >
                {item.text}
              </Typography>
            </MotionBox>
          ))}
        </Box>
      </MotionBox>

      {/* ======================================
          HOW TO BECOME A PARTNER
      ======================================= */}
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 8,
          width: "100%",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 4, md: 6 },
          background: "#B8CEEE",
          flexDirection: "column",
        }}
      >
        {/* Heading */}
        <MotionTypography
          variants={childFadeUp}
          variant="h2"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          How to Become a <br />
          <span
            style={{
              color: "white",
              backgroundColor: "#2C313F",
              borderRadius: 10,
              padding: "6px 25px",
            }}
          >
            Partner
          </span>
        </MotionTypography>

        <MotionTypography
          variants={childFadeUp}
          variant="h6"
          sx={{
            mt: 3,
            textAlign: "center",
            color: "#4E5156",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            maxWidth: "800px",
            px: 2,
          }}
        >
          Our streamlined process ensures a smooth journey.
        </MotionTypography>

        {/* Steps Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 5,
            width: "100%",
            maxWidth: "900px",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {["Initial Consultation", "Evaluation", "Onboarding"].map(
            (title, i) => (
              <MotionBox
                key={i}
                variants={childFadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  width: { xs: "95%", sm: "33%" },
                  minHeight: { xs: "140px", sm: "150px" },
                  mx: { xs: 1, sm: 0 }, // 🔥 mobile side gap
                  backgroundColor: ["#ADDCE3", "#B7A3FF", "#CDB8FF"][i],
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, fontSize: { xs: "0.9rem", md: "1rem" } }}
                >
                  We discuss your goals and how we can work together.
                </Typography>
              </MotionBox>
            )
          )}
        </Box>
      </MotionBox>
    </>
  );
}

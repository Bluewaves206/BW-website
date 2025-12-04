import { Box, Button, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

// Parent container animations
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      staggerChildren: 0.15,
    },
  },
};

// Children animations
const childFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{
        px: { xs: 2, sm: 5, md: 10 },
        width: { sm: "100%", md: "80%" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        gap: 2,
        mt: { xs: 8, sm: 10, md: 12 },
      }}
    >
      {/* Badge */}
      <MotionBox
        variants={childFadeUp}
        sx={{
          backgroundColor: "#EFEBFE",
          color: "#3F8CFF",
          p: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: 3,
          fontSize: "1.7rem",
        }}
      >
        <Icon icon={"fluent:people-team-16-regular"} />
        <span style={{ fontSize: "1.3rem" }}>Our Team</span>
      </MotionBox>

      {/* Heading + Button Container */}
      <MotionBox variants={childFadeUp} sx={{ textAlign: { xs: "center", md: "left" } }}>
        <MotionTypography
          variants={childFadeUp}
          variant="h1"
          sx={{
            fontWeight: 800,
            color: "#7D8592",
            fontSize: {
              xs: "2.2rem",
              sm: "4rem",
              md: "5rem",
              lg: "6rem",
            },
            display: "inline",
          }}
        >
          <span>Let's Build Something</span>{" "}
          <span style={{ color: "#3F8CFF" }}>Amazing Together</span>
        </MotionTypography>

        {/* Animated Button */}
        <MotionBox variants={childFadeUp}>
          <Button
            sx={{
              mt: { xs: 3, md: 2 },
              backgroundColor: "#2C313F",
              color: "white",
              px: 2,
              py: 1,
              fontSize: { xs: "1rem", md: "1.7rem" },
              borderRadius: 7,
              mx: { xs: 0, sm: 3 },
              mb: { xs: 3, sm: 8 },
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
            endIcon={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#3F8CFF",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <Icon icon={"tabler:arrow-up-right"} />
              </Box>
            }
          >
            Become a Partner
          </Button>
        </MotionBox>
      </MotionBox>

      {/* Description */}
      <MotionTypography
        variants={childFadeUp}
        variant="h6"
        sx={{
          color: "#7D8592",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 1, md: 0 },
        }}
      >
        Join our growing network of partners and unlock new opportunities...
      </MotionTypography>
    </MotionBox>
  );
}

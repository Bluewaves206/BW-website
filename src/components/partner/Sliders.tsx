// components/partner/Sliders.tsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const MotionBox = motion(Box);

const sampleCompanies = new Array(10).fill(0).map((_, i) => `Company ${i + 1}`);
const marqueeList = [...sampleCompanies, ...sampleCompanies];

export default function Sliders() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      sx={{
        width: "100%",
        py: 8,
        px: { xs: 4, sm: 6, md: 8 },
        mt: 7,
        overflow: "hidden",
        background:
          "linear-gradient(45deg, hsla(216, 48%, 89%, 1) 36%, hsla(216, 61%, 83%, 1) 80%, hsla(216, 97%, 65%, 1) 100%)",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "#4E5156",
          fontWeight: 600,
          letterSpacing: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Icon icon={"streamline:star-2-solid"} style={{ color: "#3F8CFF" }} />
        Partners & Sponsors
      </Typography>

      <Typography variant="h2" sx={{ fontWeight: 600, color: "#4E5156", mt: 1 }}>
        Our program is backed by the best.
      </Typography>

      <Typography variant="h6" sx={{ color: "#4E5156", mt: 1 }}>
        We have a dynamic network of companies and schools that support our mission.
      </Typography>

      {/* FIRST ROW - Forward motion */}
      <Box sx={{ width: "100%", mt: 8, overflow: "hidden" }}>
        <motion.div
          style={{
            display: "flex",
            gap: "50px",
            whiteSpace: "nowrap",
            willChange: "transform", // GPU acceleration
          }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 28,         // smoother slow drift
            ease: [0.22, 0.61, 0.36, 1], // premium cubic-bezier
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {marqueeList.map((c, i) => (
            <Box
              key={i}
              sx={{
                minWidth: "250px",
                background:
                  "linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
                borderRadius: 4,
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
                {c}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Box>

      {/* SECOND ROW - Reverse motion */}
      <Box sx={{ width: "100%", mt: 4, overflow: "hidden" }}>
        <motion.div
          style={{
            display: "flex",
            gap: "50px",
            whiteSpace: "nowrap",
            willChange: "transform", // GPU acceleration
          }}
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 28,         // same smooth speed
            ease: [0.22, 0.61, 0.36, 1], // premium easing
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {marqueeList.map((c, i) => (
            <Box
              key={`rev-${i}`}
              sx={{
                minWidth: "250px",
                background:
                  "linear-gradient(90deg, hsla(216, 48%, 89%, 1) 0%, hsla(207, 90%, 77%, 1) 19%, hsla(207, 89%, 68%, 1) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
                borderRadius: 4,
              }}
            >
              <Typography variant="h5" sx={{ color: "white", fontWeight: 600 }}>
                {c}
              </Typography>
            </Box>
          ))}
        </motion.div>
      </Box>
    </MotionBox>
  );
}

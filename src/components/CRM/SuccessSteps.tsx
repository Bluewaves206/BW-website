import { Box, Typography, Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function SuccessStepsSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 3, sm: 5, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 6,
      }}
    >
      {/* LEFT CONTENT */}
      <Box sx={{ flex: 1 }}>

        {/* TAG WITH ICON */}
        <Box
          sx={{
            background: "#E7F0FF",
            px: 2,
            py: 0.7,
            width: "fit-content",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#3F7FFF",
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Icon icon="mdi:flag-variant" width={18} color="#3F7FFF" />
          Your Success Journey
        </Box>

        {/* HEADING */}
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          Smart Steps to
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 800,
            color: "#3F7FFF",
            mb: 3,
          }}
        >
          Success.
        </Typography>

        {/* UPDATED BUTTON WITH LIGHT BLUE BORDER */}
        <Button
          sx={{
            background: "#E0E0E0",
            borderRadius: "40px",
            px: 3,
            py: 1.2,
            textTransform: "none",
            fontWeight: 700,
            fontSize: "15px",
            color: "#222",
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "fit-content",

            /* ⭐ VERY LIGHT BLUE BORDER ⭐ */
            border: "1px solid rgba(63,127,255,0.25)",

            "&:hover": {
              background: "#d5d5d5",
              border: "1px solid rgba(63,127,255,0.45)", // darker on hover
            },
          }}
        >
          BOOK DEMO

          {/* BLUE CIRCLE WITH ARROW */}
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#3F7FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowOutwardIcon sx={{ color: "#fff", fontSize: 18 }} />
          </Box>
        </Button>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            maxWidth: "430px",
            fontSize: "16px",
            color: "#555",
            lineHeight: 1.6,
            mt: 3,
          }}
        >
          The home screen organizes your projects, assignments, and upcoming
          events together on one screen. It's your calm, comfortable, simple
          starting point every morning.
        </Typography>
      </Box>

      {/* RIGHT IMAGE */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: "600px",
          mx: "auto",
        }}
      >
        <motion.img
          src="/crm/dashboard.png"
          alt="Dashboard UI"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}

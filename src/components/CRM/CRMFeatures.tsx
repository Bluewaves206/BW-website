import { Box, Typography, Paper } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

const MotionPaper = motion(Paper);

export default function CRMFeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const features = [
    {
      icon: "mdi:account-group",
      title: "Customer Management",
      desc: "Centralize all customer data, interactions, and history in one place.",
    },
    {
      icon: "mdi:chart-timeline-variant-shimmer",
      title: "Sales Pipeline",
      desc: "Track and manage deals through every stage of your sales process.",
    },
    {
      icon: "mdi:chart-box-outline",
      title: "Analytics & Reporting",
      desc: "Gain insights with powerful analytics and customizable reports.",
    },
    {
      icon: "mdi:account-convert",
      title: "Lead Management",
      desc: "Capture, qualify, and nurture leads to conversion.",
    },
    {
      icon: "mdi:email-sync-outline",
      title: "Email Integration",
      desc: "Sync and track all email interactions directly from your CRM.",
    },
    {
      icon: "mdi:cog-sync",
      title: "Automation",
      desc: "Automate repetitive tasks and workflows to save time.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 3, sm: 5, md: 10 },
        textAlign: "center",
      }}
    >
      {/* SECTION TITLE */}
      <Typography
        sx={{
          fontSize: { xs: "1.9rem", md: "2.5rem" },
          fontWeight: 800,
        }}
      >
        Everything You Need to Manage Customers
      </Typography>

      <Typography sx={{ fontSize: "1rem", mt: 1, color: "#555" }}>
        Comprehensive CRM features designed to help your business thrive
      </Typography>

      {/* ⭐ FIXED 3 CARDS PER ROW USING CSS GRID ⭐ */}
      <Box
        sx={{
          mt: 6,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr", // ALWAYS 3 CARDS IN DESKTOP
          },
          gap: 4,
          justifyItems: "center",
        }}
      >
        {features.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <MotionPaper
              key={index}
              whileHover={{ scale: 1.04 }}
              onClick={() => setActiveIndex(index)}
              elevation={isActive ? 6 : 2}
              sx={{
                width: "100%",
                p: 3,
                borderRadius: "18px",
                cursor: "pointer",
                display: "flex",
                gap: 2.5,
                alignItems: "flex-start",
                transition: "0.25s ease-in-out",

                border: isActive
                  ? "2px solid #65A8FF"
                  : "2px solid transparent",

                "&:hover": {
                  border: "2px solid #65A8FF",
                  boxShadow: "0px 12px 28px rgba(68,128,255,0.18)",
                },

                background: isActive
                  ? "linear-gradient(180deg, #f7fbff, #ffffff)"
                  : "white",

                boxShadow: isActive
                  ? "0px 12px 28px rgba(68,128,255,0.18)"
                  : "0px 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              {/* ICON BOX */}
              <Box
                sx={{
                  minWidth: 60,
                  minHeight: 60,
                  background: "linear-gradient(180deg, #71b4ff, #3f8cff)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon icon={item.icon} width={32} color="#fff" />
              </Box>

              {/* TEXT */}
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#222",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.92rem",
                    lineHeight: 1.45,
                    color: "#555",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            </MotionPaper>
          );
        })}
      </Box>
    </Box>
  );
}

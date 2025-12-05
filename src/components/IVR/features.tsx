import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function IvrFeatures() {
  const features = [
    {
      icon: "solar:call-chat-bold",
      title: "Custom Call Flows",
      desc: "Design intelligent call routing with our visual flow builder",
    },
    {
      icon: "solar:clock-circle-bold",
      title: "24/7 Availability",
      desc: "Provide round-the-clock customer service automatically",
    },
    {
      icon: "solar:menu-dots-bold",
      title: "Multi-level Menus",
      desc: "Create sophisticated IVR trees with unlimited levels",
    },
    {
      icon: "solar:microphone-bold",
      title: "Professional Voice",
      desc: "High-quality voice recordings in multiple languages",
    },
    {
      icon: "solar:chart-2-bold",
      title: "Call Analytics",
      desc: "Detailed insights into call patterns and user behavior",
    },
    {
      icon: "mdi:language",
      title: "Multi-language Support",
      desc: "Serve customers in their preferred language",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 8 },
          background:
            "linear-gradient(135deg, #CDDDEC 0%, #C9DBEB 60%, #CDDDEC 100%)",
        }}
      >
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#0A0F29",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Powerful IVR Features
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#6b7280",
              mt: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Everything you need to create a professional automated phone system
          </Typography>
        </motion.div>

        {/* ================= GRID ================= */}
        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            columnGap: 1,
            rowGap: 2,
            justifyItems: "center",
          }}
        >
          {features.map((item, idx) => {
            const isActive = active === idx;

            return (
              <motion.div
                key={idx}
                onClick={() => setActive(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  width: "100%",
                  maxWidth: 250,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: "center",
                    transition: "0.3s",
                    border: isActive
                      ? "2px solid #2F7CFF"
                      : "2px solid transparent",
                    backgroundColor: isActive ? "#ffffff" : "transparent",
                    boxShadow: isActive
                      ? "0px 0px 20px rgba(47,124,255,0.25)"
                      : "none",

                    "&:hover": {
                      backgroundColor: "#ffffff",
                      border: "2px solid #2F7CFF",
                      boxShadow: "0px 0px 20px rgba(47,124,255,0.15)",
                    },
                  }}
                >
                  {/* ICON */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#2F7CFF" : "#4da6ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        transition: "0.3s",

                        "&:hover": {
                          backgroundColor: "#2F7CFF",
                        },
                      }}
                    >
                      <Icon
                        icon={item.icon}
                        style={{ color: "white", fontSize: 32 }}
                      />
                    </Box>
                  </motion.div>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#6b7280" }}>
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </motion.div>
  );
}

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const MotionBox = motion(Box);

export default function AutoScrollCategories() {
  const items = [
    { icon: "mdi:trending-up", label: "startup" },
    { icon: "mdi:office-building-outline", label: "company" },
    { icon: "mdi:diamond-stone", label: "business" },
    { icon: "mdi:rotate-3d-variant", label: "agency" },
  ];

  // Duplicate to prevent gaps
  const loopItems = [...items, ...items, ...items];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: { xs: 3, md: 4 },
        backgroundColor: "#d8e4f6", // same as your screenshot
      }}
    >
      <MotionBox
        animate={{ x: ["0%", "-33%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 6, sm: 10, md: 14 },
          whiteSpace: "nowrap",
        }}
      >
        {loopItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexShrink: 0,
              color: "#5a9bff",
            }}
          >
            <Icon
              icon={item.icon}
              width={32}
              height={32}
              style={{
                minWidth: 32,
                minHeight: 32,
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.35rem" }, // responsive size
                textTransform: "capitalize",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </MotionBox>
    </Box>
  );
}

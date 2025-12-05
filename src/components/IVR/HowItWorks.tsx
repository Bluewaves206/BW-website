import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type ItemType = {
  icon: string;
  title: string;
  desc: string;
};

export default function IVRHowItWorks() {
  const items: ItemType[] = [
    {
      icon: "mdi:phone-in-talk-outline",
      title: "Customer Calls",
      desc: "Customer dials your IVR number",
    },
    {
      icon: "mdi:dialpad",
      title: "Menu Selection",
      desc: "Listens to options and makes choice",
    },
    {
      icon: "mdi:call-split",
      title: "Smart Routing",
      desc: "Customer dials your IVR number",
    },
    {
      icon: "mdi:call-split",
      title: "Delivering Smooth",
      desc: "Connecting customers to the right help instantly.",
    },
  ];

  return (
    <Box
      sx={{
        background: "#CDDDEC",
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 },
        borderRadius: 4,
      }}
    >
      {/* == GRID == */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 3, md: 4 }, // UPDATED (was 6, 8)
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        {/* TOP LEFT */}
        <Card item={items[0]} align="left" />

        {/* TOP RIGHT */}
        <Card item={items[1]} align="right" />

        {/* CENTER HEADING */}
        <Box sx={{ gridColumn: { xs: "1", md: "1 / span 2" }, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 700,
              color: "#333",
            }}
          >
            How It{" "}
            <Box
              component="span"
              sx={{
                background: "#000",
                color: "#fff",
                px: 2,
                py: 0.5,
                borderRadius: 2,
                transform: "skew(-10deg)",
                display: "inline-block",
              }}
            >
              <span style={{ transform: "skew(10deg)", display: "inline-block" }}>
                Works
              </span>
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1,
              maxWidth: 480,
              mx: "auto",
              color: "#555",
              fontSize: { xs: "1rem", md: "1.15rem" },
            }}
          >
            Our streamlined process ensures a smooth journey from initial contact
            to successful partnership.
          </Typography>
        </Box>

        {/* BOTTOM LEFT */}
        <Card item={items[2]} align="left" />

        {/* BOTTOM RIGHT */}
        <Card item={items[3]} align="right" />
      </Box>
    </Box>
  );
}

function Card({ item, align }: { item: ItemType; align: "left" | "right" }) {
  const justify = align === "left" ? "flex-start" : "flex-end";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: justify,
      }}
    >
      <Box
        sx={{
          width: 280,
          position: "relative",
          paddingTop: 6,

          ml: align === "left" ? "6px" : 0,
          mr: align === "right" ? "6px" : 0,
        }}
      >
        {/*  ICON  */}
        <Box
          sx={{
            width: 52,
            height: 52,
            background: "#AEBECD",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -40,
            left: align === "left" ? "-34px" : "auto",
            right: align === "right" ? "-34px" : "auto",
            zIndex: 3,
            boxShadow: "0px 5px 12px rgba(0,0,0,0.18)",
          }}
        >
          <Icon icon={item.icon} width={28} color="#333" />
        </Box>

        {/*  LINE  */}
        <Box
          sx={{
            position: "absolute",
            top: -10,
            left: align === "left" ? 10 : "auto",
            right: align === "right" ? 10 : "auto",
            width: "90%",
            height: 2,
            background: "rgba(80,140,255,0.45)",
            borderRadius: 1,
          }}
        />

        {/*  DOT  */}
        <Box
          sx={{
            position: "absolute",
            top: -15,
            left: align === "left" ? "100%" : "auto",
            right: align === "right" ? "100%" : "auto",
            width: 15,
            height: 15,
            background: "#fff",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(80,140,255,0.5)",
            zIndex: 3,
          }}
        />

        {/*  CARD  */}
        <Box
          sx={{
            background: "#DFF3F9",
            borderRadius: 3,
            border: "2px solid #9BD8FF",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            p: 3,
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.1rem", color: "#222" }}>
            {item.title}
          </Typography>

          <Typography sx={{ mt: 1, color: "#444", fontSize: ".9rem" }}>
            {item.desc}
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}

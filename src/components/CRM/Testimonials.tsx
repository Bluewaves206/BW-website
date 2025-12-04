import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo } from "react";

const testimonialsBase = [
  {
    name: "Fig Nelson",
    username: "@fignel_socom",
    text: "Stellar’s user-friendly dashboards have simplified our digital strategy management.",
    avatar: "/crm/user1.png",
  },
  {
    name: "Sadie Berlin",
    username: "@sadieberlin00",
    text: "Stellar has truly transformed our online presence. With its analytics and seamless integration, we've gained invaluable insights.",
    avatar: "/crm/user2.png",
  },
  {
    name: "Amaya Locosta",
    username: "@amayalocosta",
    text: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth.",
    avatar: "/crm/user3.png",
  },
];

type Testimonial = {
  name: string;
  username: string;
  text: string;
  avatar: string;
};

const makeRepeat = (items: Testimonial[], times = 4): Testimonial[] =>
  Array(times).fill(0).flatMap(() => items);

export default function TestimonialsSection() {
  const repeated = useMemo(() => makeRepeat(testimonialsBase, 4), []);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 10, md: 16 },
        px: { xs: 3, sm: 6, md: 10 },
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "url('/crm/Container.png') center/cover no-repeat",
      }}
    >
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#3F7FFF", mb: 1 }}>
        Our Customers
      </Typography>

      <Typography sx={{ fontSize: { xs: 28, md: 44 }, fontWeight: 800, mb: 8 }}>
        See what our customers are saying
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 4,
          height: { xs: 500, md: 560 },
        }}
      >
        <Box
          sx={{ overflow: "hidden",
            display: { xs: "none", md: "block" }
          }}
        >
          <motion.div
            animate={{ y: ["0%", "-100%"] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "loop" }}
          >
            {[...repeated, ...repeated].map((t, i) => (
              <TestimonialCard key={`l-${i}`} item={t} />
            ))}
          </motion.div>
        </Box>

        <Box sx={{ overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["-100%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "loop" }}
          >
            {[...repeated, ...repeated].map((t, i) => (
              <TestimonialCard key={`m-${i}`} item={t} />
            ))}
          </motion.div>
        </Box>

        <Box
          sx={{ overflow: "hidden",
            display: { xs: "none", md: "block" }
          }}
        >
          <motion.div
            animate={{ y: ["0%", "-100%"] }}
            transition={{ duration: 35, repeat: Infinity, repeatType: "loop" }}
          >
            {[...repeated, ...repeated].map((t, i) => (
              <TestimonialCard key={`r-${i}`} item={t} />
            ))}
          </motion.div>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: { xs: 60, md: 100 },
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.5), transparent)",
          backdropFilter: "blur(10px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 60, md: 100 },
          pointerEvents: "none",
          background:
            "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.5), transparent)",
          backdropFilter: "blur(10px)",
        }}
      />
    </Box>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <Box
      sx={{
        p: 3,
        mb: 3,
        mx: "auto",
        background: "rgba(255,255,255,0.92)",
        borderRadius: "18px",
        border: "1px solid rgba(63,127,255,0.12)",
        boxShadow: "0 16px 32px rgba(63,127,255,0.18)",
        maxWidth: 350,
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 42px rgba(63,127,255,0.28)",
        },
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 1.5 }}>
        Incredibly useful product
      </Typography>

      <Typography sx={{ color: "#555", fontSize: 14, mb: 2, lineHeight: 1.6 }}>
        {item.text}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar src={item.avatar} sx={{ width: 46, height: 46 }} />
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{item.name}</Typography>
          <Typography sx={{ fontSize: 12, color: "#777" }}>{item.username}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

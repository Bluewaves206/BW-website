import { Box } from "@mui/material";

export default function BrandLogos() {
  const logos = [
    "/IVR/logo.png",
    "/IVR/logo.png",
    "/IVR/logo.png",
    "/IVR/logo.png",
    "/IVR/logo.png",
    "/IVR/logo.png",
    "/IVR/logo.png",
  ];

  const logosDup = [...logos, ...logos];

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        py: { xs: 2, md: 4 },

        backgroundColor: "#FFFFFF",

        "@keyframes infiniteScroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, md: 8 },
            width: "max-content",
            whiteSpace: "nowrap",

            animation: `infiniteScroll 16s linear infinite`,

            "&:hover": { animationPlayState: "paused" },
          }}
        >
          {logosDup.map((src, idx) => (
            <Box
              key={idx}
              component="img"
              src={src}
              alt={`logo-${idx}`}
              sx={{
                height: { xs: 26, md: 32 },
                objectFit: "contain",
                flex: "0 0 auto",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

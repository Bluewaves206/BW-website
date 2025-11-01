import { Box, Avatar, Typography } from "@mui/material";

export default function CommentCard() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                p: 2,
                borderRadius: 2,
                width: "100%",
                justifyContent: "center",
            }}
        >
            <Avatar
                alt="Samson Heathcote"
                src="https://via.placeholder.com/40" // replace with your image
                sx={{ width: 40, height: 40 }}
            />
            <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Samson Heathcote
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.primary",
                        mt: 0.3,
                        lineHeight: 1.5,
                    }}
                >
                    We had the most spectacular view. Unfortunately it was very hot in the room
                    from 2–8:30 pm due to no air conditioning and no shade.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mt: 0.8,
                    }}
                >
                    <Typography variant="caption" color="text.secondary">
                        about 1 hour ago
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

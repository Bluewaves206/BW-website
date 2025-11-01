import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 3
            }}
        >
            <Typography sx={{ textAlign: "center", fontWeight: 900,fontSize:"9rem", letterSpacing: 10,mb:-5 }}>404</Typography>
            <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600 }}>Page Not Found</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: "#777E90" }}>Sorry, the page you are looking for does not exist or has been moved.</Typography>
            <Button variant="contained" size="large" disableElevation sx={{ color: "white", backgroundColor: "#3F8CFF", borderRadius: 6 }} onClick={() => { navigate("/") }}>Back to Home</Button>
        </Box>
    )
}
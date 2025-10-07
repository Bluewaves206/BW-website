import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function Layout() {
    return (
        <>


            <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                <Navbar />
                <Box sx={{ width: '100%',mt: "8rem" }}>
                    <Outlet />
                </Box>
                <Footer />
            </Box>

        </>
    );
}
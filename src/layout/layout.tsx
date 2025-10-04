import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
export default function Layout() {
    return (
        <>

            <Navbar />
            <Box className="layout-content">
                <Outlet />
            </Box>
            <Footer />

        </>
    );
}
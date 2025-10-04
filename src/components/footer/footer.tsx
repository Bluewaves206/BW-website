import { Button, Box, Typography } from "@mui/material";
import bluewaves from "../../assets/logo.png";
import { Icon } from "@iconify/react";


const Footer = () => {
  return (
    <Box sx={{ display: "flex",justifyContent: "space-around", alignItems: "center", py:2   , bgcolor: "rgba(234, 236, 240, 1)" }}>
        <Box>
            <Typography variant="h4" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011", }}>
                “You focus on success, we<br/> handle your digital <Typography component="span" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 500, fontSize:"35.96px", color: "#8E8E8E" }}>growth</Typography><Typography component="span" sx={{ fontFamily: "Archivo, sans-serif", fontWeight: 500,fontSize: "35.96px", color: "#0F1011" }}>.”</Typography>
            </Typography>
            <Box sx={{ my:2, width: "100%", height:0, border: "1.56px solid #0F1011", opacity: "50%" }} />
            <Box sx={{ mt:4, width: "100%"}}>
                <Box sx={{my:1,display: "flex", gap:4}}>
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500,  color: "#0F1011" }}>Home</Typography>
                    <span>/</span>
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011" }}>About Us</Typography> 
                    <span>/</span> 
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011" }}>Services</Typography>
                    <span>/</span> 
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500, color: "#0F1011" }}>Blogs</Typography>
                </Box>
                <Box sx={{display: "flex", gap:4}}>
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500,  color: "#0F1011" }}>Pricing</Typography>
                    <span>/</span>
                    <Typography variant="body1" sx={{ cursor: "pointer", fontFamily: "Archivo, sans-serif", fontWeight: 500,  color: "#0F1011" }}>Contacts</Typography> </Box>
            </Box>
            <Box sx={{ mt:14, gap:4, display: "flex", flexDirection: "row" }}>
                <Icon icon="mdi:facebook" width="30" height="30" color="#0F1011" style={{ cursor: "pointer" }} />
                <Icon icon="fa6-brands:x-twitter" width="30" height="30" color="#0F1011" style={{ cursor: "pointer" }} />
                <Icon icon="mdi:linkedin" width="30" height="30" color="#0F1011" style={{ cursor: "pointer" }} />
                <Icon icon="mdi:instagram" width="30" height="30" color="#0F1011" style={{ cursor: "pointer" }} />
            </Box>
        </Box>
        <Box>
            <Box sx={{ mt:4, width: "100%", height: "1.56px", bgcolor: "#0F1011", opacity: "50%" }} />
            <Box sx={{ display: "flex", gap:5 }}>
                <Box>
                    <Typography variant="body1" sx={{ mt:1, fontFamily: "Archivo, sans-serif", fontWeight: 500, fontSize: "70.32px", color: "#0F1011" }}>Our</Typography>
                    <Typography variant="body1" sx={{ mt:-3, fontFamily: "Archivo, sans-serif", fontWeight: 500, fontSize: "70.32px", color: "#8F9096" }}>Contacts.</Typography>        
                    <Button variant="contained" sx={{ mt:4, borderRadius: "50%", width: "68.82px", height: "68.82px", bgcolor: "#3F8CFF" }}><Icon icon="solar:arrow-right-up-linear" width="30" height="30" color="#FFFFFF" /></Button>
                    <Typography variant="body1" sx={{ ml:1,  mt:4, fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: "11.72px", color: "#0F1011" }}>Privacy</Typography>        
                </Box>
                <Box>
                    <Typography variant="body1" sx={{ mt:2, fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: "14.06px", color: "#0F1011" }}>+91 9830048870</Typography>
                    <Typography variant="body1" sx={{ mt:2.5, fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: "14.06px", color: "#0F1011" }}>+918276882339</Typography>          
                    <Typography variant="body1" sx={{ mt:2.5, fontFamily: "Outfit, sans-serif", fontWeight: 500, fontSize: "14.06px", color: "#0F1011" }}>sales@bluewavesmedia.in</Typography>
                    <Typography variant="body1" sx={{ mt:26, fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: "11.72px", color: "#0F1011" }}>Disclaimer</Typography>        
                </Box>
                <Box>
                     <Box component="img" src={bluewaves} alt="Image" sx={{ mt:3, width: "172px", height: "86px" }} /> 
                     <Typography variant="body1" sx={{ ml:8, mt:27, fontFamily: "Archivo, sans-serif", fontWeight: 400, fontSize: "11.72px", color: "#0F1011" }}>© 2023 — Copyright</Typography>         
                </Box>
            </Box>
        </Box>
    </Box>
  );
};
export default Footer;
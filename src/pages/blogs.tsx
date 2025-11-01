import { Box, Button, Chip, Container, Pagination, PaginationItem, Paper, TextField, Typography } from "@mui/material";
import RecentImg from "../assets/Image.png";
import { Icon } from "@iconify/react";
import Pic1 from "../assets/Pic1.jpg";
import Pic2 from "../assets/footerTopimage.png";


const Blogs = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, px: 3, alignItems: "flex-start", my: 7 }}>
          <Box component={"img"} src={RecentImg} alt="recent" width={"100%"} height={"50vh"} sx={{ objectFit: "cover", borderRadius: 10 }} />
          <Typography variant="h6" color="#6941C6" fontWeight={600}>Sun 1, Jan 2023</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
            <Typography variant="h3" fontWeight={600}>UX Review Presentation</Typography>
            <Icon icon={"mynaui:arrow-up-right"} fontSize={35} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                xs: "1rem",   // phones
                sm: "1.2rem", // tablets
                md: "1.5rem", // desktops
              },
            }}
          >
            How do you create compelling presentations that wow your colleagues and impress your managers?
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Chip label="Design" sx={{ fontFamily: "Inter, sans-serif", color: "#6941C6", fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }} />
            <Chip label="Research" sx={{ fontFamily: "Inter, sans-serif", color: "#6941C6", fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }} />
            <Chip label="Presentation" sx={{ fontFamily: "Inter, sans-serif", color: "#6941C6", fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }} />
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, px: 3, alignItems: "flex-start" }}>
          <Typography variant="h6" sx={{ color: "#4E5156", fontWeight: 600 }}>Popular Blogs</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(2, 1fr)", sm: "repeat(2, 0.5fr)", xs: "repeat(1, 1fr)" },
              direction: "ltr", // makes grid flow from right to left
              gap: 5,
              width: "100%"
            }}
          >
            <Box
              sx={{
                backdropFilter: "blur(43.39px)",
                boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                position: "relative",
                width: "100%",
                height: "290.5px",
                borderRadius: "25px",
                bgcolor: "rgba(255, 255, 255, 0.3)",
                display: "flex", alignItems: "center", zIndex: 1, gap: 2, p: 2,
                justifyContent: "center",
                overflow: "hidden",
                "&::before": { content: '""', position: "absolute", inset: 0, borderRadius: "15.78px", padding: "2px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", pointerEvents: "none" }
              }}>

              <Box sx={{ width: "60%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Box component="img" src={Pic1} alt="Image" sx={{ width: "90%", height: "100%", objectFit: "cover", borderRadius: "30px" }} />
              </Box>
              <Box sx={{ gap: 1, display: "flex", flexDirection: "column", width: "40%", pl: 1 }}>
                <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "9px", sm: "10px", md: "14px", lg: "16px" }, color: "#6941C6" }}>Phoenix Baker • 1 Jan 2023</Typography>
                <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "15px", sm: "14px", md: "16px", lg: "20px" }, color: "#1A1A1A" }}>Migrating to Linear 101</Typography>

                <Typography variant="body1" sx={{
                  fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: { xs: "12px", md: "14px", lg: "16px" }, color: "#667085", width: "100%", overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s hot Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla recusandae ratione cumque? Atque laboriosam enim hic. Animi blanditiis, adipisci cupiditate, sunt nesciunt recusandae dolores quod consequatur, nam amet asperiores?</Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, alignItems: "center", justifyContent: "flex-start" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "67px", height: "24px", bgcolor: "#F0F9FF", borderRadius: "16px", py: 2, px: 5 }}>
                    <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#026AA2" }}>Design</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "83px", height: "24px", bgcolor: "rgba(253, 242, 250, 1)", borderRadius: "16px", py: 2, px: 5 }}>
                    <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#C11574" }}>Research</Typography>
                  </Box>
                </Box>
              </Box>

            </Box>
            <Box
              sx={{
                backdropFilter: "blur(43.39px)",
                boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                position: "relative",
                width: "100%",
                height: "290.5px",
                borderRadius: "25px",
                bgcolor: "rgba(255, 255, 255, 0.3)",
                display: "flex", alignItems: "center", zIndex: 1, gap: 2, p: 2,
                justifyContent: "center",
                overflow: "hidden",
                "&::before": { content: '""', position: "absolute", inset: 0, borderRadius: "15.78px", padding: "2px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", pointerEvents: "none" }
              }}>

              <Box sx={{ width: "60%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                <Box component="img" src={Pic1} alt="Image" sx={{ width: "90%", height: "100%", objectFit: "cover", borderRadius: "30px" }} />
              </Box>
              <Box sx={{ gap: 1, display: "flex", flexDirection: "column", width: "40%", pl: 1 }}>
                <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "9px", sm: "10px", md: "14px", lg: "16px" }, color: "#6941C6" }}>Phoenix Baker • 1 Jan 2023</Typography>
                <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: { xs: "15px", sm: "14px", md: "16px", lg: "20px" }, color: "#1A1A1A" }}>Migrating to Linear 101</Typography>

                <Typography variant="body1" sx={{
                  fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: { xs: "12px", md: "14px", lg: "16px" }, color: "#667085", width: "100%", overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s hot Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nulla recusandae ratione cumque? Atque laboriosam enim hic. Animi blanditiis, adipisci cupiditate, sunt nesciunt recusandae dolores quod consequatur, nam amet asperiores?</Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, alignItems: "center", justifyContent: "flex-start" }}>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "67px", height: "24px", bgcolor: "#F0F9FF", borderRadius: "16px", py: 2, px: 5 }}>
                    <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#026AA2" }}>Design</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "83px", height: "24px", bgcolor: "rgba(253, 242, 250, 1)", borderRadius: "16px", py: 2, px: 5 }}>
                    <Typography variant="body1" sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#C11574" }}>Research</Typography>
                  </Box>
                </Box>
              </Box>

            </Box>
          </Box>
        </Box>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2, px: 3, alignItems: "flex-start", mt: 10 }}>
          <Typography variant="h6" sx={{ color: "#4E5156", fontWeight: 600 }}>All Blogs</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { md: "repeat(4, 1fr)", sm: "repeat(2, 0.5fr)", xs: "repeat(1, 1fr)" },
              direction: "ltr", // makes grid flow from right to left
              columnGap: "5px", // reduce horizontal space between columns
              rowGap: "20px",   // increase vertical space between rows
              width: "100%"
            }}
          >

            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in-out",
                p: 2,
                "&:hover": {
                  backdropFilter: "blur(30.39px)",
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                  border: "1px solid #EBF8FF"
                }
              }}>
              <Box component={"img"} src={Pic1} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
              <Box sx={{ px: 2, mt: 1 }}>
                <Typography variant="body2" color="#3F8CFF" fontWeight={600}>Sun 1, Jan 2023</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                  <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                  <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                </Box>
                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  <Chip label="Design" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Research" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Presentation" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in-out",
                p: 2,
                "&:hover": {
                  backdropFilter: "blur(30.39px)",
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                  border: "1px solid #EBF8FF"
                }
              }}>
              <Box component={"img"} src={Pic1} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
              <Box sx={{ px: 2, mt: 1 }}>
                <Typography variant="body2" color="#3F8CFF" fontWeight={600}>Sun 1, Jan 2023</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                  <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                  <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                </Box>
                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  <Chip label="Design" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Research" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Presentation" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in-out",
                p: 2,
                "&:hover": {
                  backdropFilter: "blur(30.39px)",
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                  border: "1px solid #EBF8FF"
                }
              }}>
              <Box component={"img"} src={Pic1} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
              <Box sx={{ px: 2, mt: 1 }}>
                <Typography variant="body2" color="#3F8CFF" fontWeight={600}>Sun 1, Jan 2023</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                  <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                  <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                </Box>
                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  <Chip label="Design" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Research" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Presentation" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: 10,
                overflow: "hidden",
                border: "1px solid transparent",
                transition: "all 0.3s ease-in-out",
                p: 2,
                "&:hover": {
                  backdropFilter: "blur(30.39px)",
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
                  border: "1px solid #EBF8FF"
                }
              }}>
              <Box component={"img"} src={Pic1} alt="Image" sx={{ width: "100%", objectFit: "cover", borderRadius: 11 }} />
              <Box sx={{ px: 2, mt: 1 }}>
                <Typography variant="body2" color="#3F8CFF" fontWeight={600}>Sun 1, Jan 2023</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1, width: "100%" }}>
                  <Typography variant="h6" fontWeight={600}>UX Review Presentation</Typography>
                  <Icon icon={"mynaui:arrow-up-right"} fontSize={20} />
                </Box>
                <Typography variant="body2" sx={{ color: "#667085", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui commodi,di.sssssssssssssssss</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 2, flexWrap: "wrap" }}>
                  <Chip label="Design" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Research" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                  <Chip label="Presentation" size="small" sx={{ fontFamily: "Inter, sans-serif", color: "#3F8CFF", fontWeight: 600, }} />
                </Box>
              </Box>
            </Box>

          </Box>
        </Box>
        <Box sx={{ justifyContent: "center", display: "flex", width: "100%", mt: 3, pt: "18.54px" }}>
          <Pagination count={10} defaultPage={1} boundaryCount={1} siblingCount={0} shape="rounded" sx={{ "& .MuiPaginationItem-root": { fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "12.98px", color: "rgba(102, 112, 133, 1)" }, "& .MuiPaginationItem-page.Mui-selected": { bgcolor: "white", color: "rgba(127, 86, 217, 1)", "&:hover": { bgcolor: "white" } }, "& .MuiPaginationItem-previousNext": { fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500, color: "rgba(102, 112, 133, 1)" } }}
            renderItem={(item) => {
              if (item.type === "previous") {
                return <PaginationItem {...item} components={{
                  previous: () => (
                    <Icon icon={"material-symbols:arrow-back-rounded"} />),
                }} />;
              }
              if (item.type === "next") {
                return <PaginationItem {...item} components={{
                  next: () => (
                    <Icon icon={"material-symbols:arrow-forward-rounded"} />),
                }} />;
              }
              return <PaginationItem {...item} />;
            }} />
        </Box>
      </Container>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundImage: `url(${Pic2})`, backgroundSize: "cover", backgroundPosition: "center", mt: 15, height: 320, position: "relative" }}>
        <Paper
          elevation={1}
          sx={{
            borderRadius: "20px",
            p: 4,
            width: "90%",

            backdropFilter: "blur(43.39px)",
            boxShadow: "16.44px 17.09px 65.75px 0px rgba(41, 95, 131, 0.08)",
            bgcolor: "rgba(255, 255, 255, 0.3)",
            overflow: "hidden",
            "&::before": { content: '""', position: "absolute", inset: 0, borderRadius: "15.78px", padding: "2px", background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", maskComposite: "exclude", pointerEvents: "none" }
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Outfit, sans-serif",
            }}
            gutterBottom
          >
            Join Our Newsletter
          </Typography>

          {/* Form Row */}
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >

            {/* Email Address */}
            <Box
              sx={{
                width: { xs: "100%", sm: "60%", md: "40%" },
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "50px",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                overflow: "hidden",
                p: "4px",
              }}
            >
              <TextField
                placeholder="Enter Your Email"
                variant="outlined"
                size="small"
                sx={{
                  width: "85%",
                }}
                InputProps={{
                  sx: {
                    border: "none",
                    "& fieldset": { border: "none" },
                    fontSize: "15px",
                    pl: 2,
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  px: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                  "&:hover": {
                    boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Join us
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box >
    </>
  );
};
export default Blogs;
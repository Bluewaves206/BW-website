import { Icon } from "@iconify/react";
import { Box, Button, Card, CardContent, CardMedia, Container, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import populerImg from "../assets/populerblogImg.png"
import { useRef, useState } from "react";
import CommentCard from "../components/comment-card";
import footerImg from "../assets/footerTopimage.png"

const posts = [
    {
        id: 1,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",
    },
    {
        id: 2,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 3,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 4,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 5,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 6,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 7,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
    {
        id: 8,
        img: "src/assets/Pic3.jpg",
        title: "Convergent and divergent plate margins",
        date: "25 May, 2021",

    },
];

export default function ViewBlog({ blogTitle, blogContent, blogImg }: { blogTitle: string, blogContent: string, blogImg: string }) {
    const [sort, setsort] = useState(10);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollright = (scrollOffset: number) => {
        if (!scrollRef.current) return
        scrollRef.current?.scrollBy({ left: -scrollOffset, behavior: "smooth" });
    };
    const scrollleft = (scrollOffset: number) => {
        if (!scrollRef.current) return
        scrollRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" });
    };

    return (
        <>

            <Container maxWidth="xl" sx={{ mb: 5 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ width: "80%" }}>
                        {blogTitle}
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            width: 50,
                            height: 50,
                            minWidth: 0,
                            borderRadius: '50%',
                            borderColor: 'rgba(0,0,0,0.1)', // light gray border
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#6b7280', // subtle gray icon
                            '&:hover': {
                                borderColor: 'rgba(0,0,0,0.2)',
                                backgroundColor: 'rgba(0,0,0,0.03)',
                            },
                        }}
                    >
                        <Icon icon="solar:download-linear" width="28" height="28" />
                    </Button>


                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: { xs: "center", md: "space-between" }, gap: 2 }}>
                    <Box sx={{ width: "75%" }}>
                        <Box component={"img"} src={blogImg} alt="blog" width={"100%"} height={"40vh"} sx={{ objectFit: "cover", borderRadius: 10, mb: 3 }} />
                        <Box
                            sx={{ fontSize: "1.2rem", lineHeight: 2 }}
                            dangerouslySetInnerHTML={{ __html: blogContent }}
                        />
                    </Box>
                    <Box sx={{ width: "25%", border: "1px solid lightgray", borderRadius: 5, height: "50vh", overflow: "hidden" }}>
                        <Box sx={{ borderBottom: "1px solid lightgray", padding: 2 }}>
                            Populer Post
                        </Box>
                        <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2, height: "80%", overflowY: "auto", scrollbarWidth: 'none' }}>
                            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, height: "100px", p: 1 }}>
                                <Box component={"img"} src={populerImg} height="100%" />
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{
                                        fontWeight: 600,
                                        width: "75%",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitBoxOrient: "vertical",
                                        WebkitLineClamp: 3, // 👈 limits text to 3 lines
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    Convergent and divergent plate margins
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Container >
            <Box sx={{ px: 30, py: 3, backgroundColor: "#EDF6FF" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6">3 Comments</Typography>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={(e) => setsort(e.target.value as number)}
                        sx={{ borderRadius: 5, fontSize: "0.9rem" }}
                    >
                        <MenuItem value={10}>Newest</MenuItem>
                        <MenuItem value={30}>Oldest</MenuItem>
                    </Select>

                </Box>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", mt: 4 }}>
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                    <CommentCard />
                </Box>
                <hr />
                <Box>
                    <Typography variant="h5" sx={{ mt: 3, mb: 2, fontWeight: 600 }} gutterBottom>Add Comment</Typography>
                    <Box sx={{ border: "1px solid #E6E8EC", borderRadius: 4, p: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                        <textarea
                            rows={1}
                            style={{
                                width: "90%",
                                height: "60px",
                                border: "none",
                                outline: "none",
                                resize: "none",
                                backgroundColor: "transparent",
                                verticalAlign: "center",
                                fontSize: "1rem",
                            }}
                            placeholder="Share your thoughts.."
                        />
                        <Button variant="contained" sx={{ height: 40, borderRadius: 4 }}>Post</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ py: 5, px: 10 }}>
                <Typography variant="caption" gutterBottom>BLUE WAVES</Typography>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>Related articles</Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "end", my: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => scrollleft(-300)}
                        sx={{
                            width: 40,
                            height: 40,
                            minWidth: 0,          // prevents MUI from enforcing a min width
                            borderRadius: "50%",  // makes it circular
                            p: 0,                 // removes extra padding
                            display: "flex",      // centers the icon
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Icon icon="iconamoon:arrow-left-2" width={20} height={20} />
                    </Button>
                    <Button variant="outlined"
                        sx={{
                            width: 40,
                            height: 40,
                            minWidth: 0,          // prevents MUI from enforcing a min width
                            borderRadius: "50%",  // makes it circular
                            p: 0,                 // removes extra padding
                            display: "flex",      // centers the icon
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => scrollright(-300)}><Icon icon={"iconamoon:arrow-right-2"} height={20} width={20} /></Button>
                </Box>
                <Box
                    ref={scrollRef}
                    sx={{
                        display: "flex",
                        gap: 2,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                        py: 4
                    }}
                >
                    {posts.map((post) => (
                        <Card
                            key={post.id}
                            sx={{
                                width: 280,
                                borderRadius: 3,
                                flexShrink: 0,
                                boxShadow: 3,
                                overflow: "hidden",
                            }}
                        >
                            <CardMedia component="img" height="130" image={post.img} alt={post.title} />
                            <CardContent>
                                <Typography variant="subtitle1" fontWeight={600} noWrap>
                                    {post.title}
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                    <Icon icon="mdi:calendar-month-outline" width="16" height="16" />
                                    <Typography variant="caption">{post.date}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box >
            <Box sx={{ backgroundImage: `url(${footerImg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", mt: 2, display: "flex", alignItems: "center", justifyContent: "center", px: 5, py: 10 }}>
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

            </Box>

        </>
    )
}
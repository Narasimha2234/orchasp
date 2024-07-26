import React from "react";
import { Grid, Box, Typography, Card, CardContent, CardMedia, Stack, } from "@mui/material";
import { Link } from "react-router-dom";

const posts = [
    {   id:1,
        image: "https://orchasp.com/wp-content/uploads/2021/08/AI.jpg",
        title: "How Artificial Intelligence helps in structuring data",
        date: "AUG 04, 2021",
        description:
            "The Internet provides masses of information that was impossible to obtain just a few years ago. The growing use of smartphones, Internet of Things (IoT) devices and customer relationship management (CRM) systems.",
    },
    {   id:2,
        image: "https://orchasp.com/wp-content/uploads/2021/08/iot-device.jpg",
        title:
            "IoT devices provide invaluable assistance to the healthcare industry, during the current pandemic",
        date: "AUG 04, 2021",
        description:
            "The current pandemic has made it increasingly clear that Internet of Things (IoT) technologies are playing a critical role in delivering safe and effective care health systems, around the world.",
    },
];

const AI_AND_DS = () => {
    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "50vh", md: "80vh" },
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    src="https://orchasp.com/wp-content/uploads/2021/08/AI.jpg"
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        objectFit: "cover",
                        zIndex: -1,
                    }}
                />
            </Box>
            <Stack pl={{ xs: 2, md: 5 }} pr={{ xs: 2, md: 5 }}>
                <Grid mt={4} container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Typography textAlign={"left"} variant="h6" gutterBottom>
                            How Artificial Intelligence helps in structuring data
                        </Typography>
                        <Typography mt={3} textAlign={"justify"} variant="h5" gutterBottom>
                            The Internet provides masses of information that was impossible to
                            obtain just a few years ago. The growing use of smartphones,
                            Internet of Things (IoT) devices and customer relationship
                            management (CRM) systems
                        </Typography>
                        <Typography mt={4} textAlign={"justify"} variant="body1" paragraph>
                            The Internet provides masses of information that was impossible to
                            obtain just a few years ago. The growing use of smartphones,
                            Internet of Things (IoT) devices and customer relationship
                            management (CRM) systems, as well as data gathered from online
                            shopping behaviour, social media profiles and activity, such as
                            likes and dislikes, product reviews, tagged and shared content,
                            have together resulted in a truly vast data universe in the
                            digital space today.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            In fact, the International Data Corporation (IDC), the premier
                            global marketing intelligence firm, estimated that in 2020, the
                            amount of data created and copied around the world had reached 44
                            zetta bytes, or 44 trillion gigabytes. Further, the quantum of
                            data that is being generated every moment of every day is
                            increasing at an ever-growing rate. Currently, it is estimated to
                            be doubling every two years – and the pace is only accelerating.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            The problem is that over 80% (some put the figure as high as 90%)
                            of the data that is being generated is in an unstructured form,
                            which makes it far more difficult to analyse than data that is
                            available in a structured format.
                        </Typography>
                        <Typography textAlign={"justify"} variant="h6" gutterBottom>
                            Structured and unstructured data
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            Data refers to information represented in a format that is useful
                            for processing and usage.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            Structured data, which is usually presented in rows and columns,
                            displays numbers, dates, values and strings. Found most often in
                            closed-end surveys, structured data is great for basic
                            organisation and calculations, as it easily fits into preset
                            parameters and can be analysed by means of programs such as Excel
                            and Structured Query Language (SQL), to reveal patterns and trends
                            that show “what” is happening.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            Unstructured data is obtained from a variety of sources, including
                            open-ended questions, responses to customer support queries, as
                            well as online reviews and messages. It lives in emails, audio,
                            text and video files, as well as No SQL (non-relational)
                            databases. As they do not fit into preset parameters, unstructured
                            data is hard and extremely time-consuming to analyse manually.
                            However, they have the potential to provide invaluable insights on
                            not just “what”, but“why” something is happening.
                        </Typography>
                        <Typography textAlign={"justify"} variant="h6" gutterBottom>
                            Combining structured and unstructured data
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            The ability to combine the results of structured and unstructured
                            data provides immense benefits. For example, by using unstructured
                            data, marketers can gain insights into individual customer
                            preferences, while the structured data provides them with
                            information on the number and age of customers. By combining the
                            two, marketers can analyse the level of customer satisfaction, as
                            well as correlate it with customer preferences among different age
                            groups, for instance.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            However, combining structured and unstructured data had presented
                            immense challenges till recently, as analysing unstructured data
                            necessitated lengthy, manual activity. It would have taken
                            marketers months, if not years, to understand and react to factors
                            such as consumer sentiment, in order to course correct. By which
                            time, it may have been too late to recover from mistakes that had
                            been made or opportunities that could have been seized
                        </Typography>
                        <Typography textAlign={"justify"} variant="h6" gutterBottom>
                            The role of Artificial Intelligence (AI) in structuring
                            unstructured data
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            AI and machine learning models, combined with natural language
                            processing, can be programmed to identify unstructured data points
                            that are important. By learning and recognizing data patterns, AI
                            has the ability to rapidly convert unstructured data into a
                            structured format, with the feedback loop being cut short from
                            months and to days or even hours.This is invaluable in order to
                            derive insights in near real-time.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            This synergy between AI and unstructured data means that we can
                            rapidly predict upcoming trends, across industries that are as
                            diverse as business, technology, commerce and entertainment, to
                            name just a few.
                        </Typography>
                        <Typography textAlign={"justify"} variant="body1" paragraph>
                            This marriage of AI with big data means that this is truly the
                            time for marketers who are looking to scale up their understanding
                            of customers and their behaviour. Using AI tools to analyse
                            unstructured data offers companies the opportunity for deep brand
                            and competitor insights to predict customer needs,in order to stay
                            ahead of customer expectations, through the structuring of data
                            that is currently available in unstructured formats.
                        </Typography>
                    </Grid>
                    <Grid mt={6} item xs={12} md={4}>
                        <Box sx={{ position: "sticky", top: "16px" }}>
                            <Typography variant="h6" gutterBottom>
                                Recent Posts
                            </Typography>
                            {posts.map((post, index) => (
                               <Box component={Link} to={`/blog/${post.id}`} sx={{textDecoration:"none"}}>
                                 <Card key={index} sx={{ mb: 2 }}>
                                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 80, height: 70, mr: 2 }}
                                            image={post.image}
                                            alt={post.title}
                                        />
                                        <Box>
                                            <Typography variant="body1">{post.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.date}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                               </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
};

export default AI_AND_DS;
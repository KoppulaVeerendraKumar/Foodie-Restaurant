import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        "Welcome to Foodie Restaurant – where every bite brings the spice of Andhra, the warmth of home, and authentic taste straight from our kitchen to your heart!"
        </p>
        <br />
        <p>
        "Step into Foodie Restaurant – where flavors speak Telugu, spices tell stories, and every meal feels like a warm hug from home!"
        </p>
      </Box>
    </Layout>
  );
};

export default About;

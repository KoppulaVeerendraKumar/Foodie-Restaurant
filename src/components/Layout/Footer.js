import React from "react";
import LanguageIcon from "@mui/icons-material/Language"; // Portfolio icon (globe style)
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& a": {
              mr: 2,
              textDecoration: "none",
            },
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              transition: "all 400ms",
            },
            "& svg:hover": {
              transform: "translateY(-3px)",
            },
          }}
        >
          {/* Portfolio */}
          <a
            href="https://veerendrakumarkoppula.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon sx={{ color: "#fbc02d" }} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/KoppulaVeerendraKumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ color: "#ffffff" }} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/veerendra-kumar-koppula"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon sx={{ color: "#0A66C2" }} />
          </a>
        </Box>

        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          &copy; 2025 <span style={{ color: "red" }}>❤️</span> Veerendra Kumar
          Koppula <br />
          All Rights Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;

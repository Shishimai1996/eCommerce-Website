"use client";

import EastIcon from "@mui/icons-material/East";
import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { TPictures } from "..";

type TInstaPicCardProps = {
  pictures: TPictures;
  handleNext: () => void;
};
export const InstaPicCard: React.FC<TInstaPicCardProps> = ({
  pictures,
  handleNext,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "absolute",
        top: "70%",
        left: "10%",
      }}
    >
      <Card
        sx={{
          bgcolor: "#ffffff97",
          borderRadius: 0,
          p: "3%",
          width: "200px",
          height: "100px",
        }}
      >
        <Typography variant="h9" color="primary.dark">
          {pictures.title}
        </Typography>
        <Typography variant="h6" color="primary.dark">
          {pictures.description}
        </Typography>
      </Card>
      <Button
        size="small"
        sx={{ borderRadius: 0, width: "20px", height: "40px", p: 0 }}
        onClick={handleNext}
      >
        <EastIcon sx={{ width: "20px", p: 0 }} />
      </Button>
    </Box>
  );
};

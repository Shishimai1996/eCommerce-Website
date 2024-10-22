import { Box, useTheme } from "@mui/material";
import { TPictures } from "..";

type DotPaginationProps = {
  activeStep: number;
  pictures: TPictures[];
};
export const DotPagination: React.FC<DotPaginationProps> = ({
  activeStep,
  pictures,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        mt: 2,
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      {pictures.map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",

            border:
              activeStep === index ? `1px solid ${"#B88E2F"}` : "transparent",
            bgcolor: "transparent",
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              bgcolor: activeStep === index ? "warning.main" : "primary.light",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

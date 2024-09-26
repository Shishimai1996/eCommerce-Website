import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// The page loader component, works both for client and server side
export const CircularPageLoader = (): React.JSX.Element => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "components.backdrop.fill",
        zIndex: 1500,
        opacity: "50%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          color: "components.appBar.defaultFill",
        }}
      >
        <CircularProgress sx={{ color: "background.paper" }} />
      </Box>
    </Box>
  );
};

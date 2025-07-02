import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";
import { BouncingSkeleton } from "../styles/StyledComponents";

const LayoutLoader = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ height: "calc(100vh - 4rem)", display: "flex" }}
    >
      {/* Left Sidebar */}
      <Grid
        sx={{
          display: { xs: "none", sm: "block" },
          flexBasis: { sm: "33.33%", md: "25%" },
          maxWidth: { sm: "33.33%", md: "25%" },
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>

      {/* Main Chat Area */}
      <Grid
        sx={{
          flexBasis: { xs: "100%", sm: "66.66%", md: "41.66%", lg: "50%" },
          maxWidth: { xs: "100%", sm: "66.66%", md: "41.66%", lg: "50%" },
          height: "100%",
        }}
      >
        <Stack spacing={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant="rounded" height="5rem" />
          ))}
        </Stack>
      </Grid>

      {/* Right Sidebar */}
      <Grid
        sx={{
          display: { xs: "none", md: "block" },
          flexBasis: { md: "33.33%", lg: "25%" },
          maxWidth: { md: "33.33%", lg: "25%" },
          height: "100%",
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>
    </Grid>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={0.5}
      direction="row"
      p={0.5}
      justifyContent="center"
      alignItems="center"
    >
      {[0.1, 0.2, 0.4, 0.6].map((delay, i) => (
        <BouncingSkeleton
          key={i}
          variant="circular"
          width={15}
          height={15}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </Stack>
  );
};

export { TypingLoader, LayoutLoader };

// import { Grid, Skeleton, Stack } from "@mui/material";
// import React from "react";
// import { BouncingSkeleton } from "../styles/StyledComponents";

// const LayoutLoader = () => {
//   return (
//     <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
//       <Grid
//         item
//         sm={4}
//         md={3}
//         sx={{
//           display: { xs: "none", sm: "block" },
//         }}
//         height={"100%"}
//       >
//         <Skeleton variant="rectangular" height={"100vh"} />
//       </Grid>
//       <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
//         <Stack spacing={"1rem"}>
//           {Array.from({ length: 10 }).map((_, index) => (
//             <Skeleton key={index} variant="rounded" height={"5rem"} />
//           ))}
//         </Stack>
//       </Grid>

//       <Grid
//         item
//         md={4}
//         lg={3}
//         height={"100%"}
//         sx={{
//           display: { xs: "none", md: "block" },
//         }}
//       >
//         <Skeleton variant="rectangular" height={"100vh"} />
//       </Grid>
//     </Grid>
//   );
// };

// const TypingLoader = () => {
//   return (
//     <Stack
//       spacing={"0.5rem"}
//       direction={"row"}
//       padding={"0.5rem"}
//       justifyContent={"center"}
//     >
//       <BouncingSkeleton
//         variant="circular"
//         width={15}
//         height={15}
//         style={{
//           animationDelay: "0.1s",
//         }}
//       />
//       <BouncingSkeleton
//         variant="circular"
//         width={15}
//         height={15}
//         style={{
//           animationDelay: "0.2s",
//         }}
//       />
//       <BouncingSkeleton
//         variant="circular"
//         width={15}
//         height={15}
//         style={{
//           animationDelay: "0.4s",
//         }}
//       />
//       <BouncingSkeleton
//         variant="circular"
//         width={15}
//         height={15}
//         style={{
//           animationDelay: "0.6s",
//         }}
//       />
//     </Stack>
//   );
// };

// export { TypingLoader, LayoutLoader };
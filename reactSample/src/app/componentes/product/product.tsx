import { Box, Divider, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export function product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <Box sx={{ width: { xs: "250px", lg: "500px" }, border: "1px rgba(0, 0, 0, 0.12) solid" }}>
      <Stack sx={{alignItems:"start"}}>
        <ArrowBackIcon
          titleAccess="برگشت"
          cursor="pointer"
          onClick={() => navigate("/product")}
        />
      </Stack>
      <Divider />
      <Stack
        sx={{ height: "250px", alignItems: "center", justifyContent: "center" }}
      >
        hello {id}
      </Stack>
    </Box>
  );
}

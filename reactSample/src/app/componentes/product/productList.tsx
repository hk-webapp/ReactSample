import { Stack } from "@mui/material";
import { useProductList } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function productList() {
  const list = useProductList();
  const navigate = useNavigate();

  const itemContainer = (item: any) => (
    <Stack
      onClick={() => navigate("/product/" + item.id)}
      key={item.id}
      my={2}
      sx={{ width: "180px", boxShadow: "2" }}
    >
      {item.name}
    </Stack>
  );

  return (
    <Stack direction={"row"} gap={3} sx={{ width: "100%", flexFlow: "wrap" }}>
      {list.map((item) => itemContainer(item))}
    </Stack>
  );
}

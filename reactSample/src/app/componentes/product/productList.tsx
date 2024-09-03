import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProductList } from "../../services/product";

export function productList() {
  const list = getProductList();
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
      {list.data?.map((item) => itemContainer(item))}
    </Stack>
  );
}

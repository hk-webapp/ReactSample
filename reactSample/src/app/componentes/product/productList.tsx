import { Stack } from "@mui/material";
import { useProductList } from "../../services/api";

export function productList() {
  const list = useProductList();

  const itemContainer = (item:any) => (
    <Stack key={item.id} my={2} sx={{ width: "180px" ,boxShadow:"2" }} >{item.name}</Stack>
  );

  return (
    <Stack direction={"row"} gap={3} sx={{ width: "100%", flexFlow: "wrap" }}>
      {list.map((item) => itemContainer(item))}
    </Stack>
  );
}

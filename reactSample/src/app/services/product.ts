import { useQuery } from "react-query";
import { useProductList } from "./api";

export function getProductList(){
    return useQuery({
		queryFn: () => useProductList(),
		queryKey: ['product-list'],
	});
}
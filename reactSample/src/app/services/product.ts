import { useQuery } from "react-query";
import {  useProductList, useProductListFake } from "./api";

export function getProductListFake(){
    return useQuery({
		queryFn: () => useProductListFake(),
		queryKey: ['product-list'],
	});
}

export function getProductList(){
    return useQuery({
		queryFn: () => useProductList(),
		queryKey: ['product-list'],
	});
}
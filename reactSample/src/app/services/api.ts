import { getData } from "./axiosProvider";

export function useProductListFake() {
  return [
    {
      id: 1,
      name: "product 1",
    },
    {
      id: 2,
      name: "product 2",
    },
    {
      id: 3,
      name: "product 3",
    },
    {
      id: 4,
      name: "product 4",
    },
    {
      id: 5,
      name: "product 5",
    },
  ];
}

export interface productItem {
  id: string;
  name: string;
}
export async function useProductList(): Promise<productItem[]> {
  const list = await getData("/data.json");
  return list.data?.data?.map((i: any) => {
    return {
      id: i.id,
      name: i.name,
    } satisfies productItem;
  });
}

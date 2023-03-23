import { addNewProduct, getProduct } from "@/pages/api/firebase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useProducts = () => {
  const queryClient = useQueryClient();
  const productsQuery = useQuery(["product"], getProduct, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    },
  );
  return { productsQuery, addProduct };
};

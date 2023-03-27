import { updateOrAddBag, getBag, deleteBag } from "@/pages/api/firebase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/context/UserContext";

interface BagStatusType {
  uid?: string;
}

export const useBag = () => {
  const queryClient = useQueryClient();
  const { uid }: BagStatusType = useUserContext();

  const getBagQuery = useQuery(["products"], () => getBag(uid));

  const updateOrAddBagQuery = useMutation(
    product => updateOrAddBag(uid || "", product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["bag", uid]);
      },
    },
  );

  const deleteBagQuery = useMutation(id => deleteBag(uid || "", id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["bag", uid]);
    },
  });

  return { getBagQuery, updateOrAddBagQuery, deleteBagQuery };
};

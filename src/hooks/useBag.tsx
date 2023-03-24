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

  // 230323 수정 후 코드. useMutation을 hooks로 빼서 사용하고자 한다.
  // uid는 hooks에서 불러온 것을 사용하고, product는 음..
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

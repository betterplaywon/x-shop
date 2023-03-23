import { updateOrAddBag, getBag, deleteBag } from "@/pages/api/firebase";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/context/UserContext";

interface BagStatusType {
  uid?: string;
}

export const useBag = () => {
  const queryClient = useQueryClient();
  const { uid }: BagStatusType = useUserContext();
};

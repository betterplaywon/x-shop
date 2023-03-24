import React from "react";
import { BsBag } from "react-icons/bs";

// import { useUserContext } from "@/context/UserContext";
import { useBag } from "@/hooks/useBag";

const BagStatus = () => {
  // const { user, uid }: BagStatusType = useUserContext();

  // productAll에서 useQuery에 동일한 데이터명과 키로 product가 존재했고, 여기서도 product로 사용해줬다.
  //하지만 기존에 product로 명명된 데이터를 받아오던 productAll 컴포넌트에서 에러가 발생했고, 여기서 문제를 알아차리게 되었다.
  // useQuery를 사용할 땐 데이터의 이름과 useQuery의 키가 겹치지 않도록 신경써서 명명해줘야 불필요한 오류를 방지할 수 있다.

  // 230323 firebase 코드와 분리 전 코드.
  // const { data: products }: any = useQuery(["products"], () => getBag(uid));

  // 230323 firebase 코드와 분리 후 코드. 의존성을 줄일 수 있게 되었다.
  const {
    getBagQuery: { data: products },
  }: any = useBag();

  const productLength = products?.length;

  return (
    <div className="relative">
      <BsBag className="text-2xl" />
      {products && (
        <p className="w-4 h-4 text-center text-white font-semibold absolute bottom-3 left-4 bg-black rounded-xl">
          {/* 해당 products.length가 바로 변화한 값이 적용되지 않는데, 이 이유는
          Query에서 캐시된 값이 존재하기 때문이다. windows가 refocus가 되지
          않으면 계속 캐싱되어있는 데이터를 보여주므로 처리가 필요한데...아직
          어떻게 해야할 지 모르겠다. */}
          {productLength}
        </p>
      )}
    </div>
  );
};

export default BagStatus;

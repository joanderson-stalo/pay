import { useLogin } from "@/context/user.login";
import { ECHome } from "./Modules/ECHome/ECHome";
import { LAHome } from "./Modules/LAHome/LAHome";

export function Home() {
  const { dataUser } = useLogin();

  return (


    <>
    {dataUser?.seller_type === 'EC' ?   <ECHome  /> : <  LAHome />}
    </>
  );
}

import { useLogin } from "@/context/user.login";
import { ECHome } from "./components/ECHome/ECHome";
import { LAHome } from "./components/LAHome/LAHome";

export function Home() {
  const { dataUser } = useLogin();

  return (


    <>
    {dataUser?.seller_type === 'EC' ?   <LAHome /> : <ECHome />}
    </>
  );
}

import { PasswordChange } from "./components/PasswordChange/passwordChange";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function ChangePassword() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
  }, [token, email]);

  return (
    <>
      <PasswordChange token={token ? token : ''} email={email ? email : ''} />
    </>
  );
}

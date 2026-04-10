import { HeaderGreeting, HeaderSearch, HeaderNotifications, HeaderProfile } from "./ui/index.js";
import { useState } from "react";
import { useAuth } from "@shared/lib/auth/useAuth.js"
import { AuthActions } from "./ui/headerAuthActions/header-auth-actions.js";
import { HeaderAuthModal } from "./ui/headerAuthModal/header-auth-modal.js";

export function Header() {
  const { isAuthenticated, user } = useAuth()
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-10 w-full">
      <HeaderGreeting name={user?.name ?? "Гость"} surname={user?.surname ?? ""} />
      <div className="flex items-center gap-4">
        <HeaderSearch placeholder="Врачи, клиники, услуги..." />
        <HeaderNotifications onClick={() => {}} />
        {isAuthenticated && user ? (
          <HeaderProfile user={user}/>
        ): (
        <>
          <AuthActions onLoginClick = {() => setLoginOpen(true)}/>
            <HeaderAuthModal onClose={()=> setLoginOpen(false)} open={loginOpen}/>
        </>
        )}
      </div>
    </header>
  );
}
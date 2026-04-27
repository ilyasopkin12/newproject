import { HeaderGreeting, HeaderSearch, HeaderNotifications, HeaderProfile } from "./ui/index";
import { useState } from "react";
import { useAuth } from "@shared/lib/auth/useAuth"
import { AuthActions } from "./ui/headerAuthActions/header-auth-actions";
import { HeaderAuthModal } from "./ui/headerAuthModal/header-auth-modal";
import { HeaderNotificationsModal } from "./ui/headerNotificationsModal/header-notifications-modal";
import { NavLink } from "react-router-dom";

export function Header() {
  const { isAuthenticated, user } = useAuth()
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false)

  return (
    <header className="flex items-center justify-between gap-10 w-full">
      <HeaderGreeting name={user?.name ?? "Гость"}/>
      <div className="flex items-center gap-4">
        <HeaderSearch placeholder="Врачи, клиники, услуги..." />
        <div className="relative">
          <HeaderNotifications onClick={() => setNotificationsOpen(true)} />
          {notificationsOpen && (<HeaderNotificationsModal onClose={()=> setNotificationsOpen(false)}/>)}
        </div>
        {isAuthenticated && user ? (
          <NavLink to={"/cabinet"}>
            <HeaderProfile user={user}/>
          </NavLink>
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
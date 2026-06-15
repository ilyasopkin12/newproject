import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '@/app';

import {
  AuthActions,
  HeaderAuthModal,
  HeaderGreeting,
  HeaderNotifications,
  HeaderNotificationsModal,
  HeaderProfile,
  HeaderSearch,
} from './ui';

export function Header() {
  const { isAuthenticated, user } = useAuth();
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between gap-10 w-full">
      <HeaderGreeting name={user?.name ?? 'Гость'} />
      <div className="flex items-center gap-4">
        <HeaderSearch placeholder="Врачи, клиники, услуги..." />
        <div className="relative">
          <HeaderNotifications onClick={() => setNotificationsOpen(true)} />
          {notificationsOpen && (
            <HeaderNotificationsModal
              onClose={() => setNotificationsOpen(false)}
            />
          )}
        </div>
        {isAuthenticated && user ? (
          <NavLink to={'/cabinet'}>
            <HeaderProfile user={user} />
          </NavLink>
        ) : (
          <>
            <AuthActions onLoginClick={() => setLoginOpen(true)} />
            <HeaderAuthModal
              onClose={() => setLoginOpen(false)}
              open={loginOpen}
            />
          </>
        )}
      </div>
    </header>
  );
}

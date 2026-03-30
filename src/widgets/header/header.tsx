import { HeaderGreeting, HeaderSearch, HeaderNotifications, HeaderProfile } from "./ui/index.js";
interface User {
  name: string;
  surname: string;
  role: string;
}

export function Header() {
  
  const users: User[] = [{
    name: "Александр",
    surname: "Волков",
    role: "Пациент",
  }, {
    name: "Иван",
    surname: "Иванов",
    role: "Специалист",
  }, {
    name: "Петр",
    surname: "Петров",
    role: "Администратор",
  }]

  const currentUser = users[0];
  if (!currentUser) return null;
  return (
    <header className="flex items-center justify-between gap-10 w-full">
      <HeaderGreeting name={currentUser.name} surname={currentUser.surname} />
      <div className="flex items-center gap-4">
        <HeaderSearch placeholder="Врачи, клиники, услуги..." />
        <HeaderNotifications onClick={() => {}} />
        <HeaderProfile name={currentUser.name} surname={currentUser.surname} role={currentUser.role} />
      </div>
    </header>
  );
}
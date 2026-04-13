import type { User } from "@/entities/user/model/types.js"

type  HeaderProfileProps = {
    user: User
}
type UserRole = "patient" | "doctor" | "admin"



export const HeaderProfile = ( {user}: HeaderProfileProps ) => {
    const roleLabelMap: Record<UserRole, string> = {
        patient: "Пациент",
        doctor: "Врач",
        admin: "Администратор",
      };
      const roleLabel = roleLabelMap[user.role as UserRole] ?? user.role;

    return (
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
            <p className="text-sm font-bold">{`${user.name}`}</p>
            <p className="text-xs text-slate-500">{roleLabel}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
            {`${user.name[0]} ${user.surname[0]}`}
            </div>
        </div>
    )
}
import type { User } from "@entities/user/model/types.js"

interface HeaderProfileProps {
    user: User;
}

export const HeaderProfile = ( {user}: HeaderProfileProps ) => {
    return (
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
            <p className="text-sm font-bold">{`${user.fullName}`}</p>
            <p className="text-xs text-slate-500">{user.role}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
            {`${user.fullName[0]} ${user.fullName[0]}`}
            </div>
        </div>
    )
}
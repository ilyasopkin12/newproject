

interface HeaderProfileProps {
    name: string;
    surname: string;
    role: string;
}

export const HeaderProfile = ( props: HeaderProfileProps ) => {
    return (
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right">
            <p className="text-sm font-bold">{`${props.name}`}</p>
            <p className="text-xs text-slate-500">{props.role}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
            {`${props.name[0]} ${props.surname[0]}`}
            </div>
        </div>
    )
}
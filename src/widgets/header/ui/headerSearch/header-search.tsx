import { Search } from "lucide-react"
import { Input } from "@shared/ui/input.js";



interface HeaderSearchProps {
    placeholder: string;
}

export const HeaderSearch = ( props: HeaderSearchProps ) => {
    return (
        <div className="input-group relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input 
                type="text" 
                placeholder={props.placeholder} 
                className="bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 w-64 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
        </div>
    )
}
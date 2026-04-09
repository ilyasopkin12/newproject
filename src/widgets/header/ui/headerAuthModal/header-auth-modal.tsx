import { useAuth } from "@/shared/lib/auth/useAuth.js"
import { ShieldCheck, Mail, X, Lock, ArrowRight, EyeOff, Eye } from "lucide-react"
import { useState } from "react"

interface HeaderAuthModalProps {
    onClose : () => void
}

export const HeaderAuthModal = (props : HeaderAuthModalProps) => {
    const [showPassword,setShowPassword] = useState(false)
    const {login} = useAuth()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState<string | null>(null)
    const [isSubmitting,setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsSubmitting(true)

        try {
            await login({email, password})
            props.onClose()
        } catch (e) {
            setError("Неверный логин или пароль")
        } finally {
            setIsSubmitting(false)
        }
    }

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
        <div className="bg-white w-full max-w-[440px] rounded-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
          
          {/* Close Button */}
          <button className="absolute right-6 top-6 text-slate-400 hover:text-slate-600 transition-colors" onClick={props.onClose}>
            <X size={24} />
          </button>
  
          <div className="p-8 sm:p-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl text-blue-600 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">С возвращением!</h2>
              <p className="text-slate-500 mt-2">Войдите в свой аккаунт MedSync</p>
            </div>
  
            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-slate-700">Пароль</label>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700">Забыли пароль?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-12 pr-12 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
  
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="remember" className="text-sm text-slate-600">Запомнить меня на этом устройстве</label>
              </div>
  
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 group" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Входим" : "Войти"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
  
            {/* Divider */}
            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <span className="relative px-4 bg-white text-xs font-medium text-slate-400 uppercase tracking-wider">или войти через</span>
            </div>
  
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm text-slate-700">
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm text-slate-700">
                Apple ID
              </button>
            </div>
  
            {/* Footer */}
            <p className="text-center mt-8 text-sm text-slate-500">
              Еще нет аккаунта? <button className="text-blue-600 font-bold hover:underline">Создать профиль</button>
            </p>
          </div>
        </div>
        </div>
    )
}
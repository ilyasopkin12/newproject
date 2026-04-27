import { X, Calendar, FileText, CheckCircle2, AlertCircle, Bell, Settings } from 'lucide-react';

type HeaderNotificationsModalProps = {
    onClose: () => void
}

export const HeaderNotificationsModal = ({onClose}: HeaderNotificationsModalProps) => {
    return (
        <>
        <div className="w-[420px] max-w-[min(420px,calc(100vw-2rem))] absolute right-0 mt-2 z-50 max-w-[420px] bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100">
          

          <div className="px-8 pt-8 pb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Уведомления</h2>
              <p className="text-sm text-slate-500 font-medium mt-1">У вас 2 новых сообщения</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                <Settings size={20} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors" onClick={onClose} >
                <X size={20} />
              </button>
            </div>
          </div>
  

          <div className="px-4 pb-4 space-y-2">
            

            <div className="p-4 bg-blue-50/50 rounded-[24px] flex gap-4 border border-blue-100/50 relative">
              <div className="absolute top-5 right-5 w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                <Calendar className="text-blue-600" size={22} />
              </div>
              <div className="space-y-1 pr-4">
                <h4 className="text-sm font-bold text-slate-900">Напоминание о приеме</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Завтра в 10:30, Терапевт Елена Иванова. Клиника «Здоровье».</p>
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider pt-1">15 минут назад</p>
              </div>
            </div>
  

            <div className="p-4 hover:bg-slate-50 rounded-[24px] flex gap-4 transition-colors group relative">
              <div className="absolute top-5 right-5 w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                <FileText className="text-emerald-600" size={22} />
              </div>
              <div className="space-y-1 pr-4">
                <h4 className="text-sm font-bold text-slate-900">Результаты готовы</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Общий анализ крови готов и прикреплен к вашей медкарте.</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">2 часа назад</p>
              </div>
            </div>
  

            <div className="p-4 hover:bg-slate-50 rounded-[24px] flex gap-4 transition-colors">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center shrink-0">
                <AlertCircle className="text-amber-600" size={22} />
              </div>
              <div className="space-y-1 pr-4">
                <h4 className="text-sm font-bold text-slate-900">Перенос визита</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Врач София Ли перенесла время приема на 14:30. Подтвердите изменения.</p>
                <div className="pt-3 flex gap-2">
                  <button className="px-4 py-2 bg-slate-900 text-white text-[11px] font-bold rounded-lg hover:bg-slate-800 transition-colors">Подтвердить</button>
                  <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold rounded-lg hover:bg-slate-50 transition-colors">Детали</button>
                </div>
              </div>
            </div>
  

            <div className="p-4 hover:bg-slate-50 rounded-[24px] flex gap-4 transition-colors opacity-60">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-slate-500" size={22} />
              </div>
              <div className="space-y-1 pr-4">
                <h4 className="text-sm font-bold text-slate-900">Запись создана</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Вы успешно записались к стоматологу на 28 апреля.</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pt-1">Вчера</p>
              </div>
            </div>
  
          </div>
  

          <div className="p-6 bg-slate-50/50 border-t border-slate-50 flex justify-center">
            <button className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-2">
              Показать все уведомления
            </button>
          </div>
        </div>
        </>
    );
}
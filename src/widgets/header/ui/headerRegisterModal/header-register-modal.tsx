import { useRegisterMutation } from "@/features/auth/model/use-register-mutation";
import { useAuth } from "@/shared/lib/auth/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form";

interface HeaderRegisterModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const registerSchema = z.object({
  name: z.string().min(1, "Введите имя"),
  surname: z.string().min(1, "Введите фамилию"),
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
})

type RegisterFormValues = z.infer<typeof registerSchema>

export const HeaderRegisterModal = ({ open, onClose, onSwitchToLogin }: HeaderRegisterModalProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const { setAuthUser } = useAuth()

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {email: "", password: "", name: "", surname: ""},
  })

  const {mutateAsync: registerMutate, isPending} = useRegisterMutation({
    onSuccess: (me) => {
      setAuthUser(me);
      onClose()
    },
    onError: () => {
      setServerError("Ошибка регистрации");
    }
  })

  const onSubmit = async (values: RegisterFormValues) => {
    setServerError(null)
    await registerMutate(values)
  }

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
          <DialogDescription>Создайте аккаунт</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({field}) => (
                <FormItem>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input placeholder="Иван" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="surname" render={({ field}) => (
                <FormItem>
                  <FormLabel>Фамилия</FormLabel>
                  <FormControl>
                    <Input placeholder="Иванов" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input type={showPassword ? "text" : "password"} placeholder="*******" {...field} />
                      <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {serverError && <p className="text-sm text-red-500">{serverError}</p>}

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Регистрация.." : "Зарегистрироваться"}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm text-slate-500">
          Уже есть аккаунт?{" "}
          <button onClick={onSwitchToLogin} className="text-blue-600 hover:underline">
            Войти
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
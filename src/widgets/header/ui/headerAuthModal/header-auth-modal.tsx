import { useLoginMutation } from "@/features/auth/model/use-login-mutation.js";
import { useAuth } from "@/shared/lib/auth/useAuth.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/shared/ui/button.js";
import { Input } from "@/shared/ui/input.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog.js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form.js";

interface HeaderAuthModalProps {
  open: boolean;
  onClose: () => void;
}

const loginSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const HeaderAuthModal = ({ open, onClose }: HeaderAuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const { setAuthUser } = useAuth();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const { mutateAsync: loginMutate, isPending } = useLoginMutation({
    onSuccess: (me) => {
      setAuthUser(me);
      onClose();
    },
    onError: () => {
      setServerError("Неверный логин или пароль");
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setServerError(null);
    await loginMutate(values);
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle>Вход</DialogTitle>
          <DialogDescription>Войдите в аккаунт MedSync</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                      >
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
              {isPending ? "Входим..." : "Войти"}
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
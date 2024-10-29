"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { useUserContext } from "@/context/userContext";

const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  password: z.string().min(6, {
    message: "A senha deve ter pelo menos 6 caracteres.",
  }),
});

export function FormLogin() {
  const router = useRouter();
  const { setUser } = useUserContext(); 

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
    const { email, password } = data;
    try {
      const { data } = await axiosInstance.post('/usuarios/login', {
        email, 
        senha: password
      });

      localStorage.setItem('token', data.token);

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Login realizado com sucesso!');

        const token = localStorage.getItem('token');
        
        if (token) {
          try {
            const userResponse = await axiosInstance.get('/usuarios/profile', {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(userResponse.data); 
            router.push('/'); 
          } catch (err) {
            console.error('Error fetching user profile:', err);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="exemplo@exemplo.com" {...field} />
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
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Sua senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="px-8">Entrar</Button>
        </div>
        <div>
          <p className="text-center">Ainda não tem conta na Tech Academy? <Link href='/register' className="underline hover:text-gray-600">Cadastre-se.</Link></p>
        </div>
      </form>
    </Form>
  );
}

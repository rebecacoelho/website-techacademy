"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Toaster, toast } from "react-hot-toast"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import axiosInstanceNode from "@/utils/axiosInstanceNode"
import { useRouter } from "next/navigation"

const RegisterFormSchema = z
  .object({
    name: z.string().min(2, {
      message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
      message: "Por favor, insira um endereço de e-mail válido.",
    }),
    password: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres.",
    }),
    confirmPassword: z.string().min(6, {
      message: "Por favor, confirme sua senha.",
    }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem.",
        path: ["confirmPassword"], 
      })
    }
})

export function FormRegister() {
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(data: z.infer<typeof RegisterFormSchema>) {
    const { name, email, password } = data
    try {
      const { data } = await axiosInstanceNode.post('/register', {
        name, email, password
      })

      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success('Cadastro realizado com sucesso. Bem Vindo!')

        setTimeout(() => {
          router.push('/login'); 
        }, 2000);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 px-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirme a senha" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="px-8">Registrar</Button>
        </div>
        <div>
          <p className="text-center">Já possui conta na Tech Academy? <Link href='/login' className="underline hover:text-gray-600">Entre aqui!</Link></p>
        </div>
      </form>
    </Form>
  )
}

"use client"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {useQueryClient, useMutation} from "@tanstack/react-query";
import {participations} from "@/lib/api/participations";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {type ParticipationCreate, type ParticipationFields} from "@/lib/api/participations/types";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Loader2} from "lucide-react";
import type {ApiResponse} from "@/lib/dataProvider";
import { useRouter} from "next/navigation";
import { useToast} from "@/hooks/use-toast";

export function JoinSessionForm() {
  const queryClient = useQueryClient()
  const mutation = useMutation(participations.mutations.create(queryClient));
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<ParticipationCreate>({
    mode: "onChange",
    resolver: zodResolver(participations.schemas.create),
    defaultValues: {
      user: {
        name: '',
        email: ''
      },
      session: {
        code: ''
      }
    },
  })

  const onSubmit = (values: ParticipationCreate) => {
    mutation.mutate({data: values}, {
      onSuccess: (res: ApiResponse<ParticipationFields>) => {
        console.log('response', res)
        if (!res?.data?.session_id) {
          toast({ description: 'Hubo un error al obtener la sesión creada.' });
          return;
        }
        if (window) {
          window.sessionStorage.setItem('email', values?.user?.email ?? '');
        }
        router.push(`/sessions/${res?.data?.session_id}`)
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={form.control}
          name="user.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="user.email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session.code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field} className="w-full">
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription className="text-xs">
                Este es un código de 6 dígitos que te debe dar tu profesor/a.
              </FormDescription>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Button type="submit" className="inline-flex gap-x-2 w-full bg-foco-800 text-white" disabled={!form.formState.isValid || form.formState.isSubmitting}>
          {(mutation.isPending) && (
            <Loader2 className="w-4 h-4 animate-spin"/>
          )}
          Ingresar
        </Button>
      </form>
    </Form>
  )
}

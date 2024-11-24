"use client"

import {useQueryClient, useMutation} from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
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
import {sessions} from "@/lib/api/sessions";
import {type SessionCreate, type SessionFields} from "@/lib/api/sessions/types";
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from 'next/navigation'
import {type ApiResponse} from "@/lib/dataProvider";
import {useToast} from "@/hooks/use-toast";

export function NewSessionForm() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const {toast} = useToast();
  const mutation = useMutation(sessions.mutations.create(queryClient));

  const form = useForm<SessionCreate>({
    mode: "onChange",
    resolver: zodResolver(sessions.schemas.create),
    defaultValues: {
      user: {
        name: '',
        email: ''
      },
      session: {
        name: '',
        send_transcript: false,
        send_summary: false
      }
    }
  })

  const onSubmit = (values: SessionCreate) => {
    mutation.mutate({data: values}, {
      onSuccess: (res: ApiResponse<{ session: SessionFields }>) => {
        console.log('response', res)
        if (!res?.data?.session?.id) {
          toast({ description: 'Hubo un error al obtener la sesión creada.' });
          return;
        }
        if (window) {
          window.sessionStorage.setItem('email', values?.user?.email ?? '');
        }
        router.push(`/sessions/${res?.data?.session?.id}/teacher`)
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-3 gap-y-5 w-full">
        <FormField
          control={form.control}
          name="user.name"
          render={({ field }) => (
            <FormItem className="col-span-2 sm:col-span-1">
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
            <FormItem className="col-span-2 sm:col-span-1">
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
          name="session.name"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Nombre de la sesión</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session.send_transcript"
          render={({ field }) => (
            <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Transcripción
                </FormLabel>
                <FormDescription className="text-xs">
                  Enviar la transcripción de la clase a los estudiantes al finalizar la sesión.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="session.send_summary"
          render={({ field }) => (
            <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Resumen
                </FormLabel>
                <FormDescription className="text-xs">
                  Enviar un resumen de la clase a los estudiantes al finalizar la sesión.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="col-span-2 inline-flex gap-x-2 w-full bg-foco-800 text-white" disabled={!form.formState.isValid || form.formState.isSubmitting}>
          {(mutation.isPending) && (
            <Loader2 className="w-4 h-4 animate-spin"/>
          )}
          Crear
        </Button>
      </form>
    </Form>
  )
}

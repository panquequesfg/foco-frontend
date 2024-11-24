"use client"

import {useContext, useEffect} from "react";
import {Loader2} from "lucide-react";
import SessionContext from '../context';
import {useRouter} from "next/navigation";
import {useToast} from "@/hooks/use-toast";

export default function Teacher() {
  const { session } = useContext(SessionContext);
  const router = useRouter();
  const {toast} = useToast();
  console.log(session);

  useEffect(() => {
    if (window && session) {
      const teacherEmail = window.sessionStorage.getItem('email');

      if (teacherEmail !== session?.creator?.email) {
        toast({ title: 'Ups...', description: 'No eres la persona encargada de la sesión PLOP' });
        router.push('/');
      }
    }
  }, [session, router, toast]);
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start w-full mb-auto">
      {(session) && (
        <div className="flex flex-col bg-[#f5f2eb] gap-y-2 justify-center items-center w-full px-8 py-4 sm:px-20 sm:py-10">
          <p className="text-base font-medium text-foco-800 sm:text-lg">{session.name}</p>
          <h1 className="text-4xl font-bold text-foco-800 tracking-widest sm:text-5xl">{session.code.slice(0,3)} {session.code.slice(3,6)}</h1>
        </div>
      )}
      {!session && (
        <div className="flex w-full p-10 justify-center items-center">
          <Loader2 className="w-10 h-10 animate-spin"/>
        </div>
      )}
    </main>
  )
}
"use client"

import { createContext } from 'react';
import {useQuery} from "@tanstack/react-query";
import {sessions} from "@/lib/api/sessions";
import {Loader2} from "lucide-react";
import {use, useEffect} from 'react';
import { type SessionShow} from "@/lib/api/sessions/types";
import { useRouter } from "next/navigation";
import {useToast} from "@/hooks/use-toast";

interface SessionContextType {
  session: SessionShow | undefined;
}
export const SessionContext = createContext<SessionContextType>({ session: undefined });

export default function SessionLayout({ params, children }: { params: Promise<{ slug: string }> }) {
  const { slug: sessionId } = use(params);
  const router = useRouter();
  const {toast} = useToast();
  const sessionQuery = useQuery(sessions.queries.show(sessionId));
  const session: SessionShow | undefined = sessionQuery.data?.data ?? undefined;
  console.log(session);

  useEffect(() => {
    if (session?.status === 'finished') {
      toast({ title: 'Ups...', description: 'La sesión ha finalizado.' });
      router.push('/');
    }
  }, [session, router, toast]);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  )
}
"use client"

import {useContext} from 'react';
import {Loader2} from "lucide-react";
import {useEffect} from 'react';
import {SessionContext} from "@/app/sessions/[slug]/layout";
import {useRouter} from "next/navigation";

export default function Session() {
  const { session } = useContext(SessionContext);
  const router = useRouter();

  console.log(session);
  useEffect(() => {
    if (window && session) {
      const teacherEmail = window.sessionStorage.getItem('email');

      if (teacherEmail === session?.creator?.email) {
        router.push(`/sessions/${session.id}/teacher`);
      }
    }
  }, [session, router]);

  return (
    <main className="flex flex-col gap-8 items-center sm:items-start w-full mb-auto">
      {session && (
        <div className="flex flex-col bg-[#f5f2eb] gap-y-2 justify-center items-center w-full px-8 py-4 sm:px-20 sm:py-10">
          <p className="text-base font-semibold text-foco-800 sm:text-lg">{session.name}</p>
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
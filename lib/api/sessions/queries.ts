import dataProvider, {type ResponseError} from "@/lib/dataProvider";
import { type SessionShow} from "@/lib/api/sessions/types";
import {toast} from "@/hooks/use-toast";

export const show = (id: string | null | undefined | string[]) => ({
  queryKey: ['sessions', id],
  queryFn: async () => {
    return await dataProvider.get<SessionShow>(`sessions/${id}`);
  },
  enabled: !!id,
  onError: async (e: ResponseError) => {
    toast({description: e?.message ?? 'Ocurrió un error 🤯'});
    throw e;
  }
});
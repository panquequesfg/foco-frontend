import dataProvider, {type ResponseError} from "@/lib/dataProvider";
import {type SessionCreate, type SessionFields} from "@/lib/api/sessions/types";
import {
  type QueryClient
} from '@tanstack/react-query'
import {toast} from "@/hooks/use-toast";

export const create = (queryClient: QueryClient) => ({
  mutationKey: ['sessions', 'create'],
  mutationFn: async (vars: { data: SessionCreate }) => {
    return await dataProvider.post<{ session: SessionFields }, SessionCreate>('sessions', {
      ...vars.data
    });
  },
  onSettled: async () => {
    await queryClient.invalidateQueries({
      queryKey: ['sessions']
    });
  },
  onError: async (e: ResponseError) => {
    toast({description: e?.message ?? 'Ocurrió un error 🤯'});
    throw e;
  }
});
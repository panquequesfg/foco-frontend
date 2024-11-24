import dataProvider, {type ResponseError} from "@/lib/dataProvider";
import {
  type QueryClient
} from '@tanstack/react-query'
import {toast} from "@/hooks/use-toast";
import {type ParticipationCreate, type ParticipationFields} from "@/lib/api/participations/types";

export const create = (queryClient: QueryClient) => ({
  mutationKey: ['participations', 'create'],
  mutationFn: async (vars: { data: ParticipationCreate }) => {
    return await dataProvider.post<ParticipationFields, ParticipationCreate>('participations', {
      ...vars.data
    });
  },
  onSettled: async () => {
    await queryClient.invalidateQueries({
      queryKey: ['participations']
    });
  },
  onError: async (e: ResponseError) => {
    toast({description: e?.message ?? 'Ocurrió un error 🤯'});
    throw e;
  }
});
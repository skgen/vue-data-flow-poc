import { useTypedRequest, type HttpRequest } from '@patriarche/vue-http';
import { computed, reactive } from 'vue';
import { z } from 'zod';

export type ReadGroupsRequest = HttpRequest<'GET', '/groups'>;

export const readGroupsResponseSchema = z.array(z.object({
  id: z.string(),
  users: z.array(z.object({
    id: z.string(),
  })),
}));
export type ReadGroupsResponse = z.infer<typeof readGroupsResponseSchema>;

export type UseReadGroupsReturnType = ReturnType<typeof useReadGroups>;

export function useReadGroups() {
  const { data, ...spread } = useTypedRequest<ReadGroupsRequest, typeof readGroupsResponseSchema>(
    reactive({
      method: 'GET',
      url: '/groups',
    }),
    readGroupsResponseSchema,
  );

  const groups = computed(() => (data.value ? [...data.value] : []));

  return {
    groups,
    ...spread,
  };
}

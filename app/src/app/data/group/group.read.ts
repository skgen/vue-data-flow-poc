import { useTypedRequest, type HttpRequest } from '@patriarche/vue-http';
import { computed, reactive } from 'vue';
import { z } from 'zod';

export type ReadGroupRequest = HttpRequest<'GET', `/groups/${string}`>;

export const readGroupResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  users: z.array(z.object({
    id: z.string(),
  })),
});
export type ReadGroupResponse = z.infer<typeof readGroupResponseSchema>;

export type ReadGroupOptions = {
  groupId: string;
};

export type UseReadGroupReturnType = ReturnType<typeof useReadGroup>;

export function useReadGroup(options: ReadGroupOptions) {
  const { data, ...spread } = useTypedRequest<ReadGroupRequest, typeof readGroupResponseSchema>(
    reactive({
      method: 'GET',
      url: computed<ReadGroupRequest['url']>(() => `/groups/${options.groupId}`),
    }),
    readGroupResponseSchema,
  );
  return {
    group: data,
    ...spread,
  };
}

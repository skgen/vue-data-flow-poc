import { useTypedRequest, type HttpRequest } from '@patriarche/vue-http';
import { computed, reactive } from 'vue';
import { z } from 'zod';

export type ReadUserRequest = HttpRequest<'GET', `/users/${string}`>;

export const readUserResponseSchema = z.object({
  id: z.string(),
  messages: z.array(z.object({
    id: z.string(),
  })),
});
export type ReadUserResponse = z.infer<typeof readUserResponseSchema>;

export type ReadUserOptions = {
  userId: string;
};

export type UseReadUserReturnType = ReturnType<typeof useReadUser>;

export function useReadUser(options: ReadUserOptions) {
  const { data, ...spread } = useTypedRequest<ReadUserRequest, typeof readUserResponseSchema>(
    reactive({
      method: 'GET',
      url: computed<ReadUserRequest['url']>(() => `/users/${options.userId}`),
    }),
    readUserResponseSchema,
  );
  return {
    user: data,
    ...spread,
  };
}

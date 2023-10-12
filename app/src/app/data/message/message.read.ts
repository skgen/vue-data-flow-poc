import { useTypedRequest, type HttpRequest } from '@patriarche/vue-http';
import { computed, reactive } from 'vue';
import { z } from 'zod';

export type ReadMessageRequest = HttpRequest<'GET', `/messages/${string}`>;

export const readMessageResponseSchema = z.object({
  id: z.string(),
});
export type ReadMessageResponse = z.infer<typeof readMessageResponseSchema>;

export type ReadMessageOptions = {
  messageId: string;
};

export type UseReadMessageReturnType = ReturnType<typeof useReadMessage>;

export function useReadMessage(options: ReadMessageOptions) {
  const { data, ...spread } = useTypedRequest<ReadMessageRequest, typeof readMessageResponseSchema>(
    reactive({
      method: 'GET',
      url: computed<ReadMessageRequest['url']>(() => `/messages/${options.messageId}`),
    }),
    readMessageResponseSchema,
  );
  return {
    message: data,
    ...spread,
  };
}

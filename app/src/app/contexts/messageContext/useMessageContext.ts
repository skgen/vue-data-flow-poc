import { inject } from 'vue';
import { isValue } from '@patriarche/melkor';

import { messageContextKey } from '.';

export function useMessageContext() {
  const context = inject(messageContextKey);
  if (!isValue(context)) {
    throw new Error('useMessageContext must be called inside an <MessageContextProvider />');
  }

  return context;
}

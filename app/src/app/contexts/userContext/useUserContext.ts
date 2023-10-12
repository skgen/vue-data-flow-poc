import { inject } from 'vue';
import { isValue } from '@patriarche/melkor';

import { userContextKey } from '.';

export function useUserContext() {
  const context = inject(userContextKey);
  if (!isValue(context)) {
    throw new Error('useUserContext must be called inside an <UserContextProvider />');
  }

  return context;
}

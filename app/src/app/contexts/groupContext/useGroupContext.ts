import { inject } from 'vue';
import { isValue } from '@patriarche/melkor';

import { groupContextKey } from '.';

export function useGroupContext() {
  const context = inject(groupContextKey);
  if (!isValue(context)) {
    throw new Error('useGroupContext must be called inside an <GroupContextProvider />');
  }

  return context;
}

import { inject } from 'vue';
import { isValue } from '@patriarche/melkor';

import { groupsContextKey } from '.';

export function useGroupsContext() {
  const context = inject(groupsContextKey);
  if (!isValue(context)) {
    throw new Error('useGroupsContext must be called inside an <GroupsContextProvider />');
  }

  return context;
}

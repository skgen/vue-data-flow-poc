import type { InjectionKey } from 'vue';

import type { UseReadGroupsReturnType } from '@/app/data/group/groups.read';
import type { UseRequestDerivedDataContext } from '@/app/lib/typeHelpers';

export type GroupsContext = UseRequestDerivedDataContext<UseReadGroupsReturnType, 'groups'>;

export const groupsContextKey = Symbol('groupsContextKey') as InjectionKey<GroupsContext>;

import type { InjectionKey } from 'vue';

import type { UseReadGroupReturnType } from '@/app/data/group/group.read';
import type { UseRequestDerivedDataContext } from '@/app/lib/typeHelpers';

export type GroupContext = UseRequestDerivedDataContext<UseReadGroupReturnType, 'group'>;

export const groupContextKey = Symbol('groupContextKey') as InjectionKey<GroupContext>;

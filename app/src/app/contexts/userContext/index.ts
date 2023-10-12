import type { InjectionKey } from 'vue';

import type { UseReadUserReturnType } from '@/app/data/user/user.read';
import type { UseRequestDerivedDataContext } from '@/app/lib/typeHelpers';

export type UserContext = UseRequestDerivedDataContext<UseReadUserReturnType, 'user'>;

export const userContextKey = Symbol('userContextKey') as InjectionKey<UserContext>;

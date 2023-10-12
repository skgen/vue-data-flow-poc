import type { InjectionKey } from 'vue';

import type { UseReadMessageReturnType } from '@/app/data/message/message.read';
import type { UseRequestDerivedDataContext } from '@/app/lib/typeHelpers';

export type MessageContext = UseRequestDerivedDataContext<UseReadMessageReturnType, 'message'>;

export const messageContextKey = Symbol('messageContextKey') as InjectionKey<MessageContext>;

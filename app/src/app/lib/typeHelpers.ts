import type { UseRequestReturnType } from '@patriarche/vue-http';
import type { Ref, UnwrapRef } from 'vue';

export type UseRequestDerivedDataContext<T extends Omit<UseRequestReturnType, 'data'>, K extends keyof T> = Omit<T, K> & {
  [P in K]: Ref<NonNullable<UnwrapRef<T[K]>>>;
};

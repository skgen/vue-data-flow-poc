import type { Ref } from 'vue';
import { computedEager } from '@vueuse/core';
import isString from 'lodash/isString';

export function computedRouteParam(fn: () => string | string[]) {
// const userId = ref(route.params.userId as string);

  // watch(() => route.params.userId, (newUserId) => {
  //   if (isString(newUserId)) {
  //     userId.value = newUserId;
  //   }
  // });

  const param: Readonly<Ref<string>> = computedEager(() => {
    const v = fn();
    if (isString(v)) {
      return v;
    }
    return param.value;
  });
  return param;
}

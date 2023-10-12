<template>
  <ContextRenderer
    :loading="otherProps.loading.value"
    :loaded="otherProps.loaded.value"
  >
    <template #loading>
      <slot name="loading" />
    </template>
    <slot v-if="user" />
  </ContextRenderer>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

import { useReadUser } from '@/app/data/user/user.read';

import ContextRenderer from '@/app/contexts/ContextRenderer.vue';

import { userContextKey, type UserContext } from '.';

type Props = {
  userId: string;
};

const props = defineProps<Props>();

const { user, ...otherProps } = useReadUser(props);

provide(userContextKey, {
  user: user as UserContext['user'],
  ...otherProps,
});

</script>

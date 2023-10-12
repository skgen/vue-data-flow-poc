<template>
  <ContextRenderer
    :loading="otherProps.loading.value"
    :loaded="otherProps.loaded.value"
  >
    <template #loading>
      <slot name="loading" />
    </template>
    <slot v-if="message" />
  </ContextRenderer>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

import { useReadMessage } from '@/app/data/message/message.read';

import ContextRenderer from '@/app/contexts/ContextRenderer.vue';

import { messageContextKey, type MessageContext } from '.';

type Props = {
  messageId: string;
};

const props = defineProps<Props>();

const { message, ...otherProps } = useReadMessage(props);

provide(messageContextKey, {
  message: message as MessageContext['message'],
  ...otherProps,
});

</script>

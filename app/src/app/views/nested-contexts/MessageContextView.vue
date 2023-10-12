<template>
  <MessageContextProvider :message-id="($route.params.messageId as string)">
    <MessageContextConsumer v-slot="{ message }">
      <AppBlock name="MessageContextView.vue">
        <mk-wysiwyg-preview>
          <h3>Message</h3>
        </mk-wysiwyg-preview>
        Message : {{ message.value.id }}
      </AppBlock>
    </MessageContextConsumer>
    <template #loading>
      <AppBlock name="MessageContextView.vue">
        <mk-wysiwyg-preview>
          <h3>Message</h3>
        </mk-wysiwyg-preview>
        <mk-skeleton
          width="100px"
          height="19px"
        />
      </AppBlock>
    </template>
  </MessageContextProvider>
</template>

<script lang="ts" setup>
import MessageContextProvider from '@/app/contexts/messageContext/MessageContextProvider.vue';
import MessageContextConsumer from '@/app/contexts/messageContext/MessageContextConsumer.vue';
import AppBlock from '@/app/components/AppBlock.vue';
</script>

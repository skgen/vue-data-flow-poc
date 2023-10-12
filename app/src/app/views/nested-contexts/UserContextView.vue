<template>
  <UserContextProvider :user-id="($route.params.userId as string)">
    <GroupContextConsumer v-slot="{ group }">
      <UserContextConsumer v-slot="{ user }">
        <AppBlock name="UserContextView.vue">
          <mk-wysiwyg-preview>
            <h3>Messages</h3>
          </mk-wysiwyg-preview>
          <AppList>
            <mk-link
              v-for="message of user.value.messages"
              :key="message.id"
              :to="`/nested-contexts/${group.value.id}/${user.value.id}/${message.id}`"
              :match-strategy="LinkMatchStrategy.shallowPath"
            >
              Message {{ message.id }}
            </mk-link>
          </AppList>
          <router-view />
        </AppBlock>
      </UserContextConsumer>
    </GroupContextConsumer>
    <template #loading>
      <AppBlock name="UserContextView.vue">
        <mk-wysiwyg-preview>
          <h3>Messages</h3>
        </mk-wysiwyg-preview>
        <AppList>
          <mk-skeleton
            v-for="n of 3"
            :key="n"
            width="100px"
            height="19px"
          />
        </AppList>
      </AppBlock>
    </template>
  </UserContextProvider>
</template>

<script lang="ts" setup>
import { LinkMatchStrategy } from '@patriarche/melkor';

import GroupContextConsumer from '@/app/contexts/groupContext/GroupContextConsumer.vue';
import UserContextProvider from '@/app/contexts/userContext/UserContextProvider.vue';
import UserContextConsumer from '@/app/contexts/userContext/UserContextConsumer.vue';
import AppBlock from '@/app/components/AppBlock.vue';
import AppList from '@/app/components/AppList.vue';
</script>

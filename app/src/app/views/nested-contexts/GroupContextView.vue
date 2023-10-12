<template>
  <GroupContextProvider :group-id="($route.params.groupId as string)">
    <GroupContexConsumer v-slot="{ group }">
      <AppBlock name="GroupContextView.vue">
        <mk-wysiwyg-preview>
          <h3>Users</h3>
        </mk-wysiwyg-preview>
        <AppList>
          <mk-link
            v-for="user of group.value.users"
            :key="user.id"
            :to="`/nested-contexts/${group.value.id}/${user.id}`"
            :match-strategy="LinkMatchStrategy.shallowPath"
          >
            User {{ user.id }}
          </mk-link>
        </AppList>
        <router-view />
      </AppBlock>
    </GroupContexConsumer>
    <template #loading>
      <AppBlock name="GroupContextView.vue">
        <mk-wysiwyg-preview>
          <h3>Users</h3>
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
  </GroupContextProvider>
</template>

<script lang="ts" setup>
import { LinkMatchStrategy } from '@patriarche/melkor';

import GroupContextProvider from '@/app/contexts/groupContext/GroupContextProvider.vue';
import GroupContexConsumer from '@/app/contexts/groupContext/GroupContextConsumer.vue';
import AppBlock from '@/app/components/AppBlock.vue';
import AppList from '@/app/components/AppList.vue';
</script>

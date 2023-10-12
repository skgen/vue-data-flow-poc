<template>
  <div class="m2">
    <AppBlock name="EnhancedDataView.vue">
      <mk-wysiwyg-preview>
        <h3>Groups</h3>
      </mk-wysiwyg-preview>
      <GroupsContextProvider>
        <GroupsContextConsumer v-slot="{ groups }">
          <AppList>
            <GroupContextProvider
              v-for="g of groups.value"
              :key="g.id"
              :group-id="g.id"
            >
              <GroupContextConsumer v-slot="{ group }">
                <AppBlock :name="`GroupContext #${group.value.id}`">
                  <mk-wysiwyg-preview>
                    <p>{{ group.value.name }}</p>
                    <p>{{ group.value.location }}</p>
                    <p>User : {{ group.value.users.length }}</p>
                  </mk-wysiwyg-preview>
                </AppBlock>
              </GroupContextConsumer>
              <template #loading>
                <mk-skeleton size="150px" />
              </template>
            </GroupContextProvider>
          </AppList>
        </GroupsContextConsumer>
        <template #loading>
          <mk-skeleton
            width="500px"
            height="150px"
          />
        </template>
      </GroupsContextProvider>
    </AppBlock>
  </div>
</template>

<script lang="ts" setup>
import GroupsContextProvider from '@/app/contexts/groupsContext/GroupsContextProvider.vue';
import GroupsContextConsumer from '@/app/contexts/groupsContext/GroupsContextConsumer.vue';
import GroupContextProvider from '@/app/contexts/groupContext/GroupContextProvider.vue';
import GroupContextConsumer from '@/app/contexts/groupContext/GroupContextConsumer.vue';

import AppBlock from '@/app/components/AppBlock.vue';
import AppList from '@/app/components/AppList.vue';
</script>

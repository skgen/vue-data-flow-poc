<template>
  <div class="m-2">
    <AppBlock name="NestedViewsView.vue">
      <mk-wysiwyg-preview>
        <h3>Groups</h3>
      </mk-wysiwyg-preview>
      <template v-if="groups.length">
        <AppList>
          <mk-link
            v-for="group of groups"
            :key="group.id"
            :to="`/nested-contexts/${group.id}`"
            :match-strategy="LinkMatchStrategy.shallowPath"
          >
            Group {{ group.id }}
          </mk-link>
        </AppList>
        <router-view />
      </template>
    </AppBlock>
  </div>
</template>

<script lang="ts" setup>
import { LinkMatchStrategy } from '@patriarche/melkor';

import { useReadGroups } from '@/app/data/group/groups.read';

import AppBlock from '@/app/components/AppBlock.vue';
import AppList from '@/app/components/AppList.vue';

const { groups } = useReadGroups();
</script>

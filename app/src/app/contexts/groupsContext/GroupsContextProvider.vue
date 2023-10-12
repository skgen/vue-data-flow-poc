<template>
  <ContextRenderer
    :loading="otherProps.loading.value"
    :loaded="otherProps.loaded.value"
  >
    <template #loading>
      <slot name="loading" />
    </template>
    <slot />
  </ContextRenderer>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

import { useReadGroups } from '@/app/data/group/groups.read';

import ContextRenderer from '@/app/contexts/ContextRenderer.vue';

import { groupsContextKey, type GroupsContext } from '.';

const { groups, ...otherProps } = useReadGroups();

provide(groupsContextKey, {
  groups: groups as GroupsContext['groups'],
  ...otherProps,
});

</script>

<template>
  <ContextRenderer
    :loading="otherProps.loading.value"
    :loaded="otherProps.loaded.value"
  >
    <template #loading>
      <slot name="loading" />
    </template>
    <slot v-if="group" />
  </ContextRenderer>
</template>

<script lang="ts" setup>
import { provide } from 'vue';

import { useReadGroup } from '@/app/data/group/group.read';

import ContextRenderer from '@/app/contexts/ContextRenderer.vue';

import { groupContextKey, type GroupContext } from '.';

type Props = {
  groupId: string;
};

const props = defineProps<Props>();

const { group, ...otherProps } = useReadGroup(props);

provide(groupContextKey, {
  group: group as GroupContext['group'],
  ...otherProps,
});

</script>

<template>
  <slot v-bind="context" />
</template>

<script lang="ts" setup>
import { useGroupsContext } from './useGroupsContext';

const context = useGroupsContext();
</script>

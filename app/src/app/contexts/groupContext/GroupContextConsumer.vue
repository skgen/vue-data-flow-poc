<template>
  <slot v-bind="context" />
</template>

<script lang="ts" setup>
import { useGroupContext } from './useGroupContext';

const context = useGroupContext();
</script>

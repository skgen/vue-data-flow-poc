<template>
  <slot v-bind="context" />
</template>

<script lang="ts" setup>
import { useUserContext } from './useUserContext';

const context = useUserContext();
</script>

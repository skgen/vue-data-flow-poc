<template>
  <slot v-bind="context" />
</template>

<script lang="ts" setup>
import { useMessageContext } from './useMessageContext';

const context = useMessageContext();
</script>

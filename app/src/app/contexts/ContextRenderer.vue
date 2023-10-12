<template>
  <slot
    v-if="(isLoading || isReloading) && $slots['loading']"
    name="loading"
  />
  <!-- <slot
    v-else-if="isReloading && $slots['reloading']"
    name="reloading"
  /> -->
  <slot v-else />
</template>

<script lang="ts" setup>
import { computed } from 'vue';

type Props = {
  loading: boolean;
  loaded: boolean;
};

const props = defineProps<Props>();

const isLoading = computed(() => props.loading && !props.loaded);
const isReloading = computed(() => props.loading && props.loaded);
</script>

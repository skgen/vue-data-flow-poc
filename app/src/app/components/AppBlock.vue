<template>
  <div
    class="pux-AppBlock"
    :data-has-title="!!props.name ?? undefined"
  >
    <em
      v-if="props.name"
      class="pux-AppBlock-name"
    >{{ props.name }}</em>
    <div class="pux-AppBlock-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  name?: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.pux-AppBlock {
    $this: &;

    padding: 0 var(--app-m-2) var(--app-m-2) 0;
    border: 1px solid var(--app-border-color);

    &-name {
        display: inline-block;
        padding: 2px 4px;
        border-right: 1px solid var(--app-border-color);
        border-bottom: 1px solid var(--app-border-color);
    }

    &-content {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: var(--app-m-2);
        padding: var(--app-m-2) 0 0 var(--app-m-2);
    }
}
</style>

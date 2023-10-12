<template>
  <div class="wrapper">
    <mk-link to="/enhanced-data">
      Enhanced data example
    </mk-link>
    <mk-link to="/nested-contexts">
      Nested Contexts
    </mk-link>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line selector-class-pattern */
.wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-5);
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
}
</style>

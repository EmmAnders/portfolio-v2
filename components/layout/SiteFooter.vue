<template>
  <div class="site-footer-inner"><!-- ©2021 --></div>
</template>

<style lang="scss">
.site-footer-inner {
  @include flex-center;

  height: 100%;
  text-transform: uppercase;

  li:not(:last-child) {
    margin-right: $margin-s;
  }
}
</style>

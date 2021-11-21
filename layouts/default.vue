<template>
  <div class="site">
    <header class="site-header"><SiteNavigation /></header>
    <div class="site-inner">
      <Nuxt id="content" class="content-main" />
    </div>
    <footer class="site-footer"><SiteFooter /></footer>
  </div>
</template>

<style lang="scss">
.site {
  @include container;

  .content-main {
    height: 75vh;
    margin: 3rem 0rem;

    @include flex-center;
  }
  &-header {
    height: $site-header-height;
    display: flex;
    align-items: center;
  }

  &-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: $site-footer-height;
  }
}
</style>

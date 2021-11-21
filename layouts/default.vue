<template>
  <div class="site">
    <header class="site-header"><SiteNavigation /></header>
    <div class="site-inner">
      <Nuxt id="content" class="content-main" />
    </div>
  </div>
</template>

<style lang="scss">
.site {
  @include container;

  .content-main {
    height: 90vh;
    margin-top: $padding-m;

    @include medium {
      margin-top: $padding-l;
    }
    @include large {
      @include flex-center;
      margin-top: 0px;
    }
  }
  &-header {
    height: $site-header-height;
  }
}
</style>

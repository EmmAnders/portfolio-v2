<template>
  <div class="home-container row">
    <p>
      Front-End Developer <br />
      Based in Copenhagen.
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
.home-container {
  height: 100%;
  @include copy-l;
  text-indent: 3rem;

  p {
    position: absolute;
    bottom: 10vh;

    @include large {
      @include container;
    }
  }
}
</style>

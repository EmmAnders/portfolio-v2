<template>
  <div class="home-container row">
    <p class="double-column actiom">
      Front-End Developer <br />
      Based in Copenhagen.
    </p>
    <p class="column"></p>
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
  display: flex;
  align-items: flex-end;
  @include copy-l;
  text-indent: 3rem;
}
</style>

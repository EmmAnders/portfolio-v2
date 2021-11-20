<template>
  <nav class="site-navigation">
    <ul class="site-navigation-inner row">
      <li class="site-navigation-inner-left column">
        <NuxtLink to="/">EM<br />MA</NuxtLink>
      </li>
      <li class="site-navigation-inner-center column">
        <p class="serif">Seeking internship jan-may 2022</p>
      </li>

      <div class="site-navigation-inner-right column">
        <div>
          <li>
            <NuxtLink to="/info">Info</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects">Projects</NuxtLink>
          </li>
        </div>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
.nuxt-link-active {
  font-family: $secondary-font;
  font-style: italic;
}

.site-navigation {
  text-transform: uppercase;
  width: 100%;

  &-inner {
    align-items: center;

    &-left {
      @include copy-m;
      font-weight: 400;
      align-items: left;
    }

    &-center {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: $padding-s;
      align-items: center;

      @include medium {
        position: static;
        display: block;
        text-align: center;
      }
    }

    &-right {
      align-items: center;
      @include medium {
        align-items: flex-end;
      }

      div {
        display: flex;
      }

      li:not(:last-child) {
        margin-right: $margin-s;
      }
    }
  }

  &-sidebar {
    display: block;
    position: fixed;
    top: 50%;
    transform: rotate(270deg);
    transform-origin: left 0;

    &-inner {
      display: flex;

      li {
        margin-right: $margin-s;

        a {
          color: $grey;
        }
      }
    }
  }

  p {
    position: relative;
  }

  p::before {
    position: absolute;
    content: "";
    text-align: center;
    left: -24px;
    top: 0;
    width: 17px;
    height: 17px;
    background: #0df205;
    border-radius: 50%;
    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
  }

  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.8);
    }
  }
}
</style>

<template>
  <div class="page-projects">
    <div class="project-list">
      <h1>Selected Projects</h1>
      <ul class="project-list-inner">
        <li
          v-for="(item, index) in selectedProjects"
          :key="index"
          class="project-list-item"
        >
          <article class="project-list-item-inner">
            <div class="project-list-item-inner-left">
              <h2>
                {{ item.name }}
              </h2>
              <span>{{ item.language }}</span>
            </div>

            <div class="project-list-item-inner-right">
              <span v-if="item.demo"
                ><a :href="item.demo" target="_blank">Demo</a>
              </span>
              <span><a :href="item.github" target="_blank">Github</a></span>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedProjects: [
      {
        name: "TMDB API",
        language: "React, React Query, Framer Motion",
        github: "https://github.com/EmmAnders/assignment-tmdb-api",
        demo: "https://emma-tmdb-api.netlify.app",
      },
      {
        name: "Sanandreas portfolio",
        language: "React, Gsap",
        github: "https://github.com/EmmAnders/sanandreas-audio-engineer",
        demo: "https://sanandreas.netlify.app/",
      },

      {
        name: "Music Player",
        language: "React",
        github: "https://github.com/EmmAnders/assignment-music-player-react",
        demo: "https://assignment-music-player-react.netlify.app/",
      },
      {
        name: "Todo-list",
        language: "Vue",
        github: "https://github.com/EmmAnders/assignment-todolist-vue",
        demo: " https://vue-app-todolist.netlify.app/",
      },
      {
        name: "Cinema (group assignment)",
        language: "React, Express.js, MongoDB",
        github: "https://github.com/Norven94/ronaldo-filmvisarna",
      },
    ],
  }),
};
</script>

<style lang="scss">
.page-projects {
  width: 100%;
  height: 100%;

  h1 {
    font-family: $secondary-font;
    margin-bottom: $margin-s;
    @include copy-l;
  }

  h2 {
    @include copy-m;
    text-transform: uppercase;
  }

  span {
    @include copy-s;
  }

  .project-list {
    width: 100%;

    &-item {
      border-bottom: 0.5px solid $border;
      width: 100%;
      padding: $padding-s 0rem;

      a {
        transition: 1s;
      }

      a:hover {
        color: $black;
      }

      &:first-child {
        border-top: 1px solid $border;
      }

      &-inner {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-items: center;

        &-right {
          display: flex;
          justify-content: flex-end;
          width: 100%;

          span {
            position: relative;
            display: inline-block;
          }

          span:after {
            content: "";
            position: absolute;
            left: 0;
            top: 100%;
            width: 0;
            height: 1px;
            background-color: $black;
            transition: width 0.3s ease-in-out;
          }
          span:hover:after {
            width: 100%;
          }

          a {
            color: $grey;
          }

          span:not(:last-child) {
            margin-right: $margin-s;
          }
        }
      }
    }
  }
}
</style>

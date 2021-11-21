<template>
  <div class="page-info">
    <div class="page-info-inner row">
      <div class="page-info-inner-left double-column">
        <p class="about">
          A curious spirit and excited for all things visual and technical. I
          get inspired by beautiful animations and sleek looking graphics, and
          I’m eager to gain knowledge and experience in order to create
          functional front-end solutions that are pleasing to the eye.
        </p>

        <div class="contact-details row">
          <div class="column">
            <a href="https://www.linkedin.com/in/emma-andersson-aa5480103/"
              >Linkedin</a
            >
            <a href="https://github.com/EmmAnders">Github</a>
            <p>+47 459 15 266</p>
            <p>emmandersson166@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="page-info-inner-right column">
        <div class="resume">
          <div class="content row">
            <h3 class="column heading">Work Experience</h3>
            <div class="double-column">
              <div v-for="work in experience" :key="work.title">
                <p class="title">{{ work.title }} - {{ work.company }}</p>
                <p class="time">{{ work.time }}, {{ work.city }}</p>
              </div>
            </div>
          </div>
          <div class="content row">
            <h3 class="column heading">Education</h3>
            <div class="double-column">
              <div v-for="e in education" :key="e.title">
                <p class="title">{{ e.title }} - {{ e.school }}</p>
                <p class="time">{{ e.time }}, {{ e.city }}</p>
              </div>
            </div>
          </div>

          <button @mouseenter="onMouseEnter" class="download">
            <a href="/emma-andersson-cv.pdf" download="">Download</a>
            <IconArrow ref="arrow" class="icon" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data: () => ({
    experience: [
      {
        title: "Front End Developer Intern",
        company: "Spring/Summer",
        time: "2021 - Present",
        city: "Copenhagen",
      },
      {
        title: "Digital Marketing Coordinator",
        company: "Coupler",
        time: "2018-2020",
        city: "Oslo",
      },
      {
        title: "Department Manager",
        company: "COS",
        time: "2014-2017",
        city: "Oslo",
      },
      {
        title: "Store Manager",
        company: "RON DORFF",
        time: "2014",
        city: "Paris",
      },
    ],

    education: [
      {
        title: "Front End Developer",
        school: "Medieinstitutet",
        time: "2020-2022",
        city: "Malmö",
      },
      {
        title: "Creative Marketing Communication",
        school: "Høyskolen Kristiania",
        time: "2017-2020",
        city: "Oslo",
      },
    ],
  }),

  methods: {
    onMouseEnter() {
      const arrow = this.$refs.arrow.$refs.arrow;

      let arrowTL = gsap.timeline({
        paused: true,
      });

      let a = arrowTL
        .add("start")
        .fromTo(
          arrow,
          0.35,
          { y: 0 },
          { y: 40, ease: "Power4.easeIn" },
          "start"
        )
        .set(arrow, { y: -40 })
        .to(arrow, 0.35, { y: 0 });

      a.play();
    },
  },
};
</script>

<style lang="scss">
.page-info {
  &-inner {
    &-left {
      @include flex-space-between;
      align-items: flex-start;

      @include medium {
        padding-right: $padding-xl;
      }

      .about {
        @include copy-m;
      }

      .contact-details {
        @include copy-s;
        margin: $margin-m 0rem;

        @include medium {
          margin: 0;
        }

        .column {
          @include medium {
            & > * {
              margin-top: $margin-xxs;
            }
          }
        }
      }
    }
    &-right {
      margin-bottom: 10vh;

      @include medium {
        margin-bottom: 0px;
      }

      .content {
        margin-bottom: $margin-l;
        @include medium {
          margin-bottom: $margin-xxl;
        }
      }
      .heading {
        margin-bottom: $margin-xxs;
        font-family: $secondary-font;

        @include medium {
          margin-bottom: 0px;
          margin-right: $margin-l;
        }
      }

      .title,
      .time {
        @include copy-s;
      }

      .title {
        margin-bottom: $margin-xxs;
      }

      .time {
        margin-bottom: $margin-s;
        color: $grey;
      }

      .download {
        @include reset-button;
        @include copy-s;
        @include flex-center;
        width: 100%;
        border-radius: 50px;
        color: $grey;
        border: 0.5px solid $grey;
        transition: ease-in 0.2s;
        text-align: center;
        line-height: 2.5rem;

        svg {
          margin-left: $margin-xs;
          height: 17px;
          width: 17px;
        }

        &:hover {
          border: 0.5px solid $black;
          color: $black;
        }
      }
    }
  }
}
</style>

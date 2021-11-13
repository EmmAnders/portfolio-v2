/* Transitions */

export const custom = {
  transition: {
    name: "custom",
    mode: "in-out",
    appear: true,
    css: false,
    beforeEnter(el) {
      gsap.set(el.children, {
        opacity: 0,
      });
    },
    enter(el) {
      gsap.to(el.children, {
        duration: 1.5,
        opacity: 1,
        stagger: 0.2,
      });
    },
    afterEnter(el) {},
  },
};

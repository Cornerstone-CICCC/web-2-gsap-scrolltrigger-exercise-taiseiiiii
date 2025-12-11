gsap.registerPlugin(ScrollTrigger);

const lineOneTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  },
});

lineOneTimeline
  .from(".line-one span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
  })
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 1,
  })
  .from(".sun", {
    x: "100vw",
    duration: 1.5,
  })
  .to(".sun", {
    x: "-100vw",
    duration: 1.5,
  })
  .to(
    ".line-one span",
    {
      x: "100vw",
      duration: 1.5,
    },
    "<"
  )
  .to(
    ".line-one",
    {
      backgroundColor: "white",
      duration: 1,
    },
    "<"
  );

const lineTwoTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: true,
  },
});

lineTwoTimeline
  .from(".line-two span:first-child", {
    x: "-100vw",
    scale: 10,
    opacity: 0,
    duration: 2,
  })
  .from(
    ".line-two span:last-child",
    {
      x: "100vw",
      scale: 10,
      opacity: 0,
      duration: 2,
    },
    "<"
  )
  .to(".line-two span:first-child", {
    y: -50,
    duration: 0.5,
  })
  .to(".line-two span:first-child", {
    y: 0,
    duration: 0.5,
  })
  .to(".line-two span:last-child", {
    y: -50,
    duration: 0.5,
  })
  .to(".line-two span:last-child", {
    y: 0,
    duration: 0.5,
  });

const lineThreeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "bottom center",
    pin: true,
    scrub: true,
  },
});

lineThreeTimeline
  .from(".line-three span", {
    y: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 3,
  })
  .to(".line-three", {
    backgroundPositionX: "0%",
    color: "white",
    duration: 2,
  })
  .from(
    ".moon",
    {
      x: "100vw",
      duration: 1.5,
    },
    "-=1.5"
  );

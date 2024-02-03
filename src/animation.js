export const pageAnimation = {
  hidden: {
    opacity: 0,
    x: 3000,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: 3000,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const titleAnime = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 1.75, ease: "easeOut" },
  },
};

export const imgAnime = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.75,
      ease: "easeOut",
    },
  },
};

// Swiper
export const breakPoint = {
  300: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  950: {
    slidesPerView: 5,
    spaceBetween: 10,
  },
  1121: {
    slidesPerView: "auto",
    spaceBetween: 25,
  },
};
export const backDropbreakPoint = {
  300: {
    slidesPerView: 1,
    spaceBetween: 5,
  },
  480: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  950: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1121: {
    slidesPerView: "auto",
    spaceBetween: 25,
  },
};

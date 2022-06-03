export const comeFromBottom = {
  start: {
    opacity: 0,
    y: "100vh",
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
}

export const comeFromLeftWithChildren = {
  start: {
    x: "-100vw",
    opacity: 0,
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.13,
    },
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      staggerChildren: 0.13,
    },
  },
}
export const comeFromLeft = {
  start: {
    x: "-100vw",
    opacity: 0,
  },
  end: {
    x: 0,
    transform: "none",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
}

export const fadeIn = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
}

export const comeFromBottomRight = {
  start: {
    opacity: 0,
    y: '100vh',
    x:'100vw'
  },
  end: {
    opacity: 1,
    y: 0,
    x:0,
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
}
export const comeFromRight = {
  start: {
    x: "100vw",
    opacity: 0,
  },
  end: {
    x: 0,
    // transform: "none",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
}

export const comeFromTop = {
  start: {
    y: '-100vh',
    // x: "-50%",
    opacity: 0,
  },
  end: {
    y: 0,
    // x: "-50%",
    opacity: 1,
    transition: {
      // delay: 0.1,
      // duration: 0.7,
      type: "spring",
      stiffness: 40,
    },
  },
}
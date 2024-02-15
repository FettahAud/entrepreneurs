export const calculateRem = () => {
  // TODO: Fix, under 375px it's mixing px values
  if (typeof window === "undefined") return;
  if (window.innerWidth > 1920 || window.innerWidth < 420) {
    document.documentElement.style.fontSize = "16px";
    return;
  } else {
    let rem = 16;
    if (window.innerWidth > 1280) {
      rem = (16 / 1920) * window.innerWidth;
    } else if (window.innerWidth > 768) {
      rem = (16 / 1280) * window.innerWidth;
    } else if (window.innerWidth > 420) {
      rem = (16 / 768) * window.innerWidth;
    }
    document.documentElement.style.fontSize = `${rem}px`;
  }
};

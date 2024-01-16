export const calculateRem = () => {
  if (document.documentElement.clientWidth > 1920) {
    document.documentElement.style.fontSize = "16px";
    return;
  } else if (document.documentElement.clientWidth < 1280) {
    document.documentElement.style.fontSize = "10.66px";
    return;
  }
  const rem = (16 / 1920) * document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${rem}px`;
};

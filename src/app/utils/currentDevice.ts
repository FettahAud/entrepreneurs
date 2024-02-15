const getDevice = () => {
  if (typeof window === "undefined") {
    return { device: "server", breakpoint: Infinity };
  }

  if (window.innerWidth <= 390) {
    return { device: "mobile", breakpoint: 390 };
  } else if (window.innerWidth <= 768) {
    return { device: "tablet", breakpoint: 768 };
  } else if (window.innerWidth <= 1280) {
    return { device: "laptop", breakpoint: 1280 };
  } else {
    return { device: "desktop", breakpoint: Infinity };
  }
};

let { device, breakpoint } = getDevice();
const handleResize = () => {
  const { device: newDevice, breakpoint: newBreakpoint } = getDevice();
  if (newBreakpoint !== breakpoint) {
    device = newDevice;
    breakpoint = newBreakpoint;
  }
  return device;
};
export { handleResize, device };

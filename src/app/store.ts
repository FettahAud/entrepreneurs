import { create } from "zustand";
import { device } from "./utils/currentDevice";
const storeDevice = create((set) => ({
  device: device,
  setDevice: (device: string) => set({ device }),
}));

export default storeDevice;

import { create } from "zustand";
import { device } from "./utils/currentDevice";
type Store = {
  device: string;
  setDevice: (device: string) => void;
};
const storeDevice = create<Store>((set) => ({
  device: device,
  setDevice: (device: string) => set({ device }),
}));

export default storeDevice;

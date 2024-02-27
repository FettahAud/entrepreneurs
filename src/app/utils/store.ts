import { create } from "zustand";
import { device } from "./currentDevice";
type Device = "mobile" | "tablet" | "laptop" | "desktop" | "server";
type Store = {
  device: Device;
  setDevice: (device: Device) => void;
};
const storeDevice = create<Store>((set) => ({
  device: device as Device,
  setDevice: (device: Device) => set({ device }),
}));

export default storeDevice;

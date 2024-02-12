import Image from "next/image";

import dGrid from "@/../public/bg-grid.svg";

export default function BgGrid() {
  return <Image className="bg-grid" src={dGrid} alt="" />;
}

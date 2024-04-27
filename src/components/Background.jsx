import React from "react";
import { SiStyledcomponents, SiStylelint } from "react-icons/si";
import {
  IoShirtOutline,
  IoGlassesOutline,
  IoWatchOutline,
  IoGiftOutline,
} from "react-icons/io5";
import { MdOutlineWatch, MdWatch } from "react-icons/md";
import {
  PiShirtFolded,
  PiBagSimple,
  PiHandbagSimpleBold,
} from "react-icons/pi";
import {
  GiShirtButton,
  GiFurShirt,
  GiMailShirt,
  Gi3DGlasses,
  GiStoneCrafting,
  GiCrafting,
  GiPorcelainVase,
  GiColumnVase,
} from "react-icons/gi";
import { FaGlasses } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { ImGift } from "react-icons/im";
import { CiClock2 } from "react-icons/ci";
import { LiaGiftsSolid } from "react-icons/lia";
import { TfiGift } from "react-icons/tfi";

const Background = () => {
  const iconArray = [
    <SiStyledcomponents />,
    <SiStylelint />,
    <IoShirtOutline />,
    <PiShirtFolded />,
    <GiShirtButton />,
    <GiFurShirt />,
    <GiMailShirt />,
    <FaGlasses />,
    <IoGlassesOutline />,
    <Gi3DGlasses />,
    <PiBagSimple />,
    <PiHandbagSimpleBold />,
    <GiStoneCrafting />,
    <GiCrafting />,
    <GiPorcelainVase />,
    <GiColumnVase />,
    <IoWatchOutline />,
    <MdOutlineWatch />,
    <MdWatch />,
    <CiClock2 />,
    <BsClockHistory />,
    <IoGiftOutline />,
    <ImGift />,
    <LiaGiftsSolid />,
    <TfiGift />,
  ];

  const numberOfColumns = 25;
  const numberOfRows = 25;

  const randomIconsWithCoordinates = [];

  for (let i = 0; i < 2000; i++) {
    const randomIndex = Math.floor(Math.random() * iconArray.length);
    const randomIcon = iconArray[randomIndex];
    randomIconsWithCoordinates.push({ icon: randomIcon, count: i });
  }

  return (
    <div
      className="background"
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      {randomIconsWithCoordinates.map((icon, index) => {
        const row = Math.floor(index / numberOfColumns);
        const col = index % numberOfColumns;
        const x =
          icon.count % 2 === 0
            ? ((col + 5) / numberOfColumns) * 100 + "%"
            : (col / numberOfColumns) * 100 + "%";
        const y = (row / numberOfRows) * 100 + "%";
        const rotation = Math.random() * 360;
        return (
          <div
            key={index}
            className="icon text-gray-600 opacity-55"
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: `rotate(${rotation}deg)`,
              fontSize: "20px",
            }}
          >
            {icon.icon}
          </div>
        );
      })}
    </div>
  );
};

export default Background;

import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";

export default function Propsdemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction:{" "}
      <input
        type="checkbox"
        checked={showHorizontal}
        onChange={() => setShowHorizontal(!showHorizontal)}
      />
      <Profile
        name="Max Power"
        email="mp@email.com"
        isActive={true}
        singleLine={showHorizontal}
      />
      <Profile
        name="Bingus Bongus"
        email="bingus@bongus.bing"
        isActive={false}
        singleLine={showHorizontal}
      />
      <Profile
        name="Bingoloid Bingonium"
        email="bingoloid@bongus.bing"
        isActive={true}
        singleLine={showHorizontal}
      />
      {/** Add two or more Profiles, but not until you actually have implemented <Profile />   */}
    </>
  );
}

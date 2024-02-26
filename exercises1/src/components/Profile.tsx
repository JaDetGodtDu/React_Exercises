//import React from "react";
//import { useState } from "react";

type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine?: boolean;
};

export default function Profile({name, email, isActive, singleLine,}: ProfileProps) {
  if (singleLine) {
    return (
      <p>
        {name},{email},{isActive ? "Aktiv" : "Ikke aktiv"}
      </p>
    );
  } else {
    return (
      <>
        <p>{name}</p>
        <p>{email}</p>
        <p>{isActive ? "Aktiv" : "Ikke aktiv"}</p>
      </>
    );
  }
}

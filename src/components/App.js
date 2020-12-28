import React, { Component, useState } from "react";
import "../styles/App.css";
import List from "./List";
export default function App() {
  const list = [
    {
      name: "rajeeb",
      rel: "relativeListItem1"
    },
    {
      name: "vipin",
      rel: "relativeListItem2"
    },
    {
      name: "sumit",
      rel: "relativeListItem3"
    }
  ];
  return (
    <ol key="relativeList">
      {list.map((l) => (
        <List l={l} />
      ))}
    </ol>
  );
}

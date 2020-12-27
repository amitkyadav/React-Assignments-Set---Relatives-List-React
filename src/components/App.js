import React, { Component, useState } from "react";
import "../styles/App.css";
import List from "./List";
export default function App() {
  const list = [
    {
      name: "rajeeb",
      relativeList: "relativeListItem1"
    },
    {
      name: "vipin",
      relativeList: "relativeListItem2"
    },
    {
      name: "sumit",
      relativeList: "relativeListItem3"
    }
  ];
  return (
    <ol>
      {list.map((l) => (
        <List l={l} key={l.relativeList} />
      ))}
    </ol>
  );
}

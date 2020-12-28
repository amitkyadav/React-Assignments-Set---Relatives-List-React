import React, { Component, useState } from "react";
import "../styles/App.css";
export default function List(props) {
  const { l } = props;
  return <li key={l.rel}>{l.name}</li>;
}

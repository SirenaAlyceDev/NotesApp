import { useState } from "react";
import Form from "./form";

export default function Submissions({ data }) {
  const listItems = data.map((data, index) => (
    <div key={index}>
      {data}
    </div>
  ));

  return <div>{listItems}</div>;
}

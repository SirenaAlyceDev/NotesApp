import { useState } from "react";
import Form from "./form";

export default function Submissions({ data }) {
  const listItems = data.map((data) => <div key={data.toString()}>{data}</div>);

  return <div>{listItems}</div>;
}

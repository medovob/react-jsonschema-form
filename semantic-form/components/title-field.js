import React from "react";

const REQUIRED_FIELD_SYMBOL = "*";

function TitleField(props) {
  const {id, title, required} = props;
  const legend = required ? title + REQUIRED_FIELD_SYMBOL : title;
  return <div className="legend" id={id}>{legend}</div>;
}

export default TitleField;

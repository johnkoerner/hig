import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "../Dropdown";

storiesOf("Dropdown", module)
  .add("default", () => (
    <Dropdown
      instructions={"Choose something."}
      label={"Something"}
      options={[1, 2, 3]}
      placeholder={1}
    />
  ))
  .add("format option", () => (
    <Dropdown
      formatOption={option => {
        return option * 2;
      }}
      instructions={"Choose a formatted option."}
      label={"Format Option"}
      options={[1, 2, 3]}
      placeholder={6}
    />
  ));

import React from "react";
import { Button, Paper } from "@material-ui/core";
// import styles from "./Test.module.css";

interface Props {
  setprefersDarkState: React.Dispatch<
    React.SetStateAction<"light" | "dark" | null>
  >;
}

export function Test({ setprefersDarkState }: Props) {
  return (
    <>
      <h3>Hello Test!</h3>
      <Paper>
        <h3>Hello Test!</h3>
        <Button
          variant="contained"
          onClick={() => {
            setprefersDarkState("dark");
          }}
        >
          Dark
        </Button>
        <br />
        <Button
          variant="text"
          onClick={() => {
            setprefersDarkState("light");
          }}
        >
          Light
        </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            console.log("Add Name");
          }}
        >
          Add Name
        </Button>
      </Paper>
    </>
  );
}

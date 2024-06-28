import {memo} from "react";
import classes from "./WordInput.module.css";

const WordInput = memo(() => {
    const value = "WordInput";

    return <div className={classes.wordInput}>{value}</div>;
});
WordInput.displayName = "WordInput";

export {WordInput};

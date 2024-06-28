import {memo} from "react";
import classes from "./LevelTitle.module.css";

const LevelTitle = memo(() => {
    const level = "1"

    return <h2 className={classes.levelTitle}>{`Уровень ${level}`}</h2>;
});
LevelTitle.displayName = "LevelTitle";

export {LevelTitle};

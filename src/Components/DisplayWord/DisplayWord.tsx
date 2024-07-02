import {memo} from "react";
import {SecretWord} from "../SecretWord/SecretWord.tsx";
import classes from "./DisplayWord.module.css"

interface IDisplayWordProps {
    word: string
}

const DisplayWord = memo<IDisplayWordProps>(({word}) => {

    return <div className={classes.displayWord}>
        <SecretWord word={word} letterSize={42} isUnleashed={true}/>
    </div>;
});
DisplayWord.displayName = "DisplayWord";

export {DisplayWord};

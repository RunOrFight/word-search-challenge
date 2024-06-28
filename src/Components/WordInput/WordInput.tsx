import {memo} from "react";
import classes from "./WordInput.module.css";
import {getAllLettersFromWords} from "../../Utils/GetAllLettersFromWords.ts";
import {gameApi} from "../../Api/GameApi.ts";


const Letter = ({letter}) => {

    return <div className={classes.letter}>{letter}</div>
}

const WordInput = memo(() => {
    const letters = getAllLettersFromWords(gameApi.getLevelSecretWords(1))

    return <div className={classes.wordInput}>{letters.map((letter, i) => <Letter letter={letter} key={i}/>)}</div>;
});
WordInput.displayName = "WordInput";

export {WordInput};

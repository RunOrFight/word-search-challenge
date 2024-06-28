import {FC, memo} from "react";
import classes from "./SecretWords.module.css";
import {gameApi} from "../../Api/GameApi.ts";

interface ISecretLetterProps {
    letter: string
}

const SecretLetter: FC<ISecretLetterProps> = ({letter}) => {
    return <div className={classes.letter}>{letter}</div>
}

interface ISecretWordProps {
    word: string
}

const SecretWord: FC<ISecretWordProps> = ({word}) => {
    const letters = word.split("")

    return <div className={classes.word}>{letters.map((letter, i) => <SecretLetter letter={letter} key={i}/>)}</div>
}

const SecretWords = memo(() => {
    const words = gameApi.getLevelSecretWords(1);

    return <div className={classes.secretWords}>{words.map((word, i) => <SecretWord word={word} key={i}/>)}</div>;
});
SecretWords.displayName = "SecretWords";

export {SecretWords};

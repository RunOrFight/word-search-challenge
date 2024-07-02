import {memo} from "react";
import classes from "./SecretWords.module.css";
import {SecretWord} from "../SecretWord/SecretWord.tsx";


interface ISecretWordsProps {
    secretWords: string[]
    guessedWords: string[]
}

const SecretWords = memo<ISecretWordsProps>(({secretWords, guessedWords}) => {
    return <div className={classes.secretWords}>{secretWords.map((word, i) =>
        <SecretWord word={word} key={i} isUnleashed={guessedWords.includes(word)}/>)}</div>;
});
SecretWords.displayName = "SecretWords";

export {SecretWords};

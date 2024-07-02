import {FC} from "react";
import classes from "./SecretWord.module.css";

interface ISecretLetterProps {
    letter: string
    isUnleashed: boolean
}

const SecretLetter: FC<ISecretLetterProps> = ({letter, isUnleashed}) => {


    const className = classes.letter + (isUnleashed ? ` ${classes.unleashed}` : "")

    return <div className={className}>{letter}</div>
}

interface ISecretWordProps {
    word: string
    isUnleashed: boolean
}

const SecretWord: FC<ISecretWordProps> = ({word, isUnleashed}) => {
    const letters = word.split("")

    return <div className={classes.secretWord}>{letters.map((letter, i) =>
        <SecretLetter letter={letter} key={i} isUnleashed={isUnleashed}/>)}</div>
}

export {SecretWord}

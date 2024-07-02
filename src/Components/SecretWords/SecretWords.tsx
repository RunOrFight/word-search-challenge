import {CSSProperties, FC, memo} from "react";
import classes from "./SecretWords.module.css";
import {gameApi} from "../../Api/GameApi.ts";
import {countMinPossibleSizeInContainer} from "../../Utils/CountMinPossibleSizeInContainer.ts";
import {findLongestString} from "../../Utils/FindLongestString.ts";

interface ISecretLetterProps {
    letter: string
    letterSize: number
}

const SecretLetter: FC<ISecretLetterProps> = ({letter, letterSize}) => {
    const style: CSSProperties = {
        width: `${letterSize}px`,
        height: `${letterSize}px`,
        lineHeight: `${letterSize - 4}px`
    }

    return <div className={classes.letter} style={style}>{letter}</div>
}

interface ISecretWordProps {
    word: string
    letterSize: number
}

const SecretWord: FC<ISecretWordProps> = ({word, letterSize}) => {
    const letters = word.split("")

    return <div className={classes.word}>{letters.map((letter, i) =>
        <SecretLetter letter={letter} letterSize={letterSize} key={i}/>)}</div>
}

const MAX_WORDS_WIDTH = 384
const MAX_WORDS_HEIGHT = 384
const GAP_BETWEEN_WORDS = 6
const GAP_BETWEEN_LETTERS = 6

const SecretWords = memo(() => {
    const words = gameApi.getLevelSecretWords(1);

    const wordsCount = words.length

    const longestWord = findLongestString(words)

    const height = countMinPossibleSizeInContainer(MAX_WORDS_HEIGHT, wordsCount, GAP_BETWEEN_WORDS)

    const width = countMinPossibleSizeInContainer(MAX_WORDS_WIDTH, longestWord.length, GAP_BETWEEN_LETTERS)

    const letterSize = Math.min(width, height)

    return <div className={classes.secretWords}>{words.map((word, i) =>
        <SecretWord word={word} letterSize={letterSize} key={i}/>)}</div>;
});
SecretWords.displayName = "SecretWords";

export {SecretWords};

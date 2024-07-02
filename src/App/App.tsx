import classes from "./App.module.css"
import {LevelTitle} from "../Components/LevelTitle/LevelTitle.tsx";
import {WordInput} from "../Components/WordInput/WordInput.tsx";
import {SecretWords} from "../Components/SecretWords/SecretWords.tsx";
import {useEffect, useState} from "react";
import {DisplayWord} from "../Components/DisplayWord/DisplayWord.tsx";
import {gameApi} from "../Api/GameApi.ts";
import {sortByLength} from "../Utils/SortByLength.ts";

const App = () => {
    const [secretWords, setSecretWords] = useState<string[]>([])
    const [guessedWords, setGuessedWords] = useState<string[]>([])
    const [inputWord, setInputWord] = useState("")

    const onWordInputChange = (word: string, isInputEnd: boolean) => {
        console.log(secretWords)

        if (!isInputEnd) {
            setInputWord(word)
            return
        }
        setInputWord("")

        if (secretWords.includes(word) && !guessedWords.includes(word)) {
            setGuessedWords(guessedWords.concat(word))
        }
    }

    useEffect(() => {
        gameApi.getLevelSecretWords(1).then((words) => {
            setSecretWords(sortByLength(words))
        })
    }, []);

    return <div className={classes.app}>
        <LevelTitle/>
        <SecretWords secretWords={secretWords} guessedWords={guessedWords}/>
        <DisplayWord word={inputWord}/>
        <WordInput secretWords={secretWords} onChange={onWordInputChange}/>
    </div>
}

export {App}

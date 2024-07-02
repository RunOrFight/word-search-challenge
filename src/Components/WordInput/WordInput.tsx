import {CSSProperties, FC, memo, useLayoutEffect, useRef} from "react";
import classes from "./WordInput.module.css";
import {getAllLettersFromWords} from "../../Utils/GetAllLettersFromWords.ts";
import {gameApi} from "../../Api/GameApi.ts";
import {DATA_ATTRIBUTES} from "../../Constants/DataAttributes.ts";

interface ILetterProps {
    letter: string;
    translateX: number;
    translateY: number
}

const Letter: FC<ILetterProps> = ({letter, translateX, translateY}) => {
    const style: CSSProperties = {transform: `translate(${translateX}px, ${translateY}px)`}

    return <div className={classes.letter} style={style} data-letter={letter}>{letter}</div>
}
const RADIUS = 147

const WordInput = memo(() => {
    const letters = getAllLettersFromWords(gameApi.getLevelSecretWords(2))

    const initialShiftStep = (Math.PI * 2) / letters.length

    const inputWord = useRef("")
    const inputWordRef = useRef<HTMLDivElement | null>(null)

    const selectLetter = (e: Event) => {
        const target = e.target
        if (!(target instanceof HTMLElement)) {
            return
        }
        const letter = target.getAttribute(DATA_ATTRIBUTES.letter)
        if (!letter) {
            return;
        }

        const selected = Boolean(target.getAttribute(DATA_ATTRIBUTES.selected))
        if (selected) {
            return;
        }

        target.setAttribute(DATA_ATTRIBUTES.selected, "true")
        inputWord.current += letter
    }

    const clearInput = () => {
        inputWord.current = ""

        if (!inputWordRef.current) {
            return
        }

        for (const child of inputWordRef.current.children) {
            child.removeAttribute("data-selected")
        }
    }

    const mouseMove = (e: Event) => {
        if (inputWord.current.length === 0) {
            return
        }

        selectLetter(e)
    }

    useLayoutEffect(() => {
        document.addEventListener("mousedown", selectLetter)
        document.addEventListener("mouseup", clearInput)
        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseleave", clearInput)

        return () => {
            document.removeEventListener("mousedown", selectLetter)
            document.removeEventListener("mouseup", clearInput)
            document.removeEventListener("mousemove", mouseMove)
            document.removeEventListener("mouseleave", clearInput)
        }
    }, []);


    return <div ref={inputWordRef} className={classes.wordInput}>{letters.map((letter, i) => {
        const initialShift = initialShiftStep * i

        const translateX = Math.cos(initialShift) * RADIUS
        const translateY = Math.sin(initialShift) * RADIUS

        return <Letter letter={letter} key={i} translateX={translateX} translateY={translateY}/>
    })}</div>;
});
WordInput.displayName = "WordInput";

export {WordInput};

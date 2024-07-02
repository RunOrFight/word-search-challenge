import {FC, useLayoutEffect, useRef} from "react";
import classes from "./WordInput.module.css";
import {getAllLettersFromWords} from "../../Utils/GetAllLettersFromWords.ts";
import {DATA_ATTRIBUTES} from "../../Constants/DataAttributes.ts";

interface ILetterProps {
    letter: string;
    initialShift: number
}


const Letter: FC<ILetterProps> = ({letter, initialShift}) => {

    const callbackRef = (node: HTMLDivElement | null) => {
        if (node === null) {
            return
        }

        if (!node.parentElement) {
            return;
        }

        const radius = node.parentElement.clientWidth / 2

        const translateX = Math.cos(initialShift) * radius
        const translateY = Math.sin(initialShift) * radius

        node.style.transform = `translate(${translateX}px, ${translateY}px)`

    }

    const attributes = {
        [DATA_ATTRIBUTES.letter]: letter
    }

    return <div className={classes.letter} ref={callbackRef} {...attributes}>{letter}</div>
}

interface IWordInputProps {
    onChange: (value: string, isInputEnd: boolean) => void
    secretWords: string[]
}

const WordInput: FC<IWordInputProps> = ({onChange, secretWords}) => {
    const letters = getAllLettersFromWords(secretWords)

    const initialShiftStep = (Math.PI * 2) / letters.length

    const inputWordRef = useRef<HTMLDivElement | null>(null)

    const word = useRef("")

    useLayoutEffect(() => {
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

            word.current += letter
            onChange(word.current, false)
        }

        const inputEnd = () => {
            onChange(word.current, true)

            word.current = ""

            if (!inputWordRef.current) {
                return
            }

            for (const child of inputWordRef.current.children) {
                child.removeAttribute(DATA_ATTRIBUTES.selected)
            }
        }

        const mouseMove = (e: Event) => {
            if (word.current.length === 0) {
                return
            }

            selectLetter(e)
        }

        document.addEventListener("mousedown", selectLetter)
        document.addEventListener("mouseup", inputEnd)
        document.addEventListener("mousemove", mouseMove)
        document.addEventListener("mouseleave", inputEnd)

        return () => {
            document.removeEventListener("mousedown", selectLetter)
            document.removeEventListener("mouseup", inputEnd)
            document.removeEventListener("mousemove", mouseMove)
            document.removeEventListener("mouseleave", inputEnd)
        }
    }, []);


    return <div ref={inputWordRef} className={classes.wordInput}>{letters.map((letter, i) => {
        const initialShift = initialShiftStep * i


        return <Letter letter={letter} key={i} initialShift={initialShift}/>
    })}</div>;
};
WordInput.displayName = "WordInput";

export {WordInput};

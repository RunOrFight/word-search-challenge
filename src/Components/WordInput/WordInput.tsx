import {CSSProperties, memo} from "react";
import classes from "./WordInput.module.css";
import {getAllLettersFromWords} from "../../Utils/GetAllLettersFromWords.ts";
import {gameApi} from "../../Api/GameApi.ts";


const Letter = ({letter, rotateDegree}) => {
    const wrapperStyle: CSSProperties = {transform: `rotate(${rotateDegree}deg)`}
    const letterStyle: CSSProperties = {transform: `rotate(-${rotateDegree}deg)`}

    return <div className={classes.letterWrapper} style={wrapperStyle}>
        <div className={classes.letter} style={letterStyle}>{letter}</div>
    </div>
}
const TOTAL_CIRCLE_DEGREES = 360


const WordInput = memo(() => {
    const letters = getAllLettersFromWords(gameApi.getLevelSecretWords(1))

    const rotateDegreeStep = TOTAL_CIRCLE_DEGREES / letters.length

    return <div className={classes.wordInput}>{letters.map((letter, i) => {
        const rotateDegree = rotateDegreeStep * i

        return <Letter letter={letter} key={i} rotateDegree={rotateDegree}/>
    })}</div>;
});
WordInput.displayName = "WordInput";

export {WordInput};

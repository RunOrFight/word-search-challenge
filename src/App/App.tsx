import classes from "./App.module.css"
import {LevelTitle} from "../Components/LevelTitle/LevelTitle.tsx";
import {WordInput} from "../Components/WordInput/WordInput.tsx";
import {SecretWords} from "../Components/SecretWords/SecretWords.tsx";

const App = () => {
    return <div className={classes.app}>
        <LevelTitle/>
        <SecretWords/>
        <WordInput/>
    </div>
}

export {App}

import level1 from "./Levels/1.json";
import level2 from "./Levels/2.json";
import level3 from "./Levels/3.json";

const allLevels: Record<number, string[]> = {
    1: level1.words,
    2: level2.words,
    3: level3.words
}


const gameApi = {
    getLevelSecretWords: (num: number) => {
        return allLevels[num]
    }
}

export {gameApi}

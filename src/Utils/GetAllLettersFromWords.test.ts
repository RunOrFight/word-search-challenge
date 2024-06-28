import {expect, test} from "vitest";
import {getAllLettersFromWords} from "./GetAllLettersFromWords.ts";

const BASE_CASE = {
    input: ["минор", "корм", "кино", "мир", "ком", "ион", "ром", "мор", "рок", "инок"],
    output: ["м", "и", "н", "о", "р", "к"]
}

const WORDS_WITH_DUPLICATE_LETTERS = {
    input: ["канон", "икона", "цинк", "кино", "ион", "инок"],
    output: ["к", "а", "н", "н", "о", "и", "ц"]
}

test("Base case", () => {
    expect(getAllLettersFromWords(BASE_CASE.input)).toStrictEqual(BASE_CASE.output)
})

test("Words with duplicate letters", () => {
    expect(getAllLettersFromWords(WORDS_WITH_DUPLICATE_LETTERS.input)).toStrictEqual(WORDS_WITH_DUPLICATE_LETTERS.output)
})

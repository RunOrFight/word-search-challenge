const getAllLettersFromWords = (words: string[]) => {
    const requiredLettersForAllWords: Record<string, number> = {}

    words.forEach((word) => {
        const requiredLettersForSingleWord: Record<string, number> = {}

        const letters = word.split("")

        letters.forEach((letter) => {
            const letterCount = requiredLettersForSingleWord[letter]

            requiredLettersForSingleWord[letter] = letterCount ? (letterCount + 1) : 1
        })


        Object.entries(requiredLettersForSingleWord).forEach(([letter, countForSingleWord]) => {
            const countForAllWords = requiredLettersForAllWords[letter] ?? 1

            requiredLettersForAllWords[letter] = Math.max(countForSingleWord, countForAllWords)
        })

    })

    return Object.entries(requiredLettersForAllWords).reduce((acc, [letter, count]) => {
        for (let i = 0; i < count; i++) {
            acc.push(letter)
        }

        return acc
    }, [])
}

export {getAllLettersFromWords}

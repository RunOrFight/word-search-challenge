const findLongestString = (arrayOfStrings: string[]) => arrayOfStrings.reduce((acc, value) => {
    if (value.length > acc) {
        acc = value
    }

    return acc
})

export {findLongestString}

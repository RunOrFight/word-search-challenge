const sortByLength = (arrayOfString: string[]) => [...arrayOfString].sort((a, b) => {
    if (a.length > b.length) {
        return 1
    } else if (a.length < b.length) {
        return -1
    }

    return 0
})

export {sortByLength}

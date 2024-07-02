const countMinPossibleSizeInContainer =
    (containerSize: number, numberOfElements: number, gapBetweenElements: number) =>
        (containerSize - ((numberOfElements - 1) * gapBetweenElements)) / numberOfElements

export {countMinPossibleSizeInContainer}

interface IParams {
    areFirstDotsShown: boolean,
    areLastDotsShown: boolean,
    numberOfMiddleButtons: number,
    numberOfEdgeButtons: number,
    numberOfPages: number,
    currentPage: number,
    windowWidth?: number
}

const getMiddlePageButtonsBase = ({
    currentPage,
    areFirstDotsShown,
    areLastDotsShown,
    numberOfPages,
    numberOfMiddleButtons,
    numberOfEdgeButtons
}: IParams) => {
    const numberOfPagesKeys = Array.from(Array(numberOfPages).keys());

    if(areFirstDotsShown && areLastDotsShown) {
        const deltaMiddleButtonsOffset = (numberOfMiddleButtons - 1) / 2;

        return numberOfPagesKeys.slice(
            currentPage - deltaMiddleButtonsOffset,
            currentPage + deltaMiddleButtonsOffset + 1
        );
    }

    if(areFirstDotsShown) {
        return numberOfPagesKeys.slice(
            numberOfPages - numberOfEdgeButtons + 1,
            numberOfPages
        );
    }

    if(areLastDotsShown) {
        return numberOfPagesKeys.slice(2, numberOfEdgeButtons + 1);
    }

    return numberOfPagesKeys.slice(2, numberOfPages);
};

export const getMiddlePageButtons = ({
    windowWidth,
    currentPage,
    areFirstDotsShown,
    areLastDotsShown,
    ...baseMiddleButtonsParams
}: IParams) => {
    if(windowWidth && windowWidth <= 440 && areFirstDotsShown && areLastDotsShown) {
        return [currentPage];
    }

    return getMiddlePageButtonsBase({
        ...baseMiddleButtonsParams,
        areFirstDotsShown,
        areLastDotsShown,
        currentPage
    });
};

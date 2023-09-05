import React, { useMemo, useCallback } from 'react';

import { useClassnames } from '../../../hooks/use-classnames';
import { IconArrowsChevronLeft } from '../../icons/arrows/chevron-left';
import { IconArrowsChevronRight } from '../../icons/arrows/chevron-right';

import { getMiddlePageButtons } from './get-middle-page-buttons';
import styles from './index.module.pcss';

interface IProps {
    readonly currentPage: number,
    readonly numberOfEdgeButtons: number,
    readonly numberOfMiddleButtons: number,
    readonly numberOfPages: number,
    readonly onChangePage: (page: number) => void
}

const PaginationButtons = ({
    currentPage,
    numberOfEdgeButtons,
    numberOfMiddleButtons,
    numberOfPages,
    onChangePage
}: IProps) => {
    const cn = useClassnames(styles);
    const isNotFirstPagePage = useMemo(() => currentPage !== 1, [currentPage]);

    const isNotLastPage = useMemo(() => {
        return currentPage !== numberOfPages && numberOfPages > 0;
    }, [currentPage, numberOfPages]);

    const areFirstDotsShown = useMemo(() => {
        return numberOfPages > 0 && (currentPage > numberOfEdgeButtons || currentPage === numberOfEdgeButtons && isNotLastPage) && numberOfEdgeButtons !== numberOfPages - 1;
    }, [currentPage, isNotLastPage, numberOfEdgeButtons, numberOfPages]);

    const areLastDotsShown = useMemo(() => {
        return numberOfPages > 0 && currentPage <= numberOfPages - numberOfEdgeButtons + 1 && numberOfPages !== numberOfEdgeButtons && numberOfEdgeButtons !== numberOfPages - 1;
    }, [currentPage, numberOfEdgeButtons, numberOfPages]);

    const middleButtons = useMemo(() => getMiddlePageButtons({
        areFirstDotsShown,
        areLastDotsShown,
        currentPage,
        numberOfEdgeButtons,
        numberOfMiddleButtons,
        numberOfPages
    }), [areFirstDotsShown, areLastDotsShown, currentPage, numberOfEdgeButtons, numberOfMiddleButtons, numberOfPages]);

    const changePageToPrev = useCallback(() => {
        if(isNotFirstPagePage) {
            return onChangePage(currentPage - 1);
        }
    }, [onChangePage, currentPage, isNotFirstPagePage]);

    const changePageToNext = useCallback(() => {
        return onChangePage(currentPage + 1);
    }, [onChangePage, currentPage]);

    const onClickChangePage = (pageNumber: number) => () => {
        onChangePage(pageNumber);
    };

    const elIcon = (iconType: 'prev' | 'next') => {
        const className = cn('pagination-buttons__icon');

        if(iconType === 'prev') {
            return (
                <IconArrowsChevronLeft
                    svg={{
                        className
                    }}
                />
            );
        }

        return (
            <IconArrowsChevronRight
                svg={{
                    className
                }}
            />
        );
    };

    const elIconButton = (onClick: () => void, iconType: 'prev' | 'next') => {
        return (
            <button
                className={cn('pagination-buttons__icon-button')}
                onClick={onClick}
                type="button"
            >
                {elIcon(iconType)}
            </button>
        );
    };

    const elButton = (pageNumber: number) => {
        return (
            <button
                className={cn('pagination-buttons__button', {
                    'pagination-buttons__button_selected': currentPage === pageNumber
                })}
                onClick={onClickChangePage(pageNumber)}
                type="button"
            >
                {pageNumber}
            </button>
        );
    };

    return (
        <ul className={cn('pagination-buttons')}>
            {isNotFirstPagePage ? (
                <li
                    key="prev-arrow"
                    className={cn('pagination-buttons__item')}
                >
                    {elIconButton(changePageToPrev, 'prev')}
                </li>
            ) : null}
            <li
                key="first-button"
                className={cn('pagination-buttons__item')}
            >
                {elButton(1)}
            </li>
            {areFirstDotsShown ? (
                <li
                    key="prev-dots"
                    className={cn('pagination-buttons__item')}
                >
                    <span className={cn('pagination-buttons__dots')}>...</span>
                </li>
            ) : null}
            {middleButtons.map((pageNumber, index) => {
                return (
                    <li
                        key={index}
                        className={cn('pagination-buttons__item')}
                    >
                        {elButton(pageNumber)}
                    </li>
                );
            })}
            {areLastDotsShown ? (
                <li
                    key="last-dots"
                    className={cn('pagination-buttons__item')}
                >
                    <span className={cn('pagination-buttons__dots')}>...</span>
                </li>
            ) : null}
            {numberOfPages !== 1 && numberOfPages > 0 && (
                <li
                    key="last-button"
                    className={cn('pagination-buttons__item')}
                >
                    {elButton(numberOfPages)}
                </li>
            )}
            {isNotLastPage ? (
                <li
                    key="last-arrow"
                    className={cn('pagination-buttons__item')}
                >
                    {elIconButton(changePageToNext, 'next')}
                </li>
            ) : null}
        </ul>
    );
};

export default PaginationButtons;

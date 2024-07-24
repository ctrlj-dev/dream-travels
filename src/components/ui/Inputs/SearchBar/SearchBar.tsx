'use client'

import React, { FC, forwardRef, useReducer, useState } from "react";
import { SearchBarActionType, SearchBarInitialState, searchBarReducer } from "./search-bar.utils";
import { SearchBarButton, SearchBarInput, SearchBarRoot } from "./SearchBar.styles";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement> & {
    rootClassName: string;
    onSubmit: () => void;
}


const SearchBar: FC<SearchBarProps> = ({ rootClassName, onSubmit, ...inputProps }) => {
    const [state, dispatch] = useReducer(searchBarReducer, SearchBarInitialState);

    const rootState = `
    ${state.isFocused ? 'isFocused' : ''}
    ${state.isActive ? 'active' : ''}
  `;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmit();
        }
    };

    return (
        <SearchBarRoot className={`${rootState} ${rootClassName}`}>
            <SearchBarInput
                type='search'
                placeholder="Search trips"
                onFocus={() => dispatch({ type: SearchBarActionType.FOCUS })}
                onBlur={() => dispatch({ type: SearchBarActionType.BLUR })}
                onKeyDown={handleKeyDown}
                {...inputProps}
            />
            <SearchBarButton type='button' onClick={onSubmit} variant={"primary"} size={"small"}>Search</SearchBarButton>
        </SearchBarRoot>
    )
}

export default SearchBar 
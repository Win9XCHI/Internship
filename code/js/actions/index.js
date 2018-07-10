export const Select = (people, value) => {
    return {
        type: "ITEM_SELECTED",
        payload: {people, value}
    }
};

export const SearchPeople = (people, value) => {
    return {
        type: "ITEM_SEARCH",
        payload: {people, value}
    }
};

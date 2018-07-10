export default function (state=null, action) {
    switch (action.type) {
        case "ITEM_SELECTED": {
            return action.payload; 
            break;
        }
        case "ITEM_SEARCH": {
            return action.payload;
            break;
        }
        default: {
            return state;
        }
    }
};

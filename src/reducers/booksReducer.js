let id= 0


export default (state = [], action) => {
    switch(action.type) {
        case "ADD_BOOK":
            return [...state, action.payload]
        case "REMOVE_BOOK":
            let newBooks = state.filter(book => book.id !== action.payload)
            return [...newBooks]
        default:
            return state
    }
}
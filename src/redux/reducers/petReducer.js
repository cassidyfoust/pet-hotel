const pets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PETS':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default pets;
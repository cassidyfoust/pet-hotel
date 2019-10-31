const owners = (state = [{ name: 'Cass', numberOfPets: 1 }, { name: 'Lily', numberOfPets: 1 }, { name: 'Garvey', numberOfPets: 2 }, { name: 'Fran', numberOfPets: 3  }], action) => {
    switch (action.type) {
        case 'ADD_OWNER':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default owners;
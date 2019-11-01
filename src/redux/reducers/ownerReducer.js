const owners = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OWNER':
            return action.payload
        default:
            return state;
    }
}

export default owners;
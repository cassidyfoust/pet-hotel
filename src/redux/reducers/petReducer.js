const pets = (state = [{
//     name: 'Lumi',
//     color: 'orange',
//     breed: 'cat',
//     owner: 'Cass',
//     checkedIn: false
// },
//     {
//         name: 'Fiddlesticks',
//         color: 'black',
//         breed: 'cat',
//         owner: 'Lily',
//         checkedIn: false
//     },
//     {
//         name: 'Maddy',
//         color: 'black and white',
//         breed: 'dog',
//         owner: 'Jordana',
//         checkedIn: true
    }
], action) => {
    switch (action.type) {
        case 'ADD_PET':
            return action.payload
        default:
            return state;
    }
}

export default pets;
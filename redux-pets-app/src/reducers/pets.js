const initialState = [
    {
        "id": "1",
        "name": "darkdog",
        "description": "is a very scary dog",
        "image": "/public/img/darkdog.png"
    },
    {
        "id": "2",
        "name": "winston",
        "description": "is a fluffy dog",
        "image": "/public/img/winston.png"
    },
    {
        "id": "3",
        "name": "chaplin",
        "description": "is a red dog",
        "image": "/public/img/chaplin.png"
    },
    {
        "id": "4",
        "name": "bennie",
        "description": "is a cool dog",
        "image": "/public/img/bennie.png"
    }
];


export default function pets(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

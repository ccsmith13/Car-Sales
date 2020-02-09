
export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const carReducer = (state = initialState, action) => {

    //console.log('state', state, 'action', action);

    switch (action.type) {
        case "REMOVE_FEATURE":
            let newCar = { ...state.car };
            let newCarFeatures = [...newCar.features];
            newCarFeatures.splice(newCarFeatures.indexOf(state.additionalFeatures[action.payload]), 1);
            newCar.features = [...newCarFeatures];
            let newAddPrice = state.additionalPrice;
            newAddPrice -= state.additionalFeatures[action.payload].price;
            let stateCopy = { ...state };
            stateCopy.car = { ...newCar };
            stateCopy.additionalPrice = newAddPrice
            return stateCopy;

        case "BUY_ITEM":
            //console.log(state.car);
            let newCar2 = { ...state.car };
            let newCarFeatures2 = [...newCar2.features];
            newCarFeatures2.push(state.additionalFeatures[action.payload]);
            newCar2.features = [...newCarFeatures2];
            let newAddPrice2 = state.additionalPrice;
            newAddPrice2 += state.additionalFeatures[action.payload].price;
            let stateCopy2 = { ...state };
            stateCopy2.car = { ...newCar2 };
            stateCopy2.additionalPrice = newAddPrice2
            return stateCopy2;

        default:
            return state;
    };
};

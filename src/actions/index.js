export const removeFeatureAction = featureId => {
    console.log('feature index to be removed by the removeFeatureAction', featureId);
    return {
        type: "REMOVE_FEATURE",
        payload: featureId
    };
};

export const buyItemAction = featureIndex => {
    console.log('feature index to be bought by the buyItemAction', featureIndex);
    return {
        type: "BUY_ITEM",
        payload: featureIndex
    }
}
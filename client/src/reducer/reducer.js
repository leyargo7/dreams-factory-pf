const initialState = {
    all : [],   
}

 function rootReducer (state = initialState, action){
    switch(action.type) {
        default:
            return {...state};
    }
}
 
export default rootReducer;  // Se exporta para que lo agarre el store
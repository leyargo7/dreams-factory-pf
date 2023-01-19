const initialState = {
    all : [],   
}

 function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                all: action.payload
            }
        default:
            return {...state};
    }
}
 
export default rootReducer;  
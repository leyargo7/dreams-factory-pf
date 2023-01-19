const initialState = {
    all : [],
    filteredProducts: []   
}

 function rootReducer (state = initialState, action){
    switch(action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                all: action.payload
            }
            case 'GET_PRODUCTS_BY_NAME':
                const searchProducts=state.all.filter((p)=>{
                    return p.name.includes(action.payload);
                })
                if(searchProducts){
                    return{
                        ...state,
                        filteredProducts:searchProducts,
                    };
                }else{
                    return{
                        ...state,
                        filterdProducts: false,
                    };
                }

        default:
            return {...state};
    }
}
 
export default rootReducer;  
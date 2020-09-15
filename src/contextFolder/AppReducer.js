export default (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
      return {
        ...state,
        favShoes: [action.payload, ...state.favShoes],
      };
       
      case 'DELETE_FAV':
        return {
          ...state,
          favShoes: state.favShoes.splice(1,1)
        };
   
      case 'ADD_CART':
        return {
          ...state,
          cartList: [action.payload, ...state.cartList],
        };

        case 'DELETE_CART':
            return {
              ...state,
              cartList: state.cartList.splice(1,1)
            };
     
            default:
                return state;



    }


}
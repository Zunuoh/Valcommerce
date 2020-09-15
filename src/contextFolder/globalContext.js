 import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import { View } from 'react-native';

const initialState ={
    favShoes : [],
     cartList : []
};


export const GlobalContext = createContext(shoesDesc);

 export const globalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    // function selectShoe(id){
    //     dispatch({
    //         type: 'SELECT_SHOE',
    //         payload: id
    //     });
    // }
    function addtoFav(fav) {
        dispatch({
          type: 'ADD_FAV',
          payload: fav,
        });
      }

      function deleteFav(id){
        dispatch({
          type:'DELETE_FAV',
          payload:id
        })
      }

      function addtoCart(cart) {
        dispatch({
          type: 'ADD_CART',
          payload: cart,
        });
      }

      function deleteCart(id){
        dispatch({
          type:'DELETE_CART',
          payload:id
        })
      }
     return(
        <GlobalContext.Provider
            value={{
                favShoes:state.favShoes,
                cartList:state.cartList,
                addtoFav,
                deleteFav,
                addtoCart,
                deleteCart
            }}>
                {children}
        </GlobalContext.Provider>
     )
 };

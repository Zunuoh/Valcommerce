 import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import { View } from 'react-native';

const favShoes=[];
const cart=[];

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

      function deletePhoneNumber(fav){
        dispatch({
          type:'DELETE_FAV',
          payload:fav
        })
      }

      function addtoCart(cart) {
        dispatch({
          type: 'ADD_CART',
          payload: cart,
        });
      }

      function deleteCart(cart){
        dispatch({
          type:'DELETE_CART',
          payload:cart
        })
      }
     return(
        <GlobalContext.Provider>
            {/* value={{}} */}
        </GlobalContext.Provider>
     )
 };

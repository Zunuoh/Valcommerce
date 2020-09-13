 import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import { View } from 'react-native';

const shoesDesc=[];

export const GlobalContext = createContext(shoesDesc);

 export const globalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    function selectShoe(id){
        dispatch({
            type: 'SELECT_SHOE',
            payload: id
        });
    }
     return(
        <GlobalContext.Provider>
            {/* value={{}} */}
        </GlobalContext.Provider>
     )
 };

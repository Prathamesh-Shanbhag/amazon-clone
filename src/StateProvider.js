import React, { createContext, useContext, useReducer } from 'react'

//Prepares the Datalayer
export const StateContext = createContext()
//Wraps the app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//Pull info from the data layer
export const useStateValue = () => useContext(StateContext)

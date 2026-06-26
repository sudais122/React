import React from 'react'
import { createContext } from 'react'

export const themedataconstex = createContext();

const Themecontex = (props) => {
  return (
    <div>
        <Themecontex.Provider value = 'sduais'>
            {props.children}
        </Themecontex.Provider>
      </div>
  )
}

export default Themecontex
import React, { Component } from 'react'

const App = () => {
    return(
        // props Passed here will be available on HOC and can not be accessed via MyCounter. For that , pass remaining props as spread 
        <MyCounter extraProp = 'This is a prop on direct elem'/>
    )
}
export default App


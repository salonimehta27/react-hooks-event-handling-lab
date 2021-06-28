// Code Keypad Component Here
import React from 'react'
function Keypad() {
    function message(e) {
        console.log(e.target.placeholder)
    }
    return (
        <input type="password" placeholder="Entering password..." onChange={message}></input>
    )
}
export default Keypad;
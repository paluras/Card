import { useState } from 'react'
import './App.css'


export default function Buttons(){
return(
    <div className='button-part'>
        <button className='button-one'>
            <img src='.\public\Icon.png'/>
            <p>Email</p>
        </button>
        <button className='button-two'>
            <img src='.\public\Vector.png'/>
            <p>LinkedIn</p>
        </button>
    </div>

)

}
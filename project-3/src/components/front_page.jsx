import React from 'react'


const Front_page = ({toggle}) =>{
    return (
        <section className="container">
            <div>
            <img src="/images/dices.png" alt="dice" />
            </div>

            <div className='front_content'>
                <p>DICE GAME</p>
                <button onClick={toggle} >Play Now</button>
            </div>
        </section>
    )
}

export default Front_page

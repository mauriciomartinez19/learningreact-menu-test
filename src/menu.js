import React, { useState } from 'react'
import { data } from "./data";
import './App.css';



const Menu = () => {
    const [showFood, setShowFood] = useState(data)
    const selectType = (e) => {
        e.target.name === 'all' ? setShowFood(data) :
            setShowFood(data.filter((food) => food.type === e.target.name))
    }

    return (<>
        <div className='select-bar'>
            <button className='select-item' name='all' onClick={(e) => selectType(e)} >All</button>
            <button className='select-item' name='Breakfast' onClick={(e) => selectType(e)} >Breakfast</button>
            <button className='select-item' name='Lunch' onClick={(e) => selectType(e)} >Lunch</button>
            <button className='select-item' name='Shakes' onClick={(e) => selectType(e)} >Shakes</button>
        </div>
        <div className='center'>
            <div className='menu'>
                {showFood.map((food) => {
                    const { id, title, price, description, img } = food
                    return (
                        < section key={id} className='menu-section'>
                            <img className='picture' src={img} alt='' />
                            <div className='menu-text'>
                                <div className='title-price'>
                                    <h4 className='menu-title'>{title}</h4>
                                    <h4 className='price'>{price}</h4>
                                </div>
                                <div className='menu-line' />
                                <p className='description'>{description}</p>
                            </div>
                        </section >
                    )
                })}
            </div>
        </div>
    </>)
}

export default Menu

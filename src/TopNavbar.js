import './TopNavbar.css'
import restlogo from './restlogo.png'

const TopNavbar = ()=>{
    return <div className="navbar-box">
        <img src={restlogo} className='restlogo'/>
        <ul className='list'>
            <a>Home</a>
            <a>About Us</a>
            <a>Products</a>
            <a>Cart</a>
        </ul>
    </div>
}

export default TopNavbar
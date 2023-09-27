import Logo from '../assets/img/airbnb_logo.png'

function Navbar(){
    return(
        <nav>
            <img src={Logo} alt="Logo Airbnb" className='nav--logo'/>
        </nav>

    )
}

export default Navbar
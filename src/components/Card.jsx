import Photo01 from '../assets/img/image 12.png'
import Star from '../assets/img/Star.png'

function Card(){
    return(
        <div className="card">
            <div className="card--photo">
            <button className="card--button">Sold Out</button>
            <img src={Photo01} alt="photo expirence" className="card--photo_expirence"/>
            </div>
            <div className='card--text'>
                <img src={Star} alt='star'/>
                <spam>5.0</spam><p> (6) USA </p>
                <p>Life lessons with Katie Zaferes</p>
                <span>From $136</span><p>/ person</p>
            </div>
            </div>
    )
}
export default Card
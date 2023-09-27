import MainContentPhoto from '../assets/img/Group 77.png'
function MainContent(){
    return(
        <main>
            <section className='main--photo_section'>
            <img src={MainContentPhoto} alt="Main Content" className='main--photo'/>
            </section>
            <section className='main--text_section'>
             <h3 className='main--title'>Online Experiences</h3>
            <p className='main--text'>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
        </main>
    )
}

export default MainContent
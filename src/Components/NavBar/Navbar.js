import './Navbar.css';
import Tryst from '../../assets/tryst-logo.png';

function hideMenu() {
    document.getElementById("links").style = "left: -400px";
    document.getElementById("menushow").style = "display: block";
    document.getElementById("menuhide").style = "display: none";
}
function showMenu() {
    document.getElementById("links").style = 'left: 0px';
    document.getElementById("menushow").style = "display: none";
    document.getElementById("menuhide").style = "display: block";
}
window.addEventListener('resize',()=>{
    if(window.innerWidth >800){
        document.getElementById("menushow").style = "display: none";
        document.getElementById("menuhide").style = "display: none";
        
    }
    else{
        document.getElementById("menushow").style = "display: block";
        document.getElementById("links").style = "left: -400px";
    }
})

function NavBar() {
    return (
        <nav className='navBar'>
            <i className="fa fa-bars" id='menushow' onClick={showMenu}></i>
            <i className="fa fa-close" id='menuhide' onClick={hideMenu}></i>
            <h1><img src={Tryst} id='Tryst-logo' alt='Tryst'></img></h1>
            <text className='RightNav'>
                <ul className='links' id='links'>
                    <li>About</li>
                    <li>CAP</li>
                    <li>Accomodation</li>
                    <li>Events</li>
                    <li>Speakers</li>
                    <li>Pronites</li>
                    <li>Sponsors</li>
                    <li>Contact Us</li>
                </ul>
                <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 48.25C13.5 46.25 16.5 44.6533 19.6667 43.46C22.8333 42.2644 26.2778 41.6667 30 41.6667C33.7222 41.6667 37.1667 42.2644 40.3333 43.46C43.5 44.6533 46.5 46.25 49.3333 48.25C51.5556 45.9722 53.3333 43.2911 54.6667 40.2067C56 37.1244 56.6667 33.7222 56.6667 30C56.6667 22.6111 54.07 16.3189 48.8767 11.1233C43.6811 5.93 37.3889 3.33333 30 3.33333C22.6111 3.33333 16.32 5.93 11.1267 11.1233C5.93111 16.3189 3.33333 22.6111 3.33333 30C3.33333 33.7222 4 37.1244 5.33333 40.2067C6.66667 43.2911 8.44444 45.9722 10.6667 48.25ZM30 31.6667C27.1667 31.6667 24.7922 30.7078 22.8767 28.79C20.9589 26.8744 20 24.5 20 21.6667C20 18.8333 20.9589 16.4578 22.8767 14.54C24.7922 12.6244 27.1667 11.6667 30 11.6667C32.8333 11.6667 35.2078 12.6244 37.1233 14.54C39.0411 16.4578 40 18.8333 40 21.6667C40 24.5 39.0411 26.8744 37.1233 28.79C35.2078 30.7078 32.8333 31.6667 30 31.6667ZM30 60C25.8333 60 21.9167 59.2222 18.25 57.6667C14.5833 56.1111 11.4033 53.9867 8.71 51.2933C6.01444 48.5978 3.88889 45.4167 2.33333 41.75C0.777778 38.0833 0 34.1667 0 30C0 25.8333 0.777778 21.9167 2.33333 18.25C3.88889 14.5833 6.01444 11.4022 8.71 8.70667C11.4033 6.01333 14.5833 3.88889 18.25 2.33333C21.9167 0.777778 25.8333 0 30 0C34.1667 0 38.0833 0.777778 41.75 2.33333C45.4167 3.88889 48.5978 6.01333 51.2933 8.70667C53.9867 11.4022 56.1111 14.5833 57.6667 18.25C59.2222 21.9167 60 25.8333 60 30C60 34.1667 59.2222 38.0833 57.6667 41.75C56.1111 45.4167 53.9867 48.5978 51.2933 51.2933C48.5978 53.9867 45.4167 56.1111 41.75 57.6667C38.0833 59.2222 34.1667 60 30 60Z" fill="#AFEDF6"></path></svg>
            </text>
        </nav>
    );
}

export default NavBar;
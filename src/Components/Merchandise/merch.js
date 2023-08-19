import './merch.css';
import merchimg from '../../assets/Merch.webp';
import { NavLink } from 'react-router-dom';


function merch() {
    return (
        <div className="merch">
            <h1>MERCHANDISE</h1>
            <div className='merch_container'>
                <div className='merchImg'>
                    <img src={merchimg} alt='Merch'></img>
                </div>
                <div className='merch_desc'>
                    <p>
                        Our official Tryst merchandise T-shirt is the perfect addition to your wardrobe! Made with High-quality materials, Reflective print and Customised Name , this shirt is sure to turn heads. Whether you're a die-hard Tryst fan or simply looking for a stylish and comfortable new piece to add to your collection, this T-shirt is the perfect choice.
                    </p>
                    <p>
                        Stand out from the crowd and show your support for the Tryst community with our exclusive merchandise. Don't miss out on this unique opportunity to own an official Tryst T-shirt that is not only fashionable but also a great way to connect with like-minded individuals who share your passion for this iconic brand. So, upgrade your wardrobe today and join the Tryst community with our official merchandise T-shirt!
                    </p>
                    <br></br>
                    <center>
                        <NavLink to='/merch/shop' style={{textDecoration:'none'}}><p className='MerchBuy'>BUY NOW</p></NavLink>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default merch;
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://res.cloudinary.com/thejayeshsoni/image/upload/v1680442568/react-app-images/download_ikkm3e.png" alt="food-app-logo" draggable="false" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
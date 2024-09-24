const Footer = () => {
    return ( <>
     <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        We provide high-quality services for your needs. Our mission is to deliver the best solutions to our customers.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li>Email: info@example.com</li>
                        <li>Phone: +123-456-7890</li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
            </div>
        </footer>
    </> );
}
 
export default Footer;
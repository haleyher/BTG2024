// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS for styling

function Footer() {
    const email = "timthebeaver@gmail.com";

    return (
        <footer className="footer">
            <div className="container text-center">
                <p>Contact us: <a href={`mailto:${email}`}>{email}</a></p>
                <p>&copy; {new Date().getFullYear()} IdeaBoard. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

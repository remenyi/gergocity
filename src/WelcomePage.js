import { Router, Link } from "react-router-dom";

const WelcomePage = () => {
    return <div className="welcome-page">
            <div className="welcome-title">
                <div>
                    Gergő 
                </div>
                <div>
                    City
                </div>
            </div>
            <Link to={"/main/"} className="welcome-enter">
                Belépés
            </Link>
        </div>;
}

export default WelcomePage;
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home_content">
            <div className="appeal">
                <div className="appeal_heading">
                <h1>YOU CAN BUY INDIA MORE GOLD!</h1>
                </div>
                <div className="appeal_desc">
                    <p>All your contribution will get paid to all the participants of <span>Olympics 2020</span> participated for our motherland <span>India</span>.</p>
                    <p>These real heroes need our contribution also, No matter they do win or lose, Important is they <span>fight for India</span>.</p>
                </div>
                <Link to="/contribute"><button id="button_contribute">Click to Contribute</button></Link>
            </div>
        </div>
    );
}
 
export default Home;
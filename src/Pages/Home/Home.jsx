import Banner from "../../Components/Banner/Banner";
import Footer from "../Footer/Footer";
import Popular from "../Popular/Popular";
import Question from "../Question/Question";
import Works from "../Works/Works";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <Works></Works>
            <Question></Question>
            <Footer></Footer>
        </div>
    );
};

export default Home;
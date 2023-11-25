import Container from "../../Layouts/Container/Container";
import Banner from "./Banner";
import PremiumCards from "./PremiumCards/PremiumCards";
const Home = () => {
    return (
        <Container>
           <Banner></Banner>
           <PremiumCards></PremiumCards>
        </Container>
    );
};

export default Home;
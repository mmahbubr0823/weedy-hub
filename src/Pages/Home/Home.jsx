import Container from "../../Layouts/Container/Container";
import Title from "../../Shared/Title/Title";
import Banner from "./Banner";
import PremiumCards from "./PremiumCards/PremiumCards";
const Home = () => {
    return (
        <Container>
            <Title title={'Home'}></Title>
           <Banner></Banner>
           <PremiumCards></PremiumCards>
        </Container>
    );
};

export default Home;
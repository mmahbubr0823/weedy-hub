import Container from "../../Layouts/Container/Container";
import Title from "../../Shared/Title/Title";
import Banner from "./Banner";
import PremiumCards from "./PremiumCards/PremiumCards";
import SuccessCounter from "./SuccessCounter";
import WorkingMethods from "./WorkingMethods";
const Home = () => {
    return (
        <Container>
            <Title title={'Home'}></Title>
           <Banner></Banner>
           <PremiumCards></PremiumCards>
           <WorkingMethods></WorkingMethods>
           {/* <SuccessCounter></SuccessCounter> */}
        </Container>
    );
};

export default Home;
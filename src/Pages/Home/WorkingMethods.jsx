import Container from "../../Layouts/Container/Container";
import { CgProfile } from "react-icons/cg";
import { ImManWoman } from "react-icons/im";
import { GiLovers } from "react-icons/gi";




const WorkingMethods = () => {
    return (
        <div>
            <Container>
                <div className="border-y-4 p-3 rounded-xl">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">How Our Website Works</h1>
                        <p className="text-sm my-3">Users can make the most of the matrimony website by first registering and creating a comprehensive profile that highlights their personal details, education, profession, family background, and partner preferences. Upon setting their preferences, users can explore potential matches through the platform's matching algorithm and advanced search filters, allowing for a customized and efficient search process. The website offers various communication tools, including messaging, chat, and video calls, enabling users to interact with potential matches. </p>
                    </div>
                    <div className=" grid gap-4 md:grid-cols-3">
                        <div className="bg-[#eaf46b] flex gap-4 items-center px-20 rounded-xl py-16">
                            <p className="text-2xl">Create Profile</p>
                            <p><span><CgProfile className="text-4xl" /></span></p>
                        </div>
                        <div className="bg-[#f46b70] flex gap-4 items-center px-20 rounded-xl py-16">
                            <p className="text-2xl">Find Partner</p>
                            <p><span><ImManWoman className="text-4xl" /></span></p>
                        </div>
                        <div className="bg-[#f46bf2] flex gap-4 items-center px-20 rounded-xl py-16">
                            <p className="text-2xl">Knot Tie</p>
                            <p><span><GiLovers className="text-4xl" /></span></p>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WorkingMethods;
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from "../../Layouts/Container/Container";
const Footer = () => {
    return (
        <div>
            <footer className="mt-10 p-10 bg-[#ad8af4] text-white">
                <Container>
                    <div className="flex items-center justify-center gap-5">
                        <div>
                            <div className="">
                                <img className="w-28 h-28 rounded-md" src="https://i.ibb.co/dGphmgc/6895997.jpg" alt="" />
                                <a className=" normal-case lg:text-xl xl:text-4xl font-semibold">Feed The <span className="text-[#f1aaaa]">Hunger</span></a>
                            </div>
                            <p>Provides Foods since 2000</p>
                            <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                        </div>
                        <div className="mr-5">
                            <header className="text-xl font-bold my-5">Address</header>
                            <p>
                                Level-4, 34, Awal Centre, Banani, Dhaka <br />
                                Support: web@xxxxx.com <br />
                                Helpline: 01xxxxxxx <br />
                                (Available : Sat - Thu, 10:00 AM to 7:00 PM)
                            </p>
                        </div>
                        <div>
                            <header className="text-xl font-bold my-5">Useful links</header>
                            <ul>
                                <li>Blog</li>
                                <li>Success</li>
                                <li>Donate</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <header className="text-xl font-bold my-5">Follow Us</header>
                            <ul className="md:space-y-2 flex items-center gap-2 md:block">
                                <li><FaFacebook className="text-2xl"></FaFacebook></li>
                                <li><FaTwitter className="text-2xl"></FaTwitter></li>
                                <li><FaInstagram className="text-2xl"></FaInstagram></li>
                                <li><FaYoutube className="text-2xl"></FaYoutube></li>

                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>

        </div>
    );
};

export default Footer;
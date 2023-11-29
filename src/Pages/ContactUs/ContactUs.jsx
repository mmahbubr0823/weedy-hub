import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Container from '../../Layouts/Container/Container';

const ContactUs = () => {
    return (
        <div>
            <Container>
                <div className="my-10 space-y-6">
                    <section>
                        <h1 className="text-3xl font-bold text-center mb-2">
                            Contact <span className="uppercase text-3xl font-bold">We<span className="text-[#d63939]">dd</span>y Hub</span> - We're Here to Assist You!
                        </h1>
                        <p>
                            Welcome to the Contact Us page of [Your Matrimony Website Name]. We appreciate your interest in our platform, and we are committed to providing excellent customer support to enhance your experience. Whether you have inquiries, need assistance, or want to share feedback, here's how you can get in touch:
                        </p>
                    </section>
                    <section>
                        <h1 className="text-xl font-bold mb-2">
                            Customer Support:
                        </h1>
                        <p>
                            Our dedicated customer support team is available to address any questions or concerns you may have. For prompt assistance, please feel free to reach out via email or phone.
                        </p>
                        <li>Email:abc@cd.com</li>
                        <li>Phone:017111111</li>
                    </section>
                    <section>
                        <h1 className="text-xl font-bold mb-2">
                        Office Address:
                        </h1>
                        <p>
                            Level-4, 34, Awal Centre, Banani, Dhaka <br />
                            Support: web@xxxxx.com <br />
                            Helpline: 01xxxxxxx <br />
                            (Available : Sat - Thu, 10:00 AM to 7:00 PM)
                        </p>
                    </section>
                    <section>
                        <h1 className="text-xl font-bold mb-2">
                        Social Media:
                        </h1>
                        <ul className="md:space-y-2 flex items-center gap-2 md:block">
                                <li><FaFacebook className="text-2xl"></FaFacebook></li>
                                <li><FaTwitter className="text-2xl"></FaTwitter></li>
                                <li><FaInstagram className="text-2xl"></FaInstagram></li>
                                <li><FaYoutube className="text-2xl"></FaYoutube></li>

                            </ul>
                    </section>
                    <section>
                        <h1 className="text-xl font-bold mb-2">
                            Get in Touch:
                        </h1>
                        <p>
                            Have questions or need assistance? Our dedicated customer support team is here for you. Feel free to reach out and let us guide you through your matrimony journey.

                            Thank you for choosing [Your Matrimony Website Name] as your trusted companion on the path to finding love. We look forward to being part of your journey towards a fulfilling and lasting connection.
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;
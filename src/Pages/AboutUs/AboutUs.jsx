import Container from "../../Layouts/Container/Container";
import Title from "../../Shared/Title/Title";

const AboutUs = () => {
    return (
        <div>
           <Container>
           <Title title={'About Us'}></Title>
            <div className="my-10 space-y-6">
               <section>
               <h1 className="text-3xl font-bold text-center mb-2">
                Welcome to  <span className="uppercase text-3xl font-bold">We<span className="text-[#d63939]">dd</span>y Hub</span> - Connecting Hearts, Building Futures
                </h1>
                <p>
                At Weddy Hub, we believe in the transformative power of love and lifelong companionship. Our platform is more than just a matrimonial service; it's a carefully crafted space dedicated to helping individuals find their life partners, fostering meaningful connections that last a lifetime.
                </p>
               </section>
               <section>
               <h1 className="text-xl font-bold mb-2">
               Our Mission:
                </h1>
                <p>
                Our mission is to facilitate the journey to matrimony by providing a secure, user-friendly, and efficient platform for singles seeking companionship. We understand the significance of marriage in one's life and aim to simplify the process, making it enjoyable, respectful, and reflective of individual preferences.
                </p>
               </section>
               <section>
               <h1 className="text-xl font-bold mb-2">
               What Sets Us Apart:
                </h1>
                <div className="space-y-2">
                    <li>
                    Personalized Matching: Our advanced matching algorithm considers a myriad of factors, from basic demographics to deeper compatibility traits, ensuring that your matches are not only based on common interests but also on long-term compatibility.
                    </li>
                    <li>
                    Personalized Matching: Our advanced matching algorithm considers a myriad of factors, from basic demographics to deeper compatibility traits, ensuring that your matches are not only based on common interests but also on long-term compatibility.
                    </li>
                    <li>
                    Personalized Matching: Our advanced matching algorithm considers a myriad of factors, from basic demographics to deeper compatibility traits, ensuring that your matches are not only based on common interests but also on long-term compatibility.
                    </li>
                </div>
               </section>
               <section>
               <h1 className="text-xl font-bold mb-2">
               Our Commitment:
                </h1>
                <p>
                We are committed to fostering a community built on respect, diversity, and inclusivity. Whether you're searching for a life partner based on cultural, religious, or personal preferences, our platform welcomes individuals from all walks of life.
                </p>
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

export default AboutUs;
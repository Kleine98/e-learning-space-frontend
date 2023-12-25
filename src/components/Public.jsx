import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import ContactForm from "./ContactForm";

const Public = () => {
  const content = (
    <section>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ContactForm />
      </main>
    </section>
  );
  return content;
};
export default Public;

import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";
import Hero from "../../components/HeroPortfolio";
import AnimatedSection from '../../components/AnimatedSection';
import { getDictionary } from './dictionaries';

export default async function HomePage({ params }: { params: Promise<{ lang: 'it' | 'en' }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Navbar />

      <AnimatedSection>
        <Hero dictionary={dictionary} />
      </AnimatedSection>

      <section>
        <Footer dictionary={dictionary}/>
      </section>

    </div>
  );
}

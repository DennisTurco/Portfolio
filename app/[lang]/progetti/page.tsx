import Navbar from '../../../components/Navbar';
import Footer from "../../../components/Footer";
import Projects from "../../../components/Projects";
import AnimatedSection from '../../../components/AnimatedSection';
import { getDictionary } from '../dictionaries';

export default async function HomePage({ params }: { params: Promise<{ lang: 'it' | 'en' }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Navbar />

      <AnimatedSection>
        <Projects dictionary={dictionary}/>
      </AnimatedSection>

      <section>
        <Footer dictionary={dictionary}/>
      </section>

    </div>
  );
}

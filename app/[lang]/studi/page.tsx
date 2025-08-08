import Navbar from '../../../components/Navbar';
import Footer from "../../../components/Footer";
import StudiesPlan from "../../../components/StudiesPlan";
import AnimatedSection from "../../../components/AnimatedSection";
import { getDictionary } from '../dictionaries';

export default async function HomePage({ params }: { params: Promise<{ lang: 'it' | 'en' }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Navbar />

      <AnimatedSection>
        <StudiesPlan dictionary={dictionary}/>
      </AnimatedSection>

      <section>
        <Footer dictionary={dictionary}/>
      </section>

    </div>
  );
}

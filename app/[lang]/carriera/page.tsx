import Navbar from '../../../components/Navbar';
import Footer from "../../../components/Footer";
import WorkExperience from "../../../components/WorkExperience";
import { getDictionary } from '../dictionaries';

export default async function HomePage({ params }: { params: Promise<{ lang: 'it' | 'en' }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Navbar />

      <section>
        <WorkExperience dictionary={dictionary}/>
      </section>

      <section>
        <Footer dictionary={dictionary}/>
      </section>

    </div>
  );
}

import HeroSection from '@/components/home/HeroSection';
import PopularCategories from '@/components/home/PopularCategories';
import OurServices from '@/components/home/OurServices';
import BenefitsSection from '@/components/home/BenefitsSection';
import BlogSection from '@/components/home/BlogSection';
import FeaturedProperties from '@/components/home/featuredProperties/FeaturedProperties';

function Home() {
  return (<>

    <HeroSection />
    <FeaturedProperties />
    <PopularCategories />
    <OurServices />
    <BenefitsSection />
    <BlogSection />

  </>);
}
export default Home;

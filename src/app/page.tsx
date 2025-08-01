import FAQs from '@/sections/FAQs';
import Header from '@/sections/Header';
import Hero from "@/sections/Hero";
import Intro from '@/sections/Intro';
import Projects from '@/sections/Projects';
import Testimonials from '@/sections/Testimonials';
import Brands from "@/sections/Brands";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <Intro/>
            <Projects/>
            <Testimonials/>
            <Brands/>
            <FAQs/>
            {/*<Footer/>*/}
        </>
    );
}

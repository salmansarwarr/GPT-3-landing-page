import { Manrope } from 'next/font/google';
import {
    Footer,
    Header,
    SectionFive,
    SectionFour,
    SectionOne,
    SectionSeven,
    SectionSix,
    SectionThree,
    SectionTwo,
} from '../sections/index';

const manrope = Manrope({
    weight: '500',
    subsets: ['latin'],
});

export default function Home() {
    return (
        <div className={`bg_gradient ${manrope.className}`}>
            <Header />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <Footer />
        </div>
    );
}

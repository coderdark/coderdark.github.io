import {getImageUrl} from '../utils/getImage.js';
import HeroBanner from '../components/hero-banner.jsx';

export default function Home() {
    return (<div className={'pb-16'}>
        <HeroBanner/>
        <section className="flex flex-col rounded-lg">
            <p className={'flex bg-slate-800 p-4'}>
                Welcome to my GitHub.io page! Here, you’ll find a collection of my favorite tech projects and
                experiments—where curiosity meets creativity. Dive in and explore the things I love building and
                tinkering with in the world of technology!
            </p>
        </section>
    </div>);
}

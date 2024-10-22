import {getImageUrl} from '../utils/getImage.js';

export default function Home() {
    return (<div className={'pb-16'}>
        <section className="flex flex-col rounded-lg">
            <div style={{backgroundImage: `url(${getImageUrl('programming.jpg')})`}}
                 className={`flex bg-center h-52 bg-cover justify-center items-center`}>
                Got To Love Tech!
            </div>
        </section>
        <section className="flex flex-col rounded-lg">
            <p className={'flex bg-slate-800 p-4'}>
                Welcome to my GitHub.io page! Here, you’ll find a collection of my favorite tech projects and
                experiments—where curiosity meets creativity. Dive in and explore the things I love building and
                tinkering with in the world of technology!
            </p>
        </section>
    </div>);
}

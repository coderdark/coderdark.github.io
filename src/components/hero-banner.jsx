import {getImageUrl} from '../utils/getImage.js';

export default function HeroBanner() {
    return (<section className="flex flex-col rounded-lg">
        <div style={{backgroundImage: `url(${getImageUrl('programming.jpg')})`}}
             className={`flex bg-center h-52 bg-cover justify-center items-center`}>
            Got To Love Tech!
        </div>
    </section>);
}

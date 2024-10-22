import {NavLink} from 'react-router-dom';

export default function Nav() {
    return (<header
        className="flex flex-col sticky top-0 left-0 z-10 p-4 gap-4 bg-black justify-center items-center">
        <h1 className={'text-3xl font-extrabold'}>
            coderdark.github.io
        </h1>
        <div className="flex gap-5 text-xs">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/thoughts'}>Thoughts</NavLink>
            <NavLink to={'/experiments'}>Experiments</NavLink>
        </div>
    </header>);
}

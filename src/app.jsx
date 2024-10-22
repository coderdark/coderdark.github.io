export default function App() {
    return <main className={'flex flex-col relative w-screen min-h-screen'}>
        <header
            className="flex flex-col sticky top-0 left-0 z-10 p-4 gap-4 bg-black justify-center items-center">
            <h1 className={'text-3xl font-extrabold'}>
                coderdark.github.io
            </h1>
            <div className="flex gap-5 text-xs">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </header>
        <section className="flex flex-col rounded-lg">
            <div className="flex bg-[url('./src/assets/programming.jpg')] bg-center h-52 bg-cover justify-center items-center">
                Got To Love Tech!
            </div>
        </section>
        <section className="flex flex-col rounded-lg pb-16">
            <p className={'flex bg-slate-800 p-4'}>
                Welcome to my GitHub.io page! Here, you’ll find a collection of my favorite tech projects and
                experiments—where curiosity meets creativity. Dive in and explore the things I love building and
                tinkering with in the world of technology!
            </p>
        </section>
        <footer
            className="flex absolute justify-center items-center bottom-0 w-screen bg-black text-center h-16">
            © Copyright 2024 coderdark
        </footer>
    </main>;
}

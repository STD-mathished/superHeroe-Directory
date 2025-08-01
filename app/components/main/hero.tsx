export default function Hero() {
    return (

        <section className="relative w-full min-h-[80vh] flex items-center justify-center">

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase tracking-wide text-shadow-lg">
          Unleash your inner hero. <br className="hidden md:inline" />
          Discover their epic stories.
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-200">
          Welcome to Heroic Nexus, your ultimate destination for everything superheroes.
          Explore comprehensive profiles, dive into thrilling battles, and join a community
          that celebrates the mightiest heroes and villains.
        </p>

        <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
          Explore Our Heroes
        </button>
      </div>
    </section>
    )
}
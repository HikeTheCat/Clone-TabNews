function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-10 text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Fernanda 💖
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Se você me ama, dá uma risadinha! 😍😂
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold shadow-md transition-transform transform hover:scale-105">
            Risadinha 😁
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

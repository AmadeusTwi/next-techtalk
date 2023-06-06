export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();

  return {
    props: { stars: data.stargazers_count },
  };
}

export default function SSR({ stars }: { stars: number }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-purple-500">
      <h1 className="text-6xl font-bold mb-8">Next.js has</h1>
      <div className="text-9xl font-bold mb-8">
        {stars}
        <span className="text-6xl font-bold">⭐️</span>
      </div>
    </div>
  );
}

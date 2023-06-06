export default function SSR({ stars }: { stars: number }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-purple-500">
      <h1 className="text-6xl font-bold mb-8">I work at Vention</h1>
    </div>
  );
}

import { useRouter } from "next/router";

const DynamicPage = () => {
  const router = useRouter();
  const { bestThingInTheWorld } = router.query;

  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-8">
      <div className="text-white text-6xl font-bold">
        The best thing in the world is...{" "}
        <span className="text-yellow-500">{bestThingInTheWorld}</span>.
      </div>
    </div>
  );
};

export default DynamicPage;

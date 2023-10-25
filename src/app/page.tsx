import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <main className="text-7xl h-screen w-screen flex justify-center items-center font-semibold">
        Welcome to the
        <span className="ml-4 bg-gradient-to-tr from-green-400 to-blue-400 bg-clip-text text-transparent inline-block h-max py-2">
          best blog
        </span>
        <div className="absolute bottom-10 text-lg text-center">
          Explore the feed
          <br />|
          <br />|
        </div>
      </main>
      <div className="h-screen w-screen flex flex-col gap-3 px-8 mb-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

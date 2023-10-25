import Card from "../components/Card";

export default function User() {
  return (
    <div className="pt-20 flex flex-col items-center gap-3">
      <div className="p-[2px] bg-gradient-to-tr from-blue-400 to-green-400 rounded-full shadow-lg">
        <img
          src="next.svg"
          className="h-32 w-32 rounded-full object-fit border-neutral bg-base-100 p-2"
        />
      </div>
      <h1 className="text-4xl font-semibold">Anton Mihailescu</h1>
      <div className="w-1/3 text-lg text-center">
        <h2>Java developer. Fuck c++. Life is fun</h2>
      </div>
      <div className="w-screen flex flex-col gap-3 px-8 mb-10 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

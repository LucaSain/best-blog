import Link from "next/link";
export default function Card() {
  return (
    <div className="h-max w-full p-2 border-b-2 border-neutral flex flex-row items-center">
      <div>
        <div className="text-4xl font-semibold">
          Blog title{" "}
          <span className="text-lg font-light">
            by{" "}
            <Link href={"/" + "gagiu"} className="underline cursor-pointer">
              gagiu{" "}
            </Link>
          </span>
        </div>
        <div className="text-lg mt-2">Descriptiosdjkjsdasjkdnajks</div>
      </div>
      <div className="flex-grow"></div>
      <div className="btn btn-ghost border-0 border-b-2  border-neutral hover:invert hover:bg-white ">
        read
      </div>
      <div className="btn btn-ghost border-0 border-t-2  border-neutral">
        save
      </div>
    </div>
  );
}

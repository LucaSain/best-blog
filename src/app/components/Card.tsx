import Link from "next/link";
import { CardProps } from "../types";
export default function Card({ title, author, desc }: CardProps) {
  return (
    <div className="h-max w-full p-2 border-b-2 border-neutral flex flex-row items-center">
      <div>
        <div className="text-4xl font-semibold">
          {title}{" "}
          <span className="text-lg font-light">
            by{" "}
            <Link href={"/" + "gagiu"} className="underline cursor-pointer">
              {author}
            </Link>
          </span>
        </div>
        <div className="text-lg mt-2">{desc}</div>
      </div>
      <div className="flex-grow"></div>
      <Link
        href={"/" + author + "/" + title}
        className="btn btn-ghost border-0 border-b-2 rounded-none border-neutral hover:invert hover:bg-white "
      >
        read
      </Link>
      {/* <div className="btn btn-ghost border-0 border-t-2 rounded-none border-neutral">
        save
      </div> */}
    </div>
  );
}

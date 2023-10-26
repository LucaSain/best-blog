import Card from "../components/Card";
import { CardProps } from "../types";
export const posts: Array<CardProps> = [
  {
    title: "One post",
    author: "Gigel",
    desc: "Lorem impsum123",
  },
  {
    title: "One post",
    author: "Gigel",
    desc: "Lorem impsum123",
  },
  {
    title: "One post",
    author: "Gigel",
    desc: "Lorem impsum123",
  },
];
export default function Explore() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-3 px-8 mb-10 pt-20">
      {posts.map((post) => {
        return (
          <Card
            key={post.title + post.author}
            title={post.title}
            desc={post.desc}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

"use client";
import { useState } from "react";
import { Post } from "../types";
//@ts-ignore
import * as md from "markdown-it";

export default function Create() {
  const [post, setPost] = useState<Post>({
    title: "",
    desc: "",
    text: "",
    author: "session.author",
  });
  const [view, setView] = useState<number>(0);
  return (
    <>
      {view === 0 ? (
        <div className="pt-20 flex-col flex items-center gap-4 h-screen py-2">
          <input
            value={post.title}
            onChange={(e) => {
              const tmp = { ...post };
              tmp.title = e.target.value;
              setPost(tmp);
            }}
            className="text-lg w-1/2 p-2 border-0 border-neutral rounded-none border-b-2 focus:outline-none"
            type="text"
            placeholder="A fun blog title"
          />
          <textarea
            value={post.desc}
            onChange={(e) => {
              const tmp = { ...post };
              tmp.desc = e.target.value;
              setPost(tmp);
            }}
            placeholder="Some description, a quick oneliner please (lim=20 words)"
            className="textarea w-1/2 border-2 border-neutral focus:outline-none ransition-shadow shadow-md"
          ></textarea>
          <textarea
            value={post.text}
            onChange={(e) => {
              const tmp = { ...post };
              tmp.text = e.target.value;
              setPost(tmp);
            }}
            placeholder="Blog. I am markdown"
            className="textarea text-lg w-2/3 border-2 border-neutral h-full transition-shadow shadow-sm focus:outline-none focus:shadow-xl"
          ></textarea>
          <button
            onClick={() => {
              setView(1);
            }}
            className="btn absolute right-2 bottom-2 border-2 border-neutral"
          >
            Preview
          </button>
        </div>
      ) : (
        <>
          <div className="prose mx-auto pt-20">
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: md().render(post.text),
              }}
            ></div>
          </div>
          <button
            onClick={() => console.log("a")}
            className="btn absolute right-2 bottom-2 border-2 border-neutral"
          >
            Publish
          </button>
          <button
            onClick={() => {
              setView(0);
            }}
            className="btn absolute left-2 bottom-2 border-2 border-neutral"
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}

export default async function Post({ params }: { params: { post: string } }) {
  //fetch the post
  return (
    <>
      <div className="pt-20 prose mx-4 sm:mx-auto min-h-screen h-max ">
        <h1>PostName</h1>
        <p>The post about the posts that have been made to be post</p>
        <h2>Some subtitle</h2>
        <p>The post about the posts that have been made to be post</p>
        <p>The post about the posts that have been made to be post</p>
      </div>
      <div className="w-screen flex justify-center mb-4">
        By <a className="ml-1 underline cursor-pointer">Mihnea Garbacica</a>
      </div>
    </>
  );
}

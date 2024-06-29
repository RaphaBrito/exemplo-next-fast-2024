export default function BlogPost({ params }: { params: { id: number } }) {
  return (
    <div className="p-20">
      <h1>Blog Post {params.id}</h1>
      <p>Este é o conteúdo do Post {params.id}.</p>
    </div>
  );
}

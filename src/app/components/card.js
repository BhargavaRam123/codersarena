export default function Card({ data }) {
  console.log("data:", data);
  return (
    <div>
      <h3>{data.title}</h3>
      <p>
        By {data.author} On {data.category}
      </p>
      <p>posted on {data.date}</p>
      <p>{data.content}</p>
      <div className="tcon">
        {data.tags.map((x) => (
          <div>#{x}</div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { useContext, useEffect } from "react";
import { Appcontext } from "./context/appcontext";
import Card from "./components/card";
import Loading from "./components/loading";
export default function Home() {
  const { loading, getdata, totalpages, page, posts, handlepagechange } =
    useContext(Appcontext);
  const a = loading;
  useEffect(() => {
    getdata(page);
  }, []);
  console.log("loading value", posts);
  return loading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div className="container">
      <div className="nav">Coders Arena</div>
      <br />
      {posts.map((obj) => (
        <Card data={obj} />
      ))}
      <div className="pcon">
        <div className="ipcon">
          {page > 1 ? (
            <div className="ncon" onClick={() => handlepagechange(page - 1)}>
              Previous
            </div>
          ) : null}
          {page < totalpages ? (
            <div className="ncon" onClick={() => handlepagechange(page + 1)}>
              Next
            </div>
          ) : null}
        </div>
        <div>
          Page {page} of {totalpages}
        </div>
      </div>
    </div>
  );
}

"use client";
import { createContext, useState } from "react";

export const Appcontext = createContext();

export function Appcontextprovider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, settotalpages] = useState(null);
  async function getdata(page = 1) {
    setloading(true);
    const api = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
    try {
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      setpage(data.page);
      settotalpages(data.totalPages);
      setposts(data.posts);
    } catch (error) {
      console.log("error in getdata function,apicall error:", error.message);
    }
    setloading(false);
  }
  async function handlepagechange(page) {
    await getdata(page);
  }
  const value = {
    loading,
    setloading,
    posts,
    setposts,
    page,
    setpage,
    totalpages,
    settotalpages,
    getdata,
    handlepagechange,
  };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}

"use client";

import React from "react";
import classes from "./edit.module.css";
import { useSession } from "next-auth/session";

const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Nature");
  const [photo, setPhoto] = ueState("");
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading ....</p>;
  }

  if (status === "unauthenticated") {
    return <p className={classes.accessDenied}>Access Denied</p>;
  }

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`http://localhost:3000/api/blog/${ctx.params.id}`);
      const blog = await res.json();

      setTitle(blog.title);
      setDesc(blog.desc);
      setTitle(blog.category);
    }
    fetchBlog();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}></div>
      <h2>Edit Post Testing things!!!!!</h2>
      <form></form>
    </div>
  );
};

export default Edit;

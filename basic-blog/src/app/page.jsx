"use client";

import { useEffect, useState } from "react";
import classes from "./page.module.css";
import BlogCard from "@/components/blogCard/BlogCard";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/blog/`, { cache: "no-store" });
        const fetchedPosts = await res.json();
        setBlogPosts(fetchedPosts);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  });

  return (
    <div className={classes.container}>
      <h2>Becki's Blog Website</h2>
      <div className={classes.wrapper}>
        {blogPosts.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import { blogs } from "@/lib/data";
import classes from "./page.module.css";
import BlogCard from "@/components/blogCard/BlogCard";

export default function Home() {
  return (
    <div className={classes.container}>
      <h2>Becki's Blog Website</h2>
      <div className={classes.wrapper}>
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </div>
  );
}

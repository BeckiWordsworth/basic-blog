import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import classes from "./blogCard.module.css";

const BlogCard = ({ blog: { id, title, desc, img } }) => {
  const isLiked = true;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link className={classes.imgContainer} href={`/blog/${id}`}>
          <Image src={img} width="350" height="350" />
        </Link>
        <div className={classes.blogData}>
          <div className={classes.left}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span>
              Created On:<span> 1st January</span>
            </span>
          </div>
          <div className={classes.right}>
            {12} {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

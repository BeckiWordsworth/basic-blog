"use client";

import React, { useEffect, useState } from "react";
import classes from "./edit.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineFileImage } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StandardPage from "@/components/standardPage/StandardPage";

const Edit = (ctx) => {
  const CLOUD_NAME = "dzt4lxguf";
  const UPLOAD_PRESET = "basic_blog_next";

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Nature");
  const [photo, setPhoto] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

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

  if (status === "loading") {
    return <p>Loading ....</p>;
  }

  if (status === "unauthenticated") {
    return <p className={classes.accessDenied}>Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || category === "" || desc === "") {
      toast.error("All fields are required");
      return;
    }
    try {
      let imageUrl = null;
      if (photo) {
        imageUrl = await uploadImage();
      }
    } catch (error) {
      console.log(error);
    }
    const body = {
      title,
      desc,
      category,
    };
    if (imageUrl != null) {
      body.imageUrl = imageUrl;
    }

    const res = await fetch(`https://localhost:3000/api/blog/${ctx.params.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      method: "PUT",
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error("Error has occured");
    }

    const blog = await res.json();
    router.push(`/blog/${blog?._id}`);
  };

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const imageUrl = data["secure_url"];
      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StandardPage>
      <div className={classes.page}>
        <h2>Edit Post fixing testing</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
          <label for="description">Post Content</label>
          <textarea id="description" rows="12" placeholder="Description..." onChange={(e) => setDesc(e.target.value)} />
          <label for="category">Category</label>
          <select value={category} onCHnage={(e) => setCategory(e.target.value)}>
            <option value="Nature">Nature</option>
            <option value="Mountain">Mountain</option>
            <option value="Ocean">Ocean</option>
            <option value="Wildfire">Wildfire</option>
            <option value="Forest">Forest</option>
          </select>
          <label htmlFor="image">
            Upload Image <AiOutlineFileImage />
          </label>
          <input id="image" type="file" style={{ display: "none" }} onChange={(e) => setPhoto(e.target.files[0])} />
          <button className={classes.CreateBlog}>Update</button>
        </form>
      </div>
    </StandardPage>
  );
};

export default Edit;

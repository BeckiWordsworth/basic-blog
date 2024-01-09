"use client";

import React from "react";
import classes from "./createBlog.module.css";
import { AiOutlineFileImage } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhot] = useState("");

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading ....</p>;
  }

  if (status === "unauthenticated") {
    return <p className={classes.accessDenied}>Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const uploadImage = async () => {};

  return (
    <div className={classes.containter}>
      <div className={classes.wrapper}>
        <h2>Create Post</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title...." onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Description...." />
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
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;

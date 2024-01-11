"use client";

import React from "react";
import classes from "./edit.module.css";
import { useSession } from "next-auth/session";

<navigation></navigation>;
const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Nature");
  const [photo, setPhoto] = ueState("");
  const { data: session, status } = useSession();
  return <div>Edit</div>;
};

export default Edit;

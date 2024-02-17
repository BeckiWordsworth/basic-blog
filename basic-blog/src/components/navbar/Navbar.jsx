"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./navbar.module.css";
import person from "../../../public/person.jpg";

import Button from "@mui/material/Button";
import UserMenu from "../userMenu/UserMenu";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">Becki Wordsworth</Link>
        </h2>
        <div className={classes.right}>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

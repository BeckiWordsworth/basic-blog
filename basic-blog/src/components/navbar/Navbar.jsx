"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./navbar.module.css";
import person from "../../../public/person.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();

  const handleShowDropdown = () => setShowDropdown((prev) => true);

  const handleHideDropdown = () => setShowDropdown((prev) => false);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.left}>
          <Link href="/">Becki Wordsworth</Link>
        </h2>
        <ul className={classes.right}>
          {session?.user ? (
            <div className={classes.menu}>
              <Image onClick={handleShowDropdown} src={person} width="45" height="45" />
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleShowDropdown}
              >
                Becki
              </Button>

              {showDropdown && (
                <div className={classes.dropdown}>
                  <AiOutlineClose className={classes.closeIcon} onClick={handleHideDropdown} />
                  <Button id="basic-button" onClick={handleHideDropdown} href="/create-blog" className={classes.create}>
                    Create
                  </Button>
                  <Button
                    id="basic-button"
                    onClick={() => {
                      signOut();
                      handleHideDropdown();
                    }}
                    className={classes.logout}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button
                id="basic-button"
                onClick={() => {
                  signIn();
                }}
                className={classes.login}
              >
                Log in
              </Button>
              <Link href="/register">Register</Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

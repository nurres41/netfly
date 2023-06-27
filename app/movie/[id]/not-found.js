import Link from "next/link";
import React from "react";

function Movie404() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>We could not find the movie you looking for!</h1>
      <Link
        href="/"
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go Home
      </Link>
    </div>
  );
}

export default Movie404;

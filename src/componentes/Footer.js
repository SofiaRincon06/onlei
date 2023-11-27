import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>
        MochueloServi © 2023 <Link to={"https://adminlte.io"}>MocueloDul</Link>.
      </strong>{" "}
    </footer>
  );
};

export default Footer;
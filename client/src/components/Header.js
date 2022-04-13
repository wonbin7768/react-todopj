import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1>
        <Link to={`/`}>Home</Link>
      </h1>
      <h2>
        <Link to={`/toDoList/`}>ToDo List</Link>
      </h2>
      <h2>
        <Link to={`/Movie/`}>Today Hot Movie List</Link>
      </h2>
    </div>
  );
}
export default Header;

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null); // initiate of blogs
  const [isPending, setIspending] = useState(true); // initiate state of ispending

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:3000/blogs") // fetch api from local json server
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIspending(false); // change state of Ispending
      });
  }, []);

  return (
    <div className="home">
      
      {isPending && <div>Loading...</div>} {/* condition of loading screen */}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"All blogs"}
          handleDelete={handleDelete} {/* condition of blogs component */}
        />
      )}
    </div>
  );
};

export default Home;

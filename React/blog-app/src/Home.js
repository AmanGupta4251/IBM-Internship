// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    { id: 1, title: "Understanding React Hooks" },
    { id: 2, title: "A Guide to React Router" },
    { id: 3, title: "State Management in React" },
    { id: 4, title: "Building a REST API with Node.js" },
    { id: 5, title: "Styling in React: CSS Modules vs. Styled Components" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

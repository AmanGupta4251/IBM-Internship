// Post.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";

const posts = {
  1: {
    title: "Understanding React Hooks",
    content:
      "React Hooks are a new addition in React 16.8 that let you use state and other React features without writing a class.",
  },
  2: {
    title: "A Guide to React Router",
    content:
      "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application.",
  },
  3: {
    title: "State Management in React",
    content:
      "State management is a crucial part of building applications. In React, you can manage state using hooks, context, or libraries like Redux.",
  },
  4: {
    title: "Building a REST API with Node.js",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications.",
  },
  5: {
    title: "Styling in React: CSS Modules vs. Styled Components",
    content:
      "CSS Modules and Styled Components are two popular methods of styling React applications, each with its own advantages.",
  },
};

const Post = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

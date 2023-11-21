import React, { useState, useEffect } from "react";

function MultiEffectComponent({ userId }) {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user data
    fetchUserData(userId)
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [userId]);

  useEffect(() => {
    // Fetch user posts
    fetchUserPosts(userId)
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
      {userData && (
        <div>
          <h1>User Data:</h1>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MultiEffectComponent;

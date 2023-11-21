import React, { useState, useEffect } from "react";

function fetchUserData() {
  return Promise.resolve({});
}
function ConditionalEffectComponent({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data only when the userId changes
    fetchUserData(userId)
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>User Data:</h1>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default ConditionalEffectComponent;

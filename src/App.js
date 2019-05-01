import React, { useState, useEffect } from "react";

function App() {
  const [key, setKey] = useState(null);

  useEffect(() => {
    window.addEventListener("keypress", e => {
      setKey(e);
    });

    return () => {
      window.removeEventListener("keypress");
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Key Code Viewer</h1>
      <div>
        {key ? (
          <>
            <h1 style={{ fontSize: "4rem" }}>{key.key}</h1>
            <h1 style={{ fontSize: "4rem" }}>{key.keyCode}</h1>
          </>
        ) : (
          <h1>Press a key to get its key code</h1>
        )}
      </div>
    </div>
  );
}

export default App;

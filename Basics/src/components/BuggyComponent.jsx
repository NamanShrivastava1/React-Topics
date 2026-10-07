import { useState } from "react";

export default function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Boom! Something went wrong in BuggyComponent.");
  }

  return (
    <div style={{ padding: "1rem", border: "1px solid gray" }}>
      <h3>I am a normal component</h3>
      <button onClick={() => setShouldThrow(true)}>Click to Throw Error</button>
    </div>
  );
}

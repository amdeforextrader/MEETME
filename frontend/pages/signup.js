import { useState } from "react";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="mb-4 text-xl font-bold">Sign Up</h2>
      <form className="flex flex-col space-y-3 w-64">
        <input className="border px-2 py-1" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="border px-2 py-1" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}

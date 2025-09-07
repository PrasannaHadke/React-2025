import React, { useCallback, useEffect, useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+[]{}";
    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-96 text-white space-y-6">
        <h1 className="text-2xl font-bold text-center">🔑 Password Generator</h1>

        {/* Password Display */}
        <div className="flex items-center">
          <input
            type="text"
            disabled
            value={password}
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-white font-mono text-lg"
          />
        </div>

        {/* Range Selector */}
        <div>
          <label className="block mb-1">Length: {length}</label>
          <input
            type="range"
            min={8}
            max={40}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Options */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="numbers"
            checked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="chars"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="chars">Include Special Characters</label>
        </div>

        {/* Button */}
        <button
          onClick={passwordGenerator}
          className="w-full py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;

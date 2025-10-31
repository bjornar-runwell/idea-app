"use client";
import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);

  const generateIdeas = () => {
    if (!topic) return;
    const exampleIdeas = [
      `Del behind-the-scenes fra ${topic}`,
      `Lag en kort video som viser prosessen bak ${topic}`,
      `Skriv en post om hvorfor ${topic} betyr noe for dere`,
    ];
    setIdeas(exampleIdeas);
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>Runwell Ideas Studio 💡</h1>
      <p>Skriv inn et tema, og få ideer til sosiale medier!</p>

      <input
        type="text"
        placeholder="Skriv et tema..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: "100%", padding: "8px", marginTop: "10px" }}
      />

      <button
        onClick={generateIdeas}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          background: "#000",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Generer ideer
      </button>

      <ul style={{ marginTop: "20px" }}>
        {ideas.map((idea, i) => (
          <li key={i}>{idea}</li>
        ))}
      </ul>
    </main>
  );
}

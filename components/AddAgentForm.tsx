"use client";

import { FormEvent, useState } from "react";

type AddAgentFormProps = {
  onAdd: (name: string) => void;
};

export function AddAgentForm({ onAdd }: AddAgentFormProps) {
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = name.trim();
    if (!trimmed) {
      return;
    }

    onAdd(trimmed);
    setName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        aria-label="Agent name"
        placeholder="Add a new agent"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="submit">Add Agent</button>
    </form>
  );
}

// components/AddTierForm.tsx

import { useState } from "react";

export default function AddTierForm({ onAdd, onClose }: { onAdd: (tier: any) => void; onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!title || !description || !amount) return;
    onAdd({ title, description, amount });
    onClose();
  };

  return (
    <div className="border border-gray-300 rounded-md p-6 bg-white shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-[#7C3AED] mb-4">Tier type</h2>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Name</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-purple-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Reward description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-purple-300 rounded px-3 py-2 text-sm"
          rows={3}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Amount</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-purple-300 rounded px-3 py-2 text-sm"
        />
      </div>

      <div className="flex justify-between">
        <button onClick={onClose} className="text-sm text-gray-600 px-4 py-2 border border-gray-300 rounded">
          Cancel
        </button>
        <button onClick={handleSubmit} className="bg-[#7C3AED] text-white text-sm px-4 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
}

interface ActionsProps {
  onReset: () => void;
  onApply: () => void;
}

export default function Actions({ onReset, onApply }: ActionsProps) {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={onReset}
        className="border border-aztec px-6 py-2 rounded-md text-gray-600 hover:bg-gray-100"
      >
        Reset
      </button>
      <button
        onClick={onApply}
        className="bg-aztec text-white px-6 py-2 rounded-md hover:bg-aztec/90"
      >
        Apply
      </button>
    </div>
  );
}

type Props = {
  value: string
  onChange: (val: string) => void
  onSend: () => void
}

export default function ChatBox({ value, onChange, onSend }: Props) {
  return (
    <div className="w-full p-4 bg-black border-t border-gray-700">
      <div className="max-w-3xl mx-auto flex items-center rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-2">
        <textarea
          className="w-full resize-none bg-transparent text-white outline-none"
          rows={1}
          placeholder="Send a message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              onSend()
            }
          }}
        />
        <button onClick={onSend} className="ml-2 p-1 rounded-full text-white hover:bg-gray-700 transition">
          ⬆️
        </button>
      </div>
    </div>
  )
}
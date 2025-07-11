type Props = {
  sender: 'user' | 'gpt'
  text: string
}

export default function MessageBubble({ sender, text }: Props) {
  const isUser = sender === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={\`max-w-md px-4 py-2 rounded-lg \${isUser ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}\`}
      >
        {text}
      </div>
    </div>
  )
}
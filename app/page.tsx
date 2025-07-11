'use client'
import { useState } from 'react'
import ChatBox from '../components/ChatBox'
import MessageBubble from '../components/MessageBubble'

export default function HomePage() {
  const [messages, setMessages] = useState([
    { sender: 'gpt', text: 'Hello! How can I help you today?' },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim() === '') return
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: input },
      { sender: 'gpt', text: 'This is a hardcoded response from GPT.' },
    ])
    setInput('')
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <ChatBox value={input} onChange={setInput} onSend={handleSend} />
    </div>
  )
}
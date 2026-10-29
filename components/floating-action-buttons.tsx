"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  Plane,
  MapPin,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/data/travel-content";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  action?: {
    label: string;
    target: string;
  };
}

export const FloatingActionButtons: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! I'm your Voyagrie AI Concierge. I can help you find bespoke destinations, recommend luxury itineraries, or answer questions about visas, seasons, and packages. Where would you like to travel?",
      timestamp: "Just now",
    },
  ]);

  const quickPrompts = [
    "Swiss Alps luxury itinerary",
    "Best time to visit Japan",
    "Maldives honeymoon packages",
    "Custom travel consultation",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatOpen) {
      scrollToBottom();
    }
  }, [messages, chatOpen]);

  const generateAiReply = (userText: string) => {
    const lower = userText.toLowerCase();

    if (lower.includes("japan") || lower.includes("kyoto") || lower.includes("tokyo")) {
      return {
        text: "Japan is breathtaking in spring (late March to mid-April) for cherry blossoms, and in autumn (October–November) for vibrant red maples. Our 'Japan Discovery' package covers Kyoto teahouses, Mt. Fuji views, and Tokyo gastronomy for 8 Days / 7 Nights from $1,799.",
        action: { label: "View Japan Package", target: "#packages" },
      };
    }

    if (lower.includes("swiss") || lower.includes("alps") || lower.includes("switzerland")) {
      return {
        text: "Our 'Swiss Alps Explorer' journey offers a private panoramic Glacier Express ride, luxury alpine chalets in Zermatt, and helicopter glacier tours for 7 Days / 6 Nights from $1,499. Would you prefer a winter ski or summer hiking itinerary?",
        action: { label: "Explore Swiss Tour", target: "#packages" },
      };
    }

    if (lower.includes("maldives") || lower.includes("honeymoon") || lower.includes("beach")) {
      return {
        text: "For romantic escapes, our 'Maldives Escape' package features private overwater villas, sunset dolphin cruises, and seaplane transfers for 5 Days / 4 Nights from $1,299 per person.",
        action: { label: "Book Consultation", target: "#contact" },
      };
    }

    if (lower.includes("visa") || lower.includes("support")) {
      return {
        text: "Voyagrie provides end-to-end concierge visa assistance including document review, appointment scheduling, and fast-track processing for Schengen, UK, US, and Asian tourist visas.",
        action: { label: "Contact Visa Support", target: "#contact" },
      };
    }

    if (lower.includes("custom") || lower.includes("price") || lower.includes("cost") || lower.includes("plan")) {
      return {
        text: "All Voyagrie journeys are 100% tailor-made to your style, pace, and preference. You can request a personalized itinerary below and our senior destination curators will respond with an estimate within 2 hours.",
        action: { label: "Get Free Consultation", target: "#contact" },
      };
    }

    return {
      text: "That sounds like a wonderful adventure! We have handpicked bespoke arrangements with 5-star partners worldwide. Would you like me to connect you with our senior travel expert for a complimentary custom plan?",
      action: { label: "Request Free Consultation", target: "#contact" },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text.trim(),
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAiReply(text);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: reply.text,
        timestamp: "Just now",
        action: reply.action,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (target: string) => {
    setChatOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Action Buttons Container (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/14156789003?text=Hi%20Voyagrie,%20I'd%20like%20to%20plan%20a%20luxury%20trip."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Voyagrie on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer"
        >
          {/* Tooltip on Left */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#152F29] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none">
            WhatsApp Concierge
          </span>

          {/* WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.277-.1-.478-.15-.68.15-.202.3-.78 1-.956 1.203-.176.202-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.201-.301.301-.502.101-.202.05-.377-.025-.527-.076-.15-.68-1.637-.932-2.245-.245-.591-.495-.511-.68-.521-.176-.01-.377-.01-.578-.01-.202 0-.528.076-.804.377-.277.301-1.055 1.031-1.055 2.516s1.08 2.918 1.23 3.119c.15.202 2.126 3.247 5.15 4.555.719.311 1.28.497 1.718.636.723.23 1.381.198 1.901.12.579-.087 1.782-.728 2.033-1.431.252-.703.252-1.306.176-1.431-.075-.125-.276-.201-.577-.352zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.98.58 3.82 1.58 5.38L2 22l4.76-1.55c1.5 1 3.27 1.57 5.28 1.57 5.52 0 10.01-4.49 10.01-10.01C22.05 6.49 17.56 2 12.04 2zm0 18.25c-1.73 0-3.34-.51-4.7-1.39l-.34-.22-2.82.92.94-2.75-.24-.37c-.96-1.48-1.47-3.2-1.47-4.99 0-4.55 3.7-8.25 8.25-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25z" />
          </svg>
        </a>

        {/* AI Travel Assistant Trigger Button */}
        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Voyagrie AI Travel Concierge"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#173B32] via-[#092B25] to-[#BE6543] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-108 active:scale-95 cursor-pointer ring-2 ring-white/50"
        >
          {/* Tooltip on Left */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#152F29] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md pointer-events-none">
            Voyagrie AI Assistant
          </span>

          {/* Sparkles / Bot Icon */}
          {chatOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#F8F3E8] animate-pulse" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#BE6543] ring-2 ring-white" />
            </div>
          )}
        </button>
      </div>

      {/* Interactive AI Chat Window Modal */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[550px] max-h-[80vh] rounded-[28px] bg-[#FFFCF5] border border-[#DCD4C6] shadow-[0_20px_60px_rgba(21,47,41,0.25)] flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#173B32] via-[#092B25] to-[#173B32] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#C8A66A]" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-[#173B32]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide flex items-center gap-1.5">
                  Voyagrie AI Concierge
                </span>
                <span className="text-[10px] text-white/70 font-medium">
                  Instant Luxury Trip Planning
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F7F4EC]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 rounded-full bg-[#173B32] text-white flex items-center justify-center shrink-0 text-xs">
                    <Bot className="w-4 h-4 text-[#C8A66A]" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                    msg.sender === "user"
                      ? "bg-[#173B32] text-white rounded-tr-xs"
                      : "bg-white text-[#152F29] border border-[#DCD4C6]/80 rounded-tl-xs"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Optional Interactive Action Link */}
                  {msg.action && (
                    <button
                      type="button"
                      onClick={() => handleActionClick(msg.action!.target)}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BE6543] hover:bg-[#a85738] text-white text-[11px] font-semibold transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#BE6543] text-white flex items-center justify-center shrink-0 text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-[#686B64] pt-1">
                <div className="w-6 h-6 rounded-full bg-[#173B32] text-white flex items-center justify-center text-[10px]">
                  <Bot className="w-3.5 h-3.5 text-[#C8A66A]" />
                </div>
                <div className="flex gap-1 bg-white p-2.5 rounded-xl border border-[#DCD4C6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE6543] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3.5 py-2 bg-white border-t border-[#EEE8DC] overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-full bg-[#F7F4EC] hover:bg-[#EEE8DC] text-[#152F29] text-[11px] font-medium whitespace-nowrap transition-colors border border-[#DCD4C6] cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-[#EEE8DC] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about destinations, itineraries..."
              className="flex-1 h-10 px-3.5 rounded-xl bg-[#F7F4EC] border border-[#DCD4C6] text-xs font-medium text-[#152F29] placeholder:text-[#686B64]/70 focus:outline-none focus:border-[#BE6543] transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              aria-label="Send message"
              className="w-10 h-10 rounded-xl bg-[#173B32] hover:bg-[#092B25] disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

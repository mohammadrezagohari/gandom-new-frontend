"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AiOutlineCheck, AiOutlineClose, AiOutlineExclamation } from "react-icons/ai"

const FeedbackContext = createContext(null)

export function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const showFeedback = useCallback((options) => {
    setFeedback({
      type: options.type || "info",
      title: options.title || "",
      message: options.message || "",
    })
  }, [])
  const closeFeedback = useCallback(() => setFeedback(null), [])

  return (
    <FeedbackContext.Provider value={{ showFeedback, closeFeedback }}>
      {children}
      {mounted && feedback && createPortal(
        <FeedbackDialog feedback={feedback} onClose={closeFeedback} />,
        document.body
      )}
    </FeedbackContext.Provider>
  )
}

export function useFeedback() {
  const context = useContext(FeedbackContext)
  if (!context) throw new Error("useFeedback must be used inside FeedbackProvider")
  return context
}

function FeedbackDialog({ feedback, onClose }) {
  const successful = feedback.type === "success"

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [onClose])

  return (
    <div
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      className="fixed inset-0 z-[200] grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
    >
      <section
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        className="relative w-full max-w-md overflow-hidden rounded-[2rem] bg-white p-6 text-start shadow-2xl sm:p-8"
      >
        <div className={`absolute inset-x-0 top-0 h-1.5 ${successful ? "bg-emerald-500" : "bg-amber-500"}`} />
        <button type="button" onClick={onClose} aria-label="Close" className="absolute end-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200">
          <AiOutlineClose />
        </button>
        <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl text-2xl ${successful ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
          {successful ? <AiOutlineCheck /> : <AiOutlineExclamation />}
        </div>
        <h2 id="feedback-title" className="pe-10 text-xl font-bold text-gray-900">{feedback.title}</h2>
        <p className="mt-3 whitespace-pre-line leading-7 text-gray-600">{feedback.message}</p>
        <button type="button" onClick={onClose} className="mt-7 w-full rounded-xl bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800">
          {successful ? "متوجه شدم / Got it" : "بازگشت / Back"}
        </button>
      </section>
    </div>
  )
}

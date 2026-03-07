import { useState, useEffect } from 'react'

export const useTypewriter = (words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(text.slice(0, -1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex((wordIndex + 1) % words.length)
        }
      } else {
        const nextText = currentWord.slice(0, text.length + 1)
        setText(nextText)
        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return text
}

export default useTypewriter

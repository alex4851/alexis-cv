import { motion } from "framer-motion";

export default function AnimatedText({ text }) {
  return (
    <span>
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            marginRight: "0.25em"
          }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (wordIndex * 0.2) + charIndex * 0.03,
                duration: 0.1
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

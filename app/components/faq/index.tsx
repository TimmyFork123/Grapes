export function FAQ() {
  const faqs = [
    {
      question: "How do I play Block Blast?",
      answer: "Simply click on groups of two or more adjacent blocks of the same color to clear them from the board. The more blocks you match, the higher your score. Create combos for bonus points!"
    },
    {
      question: "Is Block Blast free to play?",
      answer: "Yes! Block Blast is completely free to play online. No downloads or in-app purchases required - just open and start playing!"
    },
    {
      question: "Can I play Block Blast offline?",
      answer: "Block Blast is a browser-based game that requires an internet connection for the best experience. This ensures you can save your high scores and compete with other players."
    },
    {
      question: "How do I create combos?",
      answer: "Chain multiple matches together quickly to create powerful combo effects. The larger your combinations, the more points you'll earn. Look for opportunities to clear multiple groups at once!"
    },
    {
      question: "Are there different game modes?",
      answer: "Currently Block Blast features the classic mode where you match blocks to score points. We're working on adding more exciting modes in future updates!"
    },
    {
      question: "How does the scoring system work?",
      answer: "You earn points based on the number of blocks cleared in each move. Larger groups and combos multiply your score. Try to clear as many blocks as possible in a single move!"
    },
    {
      question: "Can I compete with friends?",
      answer: "Yes! Challenge your friends by sharing your high scores. Try to climb the leaderboard and become the ultimate Block Blast champion!"
    },
    {
      question: "Are there any power-ups?",
      answer: "Special power-ups appear when you create large matches or combos. Use them strategically to clear difficult block arrangements and score big points!"
    },
    {
      question: "Is there a time limit?",
      answer: "No time limits! Take your time to plan your moves and develop strategies. Block Blast is designed to be both challenging and relaxing."
    },
    {
      question: "What should I do if I get stuck?",
      answer: "Look for matches at the bottom of the board first. Creating matches lower down can trigger chain reactions and open up new possibilities. If no moves are available, the board will automatically refresh."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-200">
            Everything you need to know about Block Blast
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all hover:scale-[1.01] duration-200"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-xl font-bold text-[#FFD700] mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-200">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="p-6 rounded-xl transition-all hover:scale-[1.01] duration-200"
      style={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#FFD700]/20 text-[#FFD700] rounded-xl flex items-center justify-center text-xl font-bold">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#FFD700] mb-2">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function HowToPlay() {
  const steps = [
    {
      title: "Match & Blast Blocks",
      description: "Start your Block Blast journey by clicking groups of 2+ matching blocks. The more blocks you blast together, the higher your score!"
    },
    {
      title: "Create Epic Block Blast Combos",
      description: "Chain multiple matches in Block Blast to trigger powerful combo effects. Watch as blocks cascade and create spectacular chain reactions!"
    },
    {
      title: "Master Special Power-ups",
      description: "Unlock special Block Blast power-ups by creating large matches. Use these strategic tools to clear challenging block arrangements."
    },
    {
      title: "Complete Block Blast Challenges",
      description: "Each level in Block Blast offers unique objectives - clear specific colored blocks, reach target scores, or create massive combos!"
    }
  ];

  return (
    <section id="how-to-play" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              How to Play Block Blast
            </h2>
            <p className="text-xl text-gray-200">
              Master these simple steps to become a Block Blast champion
            </p>
          </div>

          <div className="grid gap-6">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          <div className="mt-12">
            <div className="p-6 rounded-xl"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-xl font-bold text-[#FFD700] mb-4">
                Pro Block Blast Tips
              </h3>
              <ul className="text-gray-200 space-y-2">
                <li>• Start from the bottom in Block Blast to create better chain reactions</li>
                <li>• Look for opportunities to combine multiple Block Blast power-ups</li>
                <li>• Plan your moves ahead to maximize your Block Blast score</li>
                <li>• Practice timing your Block Blast combos for maximum effect</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

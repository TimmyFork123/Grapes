import { 
  Gamepad2,
  Trophy,
  Users,
  Sparkles,
  Brain,
  Rocket
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl transition-all hover:scale-105 duration-200"
      style={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <div className="w-6 h-6 bg-[#FF7F50] rounded" />,
      title: "Simple & Addictive",
      description: "Match blocks of the same color to clear them and score points.",
      color: "bg-[#FF7F50]/20"
    },
    {
      icon: <div className="w-6 h-6 bg-[#9B59B6] rounded" />,
      title: "Score Challenge",
      description: "Compete for high scores and earn achievements.",
      color: "bg-[#9B59B6]/20"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Rankings",
      description: "Compare your scores with players worldwide on our global leaderboards.",
      color: "bg-[#2ECC71]"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Power-Ups",
      description: "Unlock special power-ups and combos to clear blocks more effectively and boost your score.",
      color: "bg-[#FFD700]"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strategic Gameplay",
      description: "Plan your moves carefully! Create larger combinations for bigger rewards and chain reactions.",
      color: "bg-[#9B59B6]"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Progressive Challenge",
      description: "Face increasingly difficult levels with new block patterns and time challenges.",
      color: "bg-[#2ECC71]"
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Game Features
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the most addictive block-matching puzzle game of 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

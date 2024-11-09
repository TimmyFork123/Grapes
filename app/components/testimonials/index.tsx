import Image from "next/image";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  playTime?: string;
}

function TestimonialCard({ content, author, role, rating, playTime }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-xl transition-all hover:scale-[1.01] duration-200"
      style={{ 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-[#FFD700]" : "text-gray-600"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-200 mb-6">&ldquo;{content}&rdquo;</p>
      <div className="flex items-center">
        <div className="ml-4">
          <h4 className="text-[#FFD700] font-bold">{author}</h4>
          <p className="text-gray-300">{role}</p>
        </div>
      </div>
      {playTime && <div className="mt-4 text-gray-200">{playTime}</div>}
    </div>
  );
}

function OverallRating() {
  return (
    <div className="p-8 rounded-xl mb-12 max-w-md mx-auto text-center"
      style={{ 
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="text-[#FFD700] text-6xl font-bold mb-2">4.9</div>
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-8 h-8 text-[#FFD700]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div className="text-gray-200 mb-4">Based on 125,840 Block Blast player reviews</div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-[#FFD700] mb-1">1M+</div>
          <div className="text-gray-200">Active Players</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-[#FFD700] mb-1">4.2M</div>
          <div className="text-gray-200">Games Played</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      content: "Block Blast is my daily brain exercise! The combo system is so satisfying, and I love how the difficulty gradually increases. Perfect for quick gaming sessions!",
      author: "Sarah J.",
      role: "Block Blast Enthusiast",
      rating: 5,
      playTime: "300+ hours"
    },
    {
      content: "As a puzzle game veteran, Block Blast stands out with its polished mechanics and addictive gameplay. The power-ups add a great strategic layer!",
      author: "Michael C.",
      role: "Pro Block Blast Player",
      rating: 5,
      playTime: "500+ hours"
    },
    {
      content: "Block Blast perfectly balances casual fun with strategic depth. I've gotten my whole family hooked on it - even my mom plays daily!",
      author: "Emma W.",
      role: "Casual Gamer",
      rating: 5,
      playTime: "150+ hours"
    },
    {
      content: "The most addictive puzzle game I've played this year! Block Blast's combo system keeps me coming back for higher scores every day.",
      author: "David R.",
      role: "Competitive Player",
      rating: 5,
      playTime: "400+ hours"
    },
    {
      content: "Love how Block Blast works perfectly on mobile. The touch controls are smooth, and the quick matches fit perfectly into my busy schedule.",
      author: "Lisa K.",
      role: "Mobile Gamer",
      rating: 5,
      playTime: "200+ hours"
    },
    {
      content: "Block Blast's weekly challenges add a great competitive element. The community is friendly, and comparing scores with friends is super fun!",
      author: "James T.",
      role: "Social Gamer",
      rating: 5,
      playTime: "250+ hours"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Block Blast Player Reviews
          </h2>
          <p className="text-xl text-gray-200">
            Join millions of happy Block Blast players worldwide
          </p>
        </div>

        <OverallRating />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-200">
            <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Reviews verified by Block Blast Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}

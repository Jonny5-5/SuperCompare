import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Super Compare
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Build your perfect computer and compare performance metrics instantly
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Select Components"
            description="Choose from CPUs, GPUs, RAM, and storage options"
            icon="🖥️"
          />
          <FeatureCard
            title="Instant Analysis"
            description="Get real-time performance scores for your build"
            icon="⚡"
          />
          <FeatureCard
            title="Compare Results"
            description="See detailed breakdowns of each component's impact"
            icon="📊"
          />
        </div>

        {/* CTA Button */}
        <Link
          href="/compare"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
        >
          Start Building →
        </Link>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This tool helps you understand your computer's performance potential
        </p>
      </div>
    </main>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import HeroSection from '@/components/HeroSection';
import DemoSection from '@/components/DemoSection'; // updated DemoSection
import FeaturesSection from '@/components/FeaturesSection';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-bg text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Demo Section - AI Detection */}
        <DemoSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-border/20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Space Safety AI - Hackathon Demo Project
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

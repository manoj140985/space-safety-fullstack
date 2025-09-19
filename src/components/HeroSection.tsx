const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 animate-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in-up">
            Space Safety AI
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Real-time Safety Object Detection
          </div>
        </div>
        <p className="text-lg md:text-xl text-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Upload an image. Detect helmets, tools, and hazards in seconds.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

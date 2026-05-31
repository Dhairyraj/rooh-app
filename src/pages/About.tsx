import { Helmet } from 'react-helmet-async';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>Our Story | Rooh</title>
        <meta name="description" content="Learn why we built Rooh to help couples create unforgettable digital memories together." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-gold-100 mb-8 text-center">Our Story</h1>
          
          <div className="prose prose-invert prose-lg max-w-none text-plum-200">
            <p className="lead text-xl text-plum-100 mb-8">
              We started Rooh because we realized something terrifying: we were spending more time scrolling next to each other than looking at each other.
            </p>
            
            <p className="mb-6">
              When you've been together for a while, the conversation shifts from dreams and fears to logistics and routines. "Did you pay the bill?" replaces "What are you most afraid of right now?" The intimacy doesn't disappear; it just gets buried under the weight of everyday life.
            </p>
            
            <h2 className="text-2xl font-serif text-gold-50 mt-12 mb-6">The Breaking Point</h2>
            
            <p className="mb-6">
              One evening, after a particularly long week, we sat in silence for two hours. We loved each other, but we didn't know what to talk about anymore. That night, we stumbled upon Arthur Aron's famous 36 Questions. We poured a glass of wine, put our phones in another room, and started reading them to each other.
            </p>
            
            <p className="mb-6">
              By question 12, we were having a conversation we hadn't had in years. By question 36, we felt like we were on our first date again. It was profound, emotional, and deeply reconnecting.
            </p>
            
            <h2 className="text-2xl font-serif text-gold-50 mt-12 mb-6">The Birth of Rooh</h2>
            
            <p className="mb-6">
              We wanted to capture that magic. We wanted to build a sanctuary where couples could go to intentionally disconnect from the world and reconnect with each other. A place that guided them through psychological frameworks designed to foster vulnerability.
            </p>
            
            <p className="mb-6">
              More importantly, we wanted to save those moments. Memories fade. The answers to those beautiful questions get forgotten. That's why we built the capability to turn your deepest conversations into a permanent, private digital memory capsule. 
            </p>
            
            <p className="text-xl italic text-gold-200 mt-12 text-center border-t border-plum-800 pt-12">
              "Where souls meet, stories begin."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Card } from '../../components/ui/Card';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "We've been together for 5 years, but playing the 36 Questions on Rooh made it feel like our third date again. It was pure magic.",
      author: "Priya & Rahul",
      location: "Mumbai"
    },
    {
      quote: "I bought the Eternal tier for our anniversary. The website it generated was so beautiful, she literally cried when she saw it.",
      author: "Karan",
      location: "Delhi"
    },
    {
      quote: "We thought we knew everything about each other. The Compatibility engine proved us wrong in the best way possible.",
      author: "Ananya & Dev",
      location: "Bangalore"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-plum-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-gold-100 mb-6">Real Couples, Real Magic</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between p-8 bg-plum-800/80 border-plum-700/50">
                <div className="mb-6 text-gold-400">
                  <svg className="w-8 h-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-plum-100 italic mb-8 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <div className="font-serif font-medium text-gold-200">{testimonial.author}</div>
                  <div className="text-xs text-plum-400">{testimonial.location}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

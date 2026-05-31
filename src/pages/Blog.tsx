import { Helmet } from 'react-helmet-async';
import { Card } from '../components/ui/Card';
import { ArrowRight } from 'lucide-react';

export const Blog = () => {
  const articles = [
    {
      title: "36 Questions to Ask Your Partner for Deeper Intimacy",
      excerpt: "Arthur Aron's famous psychological study proven to accelerate vulnerability and connection in relationships.",
      date: "Oct 12, 2023"
    },
    {
      title: "How to Improve Communication in Marriage Without Therapy",
      excerpt: "Practical, game-based frameworks to break out of routine and start talking about what actually matters.",
      date: "Oct 28, 2023"
    },
    {
      title: "The 5 Love Languages Explained: A Practical Guide for Couples",
      excerpt: "Stop guessing how your partner wants to be loved. Learn how to identify and speak their primary love language.",
      date: "Nov 05, 2023"
    },
    {
      title: "Why Digital Anniversary Gifts Are Replacing Traditional Presents",
      excerpt: "Flowers wilt. Chocolates are eaten. Discover why couples are shifting toward permanent digital memory capsules.",
      date: "Nov 18, 2023"
    },
    {
      title: "100 Deep Questions for Couples to Ask Before Getting Married",
      excerpt: "From finances to family planning, the ultimate compatibility checklist every couple needs to discuss.",
      date: "Dec 02, 2023"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Relationship Advice & Insights | Rooh Blog</title>
        <meta name="description" content="Expert articles on improving communication in marriage, 36 questions to fall in love, love languages, and relationship intimacy." />
      </Helmet>
      
      <div className="min-h-screen bg-plum-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-gold-100 mb-4">Insights & Stories</h1>
            <p className="text-plum-300 text-lg">Thoughts on love, connection, and the psychology of relationships.</p>
          </div>
          
          <div className="space-y-6">
            {articles.map((article, i) => (
              <Card key={i} className="p-8 hover:border-gold-500/50 transition-colors cursor-pointer group">
                <div className="text-xs text-gold-500/80 mb-3 font-medium uppercase tracking-widest">{article.date}</div>
                <h2 className="text-2xl font-serif text-gold-50 mb-4 group-hover:text-gold-200 transition-colors">{article.title}</h2>
                <p className="text-plum-200 mb-6 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center text-sm font-medium text-gold-400">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

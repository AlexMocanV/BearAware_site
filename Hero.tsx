import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [counts, setCounts] = useState({ sightings: 0, accuracy: 0, hikers: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        sightings: prev.sightings < 1200 ? prev.sightings + 20 : 1200,
        accuracy: prev.accuracy < 98 ? prev.accuracy + 2 : 98,
        hikers: prev.hikers < 500 ? prev.hikers + 10 : 500,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative py-24 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzE2YTM0YSIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-brand-green via-green-600 to-brand-green bg-clip-text text-transparent">
                BearAware Romania
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-semibold text-gray-700">
              <span className="text-4xl">🐻</span>
              <span>AI-Powered Wildlife Monitoring</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-subtle-text max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Protecting communities and conserving wildlife through cutting-edge detection technology in the Carpathian Mountains
          </motion.p>

          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { icon: '📊', value: counts.sightings, suffix: '+', label: 'Bear sightings monitored across Romania this year', color: 'from-green-400 to-green-600' },
              { icon: '🎯', value: counts.accuracy, suffix: '%', label: 'State-of-the-art AI ensures reliability', color: 'from-blue-400 to-blue-600' },
              { icon: '👥', value: counts.hikers, suffix: '+', label: 'Hikers and locals protected daily', color: 'from-purple-400 to-purple-600' },
              { icon: '🔄', value: '24/7', suffix: '', label: 'Continuous surveillance for your safety', color: 'from-orange-400 to-orange-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-green-100"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-sm text-subtle-text leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

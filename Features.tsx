import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: 'Real-time Detection',
    description: 'Instant bear detection using YOLOv8 neural networks with 98% accuracy rate.',
  },
  {
    icon: '📍',
    title: 'GPS Tracking',
    description: 'Live location tracking and movement pattern analysis for bear populations.',
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description: 'Automated notifications via Firebase to hikers and local communities.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description: 'Comprehensive analytics dashboard for conservation research and insights.',
  },
  {
    icon: '🌐',
    title: 'Cloud Integration',
    description: 'Scalable cloud infrastructure for processing thousands of video streams.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'End-to-end encryption ensuring data privacy and system security.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Powerful <span className="text-brand-green">Features</span>
          </h2>
          <p className="text-lg text-subtle-text max-w-3xl mx-auto">
            Advanced technology designed to protect both humans and wildlife in the Carpathian Mountains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-dark-text mb-3">{feature.title}</h3>
              <p className="text-subtle-text leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

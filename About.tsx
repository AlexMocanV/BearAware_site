import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: '🐻', value: '6,000+', label: 'Brown bears in Romania—Europe\'s largest population' },
    { icon: '⚠️', value: '50-100', label: 'Bears lost annually to human-wildlife conflict' },
    { icon: '✅', value: '70%', label: 'Potential reduction in incidents with early warning systems' }
  ];

  const goals = [
    {
      icon: '📹',
      title: 'Real-Time Detection',
      description: 'Deploy AI-powered camera networks across high-traffic areas in the Carpathian Mountains to detect bears in real-time. Our goal is to provide instant alerts to hikers, residents, and authorities, preventing dangerous encounters before they occur.'
    },
    {
      icon: '📱',
      title: 'Mobile Accessibility',
      description: 'Provide free, accessible mobile applications that put safety information directly in the hands of hikers, tourists, and local residents. Education and awareness are our most powerful tools for preventing conflicts.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Collect valuable data on bear behavior, movement patterns, and habitat use to support evidence-based conservation policies. Our system generates insights that help researchers and policymakers make informed decisions.'
    },
    {
      icon: '🌲',
      title: 'Habitat Protection',
      description: 'Protect Romania\'s brown bear population and their habitat by reducing human-wildlife conflict. Fewer conflicts mean fewer bears killed in defense, allowing populations to thrive naturally in their mountain home.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-dark-text mb-6">
            Building bridges between{' '}
            <span className="text-brand-green">technology, wildlife, and communities</span>
          </h2>
          <p className="text-xl text-subtle-text leading-relaxed">
            A future where humans and wildlife coexist harmoniously, supported by intelligent technology that protects both communities and ecosystems.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-blue-50 p-10 rounded-3xl shadow-lg"
          >
            <h3 className="text-3xl font-bold text-dark-text mb-6">Our Story</h3>
            <div className="space-y-4 text-lg text-subtle-text leading-relaxed">
              <p>
                <strong className="text-brand-green">BearAware Romania was founded in 2023</strong> in response to increasing human-wildlife conflicts in the Carpathian Mountains. What started as a research project has evolved into a comprehensive conservation technology platform that combines artificial intelligence, real-time monitoring, and community engagement to create safer outcomes for both people and bears.
              </p>
              <p>
                Our work addresses a critical challenge: <strong>Romania is home to Europe's largest brown bear population, with over 6,000 individuals.</strong> While these magnificent creatures are vital to the ecosystem, expanding human settlements and recreational activities have led to more frequent encounters, sometimes with tragic consequences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-dark-text mb-12">The Challenge We Face</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-xl border-2 border-brand-green text-center"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-brand-green mb-2">{stat.value}</div>
                <p className="text-subtle-text">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Goals */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-dark-text mb-12"
          >
            Our Roadmap for Creating Lasting Impact
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{goal.icon}</div>
                <h4 className="text-2xl font-bold text-dark-text mb-3">{goal.title}</h4>
                <p className="text-subtle-text leading-relaxed">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

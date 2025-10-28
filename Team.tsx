import { motion } from 'framer-motion';

const leadership = [
  {
    name: 'Dr. Elena Popescu',
    role: 'CEO & Wildlife Biologist',
    description: 'Leading conservation efforts with over 15 years of experience in Carpathian wildlife management. Dr. Popescu has dedicated her career to understanding and protecting Romania\'s brown bear population, publishing extensively on bear ecology and human-wildlife conflict resolution.',
    icon: '🐻',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    name: 'Dr. Alex Ionescu',
    role: 'CTO & AI Research Director',
    description: 'Pioneer in AI-powered wildlife detection systems with breakthrough computer vision research. Dr. Ionescu brings world-class machine learning expertise from his time at Google AI, where he developed algorithms now used in conservation projects worldwide.',
    icon: '🤖',
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    name: 'Maria Stanescu',
    role: 'Conservation Officer & Community Liaison',
    description: 'Bridging communities and conservation through education and sustainable coexistence programs. Maria\'s deep connection with local communities and fluency in multiple languages makes her instrumental in building trust and cooperation across the Carpathian region.',
    icon: '🤝',
    gradient: 'from-purple-400 to-pink-600'
  }
];

const team = [
  { name: 'Andrei Popescu', role: 'Lead Full-Stack Developer', icon: '💻' },
  { name: 'Sofia Ionescu', role: 'UX/UI Designer', icon: '🎨' },
  { name: 'Mihai Constantinescu', role: 'Data Scientist', icon: '📊' },
  { name: 'Ana Dumitrescu', role: 'Field Coordinator', icon: '🌲' },
  { name: 'Radu Georgescu', role: 'GIS Specialist', icon: '🗺️' },
  { name: 'Ioana Petrescu', role: 'Content Manager', icon: '✍️' }
];

const values = [
  { icon: '🎯', title: 'Conservation First', description: 'Every decision we make prioritizes wildlife conservation and human safety equally. We measure success not in profits, but in lives protected and ecosystems preserved.' },
  { icon: '🤝', title: 'Coexistence', description: 'We believe in coexistence—respecting both human needs and animal welfare. Our solutions seek harmony, not dominance over nature.' },
  { icon: '🔬', title: 'Scientific Excellence', description: 'Scientific rigor and cutting-edge technology drive everything we do. We hold ourselves to the highest standards of research and implementation.' },
  { icon: '🌍', title: 'Community Partnership', description: 'Local communities are our partners in conservation, not obstacles. We build solutions with people, not for them.' }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-dark-text mb-6">
            Meet Our <span className="text-brand-green">Expert Team</span>
          </h2>
          <p className="text-xl text-subtle-text max-w-4xl mx-auto leading-relaxed">
            Experts in wildlife conservation, AI technology, and community engagement working together to protect Romania's wildlife. We're a multidisciplinary team dedicated to creating innovative solutions for human-wildlife coexistence in Romania's Carpathian Mountains.
          </p>
        </motion.div>

        {/* Leadership */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-dark-text mb-12">Guiding BearAware's Mission</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all border border-green-100"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${leader.gradient} flex items-center justify-center text-4xl`}>
                  {leader.icon}
                </div>
                <h4 className="text-2xl font-bold text-dark-text mb-2 text-center">{leader.name}</h4>
                <p className="text-brand-green font-semibold mb-4 text-center">{leader.role}</p>
                <p className="text-subtle-text leading-relaxed text-center">{leader.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-dark-text mb-12">Our Core Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="text-5xl mb-3">{member.icon}</div>
                <p className="font-bold text-dark-text text-sm mb-1">{member.name}</p>
                <p className="text-xs text-subtle-text">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-dark-text mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-dark-text mb-3">{value.title}</h4>
                <p className="text-sm text-subtle-text leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

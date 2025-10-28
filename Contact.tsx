import { motion } from 'framer-motion';

const Contact = () => {
  const callToAction = [
    {
      icon: '💻',
      title: 'Developers',
      desc: 'Contribute to our AI detection system and mobile app',
      link: 'https://github.com/mareluca675/bear-detection-system'
    },
    {
      icon: '🔬',
      title: 'Researchers',
      desc: 'Collaborate on conservation research and studies',
      link: '#docs'
    },
    {
      icon: '🌍',
      title: 'Conservationists',
      desc: 'Join our mission to protect Romania\'s wildlife',
      link: '#about'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-brand-green to-emerald-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Help us protect Romania's wildlife and communities. Whether you're a developer, researcher, or conservation enthusiast, there's a place for you in our mission.
          </p>
        </motion.div>

        {/* Call to Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {callToAction.map((cta, index) => (
            <motion.a
              key={index}
              href={cta.link}
              target={cta.link.startsWith('http') ? '_blank' : '_self'}
              rel={cta.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/15 backdrop-blur-md p-8 rounded-2xl text-center hover:bg-white/25 transition-all border border-white/20"
            >
              <div className="text-6xl mb-4">{cta.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{cta.title}</h3>
              <p className="text-green-100">{cta.desc}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg mb-6">Follow us for updates and news</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: '🐙', link: 'https://github.com/mareluca675/bear-detection-system', name: 'GitHub' },
              { icon: '📧', link: 'mailto:info@bearaware.ro', name: 'Email' },
              { icon: '🌐', link: '#home', name: 'Website' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl hover:opacity-80 transition-all"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

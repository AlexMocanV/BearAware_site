import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Detection System',
    icon: '🤖',
    subtitle: 'YOLOv8-powered Computer Vision',
    description: 'Real-time bear identification in video streams. Designed for edge deployment in remote locations with minimal infrastructure.',
    features: [
      { icon: '📹', text: 'Real-time video processing' },
      { icon: '🎯', text: '98% accuracy detection' },
      { icon: '⚡', text: 'Low-latency processing' },
      { icon: '🔧', text: 'Configurable thresholds' }
    ],
    specs: [
      { label: 'Best Model', value: 'yolov8x', color: 'green' },
      { label: 'GPU FPS', value: '35', color: 'blue' },
      { label: 'Accuracy', value: 'Highest', color: 'purple' }
    ],
    link: 'https://github.com/mareluca675/bear-detection-system'
  },
  {
    title: 'Mobile App',
    icon: '📱',
    subtitle: 'React-based User Platform',
    description: 'Real-time alerts, interactive maps, and educational resources for hikers and outdoor enthusiasts.',
    features: [
      { icon: '🔔', text: 'Push notifications' },
      { icon: '🗺️', text: 'Interactive maps' },
      { icon: '📊', text: 'Live tracking' },
      { icon: '📚', text: 'Educational content' }
    ],
    specs: [
      { label: 'Built with', value: 'React/Next.js', color: 'blue' },
      { label: 'Database', value: 'Firebase', color: 'orange' },
      { label: 'Status', value: 'Live', color: 'green' }
    ],
    link: 'https://github.com/mareluca675/bear-detection-app'
  }
];

const modelComparison = [
  { model: 'yolov8n', fps_gpu: 140, fps_cpu: 35, accuracy: 'Good' },
  { model: 'yolov8s', fps_gpu: 100, fps_cpu: 20, accuracy: 'Better' },
  { model: 'yolov8m', fps_gpu: 60, fps_cpu: 12, accuracy: 'High' },
  { model: 'yolov8x', fps_gpu: 35, fps_cpu: 6, accuracy: 'Highest' }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-dark-text mb-6">
            Our <span className="text-brand-green">Technology Stack</span>
          </h2>
          <p className="text-xl text-subtle-text max-w-4xl mx-auto">
            AI-powered detection meets user-friendly mobile access. Two core systems working seamlessly together to protect both humans and wildlife.
          </p>
        </motion.div>

        {/* Main Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl overflow-hidden transition-all"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-green to-emerald-600 p-8">
                <div className="text-6xl mb-4">{project.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-green-100">{project.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-subtle-text mb-6 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-dark-text mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 p-2 bg-green-50 rounded-lg"
                      >
                        <span className="text-2xl mt-1">{feature.icon}</span>
                        <span className="text-sm text-subtle-text font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex gap-3 flex-wrap">
                    {project.specs.map((spec, i) => (
                      <div key={i} className={`px-4 py-2 rounded-full text-white text-sm font-bold bg-${spec.color}-500`}>
                        <span className="block text-xs opacity-90">{spec.label}</span>
                        {spec.value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-brand-green text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition-all"
                >
                  View on GitHub <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Model Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-dark-text mb-10">YOLO Model Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-green">
                  <th className="text-left py-4 px-6 font-bold text-dark-text">Model</th>
                  <th className="text-center py-4 px-6 font-bold text-dark-text">GPU FPS</th>
                  <th className="text-center py-4 px-6 font-bold text-dark-text">CPU FPS</th>
                  <th className="text-center py-4 px-6 font-bold text-dark-text">Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {modelComparison.map((model, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-200 hover:bg-green-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-bold text-dark-text">{model.model}</td>
                    <td className="text-center py-4 px-6">
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">{model.fps_gpu}</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold">{model.fps_cpu}</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="bg-green-100 text-brand-green px-4 py-2 rounded-full font-bold">{model.accuracy}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

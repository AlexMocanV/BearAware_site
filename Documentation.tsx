import { motion } from 'framer-motion';
import { useState } from 'react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: 'Detection System Setup',
      icon: '🤖',
      content: `# Clone the repository
git clone https://github.com/mareluca675/bear-detection-system.git
cd bear-detection-system

# Install dependencies
pip install -r requirements.txt

# Download YOLOv8 model
python setup_script.py

# Run with webcam
python bear_detection.py

# Run with video file
python bear_detection.py --source path/to/video.mp4

# Run with custom camera
python bear_detection.py --source 1

# Run headless (no display)
python bear_detection.py --no-display`,
      subsections: [
        { title: '--source', desc: 'Video source (0, 1, 2 for cameras or file path)', default: '0' },
        { title: '--model', desc: 'YOLO model file', default: 'yolov8x.pt' },
        { title: '--confidence', desc: 'Detection confidence threshold (0-1)', default: '0.5' },
        { title: '--camera-lat', desc: 'Camera latitude', default: '45.5231' },
        { title: '--camera-lng', desc: 'Camera longitude', default: '-122.6765' }
      ]
    },
    {
      title: 'Mobile App Setup',
      icon: '📱',
      content: `# Clone the repository
git clone https://github.com/mareluca675/bear-detection-app.git
cd bear-detection-app

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build`,
      subsections: [
        { title: 'Features', desc: 'Push notifications, interactive maps, live tracking, educational content', default: '4' },
        { title: 'Database', desc: 'Firebase integration for real-time data', default: 'Realtime' },
        { title: 'Deploy', desc: 'Firebase Hosting deployment', default: 'Cloud' }
      ]
    },
    {
      title: 'API Reference',
      icon: '🔌',
      content: `# Submit a new bear detection alert
POST https://your-app.firebaseapp.com/api/alerts/bear

{
  "latitude": 45.5231,
  "longitude": -122.6765,
  "confidence": 0.85,
  "timestamp": 1701439200000,
  "source": "camera_01",
  "threatLevel": "MEDIUM"
}

# Response
{
  "success": true,
  "alertId": "abc123def456",
  "message": "Alert submitted successfully"
}`,
      subsections: [
        { title: 'Authentication', desc: 'Firebase API key required', default: 'API Key' },
        { title: 'Rate Limit', desc: '1000 requests per minute', default: '1000/min' },
        { title: 'Response', desc: 'JSON format with alert details', default: 'JSON' }
      ]
    }
  ];

  const appFeatures = [
    { icon: '🔔', title: 'Instant Notifications', desc: 'Push alerts when bears detected in your area' },
    { icon: '🗺️', title: 'Live Maps', desc: 'Bear locations and danger zones on topographic maps' },
    { icon: '📍', title: 'Community Reports', desc: 'Submit and view bear sightings from the community' },
    { icon: '📚', title: 'Education', desc: 'Learn about bear behavior and encounter prevention' }
  ];

  return (
    <section id="docs" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-dark-text mb-6">
            <span className="text-brand-green">Technical</span> Documentation
          </h2>
          <p className="text-xl text-subtle-text max-w-4xl mx-auto">
            Complete guides for developers and users to set up and use the BearAware system
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12 max-w-4xl mx-auto"
        >
          {sections.map((section, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                activeTab === index
                  ? 'bg-brand-green text-white shadow-lg'
                  : 'bg-gray-100 text-dark-text hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl">{section.icon}</span>
              {section.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={activeTab}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg mb-12">
            <pre className="bg-dark-text text-green-400 p-6 rounded-xl overflow-x-auto text-sm font-mono">
              {sections[activeTab].content}
            </pre>
          </div>

          {/* Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sections[activeTab].subsections.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-green"
              >
                <h4 className="font-bold text-dark-text mb-2">{sub.title}</h4>
                <p className="text-sm text-subtle-text mb-3">{sub.desc}</p>
                <code className="bg-gray-100 px-3 py-1 rounded text-brand-green text-xs font-mono">{sub.default}</code>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* App Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center text-dark-text mb-12">Mobile App Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-dark-text mb-2">{feature.title}</h4>
                <p className="text-sm text-subtle-text">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation;

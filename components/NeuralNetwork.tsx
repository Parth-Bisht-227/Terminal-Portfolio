
import React from 'react';
import { motion } from 'framer-motion';

const NeuralNetwork: React.FC = () => {
  const nodes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y) < 30) {
        connections.push({ from: nodes[i], to: nodes[j] });
      }
    }
  }

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <radialGradient id="nodeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#00F0FF00" />
        </radialGradient>
      </defs>

      {connections.map((conn, idx) => (
        <motion.line
          key={`conn-${idx}`}
          x1={conn.from.x}
          y1={conn.from.y}
          x2={conn.to.x}
          y2={conn.to.y}
          stroke="#00F0FF"
          strokeWidth="0.05"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {nodes.map((node) => (
        <React.Fragment key={node.id}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={node.size * 0.5}
            fill="#00F0FF"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Signal Pulse Effect */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={0}
            fill="none"
            stroke="#BC13FE"
            strokeWidth="0.1"
            animate={{ r: [0, node.size * 3], opacity: [0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        </React.Fragment>
      ))}
    </svg>
  );
};

export default NeuralNetwork;

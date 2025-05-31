
'use client';
import { motion } from 'framer-motion';

export default function VideoCard({ src, label }: { src: string; label: string }) {
  return (
    <motion.div
      className="bg-zinc-800/40 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      layout
    >
      <video
        src={src}
        controls
        preload="auto"
        className="w-full h-auto object-cover"
        style={{ aspectRatio: '16/9' }}
      />
      <div className="p-4 text-center">
        <h2 className="text-lg">{label}</h2>
      </div>
    </motion.div>
  );
}

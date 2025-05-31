
import VideoCard from '../components/VideoCard';
import RainBackground from '../components/RainBackground';

const videos = [
  {
    src: 'https://woss.883602.xyz/ZHFLIM_%E8%B0%83%E8%89%B2%E5%B1%95%E7%A4%BA_%E5%8D%AB.m4v',
    label: '调色展示',
  },
  {
    src: 'https://woss.883602.xyz/2025.04.03_L%26Z.mp4',
    label: '预告 1',
  },
  {
    src: 'https://woss.883602.xyz/2025.5.7_%E9%A2%84%E5%91%8A_v7.m4v',
    label: '预告 2',
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <RainBackground />
      <header className="absolute top-4 left-4 z-10">
        <h1 className="font-semibold text-xl tracking-widest select-none">ZHFLIM</h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 w-full px-8">
        {videos.map((v) => (
          <VideoCard key={v.src} src={v.src} label={v.label} />
        ))}
      </section>
    </main>
  );
}

import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FluidBackground } from '../components/FluidBackground';
import { CustomCursor } from '../components/CustomCursor';

export default function RootLayout() {
  return (
    <div className="relative min-h-screen bg-white">
      <FluidBackground />
      <CustomCursor />

      <div className="relative z-10">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
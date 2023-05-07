import Navbar from './components/Navbar';
import './styles/globals.scss';
import { UserExploreOptionProvider } from './context/store';
import 'animate.css';

export const metadata = {
  title: 'MDesigns Full Stack Solutions',
  description: 'Mdesigns Business Landing Page',
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <UserExploreOptionProvider>
          {children}
        </UserExploreOptionProvider>
      </body>
    </html>
  );
}

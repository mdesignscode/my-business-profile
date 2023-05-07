'use client';
import HomePage from './components/HomePage';
import 'animate.css';
import { useTextToSpeech } from './context/store';

export default function Home () {
  const setTextToSpeak = useTextToSpeech();

  return (
    <main>
      <HomePage setTextToSpeak={setTextToSpeak} />
    </main>
  );
}

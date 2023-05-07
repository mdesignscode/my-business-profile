'use client'

import { createContext, useEffect, useMemo, useState } from 'react';

export function useTextToSpeech() {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
  }, [])

  const femaleVoice = useMemo(() => {
    let femaleVoice;
    for (const voice of voices) {
      if (voice.name === 'English (America)+female5') {
        femaleVoice = voice;
        break;
      }
    }
    return femaleVoice;
  }, [voices]);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      if (femaleVoice) speech.voice = femaleVoice;
      speech.text = textToSpeak;
      window.speechSynthesis.speak(speech);
    } else {
      ;
    }
  }, [textToSpeak, femaleVoice]);

  return setTextToSpeak;
}

export const UserExploreOptionContext = createContext();

export const UserExploreOptionProvider = ({ children }) => {
  const [hasTakenTheTour, setHasTakenTheTour] = useState(false);

  return (
    <UserExploreOptionContext.Provider value={{ hasTakenTheTour, setHasTakenTheTour }}>
      {children}
    </UserExploreOptionContext.Provider>
  );
};

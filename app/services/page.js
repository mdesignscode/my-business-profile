'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/services.scss';
import Image from 'next/image';
import { useTextToSpeech, UserExploreOptionContext } from '../context/store';

// service packages
import Service0 from './components/service0';
import Service1 from './components/service1';
import Service2 from './components/service2';
import Service3 from './components/service3';
import Service4 from './components/service4';
import Service5 from './components/service5';
const serviceSlides = [
  Service0,
  Service1,
  Service2,
  Service3,
  Service4,
  Service5
];

export default function Services () {
  // writer pause time constants
  const COMMA_PAUSE = 300;
  const POINT_PAUSE = 1000;

  const setTextToSpeak = useTextToSpeech();

  // service slide
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [CurrentSlide, setCurrentSlide] = useState(<></>);

  const [sliderMarks, setSliderMarks] = useState([]);
  // create slider markers
  useEffect(() => {
    for (let index = 0; index < 6; index++) {
      const sliderMarker = <span
        className={index === 0 ? 'slider__mark_marker marker-active' : 'slider__mark_marker'}
        key={`marker_${index}`}
        onPointerDown={() => setCurrentSlideIndex(index)}
      />;
      setSliderMarks(prevSliderMarkers => [
        ...prevSliderMarkers, sliderMarker
      ]);
    }
  }, []);

  // set active marker and current slide
  useEffect(() => {
    // clear speech on slide change
    window.speechSynthesis.cancel();

    const markers = document.querySelectorAll('.slider__mark_marker');
    for (let index = 0; index < markers.length; index++) {
      const marker = markers[index];
      if (index === currentSlideIndex) {
        marker.classList.add('marker-active');
      } else {
        marker.classList.remove('marker-active');
      }
    }
    const ServiceSlide = serviceSlides[currentSlideIndex];
    setCurrentSlide(
      <ServiceSlide
        setTextToSpeak={setTextToSpeak}
        POINT_PAUSE={POINT_PAUSE}
        COMMA_PAUSE={COMMA_PAUSE}
        setAutoPlayIndex={setAutoPlayIndex}
      />
    );
  }, [currentSlideIndex, setTextToSpeak]);

  const { hasTakenTheTour } = useContext(UserExploreOptionContext);

  // self play all service packages
  const [autoPlayIndex, setAutoPlayIndex] = useState(0);
  useEffect(() => {
    if (hasTakenTheTour) {
      if (autoPlayIndex < 6) setCurrentSlideIndex(autoPlayIndex);
    }
  }, [autoPlayIndex, hasTakenTheTour]);

  return (
    <article className='service-page page'>

      <span className='navigate-services navigate-previous'>
        <Image
          src='/icons8-back-to-50.png'
          alt='show previous slide'
          width={50}
          height={50}
          onPointerDown={() => {
            if (currentSlideIndex === 0)
              setCurrentSlideIndex(5);
            else
              setCurrentSlideIndex(currentSlideIndex - 1);
          }}
        />
      </span>

      <div className='slider__container'>

        {CurrentSlide}

        <div className='slider__mark'>
          {sliderMarks}
        </div>
      </div>

      <span className='navigate-services navigate-next'>
        <Image
          src='/icons8-next-page-50.png'
          alt='show next slide'
          width={50}
          height={50}
          onPointerDown={() => {
            if (currentSlideIndex === 5)
              setCurrentSlideIndex(0);
            else
              setCurrentSlideIndex(currentSlideIndex + 1);
          }}
        />
      </span>
    </article>
  );
};

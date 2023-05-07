'use client';
import { useContext, useRef } from 'react';
import '../styles/home.scss';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { UserExploreOptionContext } from '../context/store';
import Link from 'next/link';

export default function HomePage ({ setTextToSpeak }) {
  const headline2 = '<span class="script">Let\'s bring your digital vision to life with custom web and software solutions tailored just for you</span>';

  const POINT_PAUSE = 600;

  const tourRef = useRef();
  const selfRef = useRef();

  const { setHasTakenTheTour } = useContext(UserExploreOptionContext);

  return (
    <header className='header'>
      <div className='hero_title'>
        <Typewriter
          options={{
            deleteSpeed: 1,
            delay: 35
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => setTextToSpeak("Hi, I'm Marlon Baatjes"))
              .typeString('<span class="heading">Hi,</span>')
              .typeString(
                "<span class='heading'> I'm Marlon Baatjes</span>"
              )
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak(
                "Let's bring your digital vision to life with custom web and software solutions tailored just for you"
              ))
              .typeString(headline2)
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                "Take a tour or explore my services on your own"
              ))
              .pauseFor(600)
              .callFunction(() => tourRef.current.classList.add('flip'))
              .pauseFor(1200)
              .callFunction(() => selfRef.current.classList.add('flip'))
              .start();
          }}
        />

        <div className='hero_title__buttons'>
          <Link href='/introduction'>
            <button
              ref={tourRef}
              onPointerDown={() => setHasTakenTheTour(true)}
            >
              Take the tour
            </button>
          </Link>

          <Link href='/introduction'>
            <button
              ref={selfRef}
            >
              Self Explore
            </button>
          </Link>
        </div>

      </div>

      <div className="hero_image">
        <Image
          src='/1907.i109.039.p.m004.c30.programming development isometric icons-02 [Converted].svg'
          alt='Illustration of software engineer'
          width={450}
          height={450}
        />
      </div>
    </header>
  );
};

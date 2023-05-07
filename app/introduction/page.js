'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/home.scss';
import Typewriter from 'typewriter-effect';
import { useTextToSpeech, UserExploreOptionContext } from '../context/store';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage () {
  const whyMe = "<span class='heading'>Why should you choose me?</span>";
  const offer = '<span class="heading">What I have to offer</span>';
  const setTextToSpeak = useTextToSpeech();

  const CHAR_DEL_PAUSE = 300;
  const POINT_PAUSE = 1000;

  const servicesRef = useRef();

  const { hasTakenTheTour } = useContext(UserExploreOptionContext);

  return (
    <article className='header'>
      <div className='hero_title'>

        <Typewriter
          options={{
            deleteSpeed: 1,
            delay: 50
          }}
          onInit={(typewriter) => {
            typewriter
              .callFunction(() => setTextToSpeak('Why should you choose me?'))
              .typeString(whyMe)
              .pauseFor(POINT_PAUSE)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak(
                'I bring a unique blend of expertise, innovation'
              ))
              .typeString('I bring a unique blend of expertise')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(9)
              .typeString('innovation')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(10)
              .callFunction(() => setTextToSpeak(
                'and personalized service to the world of web development.'
              ))
              .typeString(
                'personalized service to the world of web development.'
              )
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                'With my comprehensive skillset, including C, JavaScript, Python, Unix System Administration and more'
              ))
              .typeString('With my comprehensive skillset, including C')
              .pauseFor(CHAR_DEL_PAUSE + 100)
              .deleteChars(1)
              .typeString('JavaScript')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(10)
              .typeString('Python')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(6)
              .typeString('Unix System Administration and more, ')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                'I deliver top-notch web solutions that are tailored to your specific needs.'
              ))
              .typeString(
                'I deliver top-notch web solutions that are tailored to your specific needs.'
              )
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                'My attention to detail, and commitment to client satisfaction sets me apart from the competition.'
              ))
              .typeString('My attention to detail, and commitment to client satisfaction sets me apart from the competition.')
              .pauseFor(POINT_PAUSE)
              .deleteAll(1)
              .pauseFor(500)
              .callFunction(() => setTextToSpeak(
                'What I have to offer'
              ))
              .typeString(offer)
              .pauseFor(500)
              .typeString('<br/>')
              .callFunction(() => setTextToSpeak(
                'I offer a wide range of services to cater to your web development needs.'
              ))
              .typeString('I offer a wide range of services to cater to your web development needs.')
              .pauseFor(700)
              .callFunction(() => setTextToSpeak(
                'From custom web application development to e-commerce websites,'
              ))
              .typeString(
                'From custom web application development to e-commerce websites'
              )
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(19)
              .callFunction(() => setTextToSpeak(
                'web maintenance and support'
              ))
              .typeString('web maintenance and support')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(27)
              .callFunction(() => setTextToSpeak(
                'custom web design, I have you covered.'
              ))
              .typeString('custom web design, I have you covered.')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                'My solutions are designed to be responsive'
              ))
              .typeString(
                'My solutions are designed to be responsive'
              )
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(10)
              .callFunction(() => setTextToSpeak(
                'user-friendly'
              ))
              .typeString('user-friendly')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(13)
              .callFunction(() => setTextToSpeak(
                'and optimized for performance on all devices.'
              ))
              .typeString('optimized for performance on all devices.')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak('Whether you are a startup,'))
              .typeString('Whether you are a startup')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(7)
              .callFunction(() => setTextToSpeak('small business'))
              .typeString('small business')
              .pauseFor(CHAR_DEL_PAUSE)
              .deleteChars(14)
              .callFunction(() => setTextToSpeak('or enterprise'))
              .typeString('enterprise,')
              .pauseFor(POINT_PAUSE)
              .callFunction(() => setTextToSpeak(
                'I provide scalable and flexible solutions that align with your business goals.'
              ))
              .typeString(
                'I provide scalable and flexible solutions that align with your business goals.'
              )
              .pauseFor(POINT_PAUSE)
              .deleteAll(1)
              .pauseFor(500)
              .callFunction(() => setTextToSpeak(
                "Now let's further explore my services"
              ))
              .typeString(
                "Now let's further explore my services"
              )
              .callFunction(() => servicesRef.current.classList.add('flip'))
              .callFunction(() => {
                if (hasTakenTheTour) servicesRef.current.click();
              })
              .start();
          }}
        />

        <div className='hero_title__buttons'>
          <Link href='/services'>
            <button ref={servicesRef}>Services</button>
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
    </article>
  );
};

'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


export default function Service1 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">Custom Software Development</h1>';

  return (
    <section className='service__package'>
      <Typewriter
        options={{
          deleteSpeed: 1,
          cursor: '',
          delay: 40
        }}
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => setTextToSpeak(
              "Custom Software Development"
            ))
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I offer custom software development services tailored to your business needs."))
            .typeString("I offer custom software development services tailored to your business needs.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("With expertise in a range of programming languages and frameworks,"))
            .typeString(" With expertise in a range of programming languages and frameworks,")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I build fast, secure, and scalable software solutions."))
            .typeString(" I build fast")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(4)
            .typeString('secure')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(6)
            .typeString('scalable software solutions.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I will work closely with you to understand your goals"))
            .typeString(" I will work closely with you to understand your goals")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(21)
            .callFunction(() => setTextToSpeak("prioritize data security"))
            .typeString('prioritize data security')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(24)
            .callFunction(() => setTextToSpeak("and design an intuitive user experience."))
            .typeString('design an intuitive user experience.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak(
              "Let's work together to take your business to the next level."
            ))
            .typeString(
              " Let's work together to take your business to the next level."
            )
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(2))
            .start();
        }}
      />
      <Image
        src='/Idea applications_Isometric.svg'
        alt='Illustration representing an engineer providing solutions'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


export default function Service4 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">Technical Consulting and Architecture</h1>';

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
              "Technical Consulting and Architecture"
            ))
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("Navigating the ever-changing landscape of software development can be overwhelming."))
            .typeString("Navigating the ever-changing landscape of software development can be overwhelming.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("My technical consulting and architecture services can provide you with expert guidance and strategic planning to ensure that your software projects are successful."))
            .typeString(" My technical consulting and architecture services can provide you with expert guidance and strategic planning to ensure that your software projects are successful.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I can assess your business requirements"))
            .typeString(" I can assess your business requirements")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(33)
            .callFunction(() => setTextToSpeak("recommend the right technologies"))
            .typeString('recommend the right technologies')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(32)
            .callFunction(() => setTextToSpeak("and provide guidance on best practices for software development."))
            .typeString('provide guidance on best practices for software development.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("With my technical expertise,"))
            .typeString(' With my technical expertise,')
            .pauseFor(COMMA_PAUSE)
            .callFunction(() => setTextToSpeak("I can help you make informed decisions that align with your business goals."))
            .typeString(' I can help you make informed decisions that align with your business goals.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(5))
            .start();
        }}
      />
      <Image
        src='/IT Support_Isometric.svg'
        alt='Illustration representing IT support'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

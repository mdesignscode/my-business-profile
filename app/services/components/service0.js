'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Service0 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">Custom Web Development</h1>';

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
            .callFunction(() => {
              setTextToSpeak(
                "Custom Web Development"
              );
            })
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak(""))
            .typeString("")
            .pauseFor(COMMA_PAUSE)
            .callFunction(() => setTextToSpeak("My custom web development services are designed to create unique and engaging web applications that align with your business goals."))
            .typeString(" My custom web development services are designed to create unique and engaging web applications that align with your business goals.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I will work closely with you to understand your vision to design and develop a website that not only looks great but also performs seamlessly across different devices and browsers."))
            .typeString(" I will work closely with you to understand your vision to design and develop a website that not only looks great but also performs seamlessly across different devices and browsers.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("From front-end user interfaces to back-end functionalities,"))
            .typeString(" From front-end user interfaces to back-end functionalities,")
            .pauseFor(COMMA_PAUSE)
            .callFunction(() => setTextToSpeak(
              "I ensure that your website is built with the latest technologies and coding best practices."
            ))
            .typeString(
              " I ensure that your website is built with the latest technologies and coding best practices."
            )
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(1))
            .start();
        }}
      />
      <Image
        src='/Web Developer_Isometric.svg'
        alt='Illustration representing custom web development'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

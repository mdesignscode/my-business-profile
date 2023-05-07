'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


export default function Service2 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">API Development</h1>';

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
              "API Development"
            ))
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("APIs (Application Programming Interfaces) are crucial for connecting different software systems and enabling data exchange."))
            .typeString("APIs (Application Programming Interfaces) are crucial for connecting different software systems and enabling data exchange.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("My API development services can help you build custom APIs that meet your specific requirements."))
            .typeString(" My API development services can help you build custom APIs that meet your specific requirements.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("From RESTful to GraphQL, I can design and implement APIs that are scalable, secure, and well-documented."))
            .typeString(" From RESTful to GraphQL, I can design and implement APIs that are scalable")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(8)
            .typeString('secure')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(6)
            .typeString('well-documented.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("Whether you need APIs for integration with third-party services"))
            .typeString(" Whether you need APIs for integration with third-party services")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(20)
            .callFunction(() => setTextToSpeak("mobile apps"))
            .typeString('mobile apps')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(11)
            .callFunction(() => setTextToSpeak("or other internal systems"))
            .typeString('internal systems,')
            .pauseFor(COMMA_PAUSE)
            .callFunction(() => setTextToSpeak(
              "I can deliver reliable and efficient solutions"
            ))
            .typeString(
              " I can deliver reliable and efficient solutions"
            )
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(3))
            .start();
        }}
      />
      <Image
        src='/World Connection _Isometric.svg'
        alt='Illustration representing api development'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

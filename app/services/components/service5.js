'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


export default function Service5 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">Maintenance and Support</h1>';

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
              "Maintenance and Support"
            ))
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I understand that maintaining and updating software applications can be time-consuming and challenging."))
            .typeString("I understand that maintaining and updating software applications can be time-consuming and challenging.")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("That's why I offer maintenance and support services to ensure that your software is always up-to-date, secure, and performing at its best"))
            .typeString(" That's why I offer maintenance and support services to ensure that your software is always up-to-date")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(17)
            .typeString('secure')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(6)
            .typeString('performing at its best.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I can provide regular updates"))
            .typeString(' I can provide regular updates')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(15)
            .callFunction(() => setTextToSpeak("bug fixes"))
            .typeString('bug fixes')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(9)
            .callFunction(() => setTextToSpeak("and security patches to keep your software running smoothly."))
            .typeString('security patches to keep your software running smoothly.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I also offer technical support to help you troubleshoot issues"))
            .typeString(' I also offer technical support to help you troubleshoot issues')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(28)
            .callFunction(() => setTextToSpeak("provide guidance"))
            .typeString('provide guidance')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(16)
            .callFunction(() => setTextToSpeak("and ensure that your software remains operational with minimal downtime."))
            .typeString('ensure that your software remains operational with minimal downtime.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(6))
            .start();
        }}
      />
      <Image
        src='/Settings_Isometric.svg'
        alt='Illustration representing maintenance and support'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

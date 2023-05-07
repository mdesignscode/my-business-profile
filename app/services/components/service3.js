'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';


export default function Service3 ({
  setTextToSpeak,
  POINT_PAUSE,
  COMMA_PAUSE,
  setAutoPlayIndex
}) {
  const serviceHeadline = '<h1 class="service__package__title">E-commerce Development</h1>';
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
              "E-commerce Development"
            ))
            .typeString(serviceHeadline)
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("Looking to sell your products or services online?"))
            .typeString("Looking to sell your products or services online?")
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("My e-commerce development services can help you establish a robust online store that is secure, user-friendly, and optimized for conversions."))
            .typeString(" My e-commerce development services can help you establish a robust online store that is secure")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(6)
            .typeString('user-friendly')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(13)
            .typeString('optimized for conversions.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak("I have experience in developing e-commerce platforms with features such as product catalog management"))
            .typeString(" I have experience in developing e-commerce platforms with features such as product catalog management")
            .pauseFor(COMMA_PAUSE)
            .deleteChars(26)
            .callFunction(() => setTextToSpeak("shopping cart functionality"))
            .typeString('shopping cart functionality')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(27)
            .callFunction(() => setTextToSpeak("payment gateway integration"))
            .typeString('payment gateway integration')
            .pauseFor(COMMA_PAUSE)
            .deleteChars(27)
            .callFunction(() => setTextToSpeak("and order processing"))
            .typeString('order processing.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setTextToSpeak(
              "Whether you need a simple online store or a complex e-commerce solution,"
            ))
            .typeString(
              " Whether you need a simple online store or a complex e-commerce solution,"
            )
            .pauseFor(COMMA_PAUSE)
            .callFunction(() => setTextToSpeak("I can deliver a tailored solution that meets your business requirements."))
            .typeString(' I can deliver a tailored solution that meets your business requirements.')
            .pauseFor(POINT_PAUSE)
            .callFunction(() => setAutoPlayIndex(4))
            .start();
        }}
      />
      <Image
        src='/Online store _Isometric.svg'
        alt='Illustration representing an online store'
        width={150}
        height={100}
        className='imageEnter'
      />
    </section>
  );
};

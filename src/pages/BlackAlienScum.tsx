import Head from 'next/head';
import card from '@/styles/card.module.scss';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const BlackAlienScum = ()=> {

    const refObj = useRef<HTMLDivElement>(null);

    return(

        <>
        <Head>
          <title>Black Alien Scum</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
  
        <section  ref={refObj} id={card.cardContainer}>
  
          <div id={card.cardContent}>Alien Scum</div>
  
        </section>
         
        </main>
      </>

    )
}

export default BlackAlienScum;
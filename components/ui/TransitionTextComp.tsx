"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function TransitionTextComp() {
  const TEXTS = ['Accessibility', 'Reliability', 'Punctuality', 'New Cars'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <TextTransition
        springConfig={presets.wobbly}
        inline={true}
        className='banner__text-transition'
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      <p style={{ display: "inline", fontSize: '40px' }}>!</p>
    </>
  );
}

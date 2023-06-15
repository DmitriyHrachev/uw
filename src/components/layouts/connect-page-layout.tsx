import Head from 'next/head';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ConnectContainer from '../blocks/connect-container/connect-container';

export default function ConnectPageLayout({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectContainer>
        {/* <AnimatePresence mode="wait"> */}
        {children}
        {/* </AnimatePresence> */}
      </ConnectContainer>
    </>
  );
}

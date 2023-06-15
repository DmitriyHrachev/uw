import Link from 'next/link';
import clsx from 'clsx';
import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';
import { Suspense, use, useEffect, useRef } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import { gsap } from '@/libs/gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/all';

import styles from './bloody-button.module.scss';
import ButtonDesktopSVG from './assets/button-desktop.svg';
import ButtonTabletSVG from './assets/button-tablet.svg';
import ButtonMobileSVG from './assets/button-mobile.svg';

import buttonLottieData from './assets/button-lottie.json';
import React from 'react';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
gsap.registerPlugin(TextPlugin, MorphSVGPlugin);
interface BloodyButtonProps {
  href: string;
  text: string | JSX.Element;
  className?: string;
}
export default function BloodyButton({
  href,
  text,
  className,
}: BloodyButtonProps): JSX.Element {
  const ref = useRef<HTMLAnchorElement>(null);
  const lottieAnimationRef = useRef<LottieRefCurrentProps | null>(null);
  const { isDesktop, isTablet, isMobile } = useMediaQuery();

  // Lottie animation on button hover
  useLottiePlayOnHover({ elRef: ref, lottieRef: lottieAnimationRef });

  // Text animation on button hover
  useIsomorphicLayoutEffect(() => {
    const containerRef = ref.current;
    if (!containerRef || !isDesktop) return;
    const ctx = gsap.context(self => {
      if (!self.selector) return;
      const lines = self.selector('[data-text] > div').reverse();
      const linesText = lines.map((line: Element) => line.textContent || '');

      const mouseEnter = () => {
        const tl = gsap.timeline();
        lines.forEach((line: Element) => {
          tl.reverseShuffle(
            line,
            {
              textValue: line.textContent || '',
            },
            '0',
          );
        });
      };
      const mouseLeave = () => {
        lines.forEach((line: Element, index: number) => {
          gsap.set(line, { text: linesText[index] });
        });
      };
      containerRef.addEventListener('mouseenter', mouseEnter);
      containerRef.addEventListener('mouseleave', mouseLeave);
      return () => {
        containerRef.removeEventListener('mouseenter', mouseEnter);
        containerRef.removeEventListener('mouseleave', mouseLeave);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isDesktop]);
  return (
    <Link
      href={href}
      className={clsx(styles['bloody-button'], className)}
      ref={ref}
    >
      <div className={styles.text} data-text>
        <div>Unearth</div>
        <div>Your True</div>
        <div>Self</div>
      </div>
      {isMobile && (
        <div className={styles.bg}>
          <ButtonMobileSVG />
        </div>
      )}
      {isTablet && (
        <div className={styles.bg}>
          <ButtonTabletSVG />
        </div>
      )}
      {isDesktop && (
        <Lottie
          animationData={buttonLottieData}
          loop={false}
          autoplay={false}
          lottieRef={lottieAnimationRef}
          className={clsx(styles.bg, styles['bg-lottie'])}
        />
      )}
    </Link>
  );
}

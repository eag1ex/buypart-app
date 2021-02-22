import { Isize } from '@buypart/interfaces';

const breakRefs = ['full', 'lg', 'md', 'sm', 'xl', 'xs'];

// only matche sm, xs
export const breakPointSmall = (ref: Isize): boolean =>
  ref === 'sm' || ref === 'xs';

/**
 * also matche md
 */
export const breakPointSmaller = (ref: Isize): boolean =>
  ref !== 'full' && ref !== 'lg' && ref !== 'xl';
export const breakPointLarger = (ref: Isize): boolean =>
  ref === 'full' || ref === 'lg' || ref === 'xl';

export const nicePrice = (num: number): string =>
  num.toString().replace('.', ',');

/**
 * break point is
 * match by ref
 */
export const bpIs = (ref: Isize): boolean => {
  return breakRefs.indexOf(ref) !== -1;
};

export const isOdd = (num: number): boolean => num % 2 !== 0;

/**
 * unsubscribe from all subs
 * @returns number of unsubs
 */
export const unsubAll = (subs = []): number => {
  let inx = 0;
  subs.forEach((el) => {
    try {
      el.unsubscribe();
      inx++;
    } catch (err) {
      //
    }
  });
  return inx;
};

/**
 * detect current device
 */
export const isMobile = (navigator: Navigator) => {
  const toMatch = [
    /Android/i,
    // webOS/i,
    /iPhone/i,
    /iPad/i,
    // iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];
  return toMatch.some((toMatchItem): any => {
    return navigator.userAgent.match(toMatchItem);
  });
};



export { breakRefs };

import {Isize} from '@buypart/interfaces'

const breakRefs = ['full', 'lg', 'md', 'sm', 'xl', 'xs']

// only matches sm, xs
export const breakPointSmall = (ref: Isize): boolean => ref === 'sm' || ref === 'xs'

/**
 * also matches md
 */
export const breakPointSmaller = (ref: Isize): boolean => ref !== 'full' && ref !== 'lg' && ref !== 'xl'
export const breakPointLarger = (ref: Isize): boolean => ref === 'full' || ref === 'lg' || ref === 'xl'

/**
 * break point is
 * match by ref
 */
export const bpIs = (ref: Isize): boolean => {
  return ['full', 'lg', 'md', 'sm', 'xl', 'xs'].indexOf(ref) !== -1
}

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

export {breakRefs}
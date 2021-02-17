import {Isize} from '@buypart/interfaces'

const breakRefs = ['full', 'lg', 'md', 'sm', 'xl', 'xs']


export const breakPointSmaller = (ref: Isize): boolean => ref !== 'full' && ref !== 'lg' && ref !== 'xl'
export const breakPointLarger = (ref: Isize): boolean => ref === 'full' || ref === 'lg' || ref === 'xl'

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
import {Isize} from '@buypart/interfaces'

const breakRefs = ['full', 'lg', 'md', 'sm', 'xl', 'xs']


export const breakPointSmaller = (ref: Isize): boolean => ref !== 'full' && ref !== 'lg' && ref !== 'xl'
export const breakPointLarger = (ref: Isize): boolean => ref === 'full' || ref === 'lg' || ref === 'xl'

export {breakRefs}
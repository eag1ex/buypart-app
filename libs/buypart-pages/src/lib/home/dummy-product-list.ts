import { Iproduct } from '@buypart/interfaces';

export const productList: Iproduct[] = [
  {
    name: `Connental&nbsp;<br />PremiumContact™ 6`,
    label: { ref: 'approved-oe' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'in' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    quantity: 5,
    cta: { clicked: false, type: 'cart' },
  },
  {
    name: `Connental&nbsp;<br />PremiumContact™ 6`,
    label: { ref: 'approved-oe' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'low', message: '8 Tires Left' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    quantity: 3,
    cta: { clicked: false, type: 'cart' },
  },
  {
    name: `Connental&nbsp;<br />PremiumContact™ 6`,
    label: { ref: 'approved-oe' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'out', message: 'Back in 1 Week!' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    quantity: 3,
    cta: { clicked: false, type: 'notify' },
  },
];

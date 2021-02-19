import { Iproduct } from '@buypart/interfaces';

export const productList: Iproduct[] = [
  {
    withPremium: true,
    premName: `<span class="w">Connental&nbsp;-&nbsp;</span><span class="w">PremiumContact 6</span>`,
    name: `<span class="w">Connental&nbsp;</span><span class="w">PremiumContact™ 6</span>`,
    label: { ref: 'approved-oe' },
    premLabel: {ref: 'tires-auto-express'},
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'in' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: {value: 408, pre: '₪'},
    quantity: 5,
    cta: { clicked: false, type: 'cart' },
  },
  {
    withPremium: true,
    premName: `<span class="w">Connental&nbsp;-&nbsp;</span><span class="w">PremiumContact 6</span>`,
    name: `<span class="w">Connental&nbsp;</span><span class="w">PremiumContact™ 6</span>`,
    label: { ref: 'approved-oe' },
    premLabel: {ref: 'tires-auto-express'},
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'low', message: '8 Tires Left' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: {value: 408, pre: '₪'},
    quantity: 3,
    cta: { clicked: false, type: 'cart' },
  },
  {
    premName: `<span class="w">Connental&nbsp;-&nbsp;</span><span class="w">PremiumContact 6</span>`,
    name: `<span class="w">Connental&nbsp;</span><span class="w">PremiumContact™ 6</span>`,
    label: { ref: 'approved-oe' },
    premLabel: {ref: 'tires-auto-express'},
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'out', message: 'Back in 1 Week!' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    quantity: 3,
    cta: { clicked: false, type: 'notify' },
  },

  {
    withPremium: true,
    premName: `<span class="w">Connental&nbsp;-&nbsp;</span><span class="w">PremiumContact 6</span>`,
    name: `<span class="w">Connental&nbsp;</span><span class="w">PremiumContact™ 6</span>`,
    label: { ref: 'approved-oe' },
    premLabel: {ref: 'tires-auto-express'},
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'in' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: {value: 408, pre: '₪'},
    quantity: 5,
    cta: { clicked: false, type: 'cart' },
  },
];
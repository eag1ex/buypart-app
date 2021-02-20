import { Iproduct } from '@buypart/interfaces';

export const productList: Iproduct[] = [
  {
    rating: 0,
    featured: true,
    premName: `<span class="w">Continental<span class="s">&nbsp;-&nbsp;</span></span><span class="w">PremiumContact 1</span>`,
    name: `<span class="w">Continental&nbsp;</span><span class="w">PremiumContact™ 1</span>`,
    label: { ref: 'approved-oe' },
    premLabel: { ref: 'tires-auto-express' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'in' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: { value: 408, pre: '₪' },
    quantity: 5,
    cta: { clicked: false, type: 'cart' },
  },
  {

    rating: 3,
    featured: true,
    premName: `<span class="w">Continental<span class="s">&nbsp;-&nbsp;</span></span><span class="w">PremiumContact 2</span>`,
    name: `<span class="w">Continental&nbsp;</span><span class="w">PremiumContact™ 2</span>`,
    label: { ref: 'approved-oe' },
    premLabel: { ref: 'tires-auto-express' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'low', message: '8 Tires Left' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: { value: 408, pre: '₪' },
    quantity: 3,
    cta: { clicked: false, type: 'cart' },
  },
  {

    rating: 5,
    premName: `<span class="w">Continental<span class="s">&nbsp;-&nbsp;</span></span><span class="w">PremiumContact 3</span>`,
    name: `<span class="w">Continental&nbsp;</span><span class="w">PremiumContact™ 3</span>`,
    label: { ref: 'approved-oe' },
    premLabel: { ref: 'tires-auto-express' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'out', message: 'Back in 1 Week!' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    quantity: 3,
    cta: { clicked: false, type: 'notify' },
  },
  {

    rating: 4,
    featured: true,
    premName: `<span class="w">Continental<span class="s">&nbsp;-&nbsp;</span></span><span class="w">PremiumContact 4</span>`,
    name: `<span class="w">Continental&nbsp;</span><span class="w">PremiumContact™ 4</span>`,
    label: { ref: 'approved-oe' },
    premLabel: { ref: 'tires-auto-express' },
    spec: ['195/55 R15 85V', 'SUV'],
    stock: { value: 'in' },
    price: { value: 340, pre: '₪' },
    total: { value: 1.36, pre: '₪' },
    save: { value: 408, pre: '₪' },
    quantity: 5,
    cta: { clicked: false, type: 'cart' },
  }
].map((n, i) => {
  (n as any).id = (new Date().getTime() + i).toString();
  if (!n.rating) n.rating = 0
  return n;
}) as Iproduct[]

export interface Iicon {
  name: string;
  url: string;
}

export interface IfilterProd {
  name: string;
  value: string;
  type: string;
}

export interface IfilterSort {
  name: string;
  value: string;
}

export type Istock = 'in' | 'low' | 'out';
export type Icta = 'notify' | 'cart';
export interface Iproduct {
  name: string; // product name
  label: { ref: string; name?: string }; // brand, label sponsor
  spec: Array<string>; // product spect details
  stock: { value: Istock; message?: string }; // product [in,low,out] / or, additional messages
  price: { value: number; pre: string }; // price per order
  quantity: number; // product items order request
  total: { value: number; pre: string }; // total products to order
  cta: {type: Icta, clicked: boolean}; // call to action, add-to-cart clicked or not
}

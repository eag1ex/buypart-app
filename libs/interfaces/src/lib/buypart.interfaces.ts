export type Isize = 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export interface IbreakPoint{
  name: Isize;
  size: number;
  ref?: string; // usefull to add additional information to a breakpoint
}

// we dont have types for typescript version of x-utils yet
export interface Isq{
  resolve: () => any;
  reject: () => any;
  promise: Promise<any>;
}

export interface Iicon {
  name: string;
  url: string;
}

export interface Iimage extends Iicon {}
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


interface IpremiumDetail{
  withPremium?: boolean; // marks current product with premium support
  premName: string; // best seller name (withPremium)
  premLabel: { ref: string; name?: string }; // best seller premLabel (withPremium)
}

export interface Iproduct extends IpremiumDetail {

  name: string; // product name
  label: { ref: string; name?: string }; // brand, label sponsor

  spec: Array<string>; // product spect details
  stock: { value: Istock; message?: string; ref?: string }; // value [in,low,out]
  price: { value: number; pre: string }; // price per order
  quantity: number; // product items to request
  total: { value: number; pre: string }; // total products to order
  save?: { value: number; pre: string }; // (optional) when save is available
  cta: { type: Icta; clicked: boolean; label?: string }; // call to action, add-to-cart clicked or not
}

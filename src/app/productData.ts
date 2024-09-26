export type TProduct = {
  title: string;
  img: string;
  description: string;
  price: number;
  discount: number;
  new: boolean;
};

export const productData: TProduct[] = [
  {
    title: "Syltherine",
    img: "/images/product1.png",
    description: "Stylish cafe chair",
    price: 2500000,
    discount: 0.3,
    new: false,
  },
  {
    title: "Leviosa",
    img: "/images/product2.png",
    description: "Stylish cafe chair",
    price: 2500000,
    discount: 0,
    new: false,
  },
  {
    title: "Lolito",
    img: "/images/product3.png",
    description: "Luxury big sofa",
    price: 7000000,
    discount: 0.5,
    new: false,
  },
  {
    title: "Respira",
    img: "/images/product4.png",
    description: "Outdoor bar table and stool",
    price: 500000,
    discount: 0,
    new: true,
  },
  {
    title: "Grito",
    img: "/images/product5.png",
    description: "Night lamp",
    price: 1500000,
    discount: 0,
    new: false,
  },
  {
    title: "Muggo",
    img: "/images/product6.png",
    description: "Small mug",
    price: 150000,
    discount: 0,
    new: true,
  },
  {
    title: "Pingky",
    img: "/images/product7.png",
    description: "Cute bed set",
    price: 7000000,
    discount: 0.5,
    new: false,
  },
  {
    title: "Potty",
    img: "/images/product8.png",
    description: "Minimalist flower pot",
    price: 500000,
    discount: 0,
    new: true,
  },
];

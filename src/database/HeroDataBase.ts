import firstSlide from "../assets/hero/slide1.jpeg"
import secondSlide from "../assets/hero/slide2.jpeg"


export interface HERODATABASE {
  id: number;
  img: string;
}

export const HERODATABASE: HERODATABASE[] = [
  {
    id: 1,
    img: `${firstSlide}`,
  },
  {
    id: 2,
    img: `${secondSlide}`,
  },

];

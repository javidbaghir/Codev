import kanan from "../assets/certificate/KananMammadli.jpeg"
import mammadGulu from "../assets/certificate/MammadGuluGuliyev.jpeg"
import mammadGulu2 from "../assets/certificate/MammadguluGuliyev2.jpeg"
import nijatAliyev from "../assets/certificate/NijatAliyev.jpeg"
import orkhan from "../assets/certificate/OrkhanNarbayov.jpeg"

export interface Success {
    img: string;
    name: string;
    exam: string;
  }
  
  export const successAz: Success[] = [
  {
    img: `${kanan}`,
    name: "Kənan Məmmədli",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${mammadGulu}`,
    name: "Məmmədqulu Quliyev",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${mammadGulu2}`,
    name: "Məmmədqulu Quliyev",
    exam: "Palo alto pcsne"
  },
  {
    img: `${nijatAliyev}`,
    name: "Nicat Əliyev",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${orkhan}`,
    name: "Orxan Nərbəyov",
    exam: "Cisco CCNA 200-301"
  },
];
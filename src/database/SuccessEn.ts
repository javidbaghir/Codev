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
  
  export const successEn: Success[] = [
  {
    img: `${kanan}`,
    name: "Kanan Mammadli",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${mammadGulu}`,
    name: "Mammadgulu Guliyev",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${mammadGulu2}`,
    name: "Mammadgulu Guliyev",
    exam: "Palo alto pcsne"
  },
  {
    img: `${nijatAliyev}`,
    name: "Nijat Aliyev",
    exam: "Cisco CCNA 200-301"
  },
  {
    img: `${orkhan}`,
    name: "Orkhan Narbayov",
    exam: "Cisco CCNA 200-301"
  },
];
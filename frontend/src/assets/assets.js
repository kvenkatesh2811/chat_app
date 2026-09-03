import avatar_icon from "./avatar_icon.png";
import gallery_icon from "./gallery_icon.svg";
import help_icon from "./help_icon.png";
import logo_icon from "./logo_icon.svg";
import logo_big from "./logo_big.svg";
import logo from "./logo.png";
import profile_venkatesh from "./profile_venkatesh.png";
import profile_madhu from "./profile_madhu.png";
/* import profile_martin from './profile_martin.png'
import profile_marco from './profile_marco.png' */
import profile_pavan from "./profile_pavan.png";
import profile_umesh from "./profile_umesh.png";
import profile_raja from "./profile_raja.png";
import search_icon from "./search_icon.png";
import send_button from "./send_button.svg";
import menu_icon from "./menu_icon.png";
import arrow_icon from "./arrow_icon.png";
import code from "./code.svg";
import bgImage from "./bgImage.svg";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";
import img4 from "./img4.png";
import bg_img from "./bg_img.svg"

const assets = {
  avatar_icon,
  gallery_icon,
  help_icon,
  logo_big,
  logo_icon,
  logo,
  search_icon,
  send_button,
  menu_icon,
  arrow_icon,
  code,
  bgImage,
  bg_img,
  profile_venkatesh,
  profile_madhu,
  profile_pavan,
  profile_umesh,
  profile_raja,
  img3,
  img4
};

export default assets;

export const imagesDummyData = [img4, img3, img3, img4, img3, img4];

export const userDummyData = [
  {
    _id: "680f50aaf10f3cd28382ecf2",
    email: "test1@greatstack.dev",

    fullName: "Madhu",
    profilePic: profile_madhu,
    bio: "Hi Everyone, I am Using QuickChat",
  },
  {
    _id: "680f50e4f10f3cd28382ecf9",
    email: "test2@greatstack.dev",
    fullName: "Raja",
    profilePic: profile_raja,
    bio: "Hi Everyone, I am Using QuickChat",
  },
  {
    _id: "680f510af10f3cd28382ed01",
    email: "test3@greatstack.dev",
    fullName: "Pavan",
    profilePic: profile_pavan,
    bio: "Hi Everyone, I am Using QuickChat",
  },
  {
    _id: "680f5137f10f3cd28382ed10",
    email: "test4@greatstack.dev",
    fullName: "Umesh",
    profilePic: profile_umesh,
    bio: "Hi Everyone, I am Using QuickChat",
  },
  {
    _id: "680f516cf10f3cd28382ed11",
    email: "test5@greatstack.dev",
    fullName: "Venkatesh",
    profilePic: profile_venkatesh,
    bio: "Hi Everyone, I am Using QuickChat",
  },
];

export const messagesDummyData = [
  {
    _id: "680f571ff10f3cd28382f094",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text:  "Did you complete today's assignment?",
    seen: true,
    createdAt: "2025-04-28T10:23:27.844Z",
  },
  {
    _id: "680f5726f10f3cd28382f0b1",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    text: "Yes, submitted it this morning.",
    seen: true,
    createdAt: "2025-04-28T10:23:34.520Z",
  },
  {
    _id: "680f5729f10f3cd28382f0b6",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text:  "Can you share your notes?",
    seen: true,
    createdAt: "2025-04-28T10:23:37.301Z",
  },
  {
    _id: "680f572cf10f3cd28382f0bb",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    text:  "Sure, I'll send them right away." ,
    seen: true,
    createdAt: "2025-04-28T10:23:40.334Z",
  },
  {
    _id: "680f573cf10f3cd28382f0c0",
    senderId: "680f50e4f10f3cd28382ecf9",
    receiverId: "680f5116f10f3cd28382ed02",
    image: img4,
    seen: true,
    createdAt: "2025-04-28T10:23:56.265Z",
  },
  {
    _id: "680f5745f10f3cd28382f0c5",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    image: img3,
    seen: true,
    createdAt: "2025-04-28T10:24:05.164Z",
  },
  {
    _id: "680f5748f10f3cd28382f0ca",
    senderId: "680f5116f10f3cd28382ed02",
    receiverId: "680f50e4f10f3cd28382ecf9",
    text: "Thanks a lot!",
    seen: true,
    createdAt: "2025-04-28T10:24:08.523Z",
  },
];

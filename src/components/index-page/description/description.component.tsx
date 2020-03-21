import React from "react";

import { FaGithub, FaLinkedin, FaDev, FaTwitter } from "react-icons/fa";

import {
  TextDescriptionSVG,
  DescriptionHolder,
  SocialIconsHolder,
} from "./description.styles";
import SocialIcon from "./social-icon/social-icon.component";

const icons = [
  {
    icon: FaGithub,
    href: "https://github.com/Thesoreon",
    color: "#FF019A",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/pavel-susicky/",
    color: "#00F1FF",
  },
  {
    icon: FaDev,
    href: "https://dev.to/thesoreon",
    color: "#FF019A",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/Thesoreon",
    color: "#00F1FF",
  },
];

const Description: React.FC = () => {
  return (
    <DescriptionHolder>
      <TextDescriptionSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 713 109"
        width="713"
        height="109"
      >
        <path
          d="M.248 45V.84h30.208v8.32H9.464v10.88h19.072v8.32H9.464V45H.248zm37.375 0V.84h21.504c7.168 0 10.752 3.584 10.752 10.752v7.296c0 5.333-1.984 8.683-5.952 10.048L71.16 43.08 70.07 45h-7.936l-7.808-15.36H46.84V45h-9.216zm9.216-23.68h11.904c1.28 0 1.92-.64 1.92-1.92v-8.32c0-1.28-.64-1.92-1.92-1.92H46.84v12.16zm31.644 12.928V11.592C78.483 4.424 82.067.84 89.235.84h14.592c7.168 0 10.752 3.584 10.752 10.752v22.656c0 7.168-3.584 10.752-10.752 10.752H89.235c-7.168 0-10.752-3.584-10.752-10.752zm9.216.512c0 1.28.64 1.92 1.92 1.92h13.824c1.28 0 1.92-.64 1.92-1.92V11.08c0-1.28-.64-1.92-1.92-1.92H89.62c-1.28 0-1.92.64-1.92 1.92v23.68zM124.436 45V.84h9.984l17.536 28.992V.84h9.216V45h-9.984l-17.536-28.992V45h-9.216zm43.538-35.84V.84h36.095v8.32h-13.44V45h-9.216V9.16h-13.44zm42.9 35.84V.84h30.208v8.32H220.09v8.96h19.072v8.32H220.09v10.24h20.992V45h-30.208zm38.625 0V.84h9.984l17.536 28.992V.84h9.216V45h-9.984l-17.536-28.992V45h-9.216zm47.25 0V.84h16.768c12.032 0 18.048 6.016 18.048 18.048v8.064c0 12.032-6.016 18.048-18.048 18.048h-16.768zm9.216-8.32h8.064c5.547 0 8.32-2.773 8.32-8.32V17.48c0-5.547-2.773-8.32-8.32-8.32h-8.064v27.52zM356.186 45V.84h16.768c12.032 0 18.048 6.016 18.048 18.048v8.064c0 12.032-6.016 18.048-18.048 18.048h-16.768zm9.216-8.32h8.064c5.546 0 8.32-2.773 8.32-8.32V17.48c0-5.547-2.774-8.32-8.32-8.32h-8.064v27.52zM400.248 45V.84h30.208v8.32h-20.992v8.96h19.072v8.32h-19.072v10.24h20.992V45h-30.208zm34.53-42.432L435.93.84h8.064l10.112 35.84h1.024L465.24.84h8.064l1.152 1.728L461.913 45H447.32L434.777 2.568zM480.873 45V.84h30.208v8.32H490.09v8.96h19.072v8.32H490.09v10.24h20.992V45h-30.208zm38.625 0V.84h9.216v35.84h19.072V45h-28.288zm34.423-10.752V11.592c0-7.168 3.584-10.752 10.752-10.752h14.592c7.168 0 10.752 3.584 10.752 10.752v22.656c0 7.168-3.584 10.752-10.752 10.752h-14.592c-7.168 0-10.752-3.584-10.752-10.752zm9.216.512c0 1.28.64 1.92 1.92 1.92h13.824c1.28 0 1.92-.64 1.92-1.92V11.08c0-1.28-.64-1.92-1.92-1.92h-13.824c-1.28 0-1.92.64-1.92 1.92v23.68zM599.873 45V.84h21.504c7.168 0 10.752 3.584 10.752 10.752v8.576c0 7.168-3.584 10.752-10.752 10.752H609.09V45h-9.216zm9.216-22.4h11.904c1.28 0 1.92-.64 1.92-1.92v-9.6c0-1.28-.64-1.92-1.92-1.92H609.09V22.6zM640.686 45V.84h30.208v8.32h-20.992v8.96h19.072v8.32h-19.072v10.24h20.992V45h-30.208zm38.625 0V.84h21.504c7.168 0 10.752 3.584 10.752 10.752v7.296c0 5.333-1.984 8.683-5.952 10.048l7.232 14.144L711.76 45h-7.936l-7.808-15.36h-7.488V45h-9.216zm9.216-23.68h11.904c1.28 0 1.92-.64 1.92-1.92v-8.32c0-1.28-.64-1.92-1.92-1.92h-11.904v12.16zM.248 109V64.84h30.208v8.32H9.464v10.88h19.072v8.32H9.464V109H.248zm37.375 0V64.84h21.504c7.168 0 10.752 3.584 10.752 10.752v7.296c0 5.333-1.984 8.683-5.952 10.048l7.232 14.144L70.07 109h-7.936l-7.808-15.36H46.84V109h-9.216zm9.216-23.68h11.904c1.28 0 1.92-.64 1.92-1.92v-8.32c0-1.28-.64-1.92-1.92-1.92H46.84v12.16zm31.644 12.928V75.592c0-7.168 3.584-10.752 10.752-10.752h14.592c7.168 0 10.752 3.584 10.752 10.752v22.656c0 7.168-3.584 10.752-10.752 10.752H89.235c-7.168 0-10.752-3.584-10.752-10.752zm9.216.512c0 1.28.64 1.92 1.92 1.92h13.824c1.28 0 1.92-.64 1.92-1.92V75.08c0-1.28-.64-1.92-1.92-1.92H89.62c-1.28 0-1.92.64-1.92 1.92v23.68zM124.436 109V64.84h11.008l12.48 26.688 12.48-26.688h11.008V109h-9.216V81.096l-10.368 22.144h-7.808l-10.368-22.144V109h-9.216zm72.235-10.752V75.592c0-7.168 3.584-10.752 10.752-10.752h17.088l4.288 3.328v4.992h-20.992c-1.28 0-1.92.64-1.92 1.92v23.68c0 1.28.64 1.92 1.92 1.92H228.8v4.992L224.51 109h-17.088c-7.168 0-10.752-3.584-10.752-10.752zM234.688 109v-7.168l21.248-28.672h-20.608v-8.32h32.256v7.168l-21.248 28.672h21.888V109h-33.536zm41.498 0V64.84h30.208v8.32h-20.992v8.96h19.072v8.32h-19.072v10.24h20.992V109h-30.208zm37.985-10.752V75.592c0-7.168 3.584-10.752 10.752-10.752h17.088l4.288 3.328v4.992h-20.992c-1.28 0-1.92.64-1.92 1.92v23.68c0 1.28.64 1.92 1.92 1.92H346.3v4.992L342.01 109h-17.088c-7.168 0-10.752-3.584-10.752-10.752zM354.748 109V64.84h9.216v17.28h16.384V64.84h9.216V109h-9.216V90.44h-16.384V109h-9.216zm60.688 0V64.84h21.504c7.168 0 10.752 3.584 10.752 10.752v7.296c0 5.333-1.984 8.683-5.952 10.048l7.232 14.144-1.088 1.92h-7.936l-7.808-15.36h-7.488V109h-9.216zm9.216-23.68h11.904c1.28 0 1.92-.64 1.92-1.92v-8.32c0-1.28-.64-1.92-1.92-1.92h-11.904v12.16zM456.936 109V64.84h30.208v8.32h-20.992v8.96h19.072v8.32h-19.072v10.24h20.992V109h-30.208zm38.625 0V64.84h21.504c7.168 0 10.752 3.584 10.752 10.752v8.576c0 7.168-3.584 10.752-10.752 10.752h-12.288V109h-9.216zm9.216-22.4h11.904c1.28 0 1.92-.64 1.92-1.92v-9.6c0-1.28-.64-1.92-1.92-1.92h-11.904V86.6zm31.212 11.648V64.84h9.216v33.92c0 1.28.64 1.92 1.92 1.92h12.544c1.28 0 1.92-.64 1.92-1.92V64.84h9.216v33.408c0 7.168-3.584 10.752-10.752 10.752H546.74c-7.168 0-10.752-3.584-10.752-10.752zM580.936 109V64.84H601.8c7.168 0 10.752 3.584 10.752 10.752v3.84c0 1.45-.427 2.688-1.28 3.712l-2.24 2.688 2.688 2.24c1.408 1.152 2.112 2.86 2.112 5.12v5.056c0 7.168-3.584 10.752-10.752 10.752h-22.144zm9.216-8.32h12.544c1.28 0 1.92-.64 1.92-1.92v-6.4c0-1.28-.64-1.92-1.92-1.92h-12.544v10.24zm0-18.56h11.264c1.28 0 1.92-.64 1.92-1.92v-5.12c0-1.28-.64-1.92-1.92-1.92h-11.264v8.96zM622.686 109V64.84h9.216v35.84h19.072V109h-28.288zm35.062 0V64.84h9.216V109h-9.216zm19.048-10.752V75.592c0-7.168 3.584-10.752 10.752-10.752h17.088l4.288 3.328v4.992h-20.992c-1.28 0-1.92.64-1.92 1.92v23.68c0 1.28.64 1.92 1.92 1.92h20.992v4.992L704.636 109h-17.088c-7.168 0-10.752-3.584-10.752-10.752z"
          fill="url(#TG)"
        />
        <defs>
          <linearGradient
            id="TG"
            x1="378.5"
            y1="-6"
            x2="378.5"
            y2="601"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset=".208" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </TextDescriptionSVG>
      <SocialIconsHolder>
        {icons.map(icon => (
          <SocialIcon iconProps={icon} key={icon.href} />
        ))}
      </SocialIconsHolder>
    </DescriptionHolder>
  );
};

export default Description;
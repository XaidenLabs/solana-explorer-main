import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type SocialNetworks = "GitHub" | "Twitter" | "Instagram";
export interface SocialItem {
  name: SocialNetworks;
  link: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export const socials: SocialItem[] = [
  {
    name: "GitHub",
    link: "https://github.com/SWITLYF",
    icon: GitHubLogoIcon,
  },
  {
    name: "Twitter",
    link: "https://x.com/xaiden_tech",
    icon: TwitterLogoIcon,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/xaidentech/",
    icon: InstagramLogoIcon,
  },
];

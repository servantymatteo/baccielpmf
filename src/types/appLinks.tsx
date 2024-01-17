import { IconType } from "react-icons";

export interface appLinks {
  label: string;
  baseUrl: string;
  type: string; // @todo refactor
  icon?: IconType;
}

export interface footerLinks {
  label: string;
  links: appLinks[];
}

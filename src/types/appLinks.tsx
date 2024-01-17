export interface appLinks {
  label: string;
  baseUrl: string;
  type: string; // @todo refactor
}

export interface footerLinks {
  label: string;
  links: appLinks[];
}

import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const routeur = useRouter();

  const isActive: boolean = useMemo(() => {
    return routeur.pathname === href;
  }, [routeur.pathname, href]);
  return (
    <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
      {children}
    </Link>
  );
};

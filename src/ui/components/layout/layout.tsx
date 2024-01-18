import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
  children: React.ReactNode;
  isdisplayBreadcrumbs?: boolean;
}
export const Layout = ({ children, isdisplayBreadcrumbs = true }: Props) => {
  return (
    <>
      <Navigation />
      {isdisplayBreadcrumbs && <Breadcrumbs />}
      {children}
      <Footer />
    </>
  );
};

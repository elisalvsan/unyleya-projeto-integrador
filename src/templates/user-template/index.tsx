import { PropsWithChildren } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

type UserTemplateProps = PropsWithChildren;

export default function UserTemplate(props: UserTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-col p-4 m-2 font-inter">{props.children}</div>
      <Footer />
    </div>
  );
}

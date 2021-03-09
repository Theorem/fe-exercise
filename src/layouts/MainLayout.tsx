import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import prism from "./prism.svg";
import { Header } from "./Header";

const Background = styled.div`
  /*! background by SVGBackgrounds.com */
  background: white url("${prism}") no-repeat center center;
  min-height: 100vh;
`;

const Content = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 16px 100px;
`;

type Props = {
  children: ReactNode;
  title: string;
};

export function MainLayout(props: Props) {
  const { children, title } = props;
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Background>
      <Header />
      <Content>{children}</Content>
    </Background>
  );
}

import { PropsWithChildren } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

type Props = {
  title: string;
};

const Column = ({ title, children }: PropsWithChildren<Props>) => {
  return (
    <ColumnContainer>
      <ColumnTitle dark>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};

export default Column;

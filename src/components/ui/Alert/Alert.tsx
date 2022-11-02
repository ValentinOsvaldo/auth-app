import { FC } from 'react';

interface Props {
  children: any;
  display?: boolean;
}

export const Alert: FC<Props> = ({ children, display }) => {
  return (
    <div
      className="alert alert-danger"
      style={{ display: display ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
};

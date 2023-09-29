interface IProps {
  children: React.ReactNode;
}

interface IModalProps {
  children: React.ReactNode;
}

const Backdrop: React.FC<IProps> = (props) => {
  return <div className="backdrop">{props.children}</div>;
};

export const Modal: React.FC<IModalProps> = (props) => {
  return (
    <Backdrop>
      <div className="modal">{props.children}</div>
    </Backdrop>
  );
};

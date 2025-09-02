const Image = (props: { image: string; className: string }) => {
  return <img src={props.image} alt="" className={props.className} />;
};

export default Image;

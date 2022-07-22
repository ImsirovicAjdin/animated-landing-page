function NavBtn(props) {
  const { btnStyle, btnType, handleFn, children } = props;
  return (
    <button className={btnStyle} onClick={(e) => handleFn(e)} type={btnType}>
      {children}
    </button>
  );
}

export { NavBtn };

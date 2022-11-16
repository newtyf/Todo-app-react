function TodoNotFound({text}) {
  const styleNotFound = {
    textAlign: "center",
    color: "white",
    paddingTop: "20px",
  };
  return <p style={styleNotFound}>{text}</p>;
}

export { TodoNotFound };

const Hello = () => {
  const onClick = () => {
    alert('Hello, world!');
  };
  
  const text = 'Hello, world!';

  return (
    <div onClick={onClick}>
      hogeさん{text}
    </div>
  );
}

export default Hello;
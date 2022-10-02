type ContainerProps = {
  children: React.ReactNode;
  title: string;
}

const Container = (props: ContainerProps): JSX.Element => {
  const {title, children} = props;
  return (
    <div className="container" style={{backgroundColor: 'red'}}>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  )
}

export default Container;
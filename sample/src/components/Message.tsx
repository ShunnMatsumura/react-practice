const Text = (props: {content: string}) => {
  const {content} = props;
  return <p className="text">{content}</p>
}

const Message = (props: {}) => {
  const content1 = 'Hello, world!';
  const content2 = 'Hello, React!';

  return (
    <div className="message">
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message;
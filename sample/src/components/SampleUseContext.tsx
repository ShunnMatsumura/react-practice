import React, { useContext } from "react";

type User = {
  id: number;
  name?: string;
}

const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <p>GrandChild</p>
      <p>{user?.name}</p>
    </div>
  )
}

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const ParentA = () => {
  const user = {
    id: 1,
    name: 'Taro'
  }

  return (
    // context更新して、ChildのGrandChildから参照する
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default ParentA
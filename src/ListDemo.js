import React, { useState } from "react";

function MemberTable(props) {
  const members = props.members;
  const listMembers = members.map((member) => (
    <li key={member.id}>{member.name}</li>
  ));
  return <MemberDemo memberDisplay={listMembers} />;
}

function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      {props.memberDisplay}
    </div>
  );
}

export default function App() {
  const initialMembers = [
    { name: "Peter", age: 18, id: 1 },
    { name: "Hanne", age: 35, id: 2 },
    { name: "Janne", age: 25, id: 3 },
    { name: "Holger", age: 22, id: 4 },
  ];
  const [members, setMembers] = useState(initialMembers);
  return (
    <React.Fragment>
      <MemberTable members={members} />
    </React.Fragment>
  );
}

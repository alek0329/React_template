import { persons } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
  return (
    <p>
      name: {props.person.firstName} {props.person.lastName}, Email:{" "}
      {props.person.email}
    </p>
  );
}

export function MultiWelcome(props) {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />
      {persons.map((person) => (
        <WelcomePerson person={person} />
      ))}
    </div>
  );
}
export default Welcome;

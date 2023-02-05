import { useState } from "react";
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <h1>List users</h1>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`users/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </MainContainer>
  );
};

export async function getStaticProps(context) {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/users?_limit=10"
  );
  const users = await response.json();

  return {
    props: { users },
  };
}

export default Users;

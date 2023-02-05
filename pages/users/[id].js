import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

const User = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <h1>User with id {query.id}</h1>
      <div>
        <p>User's name is {user.name}</p>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user },
  };
}

export default User;

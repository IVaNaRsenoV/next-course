import Head from "next/head";
import A from "./A";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`Arsenov` + keywords}></meta>
        <title>Main page</title>
      </Head>
      <div>
        <header>
          <A href={"/"} text={"Main"} />
          <A href={"/users"} text={"Users"} />
        </header>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          header {
            background: orange;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;

import { Inter } from "next/font/google";
import "@aws-amplify/ui-react/styles.css";
import { post } from "aws-amplify/api";
import { useEffect } from "react";
// import { API } from "aws-amplify";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const boundaryTest = () => {
    const body = new FormData();

    body.append("name", "Walk the dogs");

    // V5
    // API.post("todoApi", "/todos", {
    //   // apiName: "todoApi",
    //   // path: "/todos",
    //   body,
    // });

    // V6
    post({
      apiName: "todoApi",
      path: "/todos",
      options: {
        body,
      },
    });

    fetch("https://fhm0hzgtnc.execute-api.us-east-1.amazonaws.com/dev/todos", {
      body,
      method: "post",
    });
  };

  useEffect(() => {
    // fetchUserGroup();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <button onClick={boundaryTest}>Boundary Test</button>
    </main>
  );
}
export default Home;

// Styles
import "./Home.scss";
// Components
import { Services, Header, Experience, Works, LastProject } from "container";

const Home = () => {
  return (
    <main id="Home">
      <Header />
      <LastProject />
      <Services />
      <Works />
      <Experience />
    </main>
  );
};

export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`);
  // const data = await res.json();
 
  // Pass data to the page via props
  return ;
}
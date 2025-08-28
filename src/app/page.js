import estilos from "./page.module.css";
import Banner from './componentes/Banner/Banner'
import SaboresHome from "./componentes/SaboresHome/SaboresHome";


export default function Home() {
  return (

    <main className={estilos.main}>
      <Banner />
      <SaboresHome />
    </main>

  );
}

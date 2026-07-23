import Mission from "@/app/components/Mission";
import History from "@/app/components/History";
import Depoiment from "@/app/components/Depoiment";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Home - AssisTáArte",
  description: "Projeto da Secretaria de Cultura de Assis"
}

export default function Home() {
  return(
      <main className="px-12 mt-20">
        <br/>
        <br/>
        <br/><br/><br/><br/><br/>



        <Mission/>
        <History/>
        <Depoiment/>
        </main>
  )
}

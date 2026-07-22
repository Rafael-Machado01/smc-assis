import Image from 'next/image'
export default function History() {
  return (
      <section className="mt-16 flex flex-col lg:flex-row">
        <Image src="/teatro.jpg" width={600} height={400} className="shadow-2xl rounded-lg" alt="Teatro Municipal da Cidade de Assis"/>
        <div className="container flex flex-col m-2 text-center  items-center gap-10 p-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">SEMEARTE</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Desde 1989, o Semearte (Setor Municipal de
            Ensino de Arte) tem como principal objetivo promover cultura e cidadania, possibilitando o acesso irrestrito
            às diversas modalidades artísticas para pessoas que vocacionem nas áreas das artes. Oferece cursos
            gratuitos, abrangendo pessoas de todas as faixas etárias, em períodos diurnos, vespertinos e noturnos, com
            aulas de Ballet, Desenho e Pintura, Teatro e Música. </p>
        </div>
      </section>
  )
}

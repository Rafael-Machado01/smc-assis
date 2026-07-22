import {depoimentData} from "@/app/constants/depoiment-data"
import Image from 'next/image'
export default function DepoimentCard() {
  return(
    <>
        {depoimentData.map((rating) => (
          <div  key={rating.name} className="p-4 my-2 bg-gray-50 shadow-lg dark:bg-gray-900 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">{rating.description}</p>
            <div className="flex items-center gap-4">
              <Image src={rating.imgUrl} width={80} height={80} className="mt-3 object-cover rounded-full" alt={`Foto da ${rating.name}`} />
              <div className="flex flex-col text-start mt-3">
                <h3 className="font-semibold text-gray-900 dark:text-gray-300">{rating.name}</h3>
                <p className="text-gray-700 dark:text-gray-400">{rating.curse}</p>
              </div>
            </div>
          </div>
        )
      )}
    </>

  )
}

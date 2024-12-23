import Image from "next/image";

export default function ServiceCard({ cards }) {
  return (
    <div className="flex flex-wrap justify-center my-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} w-2/12 p-4 border-x-1 border-gray-500 shadow-md text-theme`}
        >
          <Image
            src={card.imageSrc}
            alt={card.title}
            width={100}
            height={100}
            className="w-20 h-20 mx-auto"
          />
          <h2 className="text-xl font-bold text-center my-2 leading-5">{card.title}</h2>
          <p className="text-center leading-4">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

import product_echopop from "../../assets/products-img/echo-pop.jpg";

export default function CardProduct() {
  return (
    <div className="shadow-md shadow-slate-500 p-10 m-3 rounded-md flex flex-col justify-center items-center">
      <h1 className="font-bold">Nome do produto</h1>
      <img
        className="w-[100px] object-cover mt-3"
        src={product_echopop}
        alt="Echo Pop | Smart speaker compacto com som envolvente e Alexa | Cor Preta"
      />
      <p className="text-sm w-full mt-3">Amazon</p>
      <p className="text-2xl font-bold w-full">R$ 349,00</p>
    </div>
  );
}

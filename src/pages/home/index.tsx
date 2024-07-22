import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function Home() {
  return (
    <UserTemplate>
      <h2 className="text-3xl font-light ">Itens Recentes</h2>
      <div className="flex flex-1 flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>

      <h2 className="text-3xl font-light">Anúncios</h2>
      <div className="flex flex-1 flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <p>Ver mais</p>
      
    </UserTemplate>
  );
}

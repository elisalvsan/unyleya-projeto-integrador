import UserTemplate from "../../templates/user-template";

export default function NotFound() {
  return (
    <UserTemplate>
      <div className="flex flex-1 flex-col font-inter justify-center items-center font-bold">
        <h1 className="text-9xl text-red-600 p-2">404</h1>
        <h2 className="text-3xl uppercase m-2">Oops!</h2>
        <p className="text-2xl mb-2">Página não encontrada</p>
        <button className="bg-secondary px-8 py-2 rounded-3xl ">
          <a href="/">Voltar</a>
        </button>
      </div>
    </UserTemplate>
  );
}

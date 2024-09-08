import { Link } from "react-router-dom";

export function Error(){
    return(
        <div className="flex w-full min-h-screen justify-center flex-col items-center text-white">
            <h1 className="font-bold  text-4xl mb-4">ERROR 404</h1>
            <h2 className="italic text-1xl mb-4">Página não encontrada</h2>

            <Link to="/"
                className="bg-green-50/20 py-1 px-4 rounded-md"
            >
                Voltar para home
            </Link>
        </div>
    )
}
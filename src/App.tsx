import { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Calculator } from "lucide-react";

function App(): JSX.Element {
  const [numeroTiragem, setNumeroTiragem] = useState<number>(0);
  const [numeroImagem, setNumeroImagem] = useState<number>(0);
  const [corteFolha, setCorteFolha] = useState<number>(0);
  const [entregemMaquina, setEntregemMaquina] = useState<number>(0);
  const [resultadoUm, setResultadoUm] = useState<number>(0);
  const [resultadoDois, setResultadoDois] = useState<number>(0);
  const [mostrarResultados, setMostrarResultados] = useState<boolean>(false);
  const [camposVazios, setCamposVazios] = useState<boolean>(false);
  const [opcaoImpressao, setOpcaoImpressao] = useState<string>("Frente");

  const handleImpressaoChange = (value: string): void => {
    setOpcaoImpressao(value);
    if (value === "Frente") {
      setEntregemMaquina(1);
    } else {
      setEntregemMaquina(2);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      calcular();
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleImpressaoChange(e.target.value);
    calcular();
  };

  const calcular = (): void => {
    if (isNaN(numeroTiragem) || isNaN(numeroImagem) || isNaN(corteFolha)) {
      setMostrarResultados(false);
      setCamposVazios(true);
    } else {
      const resultadoUm: number = numeroTiragem / numeroImagem / corteFolha;
      setResultadoUm(resultadoUm);

      const resultadoDois: number =
        (numeroTiragem / numeroImagem) * entregemMaquina;
      setResultadoDois(resultadoDois);

      setMostrarResultados(true);
      setCamposVazios(false);
    }
  };

  return (
    <div
      className="bg-zinc-950 w-screen min-h-screen p-12 flex justify-center items-center
     "
    >
      <div className="flex flex-col justify-center items-center gap-6 w-[900px] border border-zinc-700 p-8 rounded-xl ">
        <h1 className="text-4xl	font-bold text-zinc-200 uppercase">
          Calcular montagem de chapa
        </h1>

        <div className="mt-8 flex gap-2 w-full bg-zinc-950">
          <select
            name="Impressão"
            className="w-full p-2 bg-transparent border border-zinc-400 rounded-md text-zinc-400 bg-zinc-950"
            onChange={handleSelectChange}
          >
            <option>Frente</option>
            <option>Frente e Verso</option>
            <option>Tira e retira</option>
          </select>
        </div>

        <div className=" flex gap-2 w-full ">
          <Input
            className="text-zinc-400"
            crossOrigin={undefined}
            label="Insira o numero da tiragem"
            type="number"
            onChange={(e) => setNumeroTiragem(parseFloat(e.target.value))}
            onKeyPress={handleKeyPress}
            required
          />
          <Input
            className="text-zinc-400"
            crossOrigin={undefined}
            label="Insira o numero de imagens"
            type="number"
            onChange={(e) => setNumeroImagem(parseFloat(e.target.value))}
            onKeyPress={handleKeyPress}
            required
          />
          <Input
            className="text-zinc-400"
            crossOrigin={undefined}
            label="Insira o numero de Cortes da folha"
            type="number"
            onChange={(e) => setCorteFolha(parseFloat(e.target.value))}
            onKeyPress={handleKeyPress}
            required
          />
        </div>

        <button
          className="text-zinc-200 bg-violet-700 px-3 py-2 rounded-lg hover:bg-violet-900 hover:text-zinc-100 duration-75 font-bold flex items-center gap-2"
          onClick={calcular}
        >
          Calcular
          <Calculator />
        </button>

        {mostrarResultados && !camposVazios ? (
          <div className="flex flex-col text-zinc-200 w-96">
            <div className="flex gap-2 items-center justify-between">
              <p className="text-zinc-500">Impressão: </p>
              <span className="font-bold text-lg"> {opcaoImpressao}</span>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <p className="text-zinc-500">Quantidade de folhas: </p>
              <span className="font-bold text-lg">
                {Math.ceil(resultadoUm)}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <p className="text-zinc-500">Quantidade de folhas sugerido: </p>
              <span className="font-bold text-lg">
                {Math.ceil(resultadoUm + 100)}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <p className="text-zinc-500">Tiragem de maquina: </p>
              <span className="font-bold text-lg">
                {Math.ceil(resultadoDois)}
              </span>
            </div>
          </div>
        ) : (
          <div>{camposVazios && <p>Favor preencher todos os campos</p>}</div>
        )}
      </div>
    </div>
  );
}

export default App;

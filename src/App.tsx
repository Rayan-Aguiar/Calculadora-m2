import { useState } from 'react';
import { Input, Select, Option, Button } from "@material-tailwind/react";

function App(): JSX.Element {
  const [numeroTiragem, setNumeroTiragem] = useState<number>(0);
  const [numeroImagem, setNumeroImagem] = useState<number>(0);
  const [corteFolha, setCorteFolha] = useState<number>(0);
  const [entregemMaquina, setEntregemMaquina] = useState<number>(0);
  const [resultadoUm, setResultadoUm] = useState<number>(0);
  const [resultadoDois, setResultadoDois] = useState<number>(0);
  const [mostrarResultados, setMostrarResultados] = useState<boolean>(false);
  const [camposVazios, setCamposVazios] = useState<boolean>(false);

  const handleImpressaoChange = (value: string): void => {
    if (value === 'Frente') {
      setEntregemMaquina(1);
    } else {
      setEntregemMaquina(2);
    }
  };

  const calcular = (): void => {
    if (numeroTiragem === '' || numeroImagem === '' || corteFolha === '') {
      setMostrarResultados(false);
      setCamposVazios(true);
    } else {
      const resultadoUm: number = Number(numeroTiragem) / Number(numeroImagem) / Number(corteFolha);
      setResultadoUm(resultadoUm);

      const resultadoDois: number = (Number(numeroTiragem) / Number(numeroImagem)) * entregemMaquina;
      setResultadoDois(resultadoDois);

      setMostrarResultados(true);
      setCamposVazios(false);
    }
  };

  return (
    <div className='bg-zinc-300 w-screen min-h-screen h-fit p-12 '>
      <div className="flex flex-col justify-center items-center gap-8 container">
        <h1 className="text-5xl	font-bold text-zinc-800">Calcular montagem de chapa</h1>

        <div className="mt-8 flex gap-2 w-full">
          <select name="Produto" className="w-full p-2 bg-transparent border border-zinc-400 rounded-md" >
            <option>Cartão 300g</option>
            <option>Folheto 80g</option>
            <option>Folheto 90g</option>
            <option>Folheto 115g</option>
          </select>
          <select name="Tamanho da folha" className="w-full p-2 bg-transparent border border-zinc-400 rounded-md" >
            <option>66 x 96</option>
            <option>64 x 88</option>
            <option>76 x 112</option>
            <option>77 x 113</option>
          </select>
          <select name="Impressão"  className="w-full p-2 bg-transparent border border-zinc-400 rounded-md" onChange={(e) => handleImpressaoChange(e.target.value)}  >
            <option>Frente</option>
            <option>Frente e Verso</option>
            <option>Tira e retira</option>
          </select>
        </div>

        <div className=" flex gap-2 w-full">        
          <Input label="Insira o numero da tiragem" type="number" onChange={(e) => setNumeroTiragem(parseFloat(e.target.value))} required/>
          <Input label="Insira o numero de imagens" type="number" onChange={(e) => setNumeroImagem(parseFloat(e.target.value))} required/>
          <Input label="Insira o numero de Cortes da folha" type="number" onChange={(e) => setCorteFolha(parseFloat(e.target.value))} required/>
        </div>

        <Button color="green" className="text-zinc-800" onClick={calcular}>Calcular</Button>

        {mostrarResultados && !camposVazios ? (
          <div className='flex flex-col items-center justify-center'>

            


            <div className='flex gap-2 items-center'>
              <p>Quantidade de folhas: </p>
              <span className='font-bold text-lg'>{resultadoUm}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <p>Quantidade de folhas sugerido: </p>
              <span className='font-bold text-lg'>{resultadoUm  + 100}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <p>Tiragem de maquina: </p>
              <span className='font-bold text-lg'>{resultadoDois}</span>
            </div>
            
          </div>
        ) : (
          <div>
            {camposVazios && <p>Favor preencher todos os campos</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

'use client'
import { useState } from "react";

export default function Home() {
  const [carrinho, setCarrinho] = useState(0);
  const [cupom, setCumpon] = useState(25);
  const [valortotal, setTotal] = useState(0);

  const [tamanhos, alteraTamanhos] = useState(["P", "M", "G"]);
  const [cores, alteraCores] = useState(["Preto", "Amarelo", "Azul"]);
  const [entrega, alteraEntrega] = useState(["PAC", "Sedex", "Retirada"]);
  
  function handleCarrinho(adicionar = false){

    let novoCarrinho = carrinho;

    if(adicionar ==true){
      setCarrinho(carrinho + 1);
      novoCarrinho++;
    }else{
      if(carrinho > 0){
        setCarrinho(carrinho - 1);
        novoCarrinho--;
      }else{
        setCarrinho(0);
      }
    }

    setTotal(novoCarrinho * cupom)
  }

  function limpaCarrinho(){
    setCarrinho(0);
    setTotal(0);
  }

  function cumponCarrinho(){
    setCumpon(cupom - (cupom * 0,1));
  }

  return (
    <div>
      <h1 className="bg-sky-500 text-white p-3"></h1>
      <p className="p-3 text-lg">Carrinho <strong> {carrinho} </strong> itens</p>
      {
        carrinho > 0 &&
        <div>
          <button onClick={()=>limpaCarrinho()} className="bg-yellow-400 text-black p-3">Limpa</button>  
        </div>
        
      }
      <button onClick={()=>cumponCarrinho()} className="bg-black text-white p-3 m-2">Adicionar cupom</button>
      <hr/>
      <p className="p-3 text-lg text-red-900">Valor total: R$ <strong>{valortotal}</strong></p>

      <h2>Produtos</h2>

      <div className="border bg-sky-700 w-fit p-2 text-center text-white">
        <img src="https://placehold.co/200"/>
        <h3 className="text-lg text-lime-200 font-bold">Produto modelo</h3>

        <p>Tamanhos:{tamanhos.map((i)=> <span>{i}, </span>)}</p>
        
        <p>Cores:</p>
        <ul>
          {cores.map((i)=> <li className="border">{i}</li>)}
        </ul>

        <p>Entrega:</p>
        {entrega.map((i)=> <span className="p-2 m-2 bg-gray-800">{i}</span>)}
        

        <p>R$ {cupom},00</p>
        <button onClick={()=>handleCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3">Adicionar ao carrinho</button>
        {
          carrinho > 0 &&
          <div>
            <hr/>
            <button onClick={()=>handleCarrinho(false)} className="bg-red-400 text-black mt-10 p-3">Remover do carrinho</button>
          </div>
        }
      </div>
      <div>
      
      </div>
    </div>
  );
}

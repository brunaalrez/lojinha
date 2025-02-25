'use client'
import { useState } from "react";

function Cadastro() {
    // const[nome, alteraNome] = useState("");
    const[erroNome, alteraErroNome] = useState(false);

    const [usuario, alteraUsuario] = useState({
        nome: "",
        senha:""
    });

    function alteraNome(pnome){
        const u ={
            nome: pnome,
            senha: usuario.senha
        }
        alteraUsuario(u);
    }

    function alteraSenha(psenha){
        const u ={
            nome: usuario.nome,
            senha:psenha
        }
        alteraUsuario(u);
    }

    // const[senha, alteraSenha] = useState("");
    // const[confirma, alteraConfima] = useState("");
    const[erroSenha, alteraErroSenha] = useState(false);

    function salvar(){
        console.log("O nome cadastrado é:" + usuario.nome);
        alteraNome(usuario.nome.toUpperCase())

        if(usuario.nome.length < 5){
            alteraErroNome(true);
        }else{
            alteraErroNome(false);
        }

        if(usuario.senha != usuario.confirma){
            alteraErroSenha(true)
        }else{
            alteraErroSenha(false)
        }
    }

    return ( 
        <div className="p-10">
            <h1 className="text-lg">Cadastro</h1>
            <hr/>
            <p>Digite seu nome:</p>
            <input onChange={(e)=>alteraNome(e.target.value)} value={usuario.nome} className="outline"/>
            <br/>

            {
                erroNome == true &&
                <div className="bg-red-500 text-white">
                    <p>O nome deve conter pelo menos 5 caracteres</p>
                </div>
            }

            <p>Digite sua senha:</p>
            <input onChange={(e)=>alteraSenha(e.target.value)} value={usuario.senha} className="outline"/>
            <p>Confirme sua senha</p>
            <input onChange={(e)=>alteraConfima(e.target.value)} value={usuario.confirma} className="outline"/>
            <br/>
            {
                erroSenha == true &&
                <div className="bg-red-500 text-white">
                    <p>As senhas digitadas não coincidem...</p>
                </div>
            }
            
            <button className="p-5 mt-5 bg-lime-500 text-white" onClick={()=>salvar()}>Salvar</button>
        </div>
     );
}

export default Cadastro;
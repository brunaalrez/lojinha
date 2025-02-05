'use client'
import { useState } from "react";

function Login() {
    const [admin, adminAcesso] = useState(false);
    
    return ( 
        <div className="p-5">
            <h1 className="text-lg text-blue-500 mb-2">Página de login</h1>
            <p>Você estpa logado como <strong>{admin == true ? <span>Administrador</span> : <span>Usuário</span>}</strong>.</p>
            <button onClick={()=>adminAcesso(!admin)} className={`${admin == true ? `bg-sky-500` : `bg-red-500`} mt-3 text-white p-2`}>{admin == true ? <span>Voltar para usuário</span> 
            :<span>Entrar como administrador</span>}</button>

            {
                admin == true? 
                    <div>
                        <h2 className="text-lg text-lime-800 mt-10">Olá administrador</h2>
                        <p>Seja bem-vindo</p>
                    </div>
                :
                    <div></div>
            }
            

        </div>
     );
}

export default Login;
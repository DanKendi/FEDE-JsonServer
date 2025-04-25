"use client"
import { useState } from 'react';
import api from '@/services/api';
import React from 'react'

interface Usuario {
    nome: string;
    usuario: string;
    senha: string;
    status: string;
}

const CadastrarUsuario = () => {
    const [novoUsuario, setNovoUsuario] = useState<Usuario>({
        nome:"", usuario:"", senha:"", status:"ativo"})

        const salvarUsuario = () =>{
            api.post("/login",novoUsuario)
            .then(()=>alert("Usuário cadastrado com sucesso!"))
            .catch(()=>alert("Erro ao cadastrar"))
        }
    return (
        <>
            <h1>CADASTRAR USUÁRIO</h1>
            <div style={{display:"flex", flexDirection:"column", maxWidth: "300px"}}>

                <label>Nome Completo:</label> 
                <input type='text' placeholder='Digite o nome' value={novoUsuario.nome}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, nome: evento.target.value})}></input>

                <label>Usuário:</label> 
                <input type='text' placeholder='Digite o usuário' value={novoUsuario.usuario}
                onChange={(evento) => setNovoUsuario({ ...novoUsuario, usuario: evento.target.value})}></input>

                <label>Senha:</label> <input type='password' placeholder='Digite a senha' value={novoUsuario.senha}
                onChange={(evento)=> setNovoUsuario({ ...novoUsuario, senha: evento.target.value})}></input>
                <button onClick={salvarUsuario}>SALVAR</button>
            </div>

        </>
    )
}

export default CadastrarUsuario;
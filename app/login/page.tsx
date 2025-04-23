"use client"
import { useEffect, useState } from "react"
import api from "@/services/api"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Usuario {
    id: number,
    nome: string,
    usuario: string,
    senha: string,
    status: string
}

const Login = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const router = useRouter();
    const carregarUsuarios = () => {
        api.get("/login")
            .then((resposta) => setUsuarios(resposta.data));
    }

    useEffect(() => {
        carregarUsuarios();
    }, []);

    return (
        <>
            <h1>LISTA DE USUÁRIOS</h1>
            <ul>
                {usuarios.map((usuario) => {
                    return (
                        <li key={usuario.id} onClick={() => router.push(`/login/${usuario.id}`)}>
                            <strong>NOME: </strong>{usuario.nome}
                            <strong>USUÁRIO: </strong>{usuario.usuario}
                            <strong>STATUS: </strong>{usuario.status}
                        </li>
                    )
                }
                )}
            </ul>
        </>
    )
}

export default Login;
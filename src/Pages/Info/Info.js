import "./Info.css";
import Header from "../../Components/Header/Header";

export default function Info() {
    return (
        <>
        <Header />
        <a href="https://cozacdev.com.br" target="_blank" rel="noreferrer">
            <iframe src="https://cozacdev.com.br" frameborder="0" title="Repositorio">
                <p>Não há suporte para iframe tente usar outro navegador</p>
            </iframe>
        </a>
        </>
    );
}
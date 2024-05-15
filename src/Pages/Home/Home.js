import "./Home.css";
import Header from "../../Components/Header/Header";
import Dados from "../../services/Dados.js";
import { useEffect, useState } from "react";

export default function Home() {

    const [animal, setAnimal] = useState(0);
    const [thumb, setThumb] = useState([]);
    const [show, setShow] = useState(false);
    const [thumbnails, setThumbnails] = useState([]);

    const adjustThumbnails = () => {
        let nextIndexes = [];
        for (let i = 0; i < 3; i++) { // Número de thumbnails desejados
            let index = (animal + i) % thumb.length; // Calcula o índice circular
            nextIndexes.push(thumb[index]);
        }
        setThumbnails(nextIndexes);
    };

    const handleAnimation = () => {
        setShow(true);
    
        // Opção para remover a classe após a animação para permitir repetição
        setTimeout(() => {
          setShow(false);
        }, 2000); // Duração da animação
    };

    function prev() {
        if(animal > 0){
            setAnimal(animal-1);
        }else if (animal === 0) {
            setAnimal(thumb.length-1);
        }
        handleAnimation();
    }
    function next() {
        if(animal < thumb.length-1){
            setAnimal(animal+1);
        }else if(animal === thumb.length-1) {
            setAnimal(0);
        }
        handleAnimation();
    }

    useEffect(() => {
        setThumb(Dados);
        handleAnimation();
    }, []);

    useEffect(() => {
        if (thumb.length > 0) {
            adjustThumbnails();
            handleAnimation();
        }
        // eslint-disable-next-line
    }, [animal, thumb]);

    return (
        <>
        <Header />
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src={Dados[animal].img} alt="animal" className={show ? "grow" : ""} />
                    <div className="content">
                        <div className={show ? "author show" : "author"}>COZACS</div>
                        <div className={show ? "title show" : "title"}>{Dados[animal].title}</div>
                        <div className={show ? "topic show" : "topic"}>{Dados[animal].topic}</div>
                        <div className={show ? "desc show" : "desc"}>{Dados[animal].desc}</div>
                        <div className={show ? "btn show" : "btn"}>
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thumbnail">
                {thumbnails.map((item, index) => (
                    <div key={index} className="item" onClick={() => setAnimal(item.id-1)}>
                        <img src={item.img} alt={item.title} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="desc">{item.topic}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={() => prev()}>prev</button>
                <button id="next" onClick={() => next()}>next</button>
            </div>
        </div>
        </>
    );
}
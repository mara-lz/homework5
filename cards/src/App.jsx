import './App.css'
import Card from "./components/Card.jsx";

const cardsData = [
    {
        img: "card-picture.png",
        title: "Карточка заголовок",
        link: {
            url: "#",
            text: "Ссылка куда-то",
        },
        body: "Некоторый текст у карточки"
    },
    {
        title: "Карточка без изображения",
        link: {
            url: "#",
            text: "Ссылка куда-то",
        },
        body: "Некоторый текст у карточки без изображения"
    },
    {
        img: "card-picture.png",
        link: {
            url: "#",
            text: "Ссылка куда-то",
        },
        body: "Некоторый текст у карточки без заголовка"
    },
    {
        img: "card-picture.png",
        title: "Карточка без ссылки",
        body: "Некоторый текст у карточки без ссылки"
    },

    {
        img: "card-picture.png",
        title: "Карточка без содержания",
        link: {
            url: "#",
            text: "Ссылка куда-то",
        }
    }
];

function App() {
    return (
        <div className="container">
            {cardsData.map((item, idx) => (
                <Card key={idx} img={item.img} title={item.title} link={item.link}>
                    {item.body}
                </Card>
            ))}
        </div>
    )
}

export default App

import News from "./News.jsx";

//Список новостей сверху
function NewsList({newsList}) {
    return (
        <div>
            {newsList.map((item, idx) => (
                <News key={idx} img={item.img} title={item.title} url={item.url}>
                    {item.body}
                </News>
            ))}
        </div>
    )
}

export default NewsList;
//Средний блок поиска - сама форма поиска Яндекса
function SearchForm({ img, title, url }) {
    return (
            <div>
                <a href={url} target="_blank">
                    <img src={img} alt={title} title={title}/>
                </a>
                <input type="text" name="search"/>
                <button>
                    <span>Найти</span>
                </button>
            </div>
    )
}

export default SearchForm;
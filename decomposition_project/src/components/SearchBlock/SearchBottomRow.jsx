//Средний блок поиска - текст под строкой поиска
function SearchBottomRow({text, url }) {
    return (
        <div>
            Найдётся всё. Например,
            <a href={url} target="_blank">
                {text}
            </a>
        </div>
    )
}

export default SearchBottomRow;
//Одна строка-новость
function News({img,title, url,children }) {
    return (
        <div>
            <a href={url} target="_blank">
                <img src={img} alt={title} title={title}/>
            </a>
            <div>
                {children}
            </div>
        </div>
    )
}

export default News;
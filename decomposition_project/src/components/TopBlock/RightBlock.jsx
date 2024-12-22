//блок сверху, справа (работа над ошибками)
function RightBlock({url,img,title}) {
    return (
        <div>
            <div>
                <a href={url} target="_blank">
                    <img src={img} alt={title} title={title}/>
                </a>
            </div>
            <div>
                <a href={url} target="_blank">
                    Работа над ошибками
                </a>
            </div>
            <div>
                <a href={url} target="_blank">
                    Смотрите на Яндексе и запоминайте
                </a>
            </div>
        </div>
    )
}

export default RightBlock;
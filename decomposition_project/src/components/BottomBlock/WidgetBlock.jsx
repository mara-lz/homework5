//базовый виджет для всех типов виджетов из нижнего блока
function WidgetBlock({header,url,children}) {
    return (
        <div>
            <a href={url} target="_blank">
                <h2>{header}</h2>
            </a>
            <div>
                {children}
            </div>
        </div>
    )
}

export default WidgetBlock;
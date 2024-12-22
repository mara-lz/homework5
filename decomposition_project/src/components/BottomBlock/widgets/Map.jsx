import WidgetBlock from "../WidgetBlock.jsx";

//Нижний блок - виджет карта - список данных карты
function Map({mapList, header,url}) {
    return (
        <WidgetBlock header={header} url={url}>
            <div>
                {
                    mapList.map((item, idx) => (
                        <div key={idx}>
                            <div>
                                <a href={item.url} target="_blank">
                                    {item.mainHeader}
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </WidgetBlock>
    )
}

export default Map;
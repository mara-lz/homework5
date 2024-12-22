import WidgetBlock from "../WidgetBlock.jsx";

//Нижний блок - виджет Посещаемое
function Visit({visitList, header,url}) {
    return (
        <WidgetBlock header={header} url={url}>
            <div>
                {
                    visitList.map((item, idx) => (
                        <div key={idx}>
                            <div>
                                <a href={item.url} target="_blank">
                                    {item.mainHeader}
                                </a>
                            </div>
                            <div>
                                {item.addHeader}
                            </div>
                        </div>
                    ))
                }
            </div>
        </WidgetBlock>
    )
}

export default Visit;
import WidgetBlock from "../WidgetBlock.jsx";

//Нижний блок - виджет телепрограммы
function Programm({programmList, header,url}) {
    return (
        <WidgetBlock header={header} url={url}>
            <div>
                {
                    programmList.map((item, idx) => (
                        <div key={idx}>
                            <div>
                                {item.time}
                            </div>
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

export default Programm;
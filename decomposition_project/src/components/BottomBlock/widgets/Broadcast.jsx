import WidgetBlock from "../WidgetBlock.jsx";

//Нижний блок - виджет эфир
function Broadcast({broadcastList, header,url}) {
    return (
        <WidgetBlock header={header} url={url}>
            <div>
                    {
                        broadcastList.map((item, idx) => (
                            <div key={idx}>
                                <div>
                                    <img src={item.img} alt={item.title} title={item.title}/>
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

export default Broadcast;
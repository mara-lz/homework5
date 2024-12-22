//Средний блок поиска - список сервисов
function ServiceList({serviceList}) {
    return (
        <div>
            {serviceList.map((item, idx) => (
                <a key={idx} href={item.url} target="_blank">
                    {item.text}
                </a>
            ))}
        </div>
    )
}

export default ServiceList;
String.prototype.firstLetterCaps = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//Самая верхняя строка верхнего блока слева - строка с заголовками, дата, время
function NewsTopRow({topUrlList}) {
    const {date} = topUrlList;
    return (
        <div>
            <a href={topUrlList.url1} target="_blank">
                {topUrlList.textUrl1}
            </a>
            <a href={topUrlList.url2} target="_blank">
                {topUrlList.textUrl2}
            </a>
            <a href={topUrlList.url3} target="_blank">
                {topUrlList.textUrl3}
            </a>
            <div>
                 <span>
                        <span>
                            <span>{date.getDate()} </span>
                            <span>{date.toLocaleString('dafault', {
                                month: 'long',
                                day: 'numeric'
                            }).split(' ')[1].firstLetterCaps()}, </span>
                            <span>{date.toLocaleDateString('default', {weekday: 'long'})} </span>
                        </span>
                        <span>
                                <span>{date.getHours()}</span>
                                <span>:</span>
                                <span>{date.getMinutes()}</span>
                        </span>
                    </span>
            </div>
        </div>
    )
}

export default NewsTopRow;
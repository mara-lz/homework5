import NewsBlock from "./NewsBlock.jsx";
import RightBlock from "./RightBlock.jsx";

//Верхний блок - строка с заголовками, дата, время, список новостей, курсы валют, блок справа (работа над ошибками)
function TopBlock({topUrlList, newsList, courseList, dataRightBlock}) {
    return (
        <div>
            <div>
                <NewsBlock newsList={newsList} topUrlList={topUrlList} courseList={courseList}/>
            </div>
            <div>
                <RightBlock img={dataRightBlock.img} title={dataRightBlock.title} url={dataRightBlock.url}/>
            </div>
        </div>
    )
}

export default TopBlock;
import NewsList from "./NewsList.jsx";
import CourseList from "./CourseList.jsx";
import NewsTopRow from "./NewsTopRow.jsx";

//Верхний блок слева - строка с заголовками, дата, время, список новостей, курсы валют
function NewsBlock({topUrlList, newsList,courseList,date}) {
    return (
        <div>
            <div>
                <NewsTopRow topUrlList={topUrlList}/>
            </div>
            <div>
                <NewsList newsList={newsList}/>
            </div>
            <div>
                <CourseList courseList={courseList}/>
            </div>
        </div>
    )
}

export default NewsBlock;
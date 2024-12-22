import Course from "./Course.jsx";

// курсы валют из верхнего блока
function CourseList({courseList}) {
    return (
        <div>
            {courseList.map((item, idx) => (
                    <Course key={idx} nameIndex={item.nameIndex} price={item.price} difference={item.difference}/>
            ))}
        </div>
    )
}

export default CourseList;
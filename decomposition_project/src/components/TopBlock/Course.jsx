//Один курс валюты/ индекс и т.д.
function Course({nameIndex,price,difference}) {
    return (
        <div>
            <div>
                {nameIndex}
            </div>
            <div>
                {price}
            </div>
            <div>
                {difference}
            </div>
        </div>
    )
}

export default Course;
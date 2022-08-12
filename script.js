const getAllCourses = 'http://localhost:3009/courses'
let data
async function callGetAPI(url) {
    const response = await fetch(url)
    data = await response.json()
    let search = ''// search by defualt value empty string
    showCourses(search)
}
callGetAPI(getAllCourses)
function showCourses(search) {
    let courses_continer = ''
    search=search.toLowerCase()
    for (let x in data) {
        let title = data[x]['title']
        let lower_title = title.toLowerCase()
        let find = lower_title.indexOf(search)
        console.log(find);
        console.log(search)
        if (find <= -1) continue
        let courseLink = data[x]['link']
        let urlImage = data[x]['image']
        let author = data[x]['author']
        let price = data[x]['price']
        let rating = data[x]['rating']
        let people = data[x]['people']
        courses_continer += `
        <a href=${courseLink}>
            <div class="course">
            <img class="img-course"  src=${urlImage} />
                <div>
                    <h3 class="title">
                        ${title}
                    </h3>
                    <p class"author">${author}</p>
                        <div class="rate">
                            <h3 style="color: rgb(110, 44, 0);margin-right: 3px;">
                                ${rating}
                            </h3>
                            <ul class="rank-corse">
                                <li> <i class="fa-solid fa-star star-icon"></i> </li>
                                <li> <i class="fa-solid fa-star star-icon"></i> </li>
                                <li> <i class="fa-solid fa-star star-icon"></i> </li>
                                <li> <i class="fa-solid fa-star star-icon"></i> </li>
                                <li><i class="fa-solid fa-star-half-stroke star-icon"></i></li>
                            </ul>
                            <h6 style="margin: 5px">(${people})</h6>
                        </div>
                        <h4>E£ ${price}</h4>
                </div>
            </div>
        </a>
        `
    }
    document.getElementById('courses').innerHTML = courses_continer
}
function searchByInputValue() {
    showCourses(document.getElementById('input-search').value)
}

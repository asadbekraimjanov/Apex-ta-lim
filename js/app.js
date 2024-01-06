document.getElementById('first-image-selected-course').onclick = function (){
    document.getElementById('second-image-selected-course').style.backgroundColor = '#646464';
    document.getElementById('first-image-selected-course').style.backgroundColor = '#00285B';
    document.getElementById('third-image-selected-course').style.backgroundColor = '#646464';

    // document.getElementById('course-1').style.position = 'absolute';
    // document.getElementById('course-2').style.position = 'absolute';
    // document.getElementById('course-3').style.position = 'absolute';

    // document.getElementById('course-1').style.marginLeft = '0px';
    // document.getElementById('course-2').style.marginLeft = '0px';
    // document.getElementById('course-3').style.marginLeft = '0px';
}

document.getElementById('second-image-selected-course').onclick = function (){
    document.getElementById('second-image-selected-course').style.backgroundColor = '#00285B';
    document.getElementById('first-image-selected-course').style.backgroundColor = '#646464';
    document.getElementById('third-image-selected-course').style.backgroundColor = '#646464';

    // document.getElementById('course-1').style.position = 'absolute';
    // document.getElementById('course-2').style.position = 'absolute';
    // document.getElementById('course-3').style.position = 'absolute';

    // document.getElementById('course-1').style.marginLeft = '393px';
    // document.getElementById('course-2').style.marginLeft = '400px';
    // document.getElementById('course-3').style.marginLeft = '-793px';
}

document.getElementById('third-image-selected-course').onclick = function (){
    document.getElementById('second-image-selected-course').style.backgroundColor = '#646464';
    document.getElementById('third-image-selected-course').style.backgroundColor = '#00285B';
    document.getElementById('first-image-selected-course').style.backgroundColor = '#646464';

//     document.getElementById('course-1').style.position = 'absolute';
//     document.getElementById('course-2').style.position = 'absolute';
//     document.getElementById('course-3').style.position = 'absolute';

//     document.getElementById('course-1').style.marginLeft = '793px';
//     document.getElementById('course-2').style.marginLeft = '-393px';
//     document.getElementById('course-3').style.marginLeft = '-400px';
}

document.getElementById('first-image-selected-teacher').onclick = function (){
    document.getElementById('second-image-selected-teacher').style.backgroundColor = '#646464';
    document.getElementById('first-image-selected-teacher').style.backgroundColor = '#00285B';
    document.getElementById('third-image-selected-teacher').style.backgroundColor = '#646464';
    

}

document.getElementById('second-image-selected-teacher').onclick = function (){
    document.getElementById('second-image-selected-teacher').style.backgroundColor = '#00285B';
    document.getElementById('first-image-selected-teacher').style.backgroundColor = '#646464';
    document.getElementById('third-image-selected-teacher').style.backgroundColor = '#646464';


}

document.getElementById('third-image-selected-teacher').onclick = function (){
    document.getElementById('second-image-selected-teacher').style.backgroundColor = '#646464';
    document.getElementById('third-image-selected-teacher').style.backgroundColor = '#00285B';
    document.getElementById('first-image-selected-teacher').style.backgroundColor = '#646464';


}
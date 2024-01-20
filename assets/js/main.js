function increase(valueElement, limit, targetValue){
    let SPEED = 40;
    for(let i = 0; i <= limit; i++){
        setTimeout(function(){
            const element = document.getElementById(valueElement);
            const percentage = (i / limit) * targetValue;
            element.style.width = percentage + "%";
            element.style.backgroundColor = getColorForPercentage(percentage);
            element.style.color = "#fff";
            element.style.textAlign = "center";
            element.style.lineHeight = "25px";
            element.innerHTML = Math.round(percentage) + "%";
        }, SPEED * i);
    }   
}

function getColorForPercentage(percentage) {
    // RGB values for brown
    const brownColor = [121, 68, 59];

    // Calculate the interpolated color based on the percentage
    const interpolatedColor = brownColor.map((value) => Math.round(value * (percentage / 100)));

    // Convert RGB values to CSS format
    const backgroundColor = `rgb(${interpolatedColor.join(',')})`;

    // Return the background color
    return backgroundColor;
}


increase("value1", 80, 80) //HTML
increase("value2", 70, 70) //CSS
increase("value3", 40, 40) //JS
increase("value4", 50, 50) //PHP
increase("value5", 60, 60) //SQL
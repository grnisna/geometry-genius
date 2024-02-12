// common function for result 
function inputFieldValue(fieldId){
    const result = parseFloat(document.getElementById(fieldId).value);
    return result;
}

// common function for show text 
function setElementText(elementId, result){
    const element = document.getElementById(elementId);
    element.innerText =  result;
}


// Triangle
document.getElementById('triangle-button').addEventListener('click', function(){
    const base = inputFieldValue('triangle-base');
    const height = inputFieldValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('please Provided valid number');
        document.getElementById('triangle-base').value = '';
        document.getElementById('triangle-height').value = '';
        return;
    }
    const result = 0.5 * base * height;
    setElementText("triangle-result", result)
})

// Rectangle 
document.getElementById('ractangle-button').addEventListener('click', function(){
    const  width = inputFieldValue('ractangle-width');
    const  length = inputFieldValue('ractangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('please Provided valid number');
        document.getElementById('ractangle-width').value = '';
        document.getElementById('ractangle-length').value = '';
        return;
    }
    const result = width * length;
    setElementText('ractangle-result',result);
})
// parallelogram 
document.getElementById('parallelogram-button').addEventListener('click', function(){
    const  base = inputFieldValue('parallelogram-base');
    const  height = inputFieldValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('please Provided valid number');
        document.getElementById('parallelogram-base').value = '';
        document.getElementById('parallelogram-height').value = '';
        return;
    }
    const result = base * height;
    setElementText('parallelogram-result',result)
})
// ellipse 
document.getElementById('ellipse-button').addEventListener('click', function(){
    const  A = inputFieldValue('ellipse-base');
    const  B = inputFieldValue('ellipse-height');
    if(isNaN(A) || isNaN(B)){
        alert('please Provided valid number');
        document.getElementById('ellipse-base').value = '';
        document.getElementById('ellipse-height').value = '';
        return;
    }
    const result = (3.14 * A * B).toFixed(2);
    
    setElementText('ellipse-result',result)
})


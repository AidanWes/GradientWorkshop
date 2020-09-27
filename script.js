let output = document.getElementById('output-text');

function color()
{
    let one = document.getElementById('gradient-one').value;
    let two = document.getElementById('gradient-two').value;
    let back = document.getElementById('background');
    let deg = document.getElementById('deg').value;
    let perOne = document.getElementById("percent-one").value;
    let perTwo = document.getElementById('percent-two').value;
    
    back.style.background =
        "linear-gradient(" + deg + "deg, " + one +" " + perOne + "%, " + two + " " + perTwo + "%)";
    
    back.style.backgroundAttachment = "fixed";
    back.style.backgroundRepeat = "no-repeat";
    
    output.innerHTML = "background: " + back.style.background + ";";
    
}

function copy()
{
    let copy = document.createElement('textarea');
    copy.value = output.innerHTML;
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
}
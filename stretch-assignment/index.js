

const allBlocks = document.querySelectorAll("div.block");
console.log(allBlocks);
//When a block is clicked, it should move to the top of the stack
allBlocks.forEach(block => {
    block.addEventListener('click', function(event) {
        allBlocks.forEach(one => one.style.order = 0);
        event.target.style.order = -1;
    });

    //While a mouse is clicked down on a box, it should move to the right
    // (It should continuously move, there is no limit on how far it will go).
    let interval;
    let pos =10;
    block.addEventListener('mousedown', function(event) {
        console.log(event.target);
        event.stopPropagation();
        interval = setInterval(function() {
            //console.log("mouse is down");
            pos++;
            event.target.style.marginLeft = pos + "px";
        }, 10);
    }, {
        capture: true
    });
    block.addEventListener('mouseup', function(event) {
        clearInterval(interval);
        //console.log("in mouse up");
    });
    block.addEventListener('mouseleave', function(event) {
        clearInterval(interval);
        //console.log("in mouse leave");
    });
    
});



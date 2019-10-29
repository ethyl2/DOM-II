

const allBlocks = document.querySelectorAll("div.block");

//When a block is clicked, it should move to the top of the stack
//TODO: Stretch: Animate the rockets, visually show them being transported to the top.
allBlocks.forEach(block => {
    block.addEventListener('click', function(event) {
        allBlocks.forEach(one => one.style.order = 0);
        console.log("in click event");
        //event.target.style.position = "relative";
        //TweenMax.to(event.target, 3, {top: "50%"});
        event.target.style.order = -1;
        //setTimeout(() => {event.target.style.order = -1;}, 5000);
    });

    //While a mouse is clicked down on a box, it should move to the right
    // (It should continuously move, there is no limit on how far it will go).
    let interval;
    let pos =10;
    block.addEventListener('mousedown', function(event) {
        //console.log(event.target);
        event.stopPropagation();
        interval = setInterval(function() {
            //console.log("mouse is down");
            pos++;
            event.target.style.marginLeft = pos + "px";
        }, 10);
    }, {
        capture: true
    });

    //TODO: Stretch: When the mouse button is released, 
    // it should travel back to its original position.
    block.addEventListener('mouseup', function(event) {
        clearInterval(interval);
        //event.target.style.marginLeft = 10;
        console.log("in mouse up");
    });
    
    block.addEventListener('mouseleave', function(event) {
        clearInterval(interval);
        event.target.style.marginLeft = 10;
        //console.log("in mouse leave");
    });
    
});



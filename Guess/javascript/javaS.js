document.querySelector(".control-buttons span").onclick = function() {
    let yourName = prompt("Whats your Name?");
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = 'Unknown';
    } else {
        document.querySelector(".name span").innerHTML = yourName;

    }
    document.querySelector(".control-buttons").remove();

}

let duration = 1000;
let blockContainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blockContainer.children);

let orderRange = [...Array(blocks.length).keys()];
// let orderRange = Array.from(Array(blocks.length).keys());
console.log(orderRange);
Shuffle(orderRange);
console.log(orderRange);

// Add Order Css Property to game blocks
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
    //Add click Event 
    block.addEventListener('click', function() {
        //Trigger the flip block function
        flipBlock(block);
    });
});

//Flip Block Function
function flipBlock(selectedBlock) {
    //Ad d class is flipped
    selectedBlock.classList.add('is-flipped');
    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
    //If the two selected blocks
    if (allFlippedBlocks.length === 2) {
        // console.log(`two flipped blocks seleced`);
        //Stop Clicking Function
        stopClicking();

        //Check Matched Block Function
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);


    }

    //Check Matched Block Function
}
//Stop clicking function
function stopClicking() {
    //Add Class No Clicking On main Container
    blockContainer.classList.add('no-clicking');
    setTimeout(() => {
        // Remove Class No clicking After the duration
        blockContainer.classList.remove('no-clicking')
    }, duration);
}
// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();


    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, duration);
        document.getElementById('Fail').play();
    }
}
// Shuffle Functionnnnn %

function Shuffle(array) {
    //Settings vars
    let current = array.length,
        temp,
        random;

    while (current > 0) {
        // Get Random Number 
        random = Math.floor(Math.random() * current);
        // Decrease Length By one 
        current--;
        // [1] Save Current Element in Stash
        temp = array[current];
        // [2] Current Element = Random Elemnt
        array[current] = array[random];
        // [3] Random Element = Get Element from Stash
        array[random] = temp;
    }
    return array;
}
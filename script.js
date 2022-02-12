var gameCont = document.querySelector("#gameContainer")

const color_light = "#c7f0d8"
const color_dark = "#43523d"


for (i=1;i<=48;i++){
    for (j=1;j<=84;j++){
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class","pixel")
        newDiv.setAttribute("id", i+"_"+j)
        newDiv.setAttribute("data-row", i)
        newDiv.setAttribute("data-col", j)
        gameCont.appendChild(newDiv)
    }
}

function game(){

    // defining tile coordinates and number patterns

    const tile_1_1 = [7,26]
    const tile_1_2 = [7,39]
    const tile_1_3 = [7,52]
    const tile_2_1 = [19,26]
    const tile_2_2 = [19,39]
    const tile_2_3 = [19,52]
    const tile_3_1 = [31,26]
    const tile_3_2 = [31,39]
    const tile_3_3 = [31,52]

    const num1 = [
        [0,0,1,1,0],
        [0,1,1,1,0],
        [0,0,1,1,0],
        [0,0,1,1,0],
        [0,0,1,1,0],
        [0,0,1,1,0],
        [0,0,1,1,0],
    ]

    const num2 = [
        [1,1,1,1,0],
        [0,0,0,1,1],
        [0,0,0,1,1],
        [0,1,1,1,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,1,1,1]
    ]

    const num3 = [
        [1,1,1,1,0],
        [0,0,0,1,1],
        [0,0,0,1,1],
        [0,1,1,1,0],
        [0,0,0,1,1],
        [0,0,0,1,1],
        [1,1,1,1,0],
    ]

    const num4 = [
        [0,0,0,1,1],
        [0,0,1,1,1],
        [0,1,0,1,1],
        [1,0,0,1,1],
        [1,1,1,1,1],
        [0,0,0,1,1],
        [0,0,0,1,1],
    ]

    const num5 = [
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,1,1,0],
        [0,0,0,1,1],
        [0,0,0,1,1],
        [0,0,0,1,1],
        [1,1,1,1,0],
    ]

    const num6 = [
        [0,1,1,1,0],
        [1,1,0,0,0],
        [1,1,1,1,0],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [0,1,1,1,0],
    ]

    const num7 = [
        [1,1,1,1,1],
        [0,0,0,1,1],
        [0,0,1,1,0],
        [0,0,1,1,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
        [1,1,0,0,0],
    ]

    const num8 = [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [0,1,1,1,0],
    ]

    const num9 = [
        [0,1,1,1,0],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [0,1,1,1,1],
        [0,0,0,0,1],
        [0,1,1,1,0],
    ]

    const num0 = [
        [0,1,1,1,0],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
        [0,1,1,1,0],
    ]


    function render(tile, numberSprite){
        for (let i=1;i<=7;i++){
            for(let j=1;j<=5;j++){
                let curRow = i+tile[0]
                let curCol = j+tile[1]
                let curDiv = document.querySelector(`[data-row="${curRow}"][data-col="${curCol}"]`)
                curDiv.classList.remove("dark")
                if (numberSprite[i-1][j-1] == 1){
                    curDiv.classList.add("dark")
                }
            }
        }
    }



    // testing

    render(tile_1_1, num1)
    render(tile_1_2, num2)
    render(tile_1_3, num3)
    render(tile_2_1, num4)
    render(tile_2_2, num5)
    render(tile_2_3, num6)
    render(tile_3_1, num7)
    render(tile_3_2, num8)
    render(tile_3_3, num9)



    let gameBoard=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    let tiles = [
        [tile_1_1,tile_1_2,tile_1_3],
        [tile_2_1,tile_2_2,tile_2_3],
        [tile_3_1,tile_3_2,tile_3_3]
    ]

    let nums = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9]

    function updateNums(){
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                switch (gameBoard[i][j]) {
                    case 0:
                        nums[i*3+j]=num0
                        break;
                    case 1:
                        nums[i*3+j]=num1
                        break;
                    case 2:
                        nums[i*3+j]=num2
                        break;
                    case 3:
                        nums[i*3+j]=num3
                        break;
                    case 4:
                        nums[i*3+j]=num4
                        break;
                    case 5:
                        nums[i*3+j]=num5
                        break;
                    case 6:
                        nums[i*3+j]=num6
                        break;
                    case 7:
                        nums[i*3+j]=num7
                        break;   
                    case 8:
                        nums[i*3+j]=num8
                        break;
                    case 9:
                        nums[i*3+j]=num9
                        break;
                    default:
                        break;
                }
            }
        }
    }

    function updateBoard(){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                render(tiles[i][j], nums[i*3+j])
            }
        }
    }

    function flipTile(tile){
        if(gameBoard[tile[0]][tile[1]]<9){
            gameBoard[tile[0]][tile[1]]=gameBoard[tile[0]][tile[1]]+1 
        } else{
            gameBoard[tile[0]][tile[1]]=0
        }
        if(tile[0]>0){
            if(gameBoard[tile[0]-1][tile[1]]<9){
                gameBoard[tile[0]-1][tile[1]]=gameBoard[tile[0]-1][tile[1]]+1  
            } else{
                gameBoard[tile[0]-1][tile[1]]=0
            }
        }
        if(tile[0]<2){
            if(gameBoard[tile[0]+1][tile[1]]<9){
            gameBoard[tile[0]+1][tile[1]]=gameBoard[tile[0]+1][tile[1]]+1  
            } else{
                gameBoard[tile[0]+1][tile[1]]=0
            }
        }
        if(tile[1]>0){
            if(gameBoard[tile[0]][tile[1]-1]<9){
                gameBoard[tile[0]][tile[1]-1]=gameBoard[tile[0]][tile[1]-1]+1
            } else{
                gameBoard[tile[0]][tile[1]-1]=0
            }
        }
        if(tile[1]<2){
            if(gameBoard[tile[0]][tile[1]+1]<9){
            gameBoard[tile[0]][tile[1]+1]=gameBoard[tile[0]][tile[1]+1]+1
            } else{
                gameBoard[tile[0]][tile[1]+1]=0
            }
        }


        updateNums()
        updateBoard()
        checkVictory()
    }


    function shuffle(){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                let flipCount = Math.floor(Math.random()*5)
                for(i=0;i<flipCount;i++){
                    flipTile([i,j])
                }
            }
        }
    }

    document.addEventListener("keydown", e=>{
        switch (e.key.toLocaleLowerCase()) {
            case "q":
                flipTile([0,0])
                playClickSound()
                break;
            case "w":
                flipTile([0,1])
                playClickSound()
                break;
            case "e":
                flipTile([0,2])
                playClickSound()
                break;
            case "a":
                flipTile([1,0])
                playClickSound()
                break;
            case "s":
                flipTile([1,1])
                playClickSound()
                break;
            case "d":
                flipTile([1,2])
                playClickSound()
                break;
            case "z":
                flipTile([2,0])
                playClickSound()
                break;
            case "x":
                flipTile([2,1])
                playClickSound()
                break;
            case "c":
                flipTile([2,2])
                playClickSound()
                break;  
        }
    })

    function checkVictory(){
        let isVic = true
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                if(gameBoard[i][j]!=0){
                    isVic=false
                    return
                }
            }
        }
        victory()
    }

    function victory(){
        victoryAudio.play()
        screenBlink()
        setTimeout(function(){shuffle()}, 1200)
        victoryAudio.play()
    }

    function screenOn(){
        let divs=document.querySelectorAll(".pixel")
        divs.forEach(div => div.classList.add("dark")
        );
    }

    function screenOff(){
        let divs=document.querySelectorAll(".pixel")
        divs.forEach(div => div.classList.remove("dark")
        );
    }

    function screenBlink(){
        screenOn()
        let interval = 200
        setTimeout(function(){screenOff()}, interval)
        setTimeout(function(){screenOn()}, interval*2)
        setTimeout(function(){screenOff()}, interval*3)
        setTimeout(function(){screenOn()}, interval*4)
        setTimeout(function(){screenOff()}, interval*5)
    }
    
    let clickAudio = new Audio("./sounds/C5.wav")
    let victoryAudio = new Audio("./sounds/good3.wav")

    function playClickSound(){
        let audio = document.createElement("audio")
        audio.src = "./sounds/C5.wav"
        audio.addEventListener("ended", function() {
            document.removeChild(this)
        }, false)
        audio.play()
    }

    shuffle()

    updateNums()
    updateBoard()
    }
    
    
game()


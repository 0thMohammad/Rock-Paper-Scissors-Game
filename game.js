/// Window 1 Variables ///

const gameWindowHolder = document.querySelector('.game-window-holder');
const gameWindow = document.querySelector('.game-window');
const playBtn = document.querySelector('.play-btn');
const exitBtn = document.querySelector('.exit');

/// Window 1 Event Listeners ///

exitBtn.addEventListener('click', () => {
    document.p
})

playBtn.addEventListener('click', () => {
    gameWindow.remove();

    let characktersWindow = document.createElement('div');
    characktersWindow.classList.add('charackters-window');

    let characktersList = document.createElement('div');
    characktersList.classList.add('charackters-list');

    let characktersListheader = document.createElement('h2');
    characktersListheader.innerText = 'Characters List';

    characktersList.appendChild(characktersListheader);

    /// Com Charackters ///

    let comCharackters = document.createElement('div');
    comCharackters.classList.add('com-charackters');

    let comCharackter1 = document.createElement('div');
    comCharackter1.classList.add('com-charackters-all');
    comCharackter1.classList.add('com1');

    /// Com Charackter 1 Event Listeners ///

    comCharackter1.addEventListener('click', () => {
        comCharackter1.classList.toggle('com-selected');
        let comCharackterSelected1 = document.createElement('div');
        comCharackterSelected1.classList.add('com-charackter-selected1');
        gameWindowHolder.appendChild(comCharackterSelected1)
    });

    let comCharackter2 = document.createElement('div');
    comCharackter2.classList.add('com-charackters-all');
    comCharackter2.classList.add('com2');

    /// Com Charackter 2 Event Listeners ///

    comCharackter2.addEventListener('click', () => {
        comCharackter2.classList.toggle('com-selected');
        let comCharackterSelected2 = document.createElement('div');
        comCharackterSelected2.classList.add('com-charackter-selected2');
        gameWindowHolder.appendChild(comCharackterSelected2)
    });

    let comCharackter3 = document.createElement('div');
    comCharackter3.classList.add('com-charackters-all');
    comCharackter3.classList.add('com3');

    /// Com Charackter 3 Event Listeners ///

    comCharackter3.addEventListener('click', () => {
        comCharackter3.classList.toggle('com-selected');
        let comCharackterSelected3 = document.createElement('div');
        comCharackterSelected3.classList.add('com-charackter-selected3');
        gameWindowHolder.appendChild(comCharackterSelected3)
    });

    /// Player Charackters ///

    let playerCharackters = document.createElement('div');
    playerCharackters.classList.add('player-charackters');

    let playerCharackter1 = document.createElement('div');
    playerCharackter1.classList.add('player-charackters-all');
    playerCharackter1.classList.add('p1');

    /// Player Charackter 1 Event Listeners ///

    playerCharackter1.addEventListener('click', () => {
        playerCharackter1.classList.toggle('player-selected');
        let playerCharackterSelected1 = document.createElement('div');
        playerCharackterSelected1.classList.add('player-charackter-selected1');
        gameWindowHolder.appendChild(playerCharackterSelected1)
    });

    let playerCharackter2 = document.createElement('div');
    playerCharackter2.classList.add('player-charackters-all');
    playerCharackter2.classList.add('p2');

     /// Player Charackter 2 Event Listeners ///

     playerCharackter2.addEventListener('click', () => {
        playerCharackter2.classList.toggle('player-selected');
        let playerCharackterSelected2 = document.createElement('div');
        playerCharackterSelected2.classList.add('player-charackter-selected2');
        gameWindowHolder.appendChild(playerCharackterSelected2)
    });

    let playerCharackter3 = document.createElement('div');
    playerCharackter3.classList.add('player-charackters-all');
    playerCharackter3.classList.add('p3');

     /// Player Charackter 3 Event Listeners ///

     playerCharackter3.addEventListener('click', () => {
        playerCharackter3.classList.toggle('player-selected');
        let playerCharackterSelected3 = document.createElement('div');
        playerCharackterSelected3.classList.add('player-charackter-selected3');
        gameWindowHolder.appendChild(playerCharackterSelected3)
    });

    let startBtnHolder = document.createElement('div');
    startBtnHolder.classList.add('start-game-holder');

    let startGameBtn = document.createElement('button');
    startGameBtn.classList.add('start-game-btn');
    startGameBtn.innerText = 'Start Game';

    /// Start Game Window Event Listeners ///

    startGameBtn.addEventListener('click', () => {

        let gameArena = document.createElement('div');
        gameArena.classList.add('game-arena');
        gameWindowHolder.appendChild(gameArena)

        let field1 = document.createElement('div')
        field1.classList.add('field-1')

        let field2 = document.createElement('div')
        field2.classList.add('field-2')

        gameArena.append(field1, field2)

        /// Com Charackter & Score ///

        let comCharackterHolder = document.createElement('div')
        comCharackterHolder.classList.add('com-charackter-holder')

        let comCharackter = document.createElement('div')
        comCharackter.classList.add('com-charackter')

        let comScore = document.createElement('div')
        comScore.classList.add('com-score')
        let comWins = document.createElement('div')
        comWins.innerText = 'W: ' + 0

        let comLoss = document.createElement('div')
        comLoss.innerText = 'L: ' + 0

        let comTies = document.createElement('div')
        comTies.innerText = 'T: ' + 0

        comScore.append(comWins, comLoss, comTies)


        let comOptions = document.createElement('div')
        comOptions.classList.add('com-options')
       
        let rock1 = document.createElement('div')
        rock1.classList.add('com-options-btn')
        rock1.style.background = 'url(img/Rock.png) center / cover'
        rock1.style.transform = 'rotate(180deg)'

        let paper1 = document.createElement('div')
        paper1.classList.add('com-options-btn')
        paper1.style.background = 'url(img/Paper.png) center / cover'
        paper1.style.transform = 'rotate(180deg)'

        let scissors1 = document.createElement('div')
        scissors1.classList.add('com-options-btn')
        scissors1.style.background = 'url(img/Scissors.png) center / cover'
        scissors1.style.transform = 'rotate(180deg)'

        /// Player Charackter & Score ///

        let playerCharackterHolder = document.createElement('div')
        playerCharackterHolder.classList.add('player-charackter-holder')
        
        let playerCharackter = document.createElement('div')
        playerCharackter.classList.add('player-charackter')

        let playerScore = document.createElement('div')
        playerScore.classList.add('player-score')
        let playerWins = document.createElement('div')
        playerWins.innerText = 'W: ' + 0

        let PlayerLoss = document.createElement('div')
        PlayerLoss.innerText = 'L: ' + 0

        let PlayerTies = document.createElement('div')
        PlayerTies.innerText = 'T: ' + 0

        playerScore.append(playerWins, PlayerLoss, PlayerTies)

        let playerOptions = document.createElement('div')
        playerOptions.classList.add('player-options')

        
    let hand = ['rock', 'paper', 'scissors']
    let winMove 
    let NeutralMove

    let w = 0
    let l = 0
    let t = 0

    let comW = 0
    let comL = 0
    let comT = 0

    let playerChoice = 0
    let comChoice = 0

    

        let rock2 = document.createElement('div')
        rock2.classList.add('player-options-btn')
        rock2.style.background = 'url(img/Rock.png) center / cover'

        /// Player Rock Button Event Listener ///

       
        rock2.addEventListener('click', playRock)
        rock2.addEventListener('click', animationHolder)
        rock2.addEventListener('click', beginAnimation)
        rock2.addEventListener('click', endAnimation)
        

/////////////////////////////////////////////////////////////

        let paper2 = document.createElement('div')
        paper2.classList.add('player-options-btn')
        paper2.style.background = 'url(img/Paper.png) center / cover'

        /// Player Paper Button Event Listener ///
        
        paper2.addEventListener('click', playPaper )
        paper2.addEventListener('click', animationHolder)
        paper2.addEventListener('click', beginAnimation)
        paper2.addEventListener('click', endAnimation)
        
       
////////////////////////////////////////////////////////////        

        let scissors2 = document.createElement('div')
        scissors2.classList.add('player-options-btn')
        scissors2.style.background = 'url(img/Scissors.png) center / cover'
        
        /// Player Scissors Button Event Listener ///
        
        scissors2.addEventListener('click', playScissors)
        scissors2.addEventListener('click', animationHolder)
        scissors2.addEventListener('click', beginAnimation)
        scissors2.addEventListener('click', endAnimation)
        


////////////////////////////////////////////////////////////       


      /// Game Functions ///

        function comPlay() {
            let random = Math.floor(Math.random() * hand.length)
            comChoice = random
            
            if(random == 0) {
                winMove = 1
                NeutralMove = 0

            }else if(random == 1) {
                winMove = 2
                NeutralMove = 1
            }else {
                winMove = 0
                NeutralMove = 2
            }
        }

        function playRock() {
            if(animationRunning == true){

            }else {
                comPlay()
                playerChoice = 0
                checkResult()
                
    
            }
            
        }

        function playPaper() {
            if(animationRunning == true){

            }else{
                comPlay()
                playerChoice = 1
                checkResult()
    
            }
            
        }

        function playScissors() {
           if(animationRunning == true){

           }else{
            comPlay()
            playerChoice = 2
            checkResult()

           }
        }

        function checkResult() {
            if(winMove == playerChoice) {
                w++
                playerWins.innerText = 'W: ' +  w

                comL++
                comLoss.innerText = 'L: ' + comL

            }else if(NeutralMove == playerChoice) {
                t++
                PlayerTies.innerText = 'T: ' + t

                comT++
                comTies.innerText = 'T: ' + comT
            }else {
                l++
                PlayerLoss.innerText = 'L: ' + l

                comW++
                comWins.innerText = 'W: ' + comW
            }
        }

        let animationHolderr
        let playerAnimation
        let comAnimation
        let animationBeginning
        let animationEnding
        let animationRunning = false

        function animationHolder() {
            if(animationRunning == true){

            }else{
                animationHolderr = document.createElement('div')
                animationHolderr.classList.add('animation-holder')
                gameArena.appendChild(animationHolderr)
    
                 playerAnimation = document.createElement('div')
                playerAnimation.classList.add('player-animation')
    
                comAnimation = document.createElement('div')
                comAnimation.classList.add('com-animation')
                
                animationHolderr.append(comAnimation, playerAnimation)
                //render computer hand
                if(comChoice == 0){
                    comAnimation.style.background = 'url(img/comRock.png) center / cover'
                    
                }else if(comChoice == 1) {
                    comAnimation.style.background = 'url(img/comPaper.png)center / cover'
                }else {
                    comAnimation.style.background = 'url(img/comScissors.png)center / cover'
                }
                //render player hand
                if(playerChoice == 0){
                    playerAnimation.style.background = 'url(img/Rock.png) center / cover'
                    
                }else if(playerChoice == 1) {
                    playerAnimation.style.background = 'url(img/Paper.png)center / cover'
                }else {
                    playerAnimation.style.background = 'url(img/Scissors.png)center / cover'
                }
                
            }
            
        }

        function beginAnimation() {
            
           animationRunning = true
           animationBeginning = setTimeout(playAnimation, 250)

            function playAnimation() {

                
                playerAnimation.style.transform = 'translate(0, -61px)'
                playerAnimation.style.transition = '0.5s ease-in'
    
               
                comAnimation.style.transform = 'translate(0, 61px)'
                comAnimation.style.transition = '0.5s ease-in'
                

            }
            

        }

   
        function endAnimation() {
         animationEnding =  setTimeout(stopAnimation, 1000)
         function stopAnimation() {
            animationRunning = false
            animationHolderr.remove()
            
            
         }
         
 
        }


       

        comOptions.append(rock1, paper1, scissors1)
        playerOptions.append(rock2, paper2, scissors2)
        comCharackterHolder.append(comScore, comCharackter)
        playerCharackterHolder.append(playerCharackter, playerScore)
        field1.append(comCharackterHolder, comOptions)
        field2.append(playerOptions, playerCharackterHolder)

        characktersWindow.remove()
    })

    

    comCharackters.append(comCharackter1, comCharackter2,comCharackter3)
    playerCharackters.append(playerCharackter1, playerCharackter2, playerCharackter3)
    startBtnHolder.appendChild(startGameBtn)
    characktersWindow.append(characktersList, comCharackters, playerCharackters, startBtnHolder)
    gameWindowHolder.appendChild(characktersWindow)
})


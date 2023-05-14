const expect = chai.expect;
const assert = chai.assert;


describe('Game', function() {
  describe('compareHands', function() {
    it('should correctly evaluate hands and increment scores', function() {
      class Card {
    /**this class is needed to be able to have refer to a card object. No method is needed since we just need a holder for the card and its suit,name and value */
    constructor(value, name, suit) {
      this.value = value;
      this.name = name;
      this.suit = suit;
    }
  }
        class Players {
            /**Player class is needed for me to be able to have each instance of a new player seperated with their hand and score; we need to be able to refer to them inside differrent classes */
            constructor(name) {
              this.name = name;
              this.score = 0;
              this.hand = [];
            }
          }
          class Deck {
            constructor() {
              this.deck = [];
              /*For the values I am setting :
            Ace = 1
            Jack = 11
            Queen = 12
            King = 13
            
            Giving them a numerical value to be able to compare cards and decide winner based off value of card*/
              this.suits = ["❤️", "♣️", "♦️", "♠️"];
              this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
              for (let s = 0; s < this.suits.length; s++) {
                for (let i = 0; i < this.values.length; i++) {
                  this.deck.push(
                    new Card(i + 1, this.getValueString(this.values[i]), this.suits[s])
                  );
                }
              }
            }
            getValueString(value) {
              /**I needed to create a string value for the name of the card for these higher value cards. Makes it easier to know when it comes to testing. We can print out the name,suit and value of the card
               * allowing us to ensure the code is doing what it needs to.
               */
              switch (value) {
                case 1:
                  return "Ace";
                case 11:
                  return "Jack";
                case 12:
                  return "Queen";
                case 13:
                  return "King";
                default:
                  return String(value);
              }
            }
            /**In this section fo the function we created a shuffle so cards are now in random order when they get dealt out to the players involved */
            shuffle() {
              for (let i = this.deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * i);
                let temp = this.deck[i];
                this.deck[i] = this.deck[j];
                this.deck[j] = temp;
              }
            }
          }
      
      class Game {
        /**This is the driver of the whole game for war. Here we build the class by adding players and deck of cards */
        constructor() {
          /**Creating two new players and a new deck that has been shuffled to be used in the game. */
          this.player1 = new Players('player1');
          this.player2 = new Players('player2');
          this.deckShuffled = new Deck();
          this.deckShuffled.shuffle();
        }
        compareHands(){
            /**For this function a loop was used with if and else if statments. It made it easy to go through the number of times the lenght of the players hand allowed.
             * Each loop evaluates what scenario fits the occurence and adds the points where needed or moves on to the top if it's a tie
             */
            for (let i = 0; i <this.player1.hand.length; i++){
             
              if(this.player1.hand[i].value > this.player2.hand[i].value){
                //console.log(`Player1 card ${this.player1.hand[i].name}${this.player1.hand[i].suit} beats Player2 card ${this.player2.hand[i].name}${this.player2.hand[i].suit}`)
                this.player1.score += 1;
              }
              else if(this.player2.hand[i].value > this.player1.hand[i].value){
               // console.log(`Player2 card ${this.player2.hand[i].name}${this.player2.hand[i].suit} beats Player1 card ${this.player1.hand[i].name}${this.player1.hand[i].suit}`)
                this.player2.score += 1;
                /**This was more for a side of caution to ensure that this for loop is actually working the way it needs to.Makes it easy to test
                 * and ensure this works.
                 */
              } else{
              //console.log("It's a tie!");
            }
          }
        }
    }
      const game = new Game();
      
//const player1 = new Players ('Alice');
game.player1.hand = [
  {value: 2, name: 2, suit: '❤️'},
  {value: 6, name: 6, suit: '♠️'},
  {value: 10, name: 10, suit: '♣️'}
];

//const player2 = new Players ('Bob');
game.player2.hand = [
  {value: 3, name: 3, suit: '♦️'},
  {value: 5, name: 5, suit: '❤️'},
  {value: 9, name: 9, suit: '♠️'}
];
      game.compareHands();
      expect(game.player1.score).to.equal(2);
      expect(game.player2.score).to.equal(1);
    });
  });
});


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
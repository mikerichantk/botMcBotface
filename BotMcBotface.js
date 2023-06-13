/**
 * BasicBot: Only picks up a card if it is out of tokens
 */
export default class {
    // My name!
    name = "Bot McBotface";
  
    // Do not touch this! After each game, our tournament points go to this
    // player.
    id;
  
    // Our id for this game. Player zero goes first.
    playerNumber = -999;
  
    // How many tokens we have
    tokens = -999;

    cards = [];
  
    /**
     * This is called when we are created.
     * Additional variable initialization can happen here, but the params cannot
     * be changed.
     */
    constructor(id) {
      this.id = id;
    }
  
    /**
     * Initialize ourselves at the beginning of a game
     *
     * @param playerNumber The game's id number for us. It also shows up in
     *        reportTurn.
     * @param playerCount The total number of players in this game, including us.
     * @param tokens The number of tokens each player gets at the start of the
     *        game. That's now!
     */
    beginGame(
      playerNumber,
      playerCount,
      tokens,
    ) {
      // Remember which player we are
      this.playerNumber = playerNumber;
  
      // Collect our starting tokens
      this.tokens = tokens;
    }
  
    /**
     * Here I can keep tabs on the actions of all players, including myself
     *
     * @param playerNumber The id of the player who did this action
     * @param card The value of the card this player considered
     * @param tokens The number of tokens on the face-up card
     * @param taken True if the player picked up the card and tokens
     */
    reportTurn(
      playerNumber,
      card,
      tokens,
      taken,
    ) {
      // Only keep track of our own stuff
      if (playerNumber === this.playerNumber) {
        if (taken) {
          // Oh, we picked up some tokens!
          this.tokens += tokens;
  
          // To-do: Should we keep track of what cards we have?
          this.cards.push(card);
        } else {
          // We did not pick up a card. We must have spent a token.
          this.tokens--;
        }
      } else {
        // To-do: Should we snoop on what other players are doing?
      }
    }
  
    /**
     * Decide whether we want to pick up the card
     *
     * @param card The value of the face-up card
     * @param tokens The number of tokens currently on the face-up card
     * @return true if we want to pick up the card and tokens
     */
    playTurn(card, tokens) {
      // If we are out of tokens then we must pick up the card
      if (this.tokens === 0) {
        return true;
      }

      let worth = card - tokens;

      

      this.cards.forEach(c => {
        if (++c === card)
        {
            return true;
        }
        --c;
        if (--c === card)
        {
            return true;
        }
      });
  
      // To-do: maybe sometimes we will want to pick up the card anyways???
      if (worth < 10) {
        return true;
      }
  
      // No thanks! I'll spend a token to pass
      return false;
    }
  
    /**
     * This method shows an example of using an imported utility function
     */
    utilityExample() {
      // Compute the score for this hypothetical player
      const score = ScorePlayer({
        cards: [3, 6, 7, 4],
        tokens: 6,
      });
    }
  }
  
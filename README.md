# Snake Game in JavaScript

[Demo](https://snake.simnova.sk/) 

This is a simple Snake Game built with JavaScript, HTML, and CSS. The player controls a snake that grows in length each time it eats an apple, and the goal is to score as many points as possible without hitting the game boundaries.

## Game Features
**Responsive Controls:** Use the arrow keys to control the snake's direction.

**Score Tracking:** Displays current and high scores.

**High Score Persistence:** The game saves the high score in the browser's localStorage to keep track even after page reloads.

**Random Apple Placement:** Each time the snake eats an apple, a new apple appears at a random position on the board.

## Gameplay Instructions

- Use the arrow keys to move the snake.
  
- The game ends if the snake hits the edge of the board.

- Each time the snake eats an apple, the score increases by 1, and the apple respawns at a new random location.

## Code Overview
The game logic is implemented in JavaScript as follows:

1. Game Variables:

- `playboard`: Represents the HTML board where the snake and apple are displayed.

- `scoreElement`, `highScoreElement`: Display the current score and high score.

- `appleX`, `appleY`: The x and y coordinates for the apple's position.

- `headX`, `headY`: The x and y coordinates for the snake's head position.

- `direction`, `velocityX`, `velocityY`: Handle the direction and speed of the snake.

- `score`, `highScore`: Track the current score and high score.

2. Event Listeners:

- `keydown` event listener captures arrow key presses to change the snake's direction.

3. Game Functions:

- `changeVelocity(event)`: Changes the snake's movement direction based on the arrow key pressed.

- `updateApplePosition()`: Randomly sets a new position for the apple on the playboard.

- `handleGameOver()`: Clears the game interval and reloads the page when the snake hits the boundaries.

- `renderGame()`: Renders the game board, moves the snake, and checks for collision with the apple and game boundaries.

4. Game Loop:

- `setInterval`: Calls `renderGame()` every 200 milliseconds to update the game state and re-render the board.

## How to Run the Game

1. Download or clone the project files.

2. Open index.html in a web browser to start the game.

3. Use the arrow keys to control the snake.

## Future Enhancements

1. Adding snake body segments to increase difficulty.

2. Implementing collision detection with the snake body.

3. Adding levels with increasing difficulty as the score goes up.

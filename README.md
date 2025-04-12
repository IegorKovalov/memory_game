# Memory Game

A fun and interactive memory card matching game built with React.

**Live Demo:** [https://memory-game-2z20.onrender.com/](https://memory-game-2z20.onrender.com/)

## Description

This memory game challenges players to match pairs of cards with identical images. The game tracks matches, shows a winning screen when all pairs are found, and allows players to reset the game at any point.

## Features

- Dynamic card grid with customizable number of pairs
- Card flipping animations
- Match tracking
- Win detection
- Game reset functionality
- Responsive design

## Project Structure

The project is organized into components:
- `ExpensesTable`: Main game component that manages the game state
- `Card`: Component for rendering individual cards
- `GameStatus`: Component for showing the win state

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/IegorKovalov/memory_game.git
   cd memory_game
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## Usage

- Click on cards to flip them
- Try to find matching pairs of images
- When all pairs are matched, you win!
- Click the "Init game" button at any time to reset the game
- Click the "New game" button after winning to play again

## Customization

You can customize the game by modifying:
- The number of pairs to match by changing the `numOfPairs` prop
- The card back image by changing the `pic` prop
- The available card images in the `allImages` array

## Technologies Used

- React
- JavaScript (ES6+)
- CSS Grid

## Deployment

The game is deployed using Render and can be accessed at:
[https://memory-game-2z20.onrender.com/](https://memory-game-2z20.onrender.com/)

## Future Enhancements

- Score tracking
- Timer functionality
- Difficulty levels
- Sound effects
- Leaderboard

## License

This project is licensed under the MIT License.

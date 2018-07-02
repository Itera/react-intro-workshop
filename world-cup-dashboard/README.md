# World Cup Dashboard

The FIFA-committee needs your help! They just realized they have no production dashboard for the World Cup 2018 matches, yikes!

The committee have come up with a sketch of their MVP dashboard provided below. They wan't to be able to:
* Have the header and the buttons in the application to fit their theme
* Set the number of goals of each team
* Show the game-timer/clock
* Show a live chat of the stream
* Send a message to the live chat
* Embed a video player linked to youtube

![Dashboard sketch](src/content/dashboard_sketch.png?raw=true "Dashboard sketch")

## Task 1 - Themed header

First things first; lets spice up the header to better fit our theme.

* In `/components/AppHeader/AppHeader.js`, swap the default react logo with the football svg provided in `/content`

* Change the header text from the standard react header (Welcome to react) to _World Cup 2018 Dashboard_.

## Task 2 - ``<DashBoard />`` page
We need a place to put our smaller components that we are going to create. 

* Create an exportable component in `pages/DashBoard/` which renders ``<div>Hello world</div>``.
* Import and render the component in `App.js`

<small>Pssst... remember to use `default export {componentName}` to make it possible for other components and pages to import it.</small>

## Task 3 - ```<Button />```
The committee wanted their own themed buttons, that's understandable, the standard button in the browsers looks pretty dull. 

Let's create our own component ```<Button />``` with our own button style that we can use in the dashboard.


* ```<Button />``` is required to receive the props ```onClick```(function) and ```name```(string).

* In `/Button/` there a stylsheet `Button.css` which can be imported. The sheet includes the style `.button`.

Check if the button component works;
```
<Button onClick={() => alert('Hey!')} name="Hey!" />
```

## Task 4 - ``<GoalCounter />``

![Goal counter](src/content/goal_counter.png?raw=true "Goal counter") 

## Task 5 - ``<GameTimer />``
![Game timer](src/content/game_timer.png?raw=true "Game timer") 

## Task 6 - ``<ChatBoard />``
![Chat board](src/content/chat_board.png?raw=true "Chat board") 

## Task 7 - ``<MessageArea />``
![Message area](src/content/message_area.png?raw=true "Message area") 
Save messages in DashBoard.js state to be displayed in ChatBoard

## Task 8 - Show video using using third-party component; ``ReactPlayer``
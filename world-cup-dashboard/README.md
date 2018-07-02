# World Cup Dashboard

The FIFA-committee needs your help! They just realized they have no production dashboard for the World Cup 2018 matches, yikes!

The committee have come up with a sketch of their MVP dashboard provided below. They wan't to be able to:
* Have the header and the buttons in the application to fit their theme
* Set the number of goals of each team
* Show a live chat of the stream
* Send a message to the live chat
* Hide/show the live chat with a button
* Embed a video player linked to youtube
* Show the game-timer/clock

![Dashboard sketch](src/content/dashboard_sketch.png?raw=true "Dashboard sketch")

## Task 1 - Themed header

First things first; lets spice up the header to better fit our theme.

* In `src/components/AppHeader/AppHeader.js`, swap the default react logo with the football svg provided in `/content`

* Change the header text from the standard react header (Welcome to react) to _World Cup 2018 Dashboard_.

## Task 2 - ``<DashBoard />`` page
We need a container to put our smaller components that we are going to create in the coming tasks. This component is intended to be the orchestrator of our dashboard page.
 
To begin with we are just going to let `<DashBoard />` render _"Hello World"_.

* Create an exportable component in `src/pages/DashBoard/` which renders ``<div>Hello world</div>``.
* Import and render the component in `App.js`

<small>Pssst... remember to use `export default {componentName}` to make it possible for other components to import it.</small>

## Task 3 - ```<Button />```
The committee wanted their own themed buttons, that's understandable, the standard button in the browsers looks pretty dull. 

Let's create our own component ```<Button />``` with our own button style that we can use in the dashboard.

* ```<Button />``` is required to receive the props ```onClick```(function) and ```name```(string).

* In `/Button/` there a stylsheet `Button.css` which can be imported. The sheet includes the style `.button`.
* `<Button />` doesn't require any state and can be created as a functional component.

-- 

Check if the button component works by rendering
```
<Button onClick={() => alert('Hey!')} name="Hey!" />
```
in `<DashBoard />'s` render function.

## Task 4 - ``<GoalCounter />``
![Goal counter](src/content/goal_counter.png?raw=true "Goal counter") 

The committee needs a way of counting the goals of each team in the matches.

* The component requires a team name to be displayed using <strong>props</strong>.
* The component should count the goals using <strong>state</strong>.
* By pressing an increment ``<Button />`` or a decrement ``<Button />`` the amount of goals should be updated.

Render two copies of the component to display the score between Brazil and Mexico in ```<DashBoard />```


## Task 5 - ``<ChatBoard />``
![Chat board](src/content/chat_board.png?raw=true "Chat board")

The committee wants to display all the messages that are sent in to the stream with the author prefixed! Additionally, it's also wanted to change the title of the chat based on the game.

* `<ChatBoard />` requires a title of the chat.
* `<ChatBoard />` requires an <strong>array</strong> of <strong>messages</strong> with objects containing the author of the message, and the text itself. E.g
`{author: 'Kåre', text: 'Hei'}`
* `<ChatBoard />` doesn't require any state and can be created as a functional component.

Render ```<ChatBoard title="Brazil-Mexico" messages={[{author: 'Kåre', text: 'Hei'}, {author: 'Ole', text: 'Hallo'}]} />``` in `<DashBoard />` to check that the chat board works as expected.

## Task 6 - Toggle live chat
The live chat can take up much real-estate of the screen, and it's not always relevant to show the chat. Thus, the committee wants a button in their dashboard that toggles between hiding and viewing the live chat.
* Use `<DashBoard />`'s <strong>state</strong> along with <strong>conditional rendering</strong> to toggle the live chat

## Task 7 - ``<MessageArea />``
![Message area](src/content/message_area.png?raw=true "Message area") 

Instead of displaying hard coded messages, one should be able to post new messages. 

* `<MessageArea />` requires <strong>author</strong> to be included in <strong>props</strong>.
* `<MessageArea />` requires <strong>onSendMessage</strong>(function) to be included in <strong>props</strong>. This function should return objects with author and the text inputted on send. E.g
`{ author: 'Bob', text: 'Hei' }`
* Include `<MessageArea />` in `<DashBoard />`, e.g. `<MessageArea onSendMessage={this.yourFunction} author="Kristoffer" />`. 
* In `<DashBoard />`, use it's <strong>state</strong> to store the messages and pass them to `<ChatBoard />` instead of hard coding them.
* When `onSendMessage` in `<MessageArea />` is called, it should add the message object to `<DashBoard />`'s messages.

## Task 8 - Show video using using third-party component; ``ReactPlayer``
https://www.npmjs.com/package/react-player

## Task 9 - ``<GameTimer />``
![Game timer](src/content/game_timer.png?raw=true "Game timer") 

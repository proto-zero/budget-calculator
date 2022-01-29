# Budget Calculator
# - Sean Lenhart

## Notes
- I started by creating a new React app and writing a blank README before committing to git.

- I stripped App.js and added a components folder with a new component, Outline, which I will use to sketch the overall project in order to help decide what components I will need. I placed Outline in App.

- I want to get the API up and running so I can do some tests with it. Using the supplied documentation I added firebase to the project.

- In the initial outline I was able to console.log the results from the api. I knew they were present, but it was difficult to get them to cooperate with React. I think, since Firebase uses objects instead of arrays, I need to find a different approach.

- Utilizing many resources on the web, I found success with https://www.pluralsight.com/guides/consume-data-from-firebase-firestore-in-a-react-app and was able to produce some of the api in the view.

- I was able to merge the advances in the above comment with the original outline version. Mostly what I needed was the useEffect function. I moved the api config to it's own component and imported it to the outline. 

- I created a component, Ex, to display the api return using props. I'll need to organize the api return by item type.

- I gave the project an overall style similar to the Yardzen homepage, applying the layers of background color along with square cards with box-shadow. The item cards originally had buttons for the user to press to select a high or low price, but I swapped those out for a single selector.

- I was able to pass the state up from the cards to the outline, currently labeled Total Price. Soon, I want to create a total of all of the amounts and subtract that from the user budget in order to display the Remaining Budget.

## Outline
- Ask the User for their budget
- Save the budget in the state
- Have a remaining balance in the state, budget - item cost
- Have a dropdown for yard items
- When users select a yard item, list chosen items like a receipt
- subtract item cost from the budget and update the remaining balance
- change remaining balance color to reflect when approaching last 10% of budget or overbudget

## TODO
- adjust price from pennies to dollars and decimals
- + Create layout for item cards
- + Push state from item cards to outline
- Add the total price from each selected item card
- display the remaining balance

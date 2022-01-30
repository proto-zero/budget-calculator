# Budget Calculator
# - Sean Lenhart

## Project Component Stages
App contains Budget and Outline components

Outline contains Ex component

App, Budget, Outline, and Ex css files

## Notes
- I started by creating a new React app and writing a blank README before committing to git.

- I stripped App.js and added a components folder with a new component, Outline, which I will use to sketch the overall project in order to help decide what components I will need. I placed Outline in App.

- I want to get the API up and running so I can do some tests with it. Using the supplied documentation I added firebase to the project.

- In the initial outline I was able to console.log the results from the api. I knew they were present, but it was difficult to get them to cooperate with React. I think, since Firebase uses objects instead of arrays, I need to find a different approach.

- Utilizing many resources on the web, I found success with https://www.pluralsight.com/guides/consume-data-from-firebase-firestore-in-a-react-app and was able to produce some of the api in the view.

- I was able to merge the advances in the above comment with the original outline version. Mostly what I needed was the useEffect function. I moved the api config to it's own component and imported it to the outline. 

- I created a component, Ex, to display the api return using props. I'll need to organize the api return by item type.

- I gave the project an overall style similar to the Yardzen homepage, applying the layers of background color along with square cards with box-shadow. I gave the card container flexbox and flexwrap to allow the appropriate number of item cards to fill the screen depending on screen size. The item cards originally had buttons for the user to press to select a high or low price, but I swapped those out for a single selector.

- I was able to pass the state up from the cards to the outline, currently labeled Total Price. Soon, I want to create a total of all of the amounts and subtract that from the user budget in order to display the Remaining Budget.

- By adding the new state from the item card to the remaining budget state I was able to find the sum of the selected items. Then, after pushing the user budget state up from the Budget component to the App and then back down to the outline component, I can subtract the total price from the budget to find the remaining budget.

- The Intl.NumberFormat function displays ints in a currency format. I had to divide the prices of items by 100 to change the value from cents to dollars. So far I only applied it to the item cards in the Ex component.

- I added a const with a ternary operator that checks whether the total remaining budget is greater than 0 and changes the background color to alert the user if they're over budget. I applied this new variable to the class of the appropriate div, styled after one of the green buttons on the Yardzen homepage.

- I adjusted the font to futura-PT for text and Domaine Display for headers as used in the Yardzen home page.

## Outline
- Ask the User for their budget
- Save the budget in the state
- Have a remaining balance in the state, budget - item cost
- Have a dropdown for yard items
- When users select a yard item, list chosen items like a receipt
- subtract item cost from the budget and update the remaining balance
- change remaining balance color to reflect when approaching last 10% of budget or overbudget

## TODO
- [ ] sort the item cards by type
- [ ] Must be able to lower the remaining budget by deselecting items
- [ ] Fix lag in updating state
- [x] adjust price from pennies to dollars and decimals. Divide by 100?
- [x] Create layout for item cards
- [x] Push state from item cards to outline
- [x] Add the total price from each selected item card
- [x] display the remaining balance
- [x] Change remaining budget colors 
- [x] Change font to futura

# Budget Calculator
# - Sean Lenhart

## Project Component Stages
App contains Budget and Balance components

Balance contains TypeContainer component

TypeContainer contains ItemCard component

App, Budget, Balance, TypeContainer, and ItemCard css files

## Notes
- I started by creating a new React app and writing a blank README before committing to git.

- I stripped App.js and added a components folder with a new component, Balance, which I will use to sketch the overall project in order to help decide what components I will need. I placed Balance in App.

- I want to get the API up and running so I can do some tests with it. Using the supplied documentation I added firebase to the project.

- In the initial Balance component I was able to console.log the results from the api. I knew they were present, but it was difficult to get them to cooperate with React. I think, since Firebase uses objects instead of arrays, I need to find a different approach.

- Utilizing many resources on the web, I found success with https://www.pluralsight.com/guides/consume-data-from-firebase-firestore-in-a-react-app and was able to produce some of the api in the view.

- I was able to merge the advances in the above comment with the original Balance version. Mostly what I needed was the useEffect function. I moved the api config to it's own component and imported it to Balance. 

- I created a component, ItemCard, to display the api return using props. I'll need to organize the api return by item type.

- I gave the project an overall style similar to the Yardzen homepage, applying the layers of background color along with square cards with box-shadow. I gave the card container flexbox and flexwrap to allow the appropriate number of item cards to fill the screen depending on screen size. The item cards originally had buttons for the user to press to select a high or low price, but I swapped those out for a single selector.

- I was able to pass the state up from the cards to Balance, currently labeled Total Price. Soon, I want to create a total of all of the amounts and subtract that from the user budget in order to display the Remaining Budget.

- By adding the new state from the item card to the remaining budget state I was able to find the sum of the selected items. Then, after pushing the user budget state up from the Budget component to the App and then back down to Balance component, I can subtract the total price from the budget to find the remaining budget.

- The Intl.NumberFormat function displays ints in a currency format. I had to divide the prices of items by 100 to change the value from cents to dollars. So far I only applied it to the item cards in the ItemCard component.

- I added a const with a ternary operator that checks whether the total remaining budget is greater than 0 and changes the background color to alert the user if they're over budget. I applied this new variable to the class of the appropriate div, styled after one of the green buttons on the Yardzen homepage.

- I adjusted the font to futura-PT for text and Domaine Display for headers as used in the Yardzen home page.

- I created a new array of just the item.type. In the JSX I mapped the array to produce a section with each individual item.type accompanied by any of the items that have that type. So far it still needs to be styled to satisfaction.

- useState functions as a queue and not an immediate action, and since I am lifting state quite a few times I am running into some lag with state being a step behind the user. This is most vexing. I have attempted to utilize useEffect to call the state immediately and refresh the render but so far to no avail.

- My initial attempts to calculate the total remaining budget could add to the total price but not subtract if different items were picked. At first I tried to solve this by sending the value of the last chosen item, stored in ItemCard state, but set to negative up the state to the Balance parent, however react seemed to correct this and change the values back to positive. I decided then to create the TypeContainer component, place it in Balance and place ItemCard in TypeContainer. The theory is that all of the available items will be listed under ItemCard, ItemCard will send it's value up to TypeContainer which sorts the items by type. If each TypeContainer has the individual value from ItemCard, and there are six types of items so six TypeContainer components will be rendered, then TypeContainer can send it's values up to Balance which can add together those six values for the total price. The total price can be subtracted from the user budget and give the Total Budget Remaining.

- While cleaning up the code I deleted the YardItems component as it was no longer necessary.

- In keeping with the Yardzen homepage similarities I added the Yardzen logo to the top corner

- I was able to organize the items by type when I created an array of just the item types, then iterated over that array in Balance to produce a TypeContainer component full of ItemCard components. This allowed me to lift the state of each individual item's price from ItemCard to TypeContainer to Balance, however by the time it reached Balance I only had one state for six different item types. I resolved to take the more manual approach and create six TypeContainer components, each with a different type, and feed each a function to update a corresponding state. I then totaled those states and subtracted them from the user budget to successfully allow the user to adjust their budget.

- After much research, UseEffect makes more sense and I can use it to lift state immediately when the state of a component updates, thus removing any state lag.

- The ItemCard select options can't communicate with each other and so don't know when one is selected, causing confusion as to what items have been selected of each type. I added an ID to my itemList from the api and passed it down to each iterated ItemCard as the key. I made a new state in TypeContainer for itemID and set it to a number outside of the range of ids created for itemList. I passed up the item id selected from ItemCard to compare with the TypeContainer itemID in order to determine whether a selector option is the currently selected option, closing any other open selectors and making item selection much more clear and ideal.

- As a last touch to help match the Yardzen layout I added a hover effect to the item Type headings as well as the user budget input

## Outline
- Ask the User for their budget
- Save the budget in the state
- Have a remaining balance in the state, budget - item cost
- Have a dropdown for yard items
- When users select a yard item, list chosen items
- subtract item cost from the budget and update the remaining balance
- change remaining balance color to reflect when under or overbudget

## TODO
- [x] sort the item cards by type
- [x] Must be able to lower the remaining budget by deselecting items
- [x] Fix lag in updating state
- [x] adjust price from pennies to dollars and decimals. Divide by 100?
- [x] Create layout for item cards
- [x] Push state from item cards to Balance
- [x] Add the total price from each selected item card
- [x] display the remaining balance
- [x] Change remaining budget colors 
- [x] Change font to futura
- [x] Finalize styling
- [x] Correct selector on/off

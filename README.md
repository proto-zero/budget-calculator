# Budget Calculator
# - Sean Lenhart

## Notes
- I started by creating a new React app and writing a blank README before committing to git.

- I stripped App.js and added a components folder with a new component, Outline, which I will use to sketch the overall project in order to help decide what components I will need. I placed Outline in App.

- I want to get the API up and running so I can do some tests with it. Using the supplied documentation I added firebase to the project.

## Outline
- Ask the User for their budget
- Save the budget in the state
- Have a remaining balance in the state, budget - item cost
- Have a dropdown for yard items
- When users select a yard item, list chosen items like a receipt
- subtract item cost from the budget and update the remaining balance
- change remaining balance color to reflect when approaching last 10% of budget or overbudget
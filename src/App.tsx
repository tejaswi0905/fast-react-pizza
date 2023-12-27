function App(): JSX.Element {
  return <div>Hello Vite Fuck youuuuuuuuu!</div>;
}

export default App;

//Gather application requirements and features
//   Users can order one or more pizzas from a menu
//   Requires no user accounts and no login(no auth), users just input their names before using the app
//   The pizza menu can change, so it should be loadde from an API(since it is an front end only project, cosider this part done.)
//   Users can add multiple pizzas to a cart before ordering
//   Ordering requires just the user's name, phone number and address,
//   If possible, GPS location should also be provided, to make delivery easier
//   User's can mark their order as "priority" for an additional 20% of the cart price.
//   Orders are made by sending a POST request with the order data(user-data + selected Pizzas) to the API
//   Payments are COD, so for this one no payment processing is necessary in the app
//   Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID
//   Users should be able to mark their order as "priority" order even after it has been place.

//Divide the application into feature categories
//   User Everything related to the user.
//   Menu all the features related to the Menu, for example loading and displaying items, etc etc.
//   Cart User should be able to take one or more items from the menu and add them to the cart.
//   Orders User should be able to place a new order or lookup an exesting order based on the order ID.

//Divide the application into pages
//   Think about the overall and page-level UI
//      HomePage             urlEndpoint:  "/"
//      PizzaMenu            urlEndpoint:  "/menu"
//      Cart                 urlEndpoint:  "/cart"
//      Placing a new order  urlEndpoint:  "order/new"
//      Looking up an order  urlEndpoint:  "order/:orderID"
//   Break the desired UI into components
//   Design and build a static version (no state yet)

//Think anbout state management + data flow
//  User: No accounts so no need for API, so stays in app hence, GLOBAL UI state
//  Menu: Menu is fetched from API, hence, GLOBAL REMOTE STATE
//  Card: no need for API, just stored in app hence, GLOBAL UI STATE
//  ORDER: fetched and submitted to API hence, GLOBAL REMOTE STATE

//Decide on white libraries to use
//  Routing:- React Router
//  Styling:- Tailwind css
//  Remote State Management:- Reat Router. New way of fetching data right inside ReactRouter, "render as you fetch"
//  UI State Management:- Recoil. State is fairly complex so recoil has many advantages.

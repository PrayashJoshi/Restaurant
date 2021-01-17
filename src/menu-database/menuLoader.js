import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import {Card,ListGroup, ListGroupItem, Jumbotron} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./box.css";

const featured = [
  { name: "Cabbage w/carrot wine", price: 32.00, id: 1 ,description:" This dish offers local-grown cabbages, which is covered in beef fat and dry-aged for 21 days, served with the carrot wine. The cabbage is covered in beef wax and dry aged for two weeks, then baked in our Russian oven. The carrot wine is made with a traditional winemaking technology using carrot and burgundy yeast.",calories:"550", image:"twingarden.png" },

  { name: "German-Eel", price: 24.00, id: 2 ,description:"This signature dish is cooked at a low temperature in order to preserve the soft and fat texture then it is grilled with baked zucchini and a cream of zucchini and puffed amaranth. We serve it alongside a clear fennel soup consommé with wakame oil. An exquisite German dish that must be tried!",calories:"780", image:"eel.png"},

  { name: "Paris-Brest", price: 18.00, id: 3, description:"With some crackle on top and cream inside, an old, stuffy circle of cream puffs filled with buttery hazelnut custard and often topped with a cap of slivered almonds and crumbly cookie crust, this the Paris-Brest is the next best thing to a night out in Paris.", calories:"320", image:"brest.png"}
];

const menuAppetizers = [

  { name: "Crab rangoon", price: 18.00, id: 4 ,description:"Crab rangoon is an American-Chinese dish consisting of a deep-fried dumpling that is stuffed with crab meat, garlic, scallions, and cream cheese. It is believed that the first crab rangoon was invented in San Francisco",calories:"450", image:"crabAppetizer.png" },

  { name: "Cracked Conch", price: 16.00, id: 5 ,description:" Conch meat is breaded in a batter made with flour, then deep-fried until golden and crispy. The name of this dish refers to a method of tenderizing the tough, chewy meat with a meat mallet or a frying pan and originates from the Bahamas",calories:"500", image:"conch.png"},


  { name: "Mediterrarean Pin-wheel", price: 16.00, id: 6, description:"Tangy olives, meaty marinated artichoke hearts, crisp lettice, and juicy cherry tomatoes are rolled up with a creamy tahini sauce to offer a delicious Mediterranean flavor.", calories:"360", image:"veggieAppetizer.png"}
];
const menuMain = [
  { name: "Schweinebraten", price: 22.00, id: 7 ,description:"A traditional German pork roast originating from Bavaria. It consists of sliced pork roast that's served with homemade gravy, semmelknödel (bread dumplings) or potato dumplings, and either sauerkraut or rotkohl (red cabbage).",calories:"1100", image:"german.png" },
  
  { name: "Buzara", price: 10.99, id: 1 ,description:"Buzara, a Croatian delight, prepared by cooking scampi,clams, prawns, lobsters, limpets and mussels in a mixture of olive oil, wine, garlic, fresh parsley and breadcrumbs. This creates a flavorful sauce that gives the dish distinctive, fresh flavor with aroma reminiscent of the sea. It is an all-in-one package for seafood lovers! ",calories:"950", image:"egg.png" },

  { name: "Steak au poivre", price: 18.99, id: 9, description:"A French dish consisting of a beef steak that is coated in crushed peppercorns and fried. It is served with a sauce that is made in the same pan that the steak was cooked in and accompanied by potatoes and a salad on the side.", calories:"1500", image:"steak.png"}
];
const menuMain2 = [
  { name: "Pierogi Ruskie(Veggie Dumplings)", price: 16.00, id: 1 ,description:"These soft, crescent-shaped dumplings are filled with a combination of potatoes and cheese, modified with an array of spices and fried onions.The dish is boiled and shortly fried until they develop a crispy texture and are served sprinkled with cracklings, crispy fried onions. A veggie dish that wont dissapoint!",calories:"760", image:"egg.png" },

  { name: "Pizza Margherita", price: 18.00, id: 8 ,description:"Pizza Margherita, a delicacy served to guests of the queen of Italy  that was made to resemble the colors of the Italian flag: red tomatoes, white mozzarella cheese, and green basil. Our wood oven offers this speciality with hints of smokey flavors that supplement its natural organic ingredients.",calories:"980", image:"pizza.png"},

  { name: "Briám", price: 18.00, id: 9, description:"Simple in ingredients but packed with flavor, briám is a classic Greek dish consisting of mixed roasted vegetables(sliced potatoes, tomatoes, eggplants, and zucchinis) that are generously seasoned with olive oil and various spices, then neatly layered and baked until all of the flavors are combined and is complemented by crumbled or sliced feta cheese and crusty bread.", calories:"650", image:"desert1.png"}
];

const menuDesert = [
  { name: "Pavlova", price: 35.00, id: 13 ,description:"A texture freak's dream come true, pavlova offers a crisp crust and soft, light inside, usually topped with fruit and whipped cream. The dish is named after the Russian ballerina Anna Pavlova and is propular within Eastern Europe. ",calories:"1000", image:"pavlova.png" },

  { name: "Baklava", price: 14.00, id:  14,description:"In Baklava,layers of crisp phyllo dough alternate with a sugary spiced nut mixture, and the whole thing is then soaked in fragrant sweet syrup made with honey, lemon and cinnamon.It is a traditional dessert common to all the peoples of the former Byzantine Empire, Persia and the former Ottoman Empire and a Must Try!",calories:"290", image:"baklava.png"},

  { name: "Italian Gelato", price: 12.00, id: 15, description:"Our Italian gelato is created by skilled artisans who take pride in their creations.The combination of all natural ingredients, less air, and less butterfat give gelato a more intense and unique flavor making it creamier.It is mixed by hand or machine until semi-frozen to follow its authentic recipie.", calories:"150", image:"gelato.png"}
];

export const MenuItem = (props) => {

  const [cart, setCart] = useContext(CartContext);
  const renderCard = (card, index) => {
    toast.configure();
    const addToCart = () => {
      const tshirt = { name: card.name, price: card.price };
      setCart(currentState => [...currentState, tshirt]); 
      toast.success('Added To Cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    return (
  <Card style={{ width: '18rem' }} id={index} className="box">
                        <Card.Img variant="top" src={window.location.origin + '/images/'+card.image} />
                        <Card.Body>
                          <Card.Title>{card.name}</Card.Title>
                          <Card.Text>
                          {card.description}
                          </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem>Calories: {card.calories} </ListGroupItem>
                          <ListGroupItem>${card.price}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link onClick={addToCart}>Add To Cart</Card.Link>
                        </Card.Body>
                      </Card>
  
    );
  };
    
        return (
            <main className="home">
              <Fade bottom cascade>
              <section className="container">
                        <div className="grid">{featured.map(renderCard)}</div>
                        </section>
                <br/>
                  <section className="container">
                  <Jumbotron>
                          <h1>Menu</h1>
                          <p>
                          Adored by customers travelling in from all around the world, these are handcrafted with love, care & expertise from the Chef to emphasize the unique taste,culture and traditions of its unique origins.  </p>
                        </Jumbotron>
                        
                        <div class="card">
                          <div class="card-body"><h3>Appetizers</h3></div>
                        </div>
                      <div className="grid">{menuAppetizers.map(renderCard)}</div>
                      <br/>
                      <div class="card">
                          <div class="card-body"><h3>Main Meal Entrees</h3></div>
                        </div>
                      <div className="grid">{menuMain.map(renderCard)}</div>
                      <div className="grid">{menuMain2.map(renderCard)}</div>
                      <br/>
                      <div class="card">
                          <div class="card-body"><h3>Desert</h3></div>
                        </div>
                        <br/>
                      <div className="grid">{menuDesert.map(renderCard)}</div>
                      <br/>
                </section>
                </Fade>
            </main>
        )
}
(this.webpackJsonprestaurantapp=this.webpackJsonprestaurantapp||[]).push([[0],{41:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},78:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(1),r=a.n(s),n=a(21),c=a.n(n),o=(a(78),a(79),a(58),a(15)),d=a(52),l=a.p+"static/media/logo.55bef272.png",h=a(100),j=[{title:"Home",path:"/home"},{title:"Menu",path:"/fMenu"},{title:"Contact",path:"/contact"},{Icon:"../assets/images/logo.png",path:"/logo"}];function b(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(i.jsx)(h.a,{bg:"light",variant:"light",sticky:"top",children:Object(i.jsxs)("nav",{className:"site-navigation ".concat(a&&"active"),role:"navigation",children:[Object(i.jsxs)("div",{className:"logo",children:[Object(i.jsx)("img",{src:l,alt:"logo",className:"logo",height:"100px",width:"100px"}),Object(i.jsx)("span",{class:"logo__text",children:" CKM"})]}),Object(i.jsx)("div",{className:"menu-content-container",children:Object(i.jsx)("ul",{children:j.map((function(e,t){return Object(i.jsx)("li",{children:Object(i.jsx)(d.b,{to:e.path,children:e.title})},t)}))})}),Object(i.jsx)("i",{className:"icon ionicons ion-ios-menu",onClick:function(e){return r(!a)}})]})})}var u=a(13),m=a(55),p=a.n(m),g=a.p+"static/media/prep.2ad32f22.mp4",f=a.p+"static/media/chefcooking.fbb33547.png",O=a.p+"static/media/chefPrep.edb0b332.png",x=a(101),v=a(95),y=a(103),w=a(97),C=a(69),k=a.n(C),N=a(27),B=a.n(N),S=a(70).a.initializeApp({apiKey:"AIzaSyB4-pXk-UJtPh1qab_mzaEdiJrnGPd9Zkc",authDomain:"resturantapp-ae443.firebaseapp.com",databaseURL:"https://resturantapp-ae443-default-rtdb.firebaseio.com",projectId:"resturantapp-ae443",storageBucket:"resturantapp-ae443.appspot.com",messagingSenderId:"42643984495",appId:"1:42643984495:web:e59f3b01880e3cfd4bfd9a",measurementId:"G-3XR4N5T8MB"}).firestore(),I=a(99),P=a(96),T=(a(41),a(28));a(60);T.a.configure();var M=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(""),c=Object(o.a)(n,2),d=c[0],l=c[1],h=Object(s.useState)(""),j=Object(o.a)(h,2),b=j[0],u=j[1],m=Object(s.useState)(""),p=Object(o.a)(m,2),g=p[0],f=p[1],O=Object(s.useState)(""),x=Object(o.a)(O,2),w=x[0],C=x[1],k=Object(s.useState)(!1),N=Object(o.a)(k,2),M=(N[0],N[1]);return Object(i.jsx)("main",{children:Object(i.jsx)(B.a,{bottom:!0,cascade:!0,children:Object(i.jsx)(y.a,{children:Object(i.jsxs)(y.a.Body,{children:[Object(i.jsxs)(v.a,{class:"grid",children:[Object(i.jsx)("h1",{children:"Set a Reservation"}),Object(i.jsx)("p",{children:" We follow the state regulations for safe eating. Our staff follow our safety and responce protocal setup inspite of the current Pandemic. We hope to see you at our establishment! "})]}),Object(i.jsxs)("div",{class:"form-row",children:[Object(i.jsx)("div",{class:"form-group col-md-5",children:Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.1154842436754!2d-77.30954928432317!3d38.8298159585295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e607b427ebd%3A0xd766a653e6557544!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1610817334726!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'}})}),Object(i.jsx)("div",{class:"form-group col-md-6",children:Object(i.jsxs)(I.a.Group,{children:[Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Name",value:a,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Email Address",value:d,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Phone Number",value:b,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Count of People",value:g,onChange:function(e){return f(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"message",placeholder:"Message",value:w,onChange:function(e){return C(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(P.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),M(!0),S.collection("reservation").add({name:a,email:d,number:b,count:g,message:w}).then((function(){M(!1),T.a.info("Reservation Made!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),T.a.info("We will Contact You Shortly!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,delay:2e3,progress:void 0})})).catch((function(e){alert(e.message),M(!1)})),r(""),l(""),u(""),f(""),C("")},children:"Submit"})]})})]})]})})})})};function z(){return Object(i.jsxs)("main",{className:"home",children:[Object(i.jsx)("section",{className:"container"}),Object(i.jsx)("section",{className:"bg-white",children:Object(i.jsx)("section",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("p1",{children:'"With Good Ingredients comes Good Everlasting Taste"-Papa Prayash'})})})}),Object(i.jsxs)("section",{className:"slide",children:[Object(i.jsx)(k.a,{children:Object(i.jsxs)(x.a,{children:[Object(i.jsxs)(x.a.Item,{children:[Object(i.jsx)("section",{className:"video",children:Object(i.jsx)("div",{className:p.a.Container,children:Object(i.jsxs)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:p.a.Video,height:"800px","object-fit":"cover",children:[Object(i.jsx)("source",{src:g,type:"video/mp4"}),"Your browser does not support the video tag."]})})}),Object(i.jsxs)(x.a.Caption,{children:[Object(i.jsx)("h3",{children:"Named the Best Imaginary Resturant by Critics around the Globe"}),Object(i.jsx)("p",{children:"Experience the Cultures of Different Origins by the Means of Sublime Taste "})]})]}),Object(i.jsxs)(x.a.Item,{children:[Object(i.jsx)("img",{className:"d-block w-100",src:f,height:"800px","object-fit":"cover",alt:"Third slide"}),Object(i.jsxs)(x.a.Caption,{children:[Object(i.jsx)("h3",{children:"Our Chefs"}),Object(i.jsx)("p",{children:"Central Kitchen Mediterranean is able to offer its delights only possible by its fine array of Award Winning Chefs"})]})]}),Object(i.jsxs)(x.a.Item,{children:[Object(i.jsx)("img",{className:"d-block w-100",src:O,height:"800px","object-fit":"cover",alt:"Third slide"}),Object(i.jsxs)(x.a.Caption,{children:[Object(i.jsx)("h3",{children:"Our Values"}),Object(i.jsx)("p",{children:"Customer - Staff - Community. We are know for supporting our stafff and our local farmers. They are the backbone of our company and keep it running. You are our first priority now!"})]})]})]})}),Object(i.jsx)("br",{}),Object(i.jsxs)(B.a,{children:[Object(i.jsxs)("div",{className:p.a.Content,children:[Object(i.jsx)("div",{className:"component",children:Object(i.jsxs)(v.a,{class:"grid",children:[Object(i.jsx)("h1",{children:'"Best Upincomming Resturant in Northern Virginia"- Rishal'}),Object(i.jsx)(y.a,{children:Object(i.jsx)(y.a.Body,{className:"container",children:Object(i.jsx)("p",{children:"Central Kitchen Mediterranean was founded in 1998 with the goal to make the most unique food from the Mediterranean Sea that was hard to find in the United-States. We are a restaurant around the New York area. As we grew, we started to sell our Mediterranean food products to distributors in other parts of the US. Today, you can find our Mediterranean restaurants all around the country. Our main focus is to find very high-quality products. Consistency and good service, have also been part of our culture, and our commitment to our customers."})})}),Object(i.jsx)("br",{})]})}),Object(i.jsxs)("div",{class:"form-row",children:[Object(i.jsx)("div",{class:"form-group col-md-6",children:Object(i.jsx)(w.a,{width:"auto",height:"800px",src:window.location.origin+"/images/outside.png"})}),Object(i.jsxs)("div",{class:"form-group row-md-6",children:[Object(i.jsx)("div",{class:"form-group col-md-6",children:Object(i.jsx)(w.a,{width:"auto",height:"400px",src:window.location.origin+"/images/serve.png"})}),Object(i.jsx)("div",{class:"form-group row-md-6",children:Object(i.jsx)(w.a,{width:"auto",height:"400px",src:window.location.origin+"/images/twopeople.png"})})]})]})]}),Object(i.jsx)("br",{}),Object(i.jsx)(M,{})]})]})]})}T.a.configure();var A=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],n=Object(s.useState)(""),c=Object(o.a)(n,2),d=c[0],l=c[1],h=Object(s.useState)(""),j=Object(o.a)(h,2),b=j[0],u=j[1],m=Object(s.useState)(!1),p=Object(o.a)(m,2),g=(p[0],p[1]);return Object(i.jsx)("main",{children:Object(i.jsx)(B.a,{bottom:!0,cascade:!0,children:Object(i.jsx)(y.a,{children:Object(i.jsxs)(y.a.Body,{children:[Object(i.jsxs)(v.a,{class:"grid",children:[Object(i.jsx)("h1",{children:"Contact Us"}),Object(i.jsx)("p",{children:"It is our mission to understand the comments and concerned of our valued customers. Please give us ur Feedback!  "})]}),Object(i.jsxs)(I.a.Group,{children:[Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Name",value:a,onChange:function(e){return r(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"text",placeholder:"Email Address",value:d,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(I.a.Control,{type:"message",placeholder:"Message",value:b,onChange:function(e){return u(e.target.value)}}),Object(i.jsx)("br",{}),Object(i.jsx)(P.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),g(!0),S.collection("contacts").add({name:a,email:d,message:b}).then((function(){g(!1),T.a.info("Message Delivered!",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){alert(e.message),g(!1)})),r(""),l(""),u("")},children:"Submit"})]})]})})})})};function E(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(A,{})})}var G=a(71),q=r.a.createContext(),R=function(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),r=a[0],n=a[1];return Object(i.jsx)(q.Provider,{value:[r,n],children:e.children})},D=a(102),F=a(72),W=[{name:"Cabbage w/carrot wine",price:32,id:1,description:" This dish offers local-grown cabbages, which is covered in beef fat and dry-aged for 21 days, served with the carrot wine. The cabbage is covered in beef wax and dry aged for two weeks, then baked in our Russian oven. The carrot wine is made with a traditional winemaking technology using carrot and burgundy yeast.",calories:"550",image:"twingarden.png"},{name:"German-Eel",price:24,id:2,description:"This signature dish is cooked at a low temperature in order to preserve the soft and fat texture then it is grilled with baked zucchini and a cream of zucchini and puffed amaranth. We serve it alongside a clear fennel soup consomm\xe9 with wakame oil. An exquisite German dish that must be tried!",calories:"780",image:"eel.png"},{name:"Paris-Brest",price:18,id:3,description:"With some crackle on top and cream inside, an old, stuffy circle of cream puffs filled with buttery hazelnut custard and often topped with a cap of slivered almonds and crumbly cookie crust, this the Paris-Brest is the next best thing to a night out in Paris.",calories:"320",image:"brest.png"}],H=[{name:"Crab rangoon",price:18,id:4,description:"Crab rangoon is an American-Chinese dish consisting of a deep-fried dumpling that is stuffed with crab meat, garlic, scallions, and cream cheese. It is believed that the first crab rangoon was invented in San Francisco",calories:"450",image:"crabAppetizer.png"},{name:"Cracked Conch",price:16,id:5,description:" Conch meat is breaded in a batter made with flour, then deep-fried until golden and crispy. The name of this dish refers to a method of tenderizing the tough, chewy meat with a meat mallet or a frying pan and originates from the Bahamas",calories:"500",image:"conch.png"},{name:"Mediterrarean Pin-wheel",price:16,id:6,description:"Tangy olives, meaty marinated artichoke hearts, crisp lettice, and juicy cherry tomatoes are rolled up with a creamy tahini sauce to offer a delicious Mediterranean flavor.",calories:"360",image:"veggieAppetizer.png"}],U=[{name:"Schweinebraten",price:22,id:7,description:"A traditional German pork roast originating from Bavaria. It consists of sliced pork roast that's served with homemade gravy, semmelkn\xf6del (bread dumplings) or potato dumplings, and either sauerkraut or rotkohl (red cabbage).",calories:"1100",image:"german.png"},{name:"Buzara",price:10.99,id:1,description:"Buzara, a Croatian delight, prepared by cooking scampi,clams, prawns, lobsters, limpets and mussels in a mixture of olive oil, wine, garlic, fresh parsley and breadcrumbs. This creates a flavorful sauce that gives the dish distinctive, fresh flavor with aroma reminiscent of the sea. It is an all-in-one package for seafood lovers! ",calories:"950",image:"egg.png"},{name:"Steak au poivre",price:18.99,id:9,description:"A French dish consisting of a beef steak that is coated in crushed peppercorns and fried. It is served with a sauce that is made in the same pan that the steak was cooked in and accompanied by potatoes and a salad on the side.",calories:"1500",image:"steak.png"}],L=[{name:"Pierogi Ruskie(Veggie Dumplings)",price:16,id:1,description:"These soft, crescent-shaped dumplings are filled with a combination of potatoes and cheese, modified with an array of spices and fried onions.The dish is boiled and shortly fried until they develop a crispy texture and are served sprinkled with cracklings, crispy fried onions. A veggie dish that wont dissapoint!",calories:"760",image:"egg.png"},{name:"Pizza Margherita",price:18,id:8,description:"Pizza Margherita, a delicacy served to guests of the queen of Italy  that was made to resemble the colors of the Italian flag: red tomatoes, white mozzarella cheese, and green basil. Our wood oven offers this speciality with hints of smokey flavors that supplement its natural organic ingredients.",calories:"980",image:"pizza.png"},{name:"Bri\xe1m",price:18,id:9,description:"Simple in ingredients but packed with flavor, bri\xe1m is a classic Greek dish consisting of mixed roasted vegetables(sliced potatoes, tomatoes, eggplants, and zucchinis) that are generously seasoned with olive oil and various spices, then neatly layered and baked until all of the flavors are combined and is complemented by crumbled or sliced feta cheese and crusty bread.",calories:"650",image:"desert1.png"}],V=[{name:"Pavlova",price:35,id:13,description:"A texture freak's dream come true, pavlova offers a crisp crust and soft, light inside, usually topped with fruit and whipped cream. The dish is named after the Russian ballerina Anna Pavlova and is propular within Eastern Europe. ",calories:"1000",image:"pavlova.png"},{name:"Baklava",price:14,id:14,description:"In Baklava,layers of crisp phyllo dough alternate with a sugary spiced nut mixture, and the whole thing is then soaked in fragrant sweet syrup made with honey, lemon and cinnamon.It is a traditional dessert common to all the peoples of the former Byzantine Empire, Persia and the former Ottoman Empire and a Must Try!",calories:"290",image:"baklava.png"},{name:"Italian Gelato",price:12,id:15,description:"Our Italian gelato is created by skilled artisans who take pride in their creations.The combination of all natural ingredients, less air, and less butterfat give gelato a more intense and unique flavor making it creamier.It is mixed by hand or machine until semi-frozen to follow its authentic recipie.",calories:"150",image:"gelato.png"}],_=function(e){var t=Object(s.useContext)(q),a=Object(o.a)(t,2),r=(a[0],a[1]),n=function(e,t){T.a.configure();return Object(i.jsxs)(y.a,{style:{width:"18rem"},id:t,className:"box",children:[Object(i.jsx)(y.a.Img,{variant:"top",src:window.location.origin+"/images/"+e.image}),Object(i.jsxs)(y.a.Body,{children:[Object(i.jsx)(y.a.Title,{children:e.name}),Object(i.jsx)(y.a.Text,{children:e.description})]}),Object(i.jsxs)(D.a,{className:"list-group-flush",children:[Object(i.jsxs)(F.a,{children:["Calories: ",e.calories," "]}),Object(i.jsxs)(F.a,{children:["$",e.price]})]}),Object(i.jsx)(y.a.Body,{children:Object(i.jsx)(y.a.Link,{onClick:function(){var t={name:e.name,price:e.price};r((function(e){return[].concat(Object(G.a)(e),[t])})),T.a.success("Added To Cart",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},children:"Add To Cart"})})]})};return Object(i.jsx)("main",{className:"home",children:Object(i.jsxs)(B.a,{bottom:!0,cascade:!0,children:[Object(i.jsx)("section",{className:"container",children:Object(i.jsx)("div",{className:"grid",children:W.map(n)})}),Object(i.jsx)("br",{}),Object(i.jsxs)("section",{className:"container",children:[Object(i.jsxs)(v.a,{children:[Object(i.jsx)("h1",{children:"Menu"}),Object(i.jsx)("p",{children:"Adored by customers travelling in from all around the world, these are handcrafted with love, care & expertise from the Chef to emphasize the unique taste,culture and traditions of its unique origins.  "})]}),Object(i.jsx)("div",{class:"card",children:Object(i.jsx)("div",{class:"card-body",children:Object(i.jsx)("h3",{children:"Appetizers"})})}),Object(i.jsx)("div",{className:"grid",children:H.map(n)}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{class:"card",children:Object(i.jsx)("div",{class:"card-body",children:Object(i.jsx)("h3",{children:"Main Meal Entrees"})})}),Object(i.jsx)("div",{className:"grid",children:U.map(n)}),Object(i.jsx)("div",{className:"grid",children:L.map(n)}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{class:"card",children:Object(i.jsx)("div",{class:"card-body",children:Object(i.jsx)("h3",{children:"Desert"})})}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"grid",children:V.map(n)}),Object(i.jsx)("br",{})]})]})})},J=function(){return Object(i.jsx)("div",{className:"grid",children:[{name:"Eggs",price:10.99,id:1,description:"blah",calories:"100",image:"egg.png"}].map((function(e){return Object(i.jsx)(_,{name:e.name,price:e.price,description:e.description,calories:e.calories,image:e.image},e.id)}))})},K=a(98),Y=function(){var e=Object(s.useContext)(q),t=Object(o.a)(e,2),a=t[0],r=(t[1],a.reduce((function(e,t){return e+t.price}),0)),n=Object(s.useState)(!1),c=Object(o.a)(n,2),d=c[0],l=c[1];return Object(i.jsx)("main",{children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"cartButton",children:Object(i.jsx)(P.a,{variant:"primary",onClick:function(){return l(!0)},children:"View Cart"})}),Object(i.jsxs)(K.a,{className:"modal",show:d,onHide:function(){return l(!1)},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",children:[Object(i.jsx)(K.a.Header,{closeButton:!0,children:Object(i.jsx)(K.a.Title,{id:"example-custom-modal-styling-title",children:"Going Already?"})}),Object(i.jsxs)("span",{align:"center",children:["Items In Cart : ",a.length]}),Object(i.jsxs)(K.a.Body,{children:[a.map((function(e){return Object(i.jsxs)(y.a,{body:!0,children:[e.name,Object(i.jsxs)(y.a.Text,{align:"right",children:["$",e.price]})]})})),Object(i.jsxs)("section",{align:"right",children:[Object(i.jsxs)("span",{children:["Total Price : $",r]}),Object(i.jsx)("br",{}),Object(i.jsx)(P.a,{variant:"primary",onClick:function(){return l(!1)},children:"Pay Now"})]})]})]})]})})};function $(){return Object(i.jsx)("main",{className:"container",children:Object(i.jsx)(R,{children:Object(i.jsxs)(B.a,{bottom:!0,cascade:!0,children:[Object(i.jsxs)(v.a,{class:"grid",children:[Object(i.jsx)("h1",{children:"Featured Dishes"}),Object(i.jsx)("p",{children:"Adored by customers travelling in from all around the world, these are handcrafted with love, care & expertise from the Chef to emphasize the unique taste,culture and traditions of its unique origins.  "})]}),Object(i.jsx)("section",{className:"container",children:Object(i.jsx)("div",{class:"card-deck",children:Object(i.jsx)(J,{})})}),Object(i.jsx)("div",{className:"cartButton",children:Object(i.jsx)(Y,{})})]})})})}Object(n.render)(Object(i.jsx)("fMenu",{}),document.getElementById("root"));var X=function(){return Object(i.jsx)(d.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(b,{}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/home",component:z}),Object(i.jsx)(u.a,{path:"/fmenu",component:$}),Object(i.jsx)(u.a,{path:"/contact",component:E}),Object(i.jsx)(u.a,{path:"/",component:z}),Object(i.jsx)(u.a,{component:function(){return 404}})]})]})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,104)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),r(e),n(e)}))};a(91);c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root")),Z()}},[[92,1,2]]]);
//# sourceMappingURL=main.eb700ae0.chunk.js.map
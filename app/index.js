
var rootPanel;
Ext.setup({
onReady : function () {

var red = {
  style: "background-color: #B22222; color:white;",
  title: "Red", html:"red"
 };

var amber = {
  style: "background-color: #FFBF00;color:white;",
  title: "Amber", html:"Amber" 
};

var green = {

 style: "background-color: #3B7E00; color:white;",
 title: "Green",html:"Green"
};

rootPanel  =  new Ext.Carousel({
// Carousel
//TabPanel
fullscreen:true,
cardSwitchAnimation: {type: 'fade' , duration: 500},
layout:  {
  type: "hbox",
  align: "stretch",
  pack: "end"
   },
 defaults: {flex: 1},
items: [red,amber,green]
}).show();
  
}


});

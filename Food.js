class Food{
constructor(){
    this.foodStock;
    this.image=loadImage("Milk.png");
}
getFoodStock(){
    return this.foodStock;
}
updateFoodStock(food){
    this.foodStock=food;
}
display(){
    var x=80,y=100;
    imageMode(CENTER);
    image(this.image,720,220,50,50);
    if(this.foodStock){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+80;
            }
            image(this.image,x,y,70,70);
            x=x+50;
        }
    }
}
}
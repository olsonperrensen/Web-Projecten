var offset = 0;
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(22);
  for(x=0;x<=width;x+=50)
    {
      for(y=0;y<=height;y+=50)
        {
        circle(x,y,8)
          
        }
    }
offset = offset +0.2;  
      fill(random(255),0,random(255))
}
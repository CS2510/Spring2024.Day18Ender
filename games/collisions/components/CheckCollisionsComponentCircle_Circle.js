class CheckCollisionsComponentCircle_Circle extends Component{
  constructor(){
    super();
  }
  start(){
    this.mouseCircle =  GameObject.find("MouseCursorGameObject")

  }
  update(){
    let circleCenterX = this.transform.x
    let circleCenterY = this.transform.y
    let pointX = this.mouseCircle.transform.x;
    let pointY = this.mouseCircle.transform.y;

    let isCollision = Collisions.isCircleCircleCollision(
      {x:pointX, y:pointY},
      {x:circleCenterX, y:circleCenterY},
      this.mouseCircle.transform.scaleX,
      this.transform.scaleX,
    )

    if(isCollision){
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "red"
    }
    else{
      this.parent.components.find(c=>c.constructor.name == "Circle").fill = "green"
    }


  }
}

window.CheckCollisionsComponentCircle_Circle = CheckCollisionsComponentCircle_Circle
import "../components/FollowMouseComponent.js"
import "../components/CheckCollisionsComponentCircle_Rectangle.js"
import "../components/CheckCollisionsComponentRectangle_Rectangle.js"

class Line2Circle2Scene extends Scene {
  constructor() {
    super("purple")
  }
  start(){

    // A infinitely small point that will follow the mouse cursor
    let mouseCursorGameObject = new GameObject("MouseCursorGameObject")
    mouseCursorGameObject.addComponent(new Circle("yellow", "black"))
    mouseCursorGameObject.addComponent(new FollowMouseComponent())
    mouseCursorGameObject.transform.scaleX = 30;
    mouseCursorGameObject.transform.scaleY = 30;
    this.gameObjects.push(mouseCursorGameObject)

    //A circle against which we will do collision detection.
    let collisionCircleGameObject = new GameObject("CollisionCircleGameObject")
    collisionCircleGameObject.addComponent(new Circle())
    collisionCircleGameObject.addComponent(new CheckCollisionsComponentCircle_Rectangle())
    collisionCircleGameObject.transform.x = 100;
    collisionCircleGameObject.transform.y = 100;
    collisionCircleGameObject.transform.scaleX = 50
    this.gameObjects.push(collisionCircleGameObject);


    //A rectangle against which we will do collision detection
    let collisionRectangleGameObject = new GameObject("CollisionRectangleGameObject")
    collisionRectangleGameObject.addComponent(new Rectangle("green", "transparent"))
    collisionRectangleGameObject.addComponent(new CheckCollisionsComponentRectangle_Rectangle())
    collisionRectangleGameObject.transform.x = 200;
    collisionRectangleGameObject.transform.y = 200;
    collisionRectangleGameObject.transform.scaleX = 20
    collisionRectangleGameObject.transform.scaleY = 30;
    this.gameObjects.push(collisionRectangleGameObject);


    //A rectangle against which we will do collision detection
    let collisionLineGameObject = new GameObject("CollisionLineGameObject")
    collisionLineGameObject.addComponent(new Line(new Vector2(0,0), new Vector2(100,50), "green"))
    // collisionLineGameObject.addComponent(new CheckCollisionsComponentRectangle_Rectangle())
    this.gameObjects.push(collisionLineGameObject);


    
  }

}

window.Line2Circle2Scene = Line2Circle2Scene
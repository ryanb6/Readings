class Vec {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(other_x, other_y){
    let x = other_x + this.x;
    let y = other_y + this.y;
    return new Vec(x,y);
  }
  minus(other_x, other_y){
    // you can pass another vec object and use [name].x and [name].y
    let x = other_x - this.x;
    let y = other_y - this.y;
    return new Vec(x,y);
  }
  get length(){
    return(Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2)));
  }
}
vec1 = new Vec(3,4);
console.log(vec1);
vec2 = vec1.plus(1,2);
console.log(vec2);
vec3 = vec1.minus(1,2);
console.log(vec3);
console.log(vec1.length);
// square rot of x2 - x1 sqared + y2 - y1 squared

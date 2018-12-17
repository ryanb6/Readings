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


//showing denis
//Groups
// to note: array has an 'includes' method that returns a boolean
// this could be used in place of indexOf
// this is a better method because
class Group{
  constructor(){
    this.items = [];
  }
  add(element){
    if(!this.has(element)){
      this.items.push(element);
    }else console.log(`this group already has ${element}`);
  }
  delete(element){
    if(this.has(element)){
      this.items.pop(element);
    }else console.log(`this group does not have ${element}`);
  }
  has(element){
    return this.items.includes(element);
  }
  static from(arr){
    let ret = new Group();
    for(let item of arr){
      ret.add(item);
    }
    return ret;
  }
}

class GroupIterator(){
  constructor(group){
    this.index = 0;
    this.end = group.items.length;
    this.group = group;
  }
  next(){

  }
}

let g1 = new Group();
console.log(g1);
g1.add('cat');
g1.add('cat');
console.log(g1);
g1.delete('dog');
g1.delete(`cat`);
console.log(g1);
let arr = [1, 2, 3, 4, 5, 5];
let g2 = Group.from(arr);
console.log(g2);

// iterable Groups
for(let item of g2){
  console.log(item);
}

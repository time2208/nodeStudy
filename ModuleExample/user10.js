//프로토타입 객체를 할당
function User(id, name){
    this.id = id;
    this.name = name;
}

User.prototype.getUser = function(){
    return {id:this.id, name: this.name};
};

User.prototype.group = {id:'그룹01', name:'친구'};

User.prototype.printUser = function(){
    console.log('user 이름: ' + this.name + ', group: ' + this.group.name );
};

module.exports = User;
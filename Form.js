class Form{
    constructor(){
     this.input = createInput("Name");
     this.button = createButton('Lets  Learn');
     this.l1button = createButton('Level 1')
     this.l2button = createButton('Level 2')
     this.l3button = createButton('Level 3')
     this.greeting = createElement('h1')
     this.greetingq1 = createElement('h1')
     this.l1answer = createButton('Submit Your Answer.')
     this.l1input = createInput("Your Answer")
     this.l2answer = createButton('Submit Your Answer.')
     this.l2input = createInput("Your Answer")
     this.l3answer = createButton('Submit Your Answer.')
     this.l3input = createInput("Your Answer")
    }

    hide() {
        this.input.hide();
        this.button.hide();
       this.l1button.hide();
        this.l2button.hide();
        this.l3button.hide();
        this.l1answer.hide();
        this.l1input.hide();
        this.l2answer.hide();
        this.l2input.hide();
        this.l3answer.hide();
        this.l3input.hide();
    }

    display(){
    
   
   
    this.input.position(550,500);
    this.input.style('width','200px');
    this.input.style('height','20px');
    this.input.style('background','LIGHTgreen');
    this.button.position(550,560)
    this.button.style('width','300px')
    this.button.style('height','40px')
    this.button.style('background','LIGHTgreen')
    

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    
    var name= this.input.value();
    this.greeting.html("Hello "+ name + " time to learn now choose the difficulty of the questions.")
    this.greeting.position(200,200)

this.l1button.position(400,600)
this.l1button.style('width','300px')
this.l1button.style('height','40px')
this.l1button.style('background','LIGHTgreen')
this.l2button.position(400,550)
this.l2button.style('width','300px')
this.l2button.style('height','40px')
this.l2button.style('background','LIGHTgreen')
this.l3button.position(400,500)
this.l3button.style('width','300px')
this.l3button.style('height','40px')
this.l3button.style('background','LIGHTgreen')

this.l1button.mousePressed(()=>{
this.greeting.hide();
this.l1button.hide();
this.l2button.hide();
this.l3button.hide();
this.l1answer.position(900,200)
this.l1answer.style('background','LIGHTgreen')
this.l1input.position(900,150)
this.l1input.style('background','LIGHTgreen') 
q1answer=this.l1input.value();
this.greetingq1.html(q1answer)
this.greetingq1.position(500,300)



q1();
})
this.l2button.mousePressed(()=>{
this.greeting.hide();
this.l1button.hide();
this.l2button.hide();
this.l3button.hide();
this.l2answer.position(900,200)
this.l2answer.style('background','LIGHTgreen')
this.l2input.position(900,150)
this.l2input.style('background','LIGHTgreen')
q2();
})
this.l3button.mousePressed(()=>{
    this.greeting.hide();
    this.l1button.hide();
    this.l2button.hide();
    this.l3button.hide();
    this.l3answer.position(900,200)
    this.l3answer.style('background','LIGHTgreen')
    this.l3input.position(900,150)
    this.l3input.style('background','LIGHTgreen')
    q3();
    })
})  




}


    
}
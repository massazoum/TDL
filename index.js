class book {
 constructor(description,dateget,timeget ,index , completed){
  this.description =description ;
  this.dateget=dateget;
  this.timeget=timeget;
  this.index=index;
  this.completed=completed;
 }
}
class liststodo {
 static lists =document.querySelector('.lists');
 static arraytodo = JSON.parse((localStorage.getItem('arraytodo')))||[];
 
static AddTodo(){
const inpText =document.querySelector('.inpText');
if(inpText.value!=''){
const description =inpText.value ;
const dateget= new Date().toDateString();
const timeget= new Date().toTimeString().split(' ')[0];
const Newtodo = new book(description ,dateget,timeget);
setTimeout(()=>{
  document.querySelector('.fa-spinner').style.display='block'
  document.querySelector('.fa-spinner').style.color='white'
    },0)
    setTimeout(()=>{
      document.querySelector('.fa-spinner').style.display='none'
      document.querySelector('.fa-spinner').style.color='white'
        },2000)
liststodo.arraytodo.unshift(Newtodo);
inpText.value ='';
localStorage.setItem('arraytodo',JSON.stringify(liststodo.arraytodo))}
else{
  setTimeout(()=>{
document.querySelector('.PopError').style.display='flex'
document.querySelector('.fa-spinner').style.display='block'
document.querySelector('.fa-spinner').style.color='red'
  },0)
  setTimeout(()=>{
    document.querySelector('.PopError').style.display='none'
    document.querySelector('.fa-spinner').style.display='none'
    document.querySelector('.fa-spinner').style.color='white'
      },2000)
}
liststodo.showTodo();
funcTrush()
funcSave()
funcEdit()
}

static showTodo(){

 this.lists.innerHTML=``;
 liststodo.arraytodo.forEach((book)=>{
const Newtodo =document.createElement('div');
Newtodo.className ='list';
Newtodo.innerHTML =`
<div><input type="checkbox" class="Checkbox" name="" id="Checkbox1"></div>

<div class="divInP"><input type="text" class="inpText-list  " readonly value="${book.description}"  ></div>

<div class="Option">
<button class="fa-ellipsis-v-btn"><i class='fas fa-ellipsis-v'></i></button>
<button class="opt-bnt fa-trash-alt-btn"><i class='fas fa-trash-alt opt'></i></button>
</div>
<div class="getdate"><h4>${book.dateget}</h4><h4>${book.timeget}</h4> </div>
`
 this.lists.appendChild(Newtodo);
 })
}
}

liststodo.showTodo()
const inpSumit =document.querySelector('.inpSumit');
inpSumit.addEventListener('click' ,liststodo.AddTodo)



const funcEdit=()=>{  const DivListTagerted = document.querySelectorAll('.list');
  const ArrayDivListTagerted = Array.from(DivListTagerted);
  ArrayDivListTagerted.forEach(function (element) {
    element.addEventListener('dblclick', function () {
      const ellipsis =element.querySelector('.Option').querySelector('.fa-ellipsis-v');
      element.style.backgroundColor =' darkslategrey'
     ellipsis.style.display='none' ;
     const ellipsis1 =element.querySelector('.Option').querySelector('.fa-trash-alt-btn');
     ellipsis1.style.display='block'
    const DINPT= element.querySelector('.divInP').querySelector('.inpText-list');
    DINPT.removeAttribute("readonly");
    });
  });
}
funcEdit()

const funcTrush =()=>{
// delete by my  button trush
let trushBtn = document.querySelectorAll('.fa-trash-alt-btn');
let ArraytrushBtn = Array.from(trushBtn);
  ArraytrushBtn.forEach(function (element) {
  element.addEventListener('click', function () {
    // location.reload()
   const prt =element.parentElement.parentElement;
   liststodo.arraytodo.splice(indexpencil,1);
   localStorage.setItem('arraytodo',JSON.stringify(liststodo.arraytodo))
   const DINPT= prt.querySelector('.divInP').querySelector('.inpText-list');
    prt.remove()
    prt.focus()
    const trushBtn1 = document.querySelectorAll('.fa-trash-alt-btn');
   trushBtn =  trushBtn1 ;
   ArraytrushBtn = Array.from(trushBtn1);
  });
});
}
funcTrush()


const funcSave =()=>{
  let saveBtn = document.querySelectorAll('.list');
let ArraysaveBtn = Array.from(saveBtn);
ArraysaveBtn.forEach(function (element) {
  element.addEventListener('click', function () {
    saveBtn = document.querySelectorAll('.list');
    ArraysaveBtn = Array.from(saveBtn);
    const indexpencil = ArraysaveBtn.indexOf(this)
  const DINPT= element.querySelector('.divInP').querySelector('.inpText-list');
  liststodo.arraytodo[indexpencil].description =DINPT.value;
  const ellipsis =element.querySelector('.Option').querySelector('.fa-ellipsis-v');
  ellipsis.style.display='block'
  const ellipsis1 =element.querySelector('.Option').querySelector('.fa-trash-alt-btn');
  ellipsis1.style.display='none'
  localStorage.setItem('arraytodo',JSON.stringify(liststodo.arraytodo))
  element.style.backgroundColor ='darkcyan'
  element.querySelector('.divInP').querySelector('.inpText-list').readOnly = true;
  });
});
}
funcSave()

const inpclearBtnDiv = document.querySelector('.inpclearBtnDiv');
inpclearBtnDiv.addEventListener('click', () => { 
  let checkboxes = document.querySelectorAll('.Checkbox');
  let checkboxes1 = Array.from(checkboxes);
 checkboxes.forEach((checkbox) => {
  checkboxes = document.querySelectorAll('.Checkbox');
  checkboxes1 = Array.from(checkboxes);
  let element = checkboxes1.indexOf(checkbox); 
    if (checkbox.checked) {
      liststodo.arraytodo.splice(element,1); 
      checkbox.parentElement.parentElement.remove();
      localStorage.setItem('arraytodo',JSON.stringify(liststodo.arraytodo))
    }
  });
});


const checkboxes = document.querySelector('.lists');
let checkboxes1 = document.querySelectorAll('.Checkbox');
checkboxes.addEventListener('click' ,function(){
  checkboxes1 = document.querySelectorAll('.Checkbox');
checkboxes1.forEach((element)=>{
  const check= element.parentElement.parentElement.querySelector('.inpText-list')
if(element.checked){
 check.style.textDecoration='line-through';
}
else {
  check.style.textDecoration='none'; 
}
}
)})












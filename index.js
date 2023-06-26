let counter=0;
const counterElement=document.querySelector(".counter");
const increment=document.querySelector(".increment");
const decrement=document.querySelector(".decrement");

increment.addEventListener("click", ()=> {
     counter++;
     counterElement.innerHTML=counter;
});
decrement.addEventListener("click", ()=> {
  counter--;
  counterElement.innerHTML=counter;
});

function Counter(){
  return {count:0,
      increment()
      {
          this.count++;
      },
      decrement()
      {
          this.count--;
      }
  }
  }

  document.addEventListener("click",()=>{
      Alpine.data('counter',Counter);
  });


const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  });

// function delay(time) {
//     var d1 = new Date();
//     var d2 = new Date();
//     while (d2.valueOf() < d1.valueOf() + time) {
//       d2 = new Date();
//     }
//   }



  function cl_Div() {
    location.href('./LoadMeter.html');
  }


  // const myForm = document.getElementById('hourForm');
  // myForm.addEventListener('submit', handleSubmit);
  // var submitTimer;
  
  // function handleSubmit(event) {
  // console.log('submitTimer set');
  //   event.preventDefault();
  //   submitTimer = setTimeout(() => {
  //     this.submit();
  //   }, 3000)
  // };


 
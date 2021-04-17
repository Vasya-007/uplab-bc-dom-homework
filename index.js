import docReady from "./utils/docReady";

docReady(() => {
  // DOM is loaded and ready for manipulation here
  // TODO: write your code here
  const root = document.getElementById("root");
  //CREATE
  const containerDiv = document.createElement('div');
    const main = document.createElement('main');
      const divCol = document.createElement('div');
        const h2 = document.createElement('h2');
        const form = document.createElement('form')
          const divRow1 = document.createElement('div')
            const labelRow1 = document.createElement('label')
              const spanRow1 = document.createElement('span')
            const inputRow1 = document.createElement('input')
          const divRow2 = document.createElement('div')
            const labelRow2 = document.createElement('label')
              const spanRow2 = document.createElement('span')
            const inputRow2 = document.createElement('input')
          const divRow3 = document.createElement('div')
            const buttonRow3 = document.createElement('button')


  //CLASS
  containerDiv.className = 'container'
  main.className = 'row justify-content-center'
  divCol.className= 'col-md-7 col-lg-5 py-5'
  h2.className = 'text-center'
  form.className = 'row g-3'
  divRow1.className = 'col-12'
  divRow2.className = 'col-12'
  divRow3.className = 'col-12'
  labelRow1.className = 'form-label'
  labelRow2.className = 'form-label'
  inputRow1.className = 'form-control'
  inputRow2.className = 'form-control'
  buttonRow3.className = 'w-100 btn btn-primary btn-lg'
  spanRow1.className = 'text-muted'
  spanRow2.className = 'text-muted'

  //ATTRIBITE
labelRow1.setAttribute('for','email')
inputRow1.setAttribute('type','email')
inputRow1.setAttribute('placeholder','you@example.com')
labelRow2.setAttribute('for','password')
inputRow2.setAttribute('type','password')
buttonRow3.setAttribute('type','submit')

  //ID
inputRow1.id = 'email'
inputRow2.id = 'password'
  //TEXTNODE
  const texth2 = document.createTextNode('Login')
  const labelRow1Text = document.createTextNode('Email')
  const labelRow2Text = document.createTextNode('Password ')
  const buttonRow3Text = document.createTextNode('Submit')
  //APPENDTEXT
  h2.appendChild(texth2)
  labelRow1.appendChild(labelRow1Text)
  labelRow2.appendChild(labelRow2Text)
  buttonRow3.appendChild(buttonRow3Text)
  //APPEND
 document.querySelector('div').appendChild(containerDiv)
 document.querySelector('.container').appendChild(main)
 document.querySelector('.justify-content-center').appendChild(divCol)
 document.querySelector('.col-md-7').appendChild(h2)
 document.querySelector('.col-md-7').appendChild(form)
 //FORM:
 const childIndex = document.querySelector('.g-3')
 
 //ROW 1
 document.querySelector('.g-3').appendChild(divRow1)
  document.querySelector('.col-12').appendChild(labelRow1)
    document.querySelector('.form-label').appendChild(spanRow1)
  document.querySelector('.col-12').appendChild(inputRow1)
//ROW 2
 document.querySelector('.g-3').appendChild(divRow2)
 childIndex.children[1].appendChild(labelRow2)
 childIndex.children[1].children[0].appendChild(spanRow2)
 childIndex.children[1].appendChild(inputRow2)
 //ROW 3
 document.querySelector('.g-3').appendChild(divRow3)
 childIndex.children[2].appendChild(buttonRow3)
});

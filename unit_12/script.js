// task 1 --------------------
const a = [
    [1,2,3],
    ['a','b','c'],
    [ 4,5,6],
    ['d','e','f'],
    [ 7,8,9],
  ];
  let out = '';
  for (i=0;i<a.length;i++){
      for ( k=0 ; k<a[i].length;k++){
        out += a[i][k] + ' '; 
      }out+= '<br>'
  }
  document.querySelector('.out-1').innerHTML = out;
   
// task 2 --------------------
let out2 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
        out2 = a[0][2]; 
        
      }
  }
  document.querySelector('.out-2').innerHTML = out2;

// task 3 --------------------
let out3 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
        out3 = a[3][1]; 
        
      }
  }
  document.querySelector('.out-3').innerHTML = out3;

// task 4 --------------------
let out4 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
        out4 = a[2]; 
        
      }
  }
  document.querySelector('.out-4').innerHTML = out4;

// task 5 --------------------
let out5 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
        out5 += a[i][0] + ' '; 
        break;
      }
  }
  document.querySelector('.out-5').innerHTML = out5;

// task  6--------------------
let out6 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
          if(a[i][k]%2 == 0){
        out6 += a[i][k] + ' '; }
        
      }
  }
  document.querySelector('.out-6').innerHTML = out6;

// task  7--------------------
let out7 = '';
  for (i=0;i<a.length;i++){
    
      for ( k=0 ; k<a[i].length;k++){
          if(typeof (a[i][k]) == 'number'){
        out7 += a[i][k] + ' '; }
        
      }out7 += '<br>';
  }
  document.querySelector('.out-7').innerHTML = out7;

// task  8--------------------
let out8 = '';
for (i = 0; i < a.length; i++) {
    out8 = a[i].length;
}
document.querySelector('.out-8').innerHTML = out8;

// task  9--------------------
let out9 = '';
  for (let i = a.length-1;i>=0;i--){
      for ( let k = a[i].length-1; k >= 0; k--){
        out9 += a[i][k] + ' '; 
      }out9+= '<br>'
  }
  document.querySelector('.out-9').innerHTML = out9;


// task  10--------------------
let out10 = '';
  for (let i = 0;i<a.length;i++){
      for ( let k = a[i].length-1; k >= 0; k--){
        out10 += a[i][k] + ' '; 
      }out10+= '<br>'
  }
  document.querySelector('.out-10').innerHTML = out10;

// task  11--------------------
let out11 = '';
let arrChe = [];
out11 = document.querySelector('.out-11');
for (let i = 0; i < 8; i++) {
    arrChe[i] = [];
    for (let k = 0; k < 8; k++) {
        if (i % 2 === k % 2) {
            out11.innerHTML += '1 ' + ' ';
        }
        else {
            out11.innerHTML += '0'+ ' ' ;
        }
    }
    out11.innerHTML += '<br>';
}


// task 12 --------------------
let out12 = '';
let arrChe2 = [];
out12 = document.querySelector('.out-12');

for (let i = 0; i < 8; i++) {
    arrChe2[i] = [];
for (let k = 0; k < 8; k++) {
        
        if (i % 2 === k % 2) {
            out12.innerHTML += '<div class="black"></div>';
        }
        else {
            out12.innerHTML += '<div class="white"></div>' ;
        }
    }
    
    out12.innerHTML += '<br>';
}

// task  13--------------------
let b = [
  [0, 4,0],
  [0],
  [0],
  [0,0,5],
];
// task 14 --------------------
let c = [
  [0, 4,0],
  [0,0,5],
];
// task 15 --------------------

// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]
let d = [
  [0,4],
  [0,0],
  [0,0,0,5],
  [0],
  [0],
  [0],
  [4,5],
]
// task 16 --------------------

// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

let e = [
  [0,4],
  [0],
  [0,0,0,5],
  [0],
  [0],
  [0],
  [0,0,0,0,0,0,[0,6]],
]

// task 17 --------------------

// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;
let f = [
  [0,[0,0,0,4]],
  [0],
  [0,[0,5]],
  [0],
  [0],
  [0],
  [[0,6]],
]

// task  18--------------------
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

let g = [
  [0,[0,0,0,4]],
  [0],
  [0,[0,0,0,5]],
  [7],
  [0],
  [7],
  [[0,6]],
]

// task  19--------------------
let out19 = document.querySelector('.out-19')
let sum = 0;
for (i=0;i<a.length;i++){
  for ( k=0 ; k<a[i].length;k++){
    if ( typeof (a[i][k] ) == 'number'){
      sum += a[i][k];
    }out19.innerHTML = sum;
}}


// task  20 -------------------- пришлось закомментировать   
// j[0][0], j[0][1], j[0][2];
// j[1][0], j[1][1], j[1][2];
// j[2][0], j[2][1], j[2][2];
// j[0][0], j[1][0], j[2][0];
// j[0][1], j[1][1], j[2][1];
// j[0][2], j[1][2], j[2][2];
// j[0][0], j[1][1], j[2][2];
// j[0][2], j[1][1], j[2][0];

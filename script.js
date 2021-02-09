
var a =10
var b =20
var c=a 
// a=b
// b=c
// console.log("1st-",a,b)

//without using third variable

  a = a+b
  b = a-b
  a =a-b
  console.log( "2nd-", a,b)


//first solution
var a =30
var b =40

var max = a>b ? a:b

console.log ("3rd-", max)

//second way
if(a>b){
	big =a
}else{
	big =b
}
console.log( "3rd-", big)
    

//max b/w 3 number

var a=50
var b=60
var c=70
  

 var max =a>b ? (a>c ? a :b): (b>c ? b :c)
 console.log("4th- maximum number is", max)

 //second way 
 if (a>b){
           if(a>c){
           	big =a
           }else{
           	big =c
           }
 }else{
 	if(b>c){
 		big =b
 	}else{
 		big =c
 	}
 }
 console.log( "4th-", big)

 //positive negative zero

a=0
  
  if(a>=0){
  	     if(a==0){
          console.log("5th-","zero")
  	     }else{
  	    console.log( "5th-", "positive")
  	     }
  }else{
  	console.log( "5th-", "negative")
  }


//divisible or not

var d =55
if(d%5==0){
	if(d%11==0){
		console.log( "6th-", "this is divisible ")
	}else{
		console.log( "6th-", "this is not divisible ")
	}
 }else{
 	console.log( "6th-", "this is not divisible ")
 }
 
//even or odd

var b =4
if(b%2==0){
	console.log( "7th-", "even")
}else{
	console.log( "7th-", "odd")
}

//leap year or not 

var L = 2000
 if(L%4==0){
 	if(L%100==0){
 		if(L%400==0){
 			console.log( "8th-", "this is leap year")
 		}else{
 			console.log( "8th-", "this is not leap year")
 		}

 	}else{
 		console.log( "8th-", "this is leap year")
 	}
 	 
 	   }else{
 	   	console.log( "8th-", "this is not leap year")
 	   }
 	  

 	//   vowel or consonent

  // var v= a,e,i,o,u
  //  n=e
 	// if(v=n){
 	// 	console.log( "9th-", "this is vowel")
 	// }else{
 	// 	console.log( "9th-", "this is consonent")
 	// }

  //    //dayname by 1 2 3

 	// var day="1" 
 	// var day="2"
 	// var day= 3
 	// var day= 4
 	// var day= 5
 	// var day=6
 	// var day= 7
      
  // day="1"

  //   if(day="1"){
  //   	console.log(monday)
  //   }else{
  //   		console.log(tuesday)
  //   	}
    

  //     var arr =['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
  //      console.log(arr[6])

   




   //triangle is valid or not
    
    var a=45
    var b=45
    var c=90
    var t=180

   var t = a+b+c


    if(t==180){
    	console.log( "12th-", "valid")
    }else{
    	console.log( "12th-", "not valid")
    }

 
 // valid or invalid
    var a=12
    var b=11
    var c=13

      if(a+b>c){
              if(b+c>a){
              	if(c+a>b){
              		console.log( "13th-", " triangle is valid")
              	}else{
              		console.log( "13th-", "triangle is invalid")
              	}

              }else{
              	console.log( "13th-", "triangle is invalid ")
              }

      }else{
      	console.log(  "13th-", "triangle is invalid")
      }

      //triangle equi iso scalen

      var a =67 
      var b =56
      var c =67
      
      if(a==b && b==c && c==a){
      	     console.log("14th-","triangle is equilateral")
      }else{
      	if(a==b || b==c ||c==a){
      		console.log("14th-","triangle is iscosceles")
      	}else{
      		if(a!=b || b!=c || c!=a){
      		console.log("14-","triangle is scalene")
      		}
      	}
}


//quaditic equation

// a=4
// b=8
// c=3

// d=b*b-4*a*c
// d=Math.sqrt(d)
 
// d=(-b)+(+d)

// e=(-b)+(-d)

// d=d/(2*a)

// e=e/(2*a) 
  
//   console.log(d,e)

 





//profit /loss



var purchase=2000
var sell=5000

var profit =sell-purchase
var loss=purchase-sell
if(profit>50){
  console.log( "16th-", " profit of-", profit)
}else{
  console.log("16th-", "loss of-", loss)
}

//percentage

var phy=78
var che=87
var bio=89
var maths=95
var com=85

var total =phy+che+bio+maths+com
var percent=total/5

console.log("percentage-", percent)
 
 if(percent>=90){
  console.log( "17th-", "Grade A")
 }else{
  if(percent>=80){
    console.log(  "17th-", "Grade B")
  }else{
    if(percent>=70){
      console.log(  "17th-", "Grade C")
    }else{
      if(percent>=60){
        console.log(  "17th-", "Grade D")
      }else{
        if(percent>=50){
          console.log(  "17th-", "Grade E")
        }else{
          if(percent>=40){
            console.log(  "17th-", "Grade F")
          }
        }
      }
    }
  }
 }

    //basic salery of employ

    var a=10000
    var b=20000

      var c=(a*20/100)
      console.log(c)
      var d=(a*80/100)
      console.log(d)

















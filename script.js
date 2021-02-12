
// var a =10
// var b =20
// var c=a 
// // a=b
// // b=c
// // console.log("1st-",a,b)




// //without using third variable

//   a = a+b
//   b = a-b
//   a =a-b
//   console.log( "2nd-", a,b)





// //first solution
// var a =30
// var b =40

// var max = a>b ? a:b

// console.log ("3rd-", max)

// //second way
// if(a>b){
// 	big =a
// }else{
// 	big =b
// }
// console.log( "3rd-", big)
    




// //max b/w 3 number

// var a=50
// var b=60
// var c=70
  

//  var max =a>b ? (a>c ? a :b): (b>c ? b :c)
//  console.log("4th- maximum number is", max)

//  //second way 
//  if (a>b){
//            if(a>c){
//            	big =a
//            }else{
//            	big =c
//            }
//  }else{
//  	if(b>c){
//  		big =b
//  	}else{
//  		big =c
//  	}
//  }
//  console.log( "4th-", big)








//  //positive negative zero

// a=0
  
//   if(a>=0){
//   	     if(a==0){
//           console.log("5th-","zero")
//   	     }else{
//   	    console.log( "5th-", "positive")
//   	     }
//   }else{
//   	console.log( "5th-", "negative")
//   }







// //divisible or not

// var d =55
// if(d%5==0){
// 	if(d%11==0){
// 		console.log( "6th-", "this is divisible ")
// 	}else{
// 		console.log( "6th-", "this is not divisible ")
// 	}
//  }else{
//  	console.log( "6th-", "this is not divisible ")
//  }
 






// //even or odd

// var b =4
// if(b%2==0){
// 	console.log( "7th-", "even")
// }else{
// 	console.log( "7th-", "odd")
// }








// //leap year or not 

// var L = 2000
//  if(L%4==0){
//  	if(L%100==0){
//  		if(L%400==0){
//  			console.log( "8th-", "this is leap year")
//  		}else{
//  			console.log( "8th-", "this is not leap year")
//  		}

//  	}else{
//  		console.log( "8th-", "this is leap year")
//  	}
 	 
//  	   }else{
//  	   	console.log( "8th-", "this is not leap year")
//  	   }
 	  






//  	//   vowel or consonent

//   ch ="h"
//   if(ch=='a' || ch =='e' || ch =='i' || ch =='o' ||ch =='u'){
//     console.log("9th-","it is vowel")
//   }else{
//     console.log("9th-","it is consonent")
//   }










//   //    //dayname by 1 2 3

//  	var daynumber =5

//   var days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
    
//     if(daynumber>0 && daynumber<=7){
//       console.log( "10th-", days[daynumber-1])
//     }else{
//       console.log( "10th-", "invallid")
//     }
   



   
//    //month days 

//    var monthnumber=1

//    var days =['31','28','31','30','31','30','31','31','30','31','30','31']

//    if(monthnumber>0 && monthnumber<=12){
//     console.log("11th-",days[monthnumber-1])
//    }else{
//     console.log("11th-","invaild month number")
//    }







//    // number of notes

//    var amount =5432

//    var notes ={
//       2000:0,
//       500:0,
//       200:0,
//       100:0,
//       50:0,
//       20:0,
//       10:0,
//       5:0,
//       2:0,
//       1:0,
//    }
    





// //number of notes

//     //check for 2000

//     if(amount>=2000)   {  
//     notes[2000] = (amount-amount%2000)/2000
//     amount=amount-notes[2000]*2000    
//  }
  
//    //check for 500

//     if(amount>=500)   {  
//     notes[500] = (amount-amount%500)/500
//     amount=amount-notes[500]*500    
//  } 

//  //check for 200

//     if(amount>=200)   {  
//     notes[200] = (amount-amount%200)/200
//     amount=amount-notes[200]*200    
//  }

//  //check for 100

//     if(amount>=100)   {  
//     notes[100] = (amount-amount%100)/100
//     amount=amount-notes[100]*100    
//  }

//  //check for 50

//     if(amount>=50)   {  
//     notes[50] = (amount-amount%50)/50
//     amount=amount-notes[50]*50    
//  }

//  //check for 20

//     if(amount>=20)   {  
//     notes[20] = (amount-amount%20)/20
//     amount=amount-notes[20]*20    
//  }

//  //check for 10

//     if(amount>=10)   {  
//     notes[10] = (amount-amount%10)/10
//     amount=amount-notes[10]*10    
//  }

//   //check for 5

//     if(amount>=5)   {  
//     notes[5] = (amount-amount%5)/5
//     amount=amount-notes[5]*5    
//  }

//   //check for 2

//     if(amount>=2)   {  
//     notes[2] = (amount-amount%2)/2
//     amount=amount-notes[2]*2    
//  }

//   //check for 1

//     if(amount>=1)   {  
//     notes[1] = (amount-amount%1)/1
//     amount=amount-notes[1]*1    
//  }

//   console.log("12th-", notes)




//    //triangle is valid or not
    
//     var a=45
//     var b=45
//     var c=90
//     var t=180

//    var t = a+b+c


//     if(t==180){
//     	console.log( "13th-", "valid")
//     }else{
//     	console.log( "13th-", "not valid")
//     }

 





//  // valid or invalid
//     var a=12
//     var b=11
//     var c=13

//       if(a+b>c){
//               if(b+c>a){
//               	if(c+a>b){
//               		console.log( "14th-", " triangle is valid")
//               	}else{
//               		console.log( "14th-", "triangle is invalid")
//               	}

//               }else{
//               	console.log( "14th-", "triangle is invalid ")
//               }

//       }else{
//       	console.log(  "14th-", "triangle is invalid")
//       }




//       //triangle equi iso scalen

//       var a =9 
//       var b =8
//       var c =7
      
//       if(a && b && c>0){

//       if(a==b && b==c && c==a){
//       	     console.log("15th-","triangle is equilateral")
//       }else{
//       	if(a==b || b==c ||c==a){
//       		console.log("15th-","triangle is iscosceles")
//       	}else{
//       		if(a!=b || b!=c || c!=a){
//       		console.log("15-","triangle is scalene")
//       		}
//       	}
// }
// }else{
//   console.log( "15th-", "invalid")
// }







// //quaditic equation

// a=1
// b=5
// c=4

// var d=b*b-4*a*c

// if(d>=0){
//   var alpha = (-b -Math.sqrt(d))/2*a
//   var beta = (-b +Math.sqrt(d))/2*a
//   console.log("16th-",alpha,beta)
// }else{
//   console.log("16th-","imaginary roots")
// }
 





// //profit /loss



// var purchase=2000
// var sell=5000

// var profit =sell-purchase
// var loss=purchase-sell
// if(profit>50){
//   console.log( "17th-", " profit of-", profit)
// }else{
//   console.log("17th-", "loss of-", loss)
// }






// //percentage

// var phy=78
// var che=87
// var bio=89
// var maths=95
// var com=85

// var total =phy+che+bio+maths+com
// var percent=total/5

// // console.log("percentage-", percent)
 
//  if(percent>=90){
//   console.log( "18th-", "Grade A")
//  }else{
//   if(percent>=80){
//     console.log(  "18th-", "Grade B")
//   }else{
//     if(percent>=70){
//       console.log(  "18th-", "Grade C")
//     }else{
//       if(percent>=60){
//         console.log(  "18th-", "Grade D")
//       }else{
//         if(percent>=50){
//           console.log(  "18th-", "Grade E")
//         }else{
//           if(percent>=40){
//             console.log(  "18th-", "Grade F")
//           }
//         }
//       }
//     }
//   }
//  }






//     //basic salery of employ

//    var basicsalary = 35000




//    if(basicsalary<=10000){
//         hraamouth=(basicsalary*20)/100
//         daamount=(basicsalary*80)/100
//    }else if(basicsalary<=20000){
//          hraamouth=(basicsalary*25)/100
//          daamount=(basicsalary*90)/100
//    }else {
//        hraamouth=(basicsalary*35)/100
//        daamount=(basicsalary*90)/100
//    }
 
//   var grosssalary = basicsalary+hraamouth+daamount
//   console.log("19th-",grosssalary)
   




//       // electricity bill

//       var units =140
//       bill1=25
//      bill2=75
//      bill3=120
     
          
//           if(units>=50){
//             if(units>=150){
//               if(units>=250) {
//                       bill4=((units-250)*1.50)+bill1+bill2+bill3
//                   bill4= (bill4+(bill4*20)/100)
//                   console.log("20th-",bill4)

//               }else{
//                  bill3=((units-150)*1.20)+bill1+bill2
//                  bill3 =bill3+(bill3*20)/100 
//                 console.log( "20th-", bill3)
//               }

//             }else{
//               bill2=((units-50)*0.75)+bill1
//               bill2 =bill2+(bill2*20)/100
//               console.log( "20th-", bill2)
//             }

           
//           }else{
//              bill=(unit*0.50)
            
//             bill=(bill+(bill*20)/100)
//             console.log("20th-",bill)
//           }








//        //tax calculation


//        var income =5000000000

//        if(income<=250000){
//         tax = (income*0)/100
//          console.log("21th-",tax)  
//        }else if(income<=500000){
//             tax = (income*5)/100
//          console.log("21th-",tax)  
//        }else if(income<=750000){
//             tax = (income*10)/100
//          console.log("21th-",tax)  
//        }else if(income<=1000000){
//             tax = (income*15)/100
//          console.log("21th-",tax)  
//        }else if(income<=1250000){
//             tax = (income*25)/100
//          console.log("21th-",tax)  
//        }else if(income<=1500000){
//             tax = (income*25)/100
//          console.log("21th-",tax)  
//        }else if(income>1500000){
//             tax = (income*30)/100
//          console.log("21th-",tax)  
//        }



        





//         //calculation of days months weeks
     
//      var givenseconds=987654321

//      var secinoneyear  =  12*30*24*60*60
//      var secinonemonths =30*24*60*60
//      var secinoneday  =24*60*60
//      var secinonehour   =60*60


//        var numOfYrs = (givenseconds-givenseconds%secinoneyear)/secinoneyear

//         var remainingSecs = givenseconds%secinoneyear

//         var numOfMnths = (remainingSecs - remainingSecs%secinonemonths)/secinonemonths
//              remainingSecs = remainingSecs%secinonemonths

//          var numOfDays = (remainingSecs-remainingSecs%secinoneday)/secinoneday
//                remainingSecs %= secinoneday

//        var numOfHrs = (remainingSecs-remainingSecs%secinonehour)/secinonehour
//                    remainingSecs %= secinonehour
       
//        var numOfMins =  (remainingSecs-remainingSecs%60)/60
//                     remainingSecs %= 60

//           console.log(numOfYrs, numOfMnths, numOfDays, numOfHrs, numOfMins, remainingSecs)       
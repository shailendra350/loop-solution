// 1
// program to display the first 10 natural numbers.

// for(var i=1; i<=10; i++){
// 	console.log( "1st-", i)
// }


// // 2
// // program to find the sum of first 10 natural numbers.
//  sum=0

//  for(var i=1; i<=10; i++){
 	
//    sum+=i
// }
// console.log( "2nd-", "sum of natural number is-",sum)







// 3
// program to display n terms of natural number and their sum.


 // Textdata = 7
 // sum = 0

 // for(var i=1; i<=Textdata; i++){
 // 	console.log( i)
 // 	sum+=i   
 // }
 // console.log("3rd-","sum of natural number upto 7 is-",sum)





 // 4
 // program to read 10 numbers from keyboard and find their sum and average.

  
 // var i = parseInt(prompt('enter the number'))
        
  
 //  number =10
 //   sum=0

 //  for( var i=1; i<=number; i++){
 //  	  sum+=i
     
 //  }
 //   console.log(sum)
 //    sum=sum/number      
 //    console.log(sum)
    





    // 5
    // program to display the cube of the number upto given an integer.

    // Textdata=10

    // for(var i=1; i<=Textdata; i++){
    // 	(cube=i*i*i)
    // 	 console.log("number is :",i, "and cube of", i, "is", cube)
    // }
   





   // 6
   // program to display the multiplication table of a given integer.

   // Textdata=12

   // for(var i=1; i<=10; i++) {
   // 	   table =i*Textdata
   // 	   console.log("%d * %d =%d \n", Textdata, i ,table )

   // }


   // 7
   // program to display the multipliaction table vertically from 1 to n

    //  var n = 10

    // for(var i=1; i<=10; i++){
    // var tblStr = ""
    // for(var j = 1; j<=n; j++){
    //     tblStr += j+"x"+i+" = "+i*j+" "
    // }
    // console.log(tblStr)
    // }
 




     // 8
     // program to display the n terms of odd natural number and their sum 

    
    //  var number  =   1
    //   var count   =  0
    //   var sum     =   0

    //    while(count < 10){
    // if(number%2 != 0){
    // 	console.log(number)
    //     count++

    //     sum += number
       
    // }

    // number++
    //  }

    //   console.log( "The Sum of odd Natural Number upto 10 terms-", sum)


    




      // 15
      // program to calculate the factorial of a given number.

  //      number=3
  //      fact=1
  //      for(i=1; i<=number; i++){
  //      	fact=i*fact
  //      }
  // console.log(fact)
      



      // 16
      // program to display the n terms of even natural number and their sum.
     
      
    //     var number  =   1
    //   var count   =  0
    //   var sum     =   0

    //    while(count < 10){
    // if(number%2== 0){
    // 	console.log(number)
    //     count++

    //     sum += number
       
    // }

    // number++
    //  }

    //   console.log( "The Sum of odd Natural Number upto 10 terms-", sum)

    

       //18
       //program to find the sum of the series [ 1-X^2/2!+X^4/4!- .........].
         


//        function fact(n){

//     if(n==0){
//         return 1
//     }

//     var f = 1;
//     for(var i=1; i<=n; i++){
//         f *= i
//     }
//     return f
// }

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }

// var numOfTerms = 5
// var x = 2

// var count = 1
// var i = 0
// var res = 0
// while(count<=numOfTerms){
//     if(i%2 == 0){
//         var calc = pow(x, i)/fact(i)
//         if(count%2==0){
//             res -= calc
//         }else{
//             res += calc
//         }
//         count ++
//     }
//     i++
// }

// console.log(res) 






    // 19
 //       var num=11
 //      var number=1
 //      var count=1
 //      var sum =0
     
 //      while(count<=num){
 //      	if(number/count){
 //      		console.log(number/count)
             
 //            sum=sum+number/count
 //      		 count++
           
 //      	}
      
 // }
 // console.log( "Sum of Series-", sum)          
 

//21
//program to display the sum of the series [ 9 + 99 + 999 + 9999 ...].

// var a=10
// var n=5
// sum =0

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }



// for(var i=1 ; i<=n ; i++){
// 	   var s=pow(a,i)-1
//      sum +=s
       

// 	console.log(s)
// }
// console.log(sum)




//25
//program to display the n terms of square natural number and their sum.

//  term=5
//  sum=0

//  for(var i=1;i<=term;i++){
//  	s=i*i
//  	sum +=s
//  	console.log(s)
// }
// console.log("the sum is",sum)



//26
//program to find the sum of the series 1 +11 + 111 + 1111 + .. n terms.


// var a=10
// var n=5
// sum =0

// function pow(a, b){
//     var p = 1
//     for(var i=1; i<=b; i++){
//         p *= a
//     }
//     return p
// }



// for(var i=1 ; i<=n ; i++){
// 	   var s=(pow(a,i)-1)/9
//      sum +=s
       

// 	console.log(s)
// }
// console.log(sum)




//27
//program to check whether a given number is a perfect number or not.


// var num=28
// sum=0
// result=0
// for(var i=1 ; i<=num/2; i++){
// 	if(num%i==0){
		 
//  console.log(i)
//  sum +=i
// }
// 	}
//  console.log( "the sum is", sum)

// if(sum==num){
// 	console.log("this number is perfect number")
// }else{
// 	console.log("this number is not perfect number")
// }



//32
// PRIME OR NOT

// function isPrime(number){
//     var prime = "number is prime"
//     for(var i = 2; i<=number/2; i++){
//         if(number%i==0){
//             prime = "number is not prime"
//             break
//         }
//     }
//     return prime
// }
    
//    var number =15
//    console.log(isPrime(number))



//34

// function isPrime(number){
//     var prime = true
//     for(var i = 2; i<=number/2; i++){
//         if(number%i==0){
//             prime = false
//             break
//         }
//     }
//     return prime
// }



// var primeCount = 0
// var i =0;
// for(var i=1; i<=50 ;i++){
//     if(isPrime(i)){
//         console.log(i)
//         primeCount++
//     }
//     i++
// } 


//37



// for(var i=5 ; i>=1 ; i--){
//   console.log(i)
// }




//39
sum=0
for(var i=100; i<=200 ; i++){
  if(i%9==0){
    sum=sum+i
    console.log(i)
  }
}
console.log(sum)













































































































































































































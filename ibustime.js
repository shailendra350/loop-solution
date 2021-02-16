var stations =[
    {name:"MHOW", dist:0, prev:"", next:"VIKRANT",time:0}, 
    {name:"VIKRANT", dist:2, prev:"MHOW", next:"MITM",time:4}, 
    {name:"MITM", dist:4, prev:"VIKRANT", next:"RAU",time:8}, 
    {name:"RAU", dist:6, prev:"MITM", next:"SILICON",time:13}, 
    {name:"SILICON", dist:9, prev:"RAU", next:"IPS",time:16}, 
    {name:"IPS", dist:14, prev:"SILICON", next:"RAJIVGANDHI",time:21}, 
    {name:"RAJIVGANDHI", dist:16, prev:"IPS", next:"VISHNUPURI",time:24}, 
    {name:"VISHNUPURI", dist:16.5, prev:"RAJIVGANDHI", next:"BHANWARKUA",time:26}, 
    {name:"BHANWARKUA", dist:18, prev:"VISHNUPURI", next:"HOLKAR",time:29}, 
    {name:"HOLKAR", dist:21, prev:"BHANWARKUA", next:"INDIRAPRATIMA",time:32}, 
    {name:"INDIRAPRATIMA", dist:23, prev:"HOLKAR", next:"GEETABHAWAN",time:35}, 
    {name:"GEETABHAWAN", dist:25, prev:"INDIRAPRATIMA", next:"AICTSL",time:39}, 
    {name:"AICTSL", dist:29, prev:"GEETABHAWAN", next:"PALASIA",time:41}, 
    {name:"PALASIA", dist:31, prev:"AICTSL", next:"INDUSTRYHOUSE",time:44}, 
    {name:"INDUSTRYHOUSE", dist:33, prev:"PALASIA", next:"LIG",time:47}, 
    {name:"LIG", dist:35, prev:"INDUSTRYHOUSE", next:"MR9",time:50}, 
    {name:"MR9", dist:36, prev:"LIG", next:"RASOMA",time:53}, 
    {name:"RASOMA", dist:38, prev:"MR9", next:"MR10",time:55}, 
    {name:"MR10", dist:42, prev:"RASOMA", next:"DEWASNAKA",time:58}, 
    {name:"DEWASNAKA", dist:45, prev:"MR10", next:"",time:60}, 
]
   
   function gettime(src,dst){
    var srcTime = 0
    var dstTime = 0
    for(var i=0; i<stations.length ; i++){
        if(stations[i]['name']==src){
            srcTime = stations[i]['time']
        }

        if(stations[i]['name']==dst){
            dstTime = stations[i]['time']
        }
    }

   var time =srcTime-dstTime

   time=time<0 ? -1*time : time

   return time


   }

     
           function isfare(src,dst){
            var fare = 0
               var time = gettime(src,dst)
               if(time<=10){
                fare=0
               }else if(time<=15){
                fare = 1
               }else if(time<=20){
                  fare = 2
               }else if(time<=25){
                fare = 3
               }else if(time<=30){
                 fare = 4
               }else if(time<=35){
                  fare = 5
               }else if(time<=40){
                  fare = 6
               }else if(time<=45){
                  fare = 7
               }else if(time<=50){
                  fare = 8
               }else if(time<=55){
                  fare =9
               }else if(time<=60){
                fare = 10
               }

               return fare
           }


   var src ="BHANWARKUA"
   var dst ="DEWASNAKA"
   console.log(isfare(src,dst))

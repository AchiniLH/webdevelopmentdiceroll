function dateandtime() { 

    var DateTime = new Date();           
               var Year= DateTime.getYear();           
               var Month= DateTime.getMonth();           
               var Day = DateTime.getDate();           
               var Hours = DateTime.getHours();           
               var Minutes = DateTime.getMinutes();           
                          
               
               document.getElementById("day") =  Day + "/" + Month + "/" + Year + "  " + Hours + ":" + Minutes;         
                         
        
}

    
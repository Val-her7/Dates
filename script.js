let options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
};

function dateAndTime(){
    let today = new Date();
    let todayZone = new Intl.DateTimeFormat("en-US", options).formatToParts(today);
    
    let weekday = todayZone.find(element => element.type === "weekday").value;
    document.getElementById("weekday").textContent = weekday;
    
    let day = todayZone.find(element => element.type === "day").value;
    document.getElementById("day").textContent = day;
    
    let month = todayZone.find(element => element.type === "month").value;
    document.getElementById("month").textContent = month;
    
    let year = todayZone.find(element => element.type === "year").value;
    document.getElementById("year").textContent = year;
    
    let hour = todayZone.find(element => element.type === "hour").value;
    document.getElementById("hour").textContent = hour;
    
    let minut = todayZone.find(element => element.type === "minute").value;
    document.getElementById("minut").textContent = minut;
    
    let second = todayZone.find(element => element.type === "second").value;
    document.getElementById("second").textContent = second;
    }

setInterval(dateAndTime, 1000);

document.getElementsByClassName("time")[0].addEventListener("click", () => { 
    options.hour12 = !options.hour12;
    dateAndTime();
    }
)







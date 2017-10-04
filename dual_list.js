function firstList () {
    var firstNameList = [];
    var secondNameList = [];
    return function (firstName) {
        if(name.length > 0) { // check the length, passed empty to create a object for list the secondlist
            firstNameList.push(firstName); // pushing the names to first list
        }
        console.log("first : " + firstNameList);
        return function (secondName) {
            if(firstNameList.indexOf(secondName) > -1) { // check whether first list has the value of name
                secondNameList.push(secondName);
            }
            console.log("second : " + secondNameList);
        }
        
    }
}

var first = new firstList();
//Create first list of Names
first("Rajesh");
first("Santhosh");
first("Mahesh");
first("Yuvaraj");
first("Rahul");
first("Sachin");
first("Saurav");
first("Sehwag");
first("Bajji");
first("Gambir");
first("Zahir");

// create second list

var second = first("");

second("Yuvaraj");
second("Gambir");
second("Rahul");
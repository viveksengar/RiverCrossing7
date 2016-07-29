$(document).ready(function() {
    
    var isBoatRight = true;
    var isRight = true;
    var boatData = {
        id: 'boat',
        noOfPersonInBoat: 0,
        isRight: true,
        rightLocation: "0px",
        leftLocation: "-400px",
        person: { 
            first: {
                id: "",
            },
            second: {
                id: ""
            },
            location: { 
                leftLocation: "-650px",
                rightLocation: "-250px"
            }
        }
    }

    var personData = {
        thief: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
        police: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
         redwoman: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px",
                tempLocation: "-200px"
                
                
            }
        },
        yellowchild2: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px",
                tempLocation: "-200px"
            }
        },
        redchild2: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px",
                tempLocation: "-200px"
            }
        },
        redchild: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px",
                tempLocation: "-200px"
            }
        },
         yellowwoman: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-350px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        },
         yellowchild: { 
            isRight: true, 
            isInBoat: false,
            location: {
                right: "0px",
                rightInBoat:"-250px",
                leftInBoat: "-650px",
                left: "-950px"
            }
        }
    };

    var doOnletclick = function () {
        if (boatData.isRight) {
            moveBoatLeft()
        } else {
            moveBoatRight()
        }
    }

    var moveBoatLeft = function () {
        $(getElementId(boatData.id)).animate({marginLeft: boatData.leftLocation}, {duration: 2000,queue: false});
            boatData.isRight = false;
            if (getElementId(boatData.person.first.id)!= "") {
                console.log("personId", getElementId(boatData.person.first.id));
                $(getElementId(boatData.person.first.id)).animate({marginLeft: boatData.person.location.leftLocation}, {duration: 2000,queue: false});
                personData[boatData.person.first.id].isRight = false;
            }
            if (getElementId(boatData.person.second.id)!= "") {
                console.log("personId", getElementId(boatData.person.second.id));
                $(getElementId(boatData.person.second.id)).animate({marginLeft: boatData.person.location.leftLocation}, {duration: 2000,queue: false});
                personData[boatData.person.second.id].isRight = false;
            }
    }

    var moveBoatRight = function () {
        $(getElementId(boatData.id)).animate({marginLeft: boatData.rightLocation}, {duration: 2000,queue: false});
            boatData.isRight = true;
            if (getElementId(boatData.person.first.id)!= "") {
                console.log("personId", getElementId(boatData.person.first.id));
                $(getElementId(boatData.person.first.id)).animate({marginLeft: boatData.person.location.rightLocation}, {duration: 2000,queue: false});
                personData[boatData.person.first.id].isRight = true;
            }
            if (getElementId(boatData.person.second.id)!= "") {
                console.log("personId", getElementId(boatData.person.second.id));
                $(getElementId(boatData.person.second.id)).animate({marginLeft: boatData.person.location.rightLocation}, {duration: 2000,queue: false});
                personData[boatData.person.second.id].isRight = true;
            }
    }

    var getElementId = function (personId) {
        return personId === "" ? "" : "#" + personId;
    }

    var doOnClickPersonRightBoatRight = function (personId) {
        if (personData[personId].isInBoat) {
            doOnClickPersonRightInBoat(personId, personData[personId].location.right,personData[personId].location.right)
            personData[personId].isInBoat = false;
            if (boatData.person.first.id == personId) {
                boatData.person.first.id = "";
            } else {
                boatData.person.second.id = "";
            }
            --boatData.noOfPersonInBoat;
        } else if(! personData[personId].isInBoat && boatData.noOfPersonInBoat < 2){
            doOnClickPersonRightNotInBoat(personId,personData[personId].location.tempLocation, personData[personId].location.rightInBoat)
            personData[personId].isInBoat = true;
            if (boatData.noOfPersonInBoat === 0 ) {
                boatData.person.first.id = personId;
            } else {
                if(boatData.person.first.id == ''){
                        boatData.person.first.id = personId; 
                }else {boatData.person.second.id = personId;
            }
        }
            boatData.noOfPersonInBoat++;
        }
    }

    var doOnPersonClick = function(personId){
            if (personData[personId].isRight && boatData.isRight) {
                doOnClickPersonRightBoatRight(personId)
            }
            if (!personData[personId].isRight && !boatData.isRight) {
                doOnClickPersonLeftBoatLeft(personId)
            }
    }

    var doOnClickPersonRightNotInBoat = function(personId,tempLocation,location) {
        console.log("tempLocation",tempLocation,location);
        $(getElementId(personId)).animate({marginTop: tempLocation}, 500),$(getElementId(personId)).animate({marginLeft: location}, 500);
    };

    var doOnClickPersonRightInBoat = function(personId,location,tempLocation) {
        console.log(location);
        $(getElementId(personId)).animate({marginLeft: location}, 500),$(getElementId(personId)).animate({marginTop: tempLocation}, 500);
    };

    var doOnClickPersonLeftBoatLeft = function (personId) {
        if (personData[personId].isInBoat) {
            doOnClickPersonLeftInBoat(personId, personData[personId].location.left,personData[personId].location.right)
            personData[personId].isInBoat = false;
            if (boatData.person.first.id == personId) {
                boatData.person.first.id = "";
            } else {
                boatData.person.second.id = "";
            }
            --boatData.noOfPersonInBoat;
        } else if(! personData[personId].isInBoat && boatData.noOfPersonInBoat < 2){
            doOnClickPersonLeftNotInBoat(personId, personData[personId].location.leftInBoat,personData[personId].location.tempLocation)
            personData[personId].isInBoat = true;
            if (boatData.noOfPersonInBoat === 0 ) {
                boatData.person.first.id = personId;
            } else {
                if(boatData.person.first.id == ''){
                        boatData.person.first.id = personId; 
                }else {
                    boatData.person.second.id = personId;
            }   
        }
            boatData.noOfPersonInBoat++;
        }
    }

    var doOnClickPersonLeftInBoat = function(personId, location,tempLocation) {
        $(getElementId(personId)).animate({marginLeft: location}, 500),$(getElementId(personId)).animate({marginTop: tempLocation}, 500);
    };

    var doOnClickPersonLeftNotInBoat = function(personId,location,tempLocation) {
        if (boatData.noOfPersonInBoat < 2) {
           $(getElementId(personId)).animate({marginTop: tempLocation}, 500),$(getElementId(personId)).animate({marginLeft: location}, 500);
        }
    };

    $("#thief").click(function() {
        doOnPersonClick("thief")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#police").click(function() {
        doOnPersonClick("police")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#redwoman").click(function() {
        doOnPersonClick("redwoman","personData.redwoman.location.tempLocation")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#yellowchild2").click(function() {
        doOnPersonClick("yellowchild2","personData.yellowchild2.location.tempLocation")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
    $("#redchild2").click(function() {
        doOnPersonClick("redchild2","personData.redchild2.location.tempLocation")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
   $("#redchild").click(function() {
        doOnPersonClick("redchild","personData.redchild.location.tempLocation")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
   $("#yellowchild").click(function() {
        doOnPersonClick("yellowchild")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
   $("#yellowwoman").click(function() {
        doOnPersonClick("yellowwoman")
        console.log('Now number of person  in boat:: ', boatData.noOfPersonInBoat);
    });
   
   
   
   
    $("#let").click(function() {
        doOnletclick();
    });

});

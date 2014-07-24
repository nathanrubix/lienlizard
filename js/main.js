
function changecolor(id) {
    document.getElementById(id).style.background = "#fffbff";
    var value = document.getElementById(id).value;
    if (value == '') {
        document.getElementById(id).style.background = "#FFFFB3";
        document.getElementById(id).value = "";
    }
}

function validatelogincredentials() {
    var UserName = document.getElementById("txt_username").value;
    document.getElementById("txt_username").style.background = "#fffbff";
    var Password = document.getElementById("txt_password").value;
    document.getElementById("txt_password").style.background = "#fffbff";

    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;

    if (UserName == "") {
        reqinfo = reqinfo + "User Name\n";
        document.getElementById("txt_username").style.background = "#FFFFB3";
        count++;
    }

    if (Password == "") {
        reqinfo = reqinfo + "Password\n";
        document.getElementById("txt_password").style.background = "#FFFFB3";
        count++;
    }

    if (count != 0) {
        alert(reqinfo);
    } else {
        var Method = "validateuserlogin";
        var Xml = getrequestxml(Method);
        APIRequestCall(Xml, Method);
    }

}

function APIRequestCall(Xml, Method) {
    var URL = "http://m.lienlizard.rubixsoftsolutions.com/ProcessRequest.aspx?requestxml=" + Xml;
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", URL, false);
    xmlHttp.send(null);
    ProcessResponseXml(Method,xmlHttp.responseText);
}

//function processvalidateuserlogin(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById('loginpage').style.display = 'none';
//        document.getElementById('homepage').style.display = 'block';
//        //window.location = "Barcode.html";
//    } else {
//        alert("Login Failed");
//    }
//}

function getvindetails() {

    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;
    var vinnumber = document.getElementById("txt_vinnumber").value;
    document.getElementById("txt_vinnumber").style.background = "#fffbff";

    if (vinnumber == "") {
        reqinfo = reqinfo + "VIN Number\n";
        document.getElementById("txt_vinnumber").style.background = "#FFFFB3";
        count++;
    }

    if (count != 0) {
        alert(reqinfo);
    } else {
        var Method = "getvindetails";
        var Xml = getrequestxml(Method);
        APIRequestCall(Xml, Method);
    }
}

//function processgetvindetails(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById("txt_vinnumber").value = "";
//        document.getElementById('homepage').style.display = 'none';
//        document.getElementById('vindetailspage').style.display = 'block';
//    } else {
//        alert("VIN number details not found");
//    }
//}

function addauction() {
    OpenPage("LienDetails");
}

//function processaddauction(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById('vindetailspage').style.display = 'none';
//        document.getElementById('liendetailspage').style.display = 'block';
//    } else {
//        alert("Add Auction Failed");
//    }
//}

function saveliendetails() {
  
    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;
    var liencompany = document.getElementById("txt_liencompany").value;
    document.getElementById("txt_liencompany").style.background = "#fffbff";
    var liendate = document.getElementById("txt_liendate").value;
    document.getElementById("txt_liendate").style.background = "#fffbff";
    var mileage = document.getElementById("txt_mileage").value;
    document.getElementById("txt_mileage").style.background = "#fffbff";
    var bidstarting = document.getElementById("txt_startingbid").value;
    document.getElementById("txt_startingbid").style.background = "#fffbff";

    var title = document.getElementById("txt_title").value;
    document.getElementById("txt_title").style.background = "#fffbff";
    var description = document.getElementById("txt_description").value;
    document.getElementById("txt_description").style.background = "#fffbff";
    var location = document.getElementById("txt_location").value;
    document.getElementById("txt_location").style.background = "#fffbff";
    var city = document.getElementById("txt_city").value;
    document.getElementById("txt_city").style.background = "#fffbff";
    var state = document.getElementById("txt_state").value;
    document.getElementById("txt_state").style.background = "#fffbff";
    var zipcode = document.getElementById("txt_zipcode").value;
    document.getElementById("txt_zipcode").style.background = "#fffbff";
    var rate = document.getElementById("txt_rate").value;
    document.getElementById("txt_rate").style.background = "#fffbff";

    if (title == "") {
        reqinfo = reqinfo + "Title\n";
        document.getElementById("txt_title").style.background = "#FFFFB3";
        count++;
    }

    if (description == "") {
        reqinfo = reqinfo + "Description\n";
        document.getElementById("txt_description").style.background = "#FFFFB3";
        count++;
    }

    if (liencompany == "") {
        reqinfo = reqinfo + "Lien Company\n";
        document.getElementById("txt_liencompany").style.background = "#FFFFB3";
        count++;
    }

    if (liendate == "" || isdatevalid(liendate) == false) {
        reqinfo = reqinfo + "Lien Date\n";
        document.getElementById("txt_liendate").style.background = "#FFFFB3";
        count++;
    }

    if (mileage == "") {
        reqinfo = reqinfo + "Mileage\n";
        document.getElementById("txt_mileage").style.background = "#FFFFB3";
        count++;
    }

    if (bidstarting == "") {
        reqinfo = reqinfo + "Bid Starting\n";
        document.getElementById("txt_startingbid").style.background = "#FFFFB3";
        count++;
    }

    if (rate == "") {
        reqinfo = reqinfo + "Rate\n";
        document.getElementById("txt_rate").style.background = "#FFFFB3";
        count++;
    }

    if (location == "") {
        reqinfo = reqinfo + "Location\n";
        document.getElementById("txt_location").style.background = "#FFFFB3";
        count++;
    }

    if (city == "") {
        reqinfo = reqinfo + "City\n";
        document.getElementById("txt_city").style.background = "#FFFFB3";
        count++;
    }

    if (state == "") {
        reqinfo = reqinfo + "State\n";
        document.getElementById("txt_state").style.background = "#FFFFB3";
        count++;
    }

    if (zipcode == "") {
        reqinfo = reqinfo + "Zip Code\n";
        document.getElementById("txt_zipcode").style.background = "#FFFFB3";
        count++;
    }

    if (count != 0) {
        alert(reqinfo);
    } else {
        var Method = "addauction";
        var Xml = getrequestxml(Method);
        APIRequestCall(Xml, Method);
    }

}

//function processliendetails(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById('liendetailspage').style.display = 'none';
//        document.getElementById('photouploadpage').style.display = 'block';
//    } else {
//        alert("Add Auction Failed");
//    }
//}

//function gobackhome(id) {
//    document.getElementById(id).style.display = 'none';
//    document.getElementById('homepage').style.display = 'block';
//}

//function processconfirmationmsg(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById('photouploadpage').style.display = 'none';
//        document.getElementById('confirmationpage').style.display = 'block';
//    } else {
//        alert("Get confirmation message failed");
//    }
//}

//function showlienhistory() {
//    var requesturl = "http://m.lienlizard.rubixsoftsolutions.com/ProcessRequest.aspx?";
//    //var url = requesturl + "saction=validateuserlogin&username=" + UserName + "&password=" + Password;
//    //ValidateUserLogin(url);
//    processshowlienhistory("True");
//}

//function processshowlienhistory(sresponse) {
//    if (sresponse == "True") {
//        document.getElementById('confirmationpage').style.display = 'none';
//        document.getElementById('lienhistorypage').style.display = 'block';
//    } else {
//        alert("Get lien history failed");
//    }
//}


function numbersonly(e) {

    var unicode = e.charCode ? e.charCode : e.keyCode

    if (event.keyCode == 45) {
        return true;
    }
    if (event.keyCode == 46) {
        return true;
    }
    if (event.keyCode == 47) {
        return true;
    }
    if (unicode != 8) {
        if (unicode < 48 || unicode > 57) return false //disable key press
    }
}

function isdatevalid(dateStr) {
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
    var matchArray = dateStr.match(datePat); // is the format ok?
    if (matchArray == null) { return false; }
    month = matchArray[1];
    day = matchArray[3];
    year = matchArray[4];

    if (month < 1 || month > 12) { return false; }
    if (day < 1 || day > 31) { return false; }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31)

    { return false; }
    today = new Date()
    var date1 = new Date(dateStr);
    var one_day = 1000 * 60 * 60 * 24
    var diff = Math.ceil((date1 - today) / (one_day));
    return true; // date is valid
}

function getrequestxml(method) {
    var xml = "";
    var IP = getviewstatevalues("ipaddress");
    var DisplayId = getviewstatevalues("userdisplayid");
    var DeviceId = getviewstatevalues("deviceid");

    if (method == "validateuserlogin") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><username>" + document.getElementById('txt_username').value + "</username><password>" + document.getElementById('txt_password').value + "</password></requestbody></Lienlizard>";
    } else if (method == "getvindetails") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + document.getElementById('txt_vinnumber').value + "</vinnumber></requestbody></Lienlizard>";
    } else if (method == "addauction") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber><liencompany>" + document.getElementById('txt_liencompany').value + "</liencompany><liendate>" + document.getElementById('txt_liendate').value + "</liendate>";
        xml += "<mileage>" + document.getElementById('txt_mileage').value + "</mileage><startingbid>" + document.getElementById('txt_startingbid').value + "</startingbid>";
        xml += "<title>" + document.getElementById('txt_title').value + "</title><description>" + document.getElementById('txt_description').value + "</description>";
        xml += "<city>" + document.getElementById('txt_city').value + "</city><location>" + document.getElementById('txt_location').value + "</location>";
        xml += "<postalcode>" + document.getElementById('txt_zipcode').value + "</postalcode><state>" + document.getElementById('txt_state').value + "</state>";
        xml += "<rate>" + document.getElementById('txt_rate').value + "</rate><make>" + getviewstatevalues("make") + "</make>";
        xml += "</requestbody></Lienlizard>";
    } else if (method == "getconfirmation") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber></requestbody></Lienlizard>";
    } else if (method == "getlienhistory") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber><currentrid>" + getviewstatevalues("currentrid") + "</currentrid></requestbody></Lienlizard>";
    } else if (method == "photoupload") {
        xml += "<Lienlizard><requestheader><ip>" + IP + "</ip><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><currentrid>" + getviewstatevalues("currentrid") + "</currentrid></requestbody></Lienlizard>";
    }

    return xml;
}


function getxmlnodevalue(response,node) {
    var xml = $.parseXML(response);
    return $(xml).find(node).text();
}

function OpenPage(pagename) {
    var fullpath = "file:///android_asset/www/" + pagename + ".html";
    window.open(fullpath);
}

function ProcessResponseXml(method, response) {
    var status;
    var statusmsg;
  
    if (method == "getlienhistory") {
        document.getElementById('historyinfo').innerHTML = response;
    }else{

    status = getxmlnodevalue(response, 'status');
    statusmsg = getxmlnodevalue(response, 'statusmsg');
    
    if (status == "failed" && statusmsg == "error") {
        alert(getxmlnodevalue(response, 'result'));
    } else {
        if (method == "validateuserlogin") {
            if (status == "success" && statusmsg == "no_error") {
                setviewstatevalues("isuserauthendicated", getxmlnodevalue(response, 'result'));
                setviewstatevalues("userdisplayid", getxmlnodevalue(response, 'userdisplayid'));
                //window.location = "Home.html";
                OpenPage("Home");
            } else {
                alert("Login Failed");
            }
        } else if (method == "getvindetails") {
            if (status == "success" && statusmsg == "no_error") {
                //window.location = "vindetails.html";
                var vinnumber = getxmlnodevalue(response, 'vinnumber');
                var year = getxmlnodevalue(response, 'year');
                var make = getxmlnodevalue(response, 'make');
                var model = getxmlnodevalue(response, 'model');
                setviewstatevalues("year", year);
                setviewstatevalues("make", make);
                setviewstatevalues("model", model);
                setviewstatevalues("vinnumber", vinnumber);
                OpenPage("VinDetails");
            } else {
                alert(getxmlnodevalue(response, 'result'));
            }
        } else if (method == "addauction") {
            if (status == "success" && statusmsg == "no_error") {
                alert(getxmlnodevalue(response, 'result'));
                OpenPage("PhotoUpload");
                //window.location = "photoupload.html";
            } else {
                alert(getxmlnodevalue(response, 'result'));
            }
        } else if (method == "getconfirmation") {
            if (status == "success" && statusmsg == "no_error") {
                var confirmationmsg = getxmlnodevalue(response, 'confirmationmsg');
                setviewstatevalues("confirmmsg", confirmationmsg);
                OpenPage("Confirmation");
                //window.location = "confirmation.html";
            } else {
                alert(getxmlnodevalue(response, 'result'));
            }
        }
    }

    }
}

function setviewstatevalues(keyname, keyvalue) {
    window.localStorage.removeItem(keyname);
    window.localStorage.setItem(keyname, keyvalue);
}

function getviewstatevalues(keyname) {
    return window.localStorage.getItem(keyname);
}
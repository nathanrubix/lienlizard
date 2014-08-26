
function changecolor(id) {
    document.getElementById(id).style.background = "#fffbff";
    var value = document.getElementById(id).value;
    if (value == '') {
        document.getElementById(id).style.background = "#FFFFB3";
        document.getElementById(id).value = "";
    }
}

function changedropdowncolor(id){
    document.getElementById(id).style.background = "#fffbff";
    var value = document.getElementById(id).value;
    if (value == '-999') {
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


function getvindetails() {

    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;
    var vinnumber = document.getElementById("txt_vinnumber").value;
    document.getElementById("txt_vinnumber").style.background = "#fffbff";
    var strlength = vinnumber.length;
    
    if (vinnumber == "") {
        reqinfo = reqinfo + "VIN Number\n";
        document.getElementById("txt_vinnumber").style.background = "#FFFFB3";
        count++;
    }
    
    if((vinnumber != "") && (strlength != 17)){
        reqinfo = reqinfo + "Invalid vin number(17 digit required)\n";
        document.getElementById("txt_vinnumber").style.background = "#FFFFB3";
        count++;
    }

    if (count != 0) {
        alert(reqinfo);
    } else {
    setviewstatevalues("vinnumber", vinnumber);
    window.location = "VinDetails.html";
//        var Method = "getvindetails";
//        var Xml = getrequestxml(Method);
//        APIRequestCall(Xml, Method);
    }
}

function setvindetails() {
    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;
    var make = document.getElementById("ddl_make").value;
    document.getElementById("ddl_make").style.background = "#fffbff";
    var model = document.getElementById("txt_model").value;
    document.getElementById("txt_model").style.background = "#fffbff";
    var year = document.getElementById("ddl_year").value;
    document.getElementById("ddl_year").style.background = "#fffbff";
    var mileage = document.getElementById("txt_mileage").value;
    document.getElementById("txt_mileage").style.background = "#fffbff";
    
    if (make == "-999") {
        reqinfo = reqinfo + "Make\n";
        document.getElementById("ddl_make").style.background = "#FFFFB3";
        count++;
    }

    if (model == "") {
        reqinfo = reqinfo + "Model\n";
        document.getElementById("txt_model").style.background = "#FFFFB3";
        count++;
    }

    if (year == "-999") {
        reqinfo = reqinfo + "Year\n";
        document.getElementById("ddl_year").style.background = "#FFFFB3";
        count++;
    }
    
    if (mileage == "") {
        reqinfo = reqinfo + "Mileage\n";
        document.getElementById("txt_mileage").style.background = "#FFFFB3";
        count++;
    }

    if (count != 0) {
        //alertlabel(reqinfo);
        alert(reqinfo);
    } else {
//  var Method = "setvindetails";
//  var Xml = getrequestxml(Method);
//  APIRequestCall(Xml, Method);
    var value = document.getElementById('ddl_make')[document.getElementById('ddl_make').selectedIndex].text;
    setviewstatevalues("year", year);
    setviewstatevalues("make", value);
    setviewstatevalues("makerid", make);
    setviewstatevalues("model", model);
    setviewstatevalues("mileage", mileage);
    window.location = "LienDetails.html";
    }
}

function saveliendetails() {
  
    var reqinfo = "";
    reqinfo = "The following fields are required\n\n";
    var count = 0;
    var liencompany = document.getElementById("txt_liencompany").value;
    document.getElementById("txt_liencompany").style.background = "#fffbff";
    var liendate = document.getElementById("txt_liendate").value;
    document.getElementById("txt_liendate").style.background = "#fffbff";
//  var mileage = document.getElementById("txt_mileage").value;
//  document.getElementById("txt_mileage").style.background = "#fffbff";
    var bidstarting = document.getElementById("txt_startingbid").value;
    document.getElementById("txt_startingbid").style.background = "#fffbff";

    var title = document.getElementById("txt_title").value;
    document.getElementById("txt_title").style.background = "#fffbff";
    var description = document.getElementById("txt_description").value;
    document.getElementById("txt_description").style.background = "#fffbff";
//    var location = document.getElementById("txt_location").value;
//    document.getElementById("txt_location").style.background = "#fffbff";
//    var city = document.getElementById("txt_city").value;
//    document.getElementById("txt_city").style.background = "#fffbff";
//    var state = document.getElementById("txt_state").value;
//    document.getElementById("txt_state").style.background = "#fffbff";
//    var zipcode = document.getElementById("txt_zipcode").value;
//    document.getElementById("txt_zipcode").style.background = "#fffbff";
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

//    if (mileage == "") {
//        reqinfo = reqinfo + "Mileage\n";
//        document.getElementById("txt_mileage").style.background = "#FFFFB3";
//        count++;
//    }

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

//    if (location == "") {
//        reqinfo = reqinfo + "Address\n";
//        document.getElementById("txt_location").style.background = "#FFFFB3";
//        count++;
//    }
//
//    if (city == "") {
//        reqinfo = reqinfo + "City\n";
//        document.getElementById("txt_city").style.background = "#FFFFB3";
//        count++;
//    }
//
//    if (state == "") {
//        reqinfo = reqinfo + "State\n";
//        document.getElementById("txt_state").style.background = "#FFFFB3";
//        count++;
//    }
//
//    if (zipcode == "") {
//        reqinfo = reqinfo + "Zip Code\n";
//        document.getElementById("txt_zipcode").style.background = "#FFFFB3";
//        count++;
//    }

    if (count != 0) {
        //alertlabel(reqinfo);
        alert(reqinfo);
    } else {
        var Method = "addauction";
        var Xml = getrequestxml(Method);
        APIRequestCall(Xml, Method);
    }

}

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
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><username>" + document.getElementById('txt_username').value + "</username><password>" + document.getElementById('txt_password').value + "</password></requestbody></Lienlizard>";
//    } else if (method == "getvindetails") {
//        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
//        xml += "<requestbody><vinnumber>" + document.getElementById('txt_vinnumber').value + "</vinnumber></requestbody></Lienlizard>";
    } else if (method == "addauction") {
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber><liencompany>" + document.getElementById('txt_liencompany').value + "</liencompany><liendate>" + document.getElementById('txt_liendate').value + "</liendate>";
        xml += "<mileage>" + getviewstatevalues("mileage") + "</mileage><startingbid>" + document.getElementById('txt_startingbid').value + "</startingbid>";
        xml += "<description>" + document.getElementById('txt_description').value + "</description>";
        xml += "<city>" + document.getElementById('txt_city').value + "</city><location>" + document.getElementById('txt_location').value + "</location>";
        xml += "<postalcode>" + document.getElementById('txt_zipcode').value + "</postalcode><state>" + document.getElementById('txt_state').value + "</state>";
        xml += "<rate>" + document.getElementById('txt_rate').value + "</rate><makerid>" + getviewstatevalues("makerid") + "</makerid>";
        xml += "<model>" + getviewstatevalues("model") + "</model><year>" + getviewstatevalues("year") + "</year>";
        xml += "<title>" + document.getElementById('txt_title').value + "</title><make>" + getviewstatevalues("make") + "</make>";
        xml += "</requestbody></Lienlizard>";
    } else if (method == "getconfirmation") {
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber></requestbody></Lienlizard>";
    } else if (method == "getlienhistory") {
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber><currentrid>" + getviewstatevalues("currentrid") + "</currentrid></requestbody></Lienlizard>";
    } else if (method == "photoupload") {
        xml = "method=" + method + "&auctionid=" + getviewstatevalues("auctionid");
        //+ "&Title=" + document.getElementById('txt_title').value;
    }else if(method == "getvininfo") {
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber></requestbody></Lienlizard>";
//    }else if(method == "setvindetails") {
//        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader>";
//        xml += "<requestbody><vinnumber>" + getviewstatevalues("vinnumber") + "</vinnumber>";
//        xml += "<make>" + document.getElementById('ddl_make').value + "</make><model>" + document.getElementById('txt_model').value + "</model>";
//        xml += "<year>" + document.getElementById('ddl_year').value + "</year>";
       // xml += "</requestbody></Lienlizard>";
    }else if(method == "getuserdetails"){
        xml += "<Lienlizard><requestheader><userdisplayid>" + DisplayId + "</userdisplayid><method>" + method + "</method><deviceid>" + DeviceId + "</deviceid></requestheader></Lienlizard>";
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
  
//    if (method == "getlienhistory") {
//        document.getElementById('historyinfo').innerHTML = response;
//    }else 
    if (method == "getvininfo") {
         document.getElementById('vininfo').innerHTML = response;
    }else{

    status = getxmlnodevalue(response, 'status');
    statusmsg = getxmlnodevalue(response, 'statusmsg');
   
    if (status == "failed" && statusmsg == "error") {
        alertlabel(getxmlnodevalue(response, 'result'));
    } else {
        if (method == "validateuserlogin") {
            if (status == "success" && statusmsg == "no_error") {
                setviewstatevalues("isuserauthendicated", getxmlnodevalue(response, 'result'));
                setviewstatevalues("userdisplayid", getxmlnodevalue(response, 'userdisplayid'));
                setviewstatevalues("userrecordid", getxmlnodevalue(response, 'userrecordid'));
                setviewstatevalues("profileid", getxmlnodevalue(response, 'profileid'));
                setviewstatevalues("username", getxmlnodevalue(response, 'username'));
                setviewstatevalues("companyname", getxmlnodevalue(response, 'companyname'));
                setviewstatevalues("email", getxmlnodevalue(response, 'email'));
                setviewstatevalues("address", getxmlnodevalue(response, 'address'));
                setviewstatevalues("city", getxmlnodevalue(response, 'city'));
                setviewstatevalues("state", getxmlnodevalue(response, 'state'));
                setviewstatevalues("zip", getxmlnodevalue(response, 'zip'));
                setviewstatevalues("auctioncount", getxmlnodevalue(response, 'auctioncount'));
                window.location = "Home.html";
                //OpenPage("Home");
            } else {
                alert("Login Failed");
            }
        } else if (method == "getuserdetails") {
            if (status == "success" && statusmsg == "no_error") {
                setviewstatevalues("isuserauthendicated", getxmlnodevalue(response, 'result'));
                setviewstatevalues("userdisplayid", getxmlnodevalue(response, 'userdisplayid'));
                setviewstatevalues("userrecordid", getxmlnodevalue(response, 'userrecordid'));
                setviewstatevalues("profileid", getxmlnodevalue(response, 'profileid'));
                setviewstatevalues("username", getxmlnodevalue(response, 'username'));
                setviewstatevalues("companyname", getxmlnodevalue(response, 'companyname'));
                setviewstatevalues("email", getxmlnodevalue(response, 'email'));
                setviewstatevalues("address", getxmlnodevalue(response, 'address'));
                setviewstatevalues("city", getxmlnodevalue(response, 'city'));
                setviewstatevalues("state", getxmlnodevalue(response, 'state'));
                setviewstatevalues("zip", getxmlnodevalue(response, 'zip'));
                setviewstatevalues("auctioncount", getxmlnodevalue(response, 'auctioncount'));
                document.getElementById('username').innerHTML = getviewstatevalues("username");
                document.getElementById('companyname').innerHTML = getviewstatevalues("companyname");
                document.getElementById('auctioncount').innerHTML = getviewstatevalues("auctioncount");
                //OpenPage("Home");
            } else {
                alert("Login Failed");
                logout();
            }
//        } else if (method == "getvindetails") {
//            if (status == "success" && statusmsg == "no_error") {
//                //window.location = "vindetails.html";
//                var vinnumber = getxmlnodevalue(response, 'vinnumber');
//                var year = getxmlnodevalue(response, 'year');
//                var make = getxmlnodevalue(response, 'make');
//                var model = getxmlnodevalue(response, 'model');
//                setviewstatevalues("year", year);
//                setviewstatevalues("make", make);
//                setviewstatevalues("model", model);
//                setviewstatevalues("vinnumber", vinnumber);
//                window.location = "VinDetails.html";
//                //OpenPage("VinDetails");
//            } else {
//                alertlabel(getxmlnodevalue(response, 'result'));
//            }
        } else if (method == "addauction") {
            if (status == "success" && statusmsg == "no_error") {
                setviewstatevalues("auctionid", getxmlnodevalue(response, 'auctionid'));
                setviewstatevalues("year", '');
                setviewstatevalues("make", '');
                setviewstatevalues("model", '');
                setviewstatevalues("vinnumber", '');
                //alertlabel(getxmlnodevalue(response, 'result'));
                //alert(getxmlnodevalue(response, 'result'));
                //OpenPage("PhotoUpload");
                window.location = "PhotoUpload.html";
            } else {
                //alertlabel(getxmlnodevalue(response, 'result'));
                alert(getxmlnodevalue(response, 'result'));
            }
//        } else if (method == "setvindetails") {
//            if (status == "success" && statusmsg == "no_error") {
//                var year = getxmlnodevalue(response, 'year');
//                var make = getxmlnodevalue(response, 'make');
//                var model = getxmlnodevalue(response, 'model');
//                setviewstatevalues("year", year);
//                setviewstatevalues("make", make);
//                setviewstatevalues("model", model);
//                //alert(getxmlnodevalue(response, 'result'));
//                //OpenPage("PhotoUpload");
//                window.location = "LienDetails.html";
//            } else {
//                //alertlabel(getxmlnodevalue(response, 'result'));
//                alert(getxmlnodevalue(response, 'result'));
//            }
        } else if (method == "getlienhistory") {
            if (status == "success" && statusmsg == "no_error") {
               document.getElementById('title').innerHTML = getxmlnodevalue(response,'title');
               document.getElementById('vehicleinfo').innerHTML = getxmlnodevalue(response,'year') + " " +  getxmlnodevalue(response, 'make')  + " " +  getxmlnodevalue(response, 'model') ;
               document.getElementById('description').innerHTML = getxmlnodevalue(response, 'description');
               document.getElementById('auctioninfo').innerHTML = getxmlnodevalue(response, 'startingbid') + " | " +  getxmlnodevalue(response, 'mileage')  + " Mileage";
               document.getElementById('auctiondate').innerHTML = getxmlnodevalue(response, 'liendate')
               document.getElementById('vinnumber').innerHTML = getxmlnodevalue(response, 'vinnumber');
               document.getElementById('hdn_previd').value = getxmlnodevalue(response, 'previousrid');
               document.getElementById('hdn_nextid').value = getxmlnodevalue(response, 'nextrid');
               document.getElementById('hdn_aucid').value = getxmlnodevalue(response, 'aucid');
               var imagecount = getxmlnodevalue(response, 'imagecount');
               
               if(getxmlnodevalue(response, 'previousrid') == -999){
                   document.getElementById('prevbtn').style.display = "none";
               }else{
                    document.getElementById('prevbtn').style.display = "block";
               }
               
               if(getxmlnodevalue(response, 'nextrid') == -999){
                   document.getElementById('nextbtn').style.display = "none";
               }else{
                   document.getElementById('nextbtn').style.display = "block";
               }
               
               if(imagecount == 0){
                   document.getElementById('uploadimage').style.display = "block";
               }else{
                   document.getElementById('uploadimage').style.display = "none";
               }
            }else {
               alert(getxmlnodevalue(response, 'result'));
            }
        } else if (method == "getconfirmation") {
            if (status == "success" && statusmsg == "no_error") {
                var confirmationmsg = getxmlnodevalue(response, 'confirmationmsg');
                setviewstatevalues("confirmmsg", confirmationmsg);
                //OpenPage("Confirmation");
                window.location = "Confirmation.html";
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

function closemenu() {
    document.getElementById('menutable').style.display = "none";
}
function openmenu() {
    if (document.getElementById('menutable').style.display == "block") { closemenu(); }
    else {
        document.getElementById('menutable').style.display = "block";
        document.getElementById('menutable').style.width = '100%';
    }
}

function logout() {
    setviewstatevalues("isuserauthendicated", "");
    setviewstatevalues("userdisplayid", "");
    setviewstatevalues("vinnumber", "");
    window.location = "index.html";
   // OpenPage("index");
}

function alertlabel(msg) {
    document.getElementById("lbl_error").innerHTML = msg;
}
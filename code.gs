function myFunction() {
  //var form=FormApp.openById('15QBpmwD-N6vEHH-IL-QejeGEbbwdmVNliI2SEOFZC70');
  //var clientResponses = e.response.getItemResponses();
    //var clientFName = clientResponses[0].getResponse();
  //var emailid=e.values[1];
 // Logger.log(emailid);
  var ss1 = SpreadsheetApp.openById('1LD8DQ80i0yvMZWHVOI2xT4078inwBSaEdO3tZF7LR4A');
  var sheet1=ss1.getSheets()[0];
   var lastRow = sheet1.getLastRow();
 var lastColumn = sheet1.getLastColumn();
 var emailid = sheet1.getRange(lastRow, lastColumn).getValue();
  //Logger.log(emailid);
  var ss = SpreadsheetApp.openById('1t5QYnvd-PkQJnxNnyNi_kDOa5H47Nl522sr6JBJBVFY');
   var sheet=ss.getSheets()[0];
 var range = sheet.getRange(2, 3, 500);
 var values = range.getValues();

 // Prints 3 values from the first column, starting from row 1.
 var flag=false;
 var counter=1;
 for (var row in values) {
   for (var col in values[row]) {
     if(values[row][col]===emailid){
       Logger.log(emailid);
       Logger.log("Email Id exists");
       flag=true;
        MailApp.sendEmail(emailid, "CHOICE","Thank you for registering for Session 2 of DYS."); 
     }
     else if(flag==false && counter==500){
      
       MailApp.sendEmail(emailid, "CHOICE","We are sorry but your email id doesn't exist in our Database.Please Click On The Following Link To Register Yourself: https://goo.gl/LmubOl .Thank you"); 
       Logger.log("Emaid Id doesnt exists");

     }
      counter++;
     //Logger.log(values[row][col]);
   }
 }
}

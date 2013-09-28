function notifyByEmail() {
  
  // Fetch current date and set variable to tomorrow's date

  var currentTime = new Date();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var tomorrow = day +1;
  var year = currentTime.getFullYear();
  var tomorrowsDate = month + "/" + tomorrow + "/" + year;
  
  if (month == 1 && tomorrow == 32) {    // Set the last day of the month to the first day of the next month
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 2 && tomorrow == 29) {    // Change var 'tomorrow' to 30 in leap years!
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 3 && tomorrow == 32) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 4 && tomorrow == 31) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 5 && tomorrow == 32) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 6 && tomorrow == 31) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 7 && tomorrow == 32) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 8 && tomorrow == 32) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 9 && tomorrow == 31) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 10 && tomorrow == 32) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 11 && tomorrow == 31) {
    tomorrow = 1;
    month = month + 1;
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }
  if (month == 12 && tomorrow == 32) {
    tomorrow = 1;
    month = 1;
    year = year + 1
    tomorrowsDate = month + "/" + tomorrow + "/" + year;
  }

  // Search spreadsheet for any duty dates that are equal to tomorrow's date and email supervisor
  
  var sheet = SpreadsheetApp.getActiveSheet();              // Fetch active sheet
  var dataRange = sheet.getDataRange().getValues();         // Fetch a data range for sheet
  var range = sheet.getDataRange();
  
  for (var i = 0; i < dataRange.length; i++) {
    
    var name = dataRange[i][0];
    var emailAddress = dataRange[i][1];
    var dateRow = i + 1;                  // Add 1 to row for setting color with getRange method below
    var dateColumn = 3;
    var dutyDate = "";
    var dutyDate1 = dataRange[i][2];      // Date column must be formatted as plain text 
    var dutyDate2 = dataRange[i][3];
    var dutyDate3 = dataRange[i][4];
    var dutyDate4 = dataRange[i][5];
    
    if (dutyDate1 == tomorrowsDate) {     // Set one of 4 possible duty dates
      var dutyDate = dutyDate1;
      var dateColumn = 3;
    }
    else if (dutyDate2 == tomorrowsDate) {
      var dutyDate = dutyDate2;
      var dateColumn = 4;
    }
    else if (dutyDate3 == tomorrowsDate) {
      var dutyDate = dutyDate3;
      var dateColumn = 5;
    }
    else if (dutyDate4 == tomorrowsDate) {
      var dutyDate = dutyDate4;
      var dateColumn = 6;
    }
    
    //Logger.log("Tomorrow's Date: " + tomorrowsDate);
    //Logger.log("Name: " + dataRange[i][0]);
    //Logger.log("Email: " + dataRange[i][1]);
    //Logger.log("Duty Dates: " + dutyDate1 + " " + dutyDate2 + " " + dutyDate3 + " " + dutyDate4 + "\n");
    
    if (dutyDate == tomorrowsDate) {
      
      //Logger.log("name: " + name + "\n");
      //Logger.log("email: " + emailAddress + "\n");
      //Logger.log("dateColumn: " + dateColumn + "\n");
      //Logger.log("dutyDate: " + dutyDate + "\n");
      
      sheet.getRange(dateRow, dateColumn, 1, 1).setBackgroundColor('#00FF00'); // Set duty date background color of emailed duty dates to green
      
      var subject = "You have Horn Commons duty tomorrow, " + dutyDate + "!";
      var message = "Dear " + name + ",\n\n";
      
      message += "This is a friendly reminder that you are scheduled for Horn Commons duty tomorrow, " + dutyDate + ", at break.  Thank you for your help!\n\nBest,\n\n-HW.";
      
      MailApp.sendEmail(emailAddress, subject, message, {bcc: "email@domain.com", replyTo: "email@domain.com"});
    }
    
  }
  
}

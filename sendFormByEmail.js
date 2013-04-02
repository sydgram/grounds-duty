function sendFormByEmail(e)  {    

  // Fetch submission email address om in column D of last row
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = sheet.getLastRow();                       // Fetch the current number of rows
  var lastCol = sheet.getLastColumn();                    // Fetch the current number of columns
  var range = sheet.getRange(lastRow, 1, 1, lastCol);     // Fetch the last row 
  var values = range.getValues();                         // Fetch a two-dimension array of [rows][cells];
  var emailAddress = values[0][3];                        // Assign the email address value

  // The variable e holds all the form values in an array.
  // Loop through the array and append values to the body.

  var subject = "Sunshine Donation Submitted!"; 
  
  var message = "Thank you for your 2012-13 Harvard-Westlake MS Sunshine Fund Donation!\n\nThe Harvard-Westlake School\n700 North Faring Road\nLos Angeles, CA 90077\nTax ID:  95-1644019\n\n";
  
  for(var field in e.namedValues) {
    message += field + ': ' + e.namedValues[field].toString() + "\n\n";
  }    

  // This is the MailApp service of Google Apps Script
  // that sends the email. You can also use GmailApp here.

  MailApp.sendEmail(emailAddress, subject, message); 
  
}

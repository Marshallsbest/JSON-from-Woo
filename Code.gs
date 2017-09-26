function testThePost() {
  var publishedUrl = "https://script.google.com/a/mcpher.com/macros/s/AKfycbxj0-IK2tOT9yC2hq39ZWqdYdoVhncbeE6ErZl082vczoSyaJY/exec";
  var body = [
    {f1:"f1a" , f2:"f2a"},
    {f1:"f1b" , f2:"f2b"}
  ];
  
  var response = UrlFetchApp.fetch (publishedUrl , {
    contentType:"application/json",
    method:"POST",
    payload:JSON.stringify(body),
    muteHttpExceptions:true
  });
  if (response.getResponseCode() !== 200) {
    throw response.getResponseCode();
  }
  
}


function doPost(e){
  // lets get some data from an API
  
  console.log (e.postData.contents);
  
  var data = JSON.parse(e.postData.contents);
  // either create or use an existing sheet
  var ss = SpreadsheetApp.openById('1181bwZspoKoP98o4KuzO0S11IsvE59qCwiw4la9kL4o');
  var sheet = ss.getSheetByName ("Order_intake") || ss.insertSheet("Order_intake");
  
  
  //1 get the current data
  var fiddler = new cUseful.Fiddler(sheet);
  
  //2 these are the existing columns
  var columns = fiddler.getHeaders();
  
  //3 this is the data with the stuff we dont want filtered out
  var filteredData = data.map (function (row) {
    return Object.keys(row).reduce (function (p,c) {
      if (columns.indexOf (c) !== -1) {
        p[c] = row[c];
      }
      return p;
    },{});
  });
  
  //4 use the data from the API to insert at the end
  fiddler.insertRows (undefined ,filteredData.length , filteredData)  
  
  // and write it all out
  .dumpValues();
}
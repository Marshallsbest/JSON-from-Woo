function doPost(e){
  // lets get some data from an API
  
  console.log (e.postData.contents);
  
  var data = JSON.parse(e.postData.contents);
  // either create or use an existing sheet
  var ss = SpreadsheetApp.openById('1Vgp6Ola8QBHQf-pLG29rxcrfO56JyhGP1oYLGZoRqZ4');
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
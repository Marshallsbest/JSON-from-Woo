function myFunction() {
var url =  PropertiesService.getScriptProperties();
url.setProperty(
"publishedUrl" , "https://script.google.com/a/lnmsupplies.com/macros/s/AKfycbybbi9W7RgQcBoB0Eglcq-xYrtdpOGtcnWybvkXJDADvAIhp8o/exec"
);
}

  ////*function testThePost() {
//    var publicUrl =  PropertiesService.getScriptProperties().getProperty('publishedUrl')
//    var body = [
//      {"id":2890,"parent_id":0,"number":"2890","order_key":"wc_order_59cafc8f83064","created_via":"checkout","version":"3.1.2","status":"on-hold","currency":"CAD","date_created":"2017-09-26T21:19:11","date_created_gmt":"2017-09-27T01:19:11","date_modified":"2017-09-26T21:19:12","date_modified_gmt":"2017-09-27T01:19:12","discount_total":"0.00","discount_tax":"0.00","shipping_total":"24.00","shipping_tax":"3.12","cart_tax":"0.52","total":"31.64","total_tax":"3.64","prices_include_tax":false,"customer_id":19,"customer_ip_address":"174.118.153.160","customer_user_agent":"mozilla\/5.0 (windows nt 10.0; win64; x64) applewebkit\/537.36 (khtml, like gecko) chrome\/61.0.3163.100 safari\/537.36","customer_note":"","billing":{"first_name":"Luke","last_name":"Marshall","company":"The Marshall Chronicles","address_1":"2010 Islington Ave","address_2":"Suite:2101","city":"Toronto","state":"ON","postcode":"M9P 3S8","country":"CA","email":"luke@themarshallchronicles.com","phone":"(647) 525-6646"},"shipping":{"first_name":"Luke","last_name":"Marshall","company":"The Marshall Chronicles","address_1":"2010 Islington Ave,","address_2":"Suite:2101","city":"Toronto","state":"ON","postcode":"M9P 3S8","country":"CA"},"payment_method":"bacs","payment_method_title":"EMT - Email Money Transfer","transaction_id":"","date_paid":null,"date_paid_gmt":null,"date_completed":null,"date_completed_gmt":null,"cart_hash":"1fa51d037cb28140be574ba207a3b030","meta_data":[{"id":107016,"key":"has_suorder","value":"1"},{"id":107119,"key":"_wwpp_order_type","value":"wholesale"},{"id":107120,"key":"_wwpp_wholesale_order_type","value":"wholesale_customer"},{"id":107121,"key":"wwp_wholesale_role","value":"wholesale_customer"},{"id":107124,"key":"_wcpdf_invoice_date","value":"1506475152"},{"id":107125,"key":"_wcpdf_invoice_date_formatted","value":"2017-09-26 21:19:12"},{"id":107126,"key":"_wcpdf_invoice_number","value":"L&M-001056"},{"id":107127,"key":"_wcpdf_invoice_number_data","value":{"number":1056,"formatted_number":"L&M-001056","prefix":"L&M-","suffix":"","document_type":"invoice","order_id":2890,"padding":"6"}},{"id":107179,"key":"_order_stock_reduced","value":"yes"}],"line_items":[{"id":430,"name":"WootestL&M","product_id":2845,"variation_id":0,"quantity":11,"tax_class":"","subtotal":"1.50","subtotal_tax":"0.20","total":"1.50","total_tax":"0.20","taxes":[{"id":1,"total":"0.195","subtotal":"0.195"}],"meta_data":[{"id":4572,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4573,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"LNMVIR01","price":1.5},{"id":431,"name":"GCF Test 1","product_id":2855,"variation_id":0,"quantity":15,"tax_class":"","subtotal":"1.50","subtotal_tax":"0.20","total":"1.50","total_tax":"0.20","taxes":[{"id":1,"total":"0.195","subtotal":"0.195"}],"meta_data":[{"id":4583,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4584,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"GCFTEST01","price":1.5},{"id":432,"name":"Sbody test","product_id":2868,"variation_id":0,"quantity":21,"tax_class":"","subtotal":"1.00","subtotal_tax":"0.13","total":"1.00","total_tax":"0.13","taxes":[{"id":1,"total":"0.13","subtotal":"0.13"}],"meta_data":[{"id":4594,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4595,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"SBODYTEST","price":1}],"tax_lines":[{"id":434,"rate_code":"CA-ON-HST-1","rate_id":1,"label":"HST","compound":false,"tax_total":"0.52","shipping_tax_total":"3.12","meta_data":[]}],"shipping_lines":[{"id":433,"method_title":"Supplier Shipping","method_id":"dokan_product_shipping","total":"24.00","total_tax":"3.12","taxes":[{"id":1,"total":"3.12","subtotal":""}],"meta_data":[]}],"fee_lines":[],"coupon_lines":[],"refunds":[]}];
//    var response = UrlFetchApp.fetch (publishedUrl , {
//        contentType:"application/json",
//        method:"POST",
//        payload:JSON.stringify(body),
//        muteHttpExceptions:true
//  });  
//
//  if (response.getResponseCode() !== 200) {
//    throw response.getResponseCode();
//  }
// }


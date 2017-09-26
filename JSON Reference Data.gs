function testThePost() {
  var publishedUrl = "https://script.google.com/a/lnmsupplies.com/macros/s/AKfycbybbi9W7RgQcBoB0Eglcq-xYrtdpOGtcnWybvkXJDADvAIhp8o/exec";
  var body = [
    {f1:"f1a" , f2:"f2a"},
    {f1:"f1b" , f2:"f2b"},
    {"id":2886,"parent_id":0,"number":"2886","order_key":"wc_order_59ca342fb11e2","created_via":"checkout","version":"3.1.2","status":"on-hold","currency":"CAD","date_created":"2017-09-26T07:04:15","date_created_gmt":"2017-09-26T11:04:15","date_modified":"2017-09-26T07:04:16","date_modified_gmt":"2017-09-26T11:04:16","discount_total":"0.00","discount_tax":"0.00","shipping_total":"24.00","shipping_tax":"3.12","cart_tax":"0.52","total":"31.64","total_tax":"3.64","prices_include_tax":false,"customer_id":19,"customer_ip_address":"174.118.153.160","customer_user_agent":"mozilla\/5.0 (windows nt 10.0; win64; x64) applewebkit\/537.36 (khtml, like gecko) chrome\/60.0.3112.113 safari\/537.36","customer_note":"","billing":{"first_name":"Luke","last_name":"Marshall","company":"The Marshall Chronicles","address_1":"2010 Islington Ave,","address_2":"Suite:2101","city":"Toronto","state":"ON","postcode":"M9P 3S8","country":"CA","email":"luke@themarshallchronicles.com","phone":"(647) 525-6646"},"shipping":{"first_name":"Luke","last_name":"Marshall","company":"The Marshall Chronicles","address_1":"2010 Islington Ave,","address_2":"Suite:2101","city":"Toronto","state":"ON","postcode":"M9P 3S8","country":"CA"},"payment_method":"bacs","payment_method_title":"EMT - Email Money Transfer","transaction_id":"","date_paid":null,"date_paid_gmt":null,"date_completed":null,"date_completed_gmt":null,"cart_hash":"85bcdf595ae0c3ab4ae4a4b5f7597a9f","meta_data":[{"id":106806,"key":"has_sub_order","value":"1"},{"id":106909,"key":"_wwpp_order_type","value":"wholesale"},{"id":106910,"key":"_wwpp_wholesale_order_type","value":"wholesale_customer"},{"id":106911,"key":"wwp_wholesale_role","value":"wholesale_customer"},{"id":106914,"key":"_wcpdf_invoice_date","value":"1506423856"},{"id":106915,"key":"_wcpdf_invoice_date_formatted","value":"2017-09-26 07:04:16"},{"id":106916,"key":"_wcpdf_invoice_number","value":"L&M-001052"},{"id":106917,"key":"_wcpdf_invoice_number_data","value":{"number":1052,"formatted_number":"L&M-001052","prefix":"L&M-","suffix":"","document_type":"invoice","order_id":2886,"padding":"6"}},{"id":106969,"key":"_order_stock_reduced","value":"yes"}],"line_items":[{"id":419,"name":"Sbody test","product_id":2868,"variation_id":0,"quantity":1,"tax_class":"","subtotal":"1.00","subtotal_tax":"0.13","total":"1.00","total_tax":"0.13","taxes":[{"id":1,"total":"0.13","subtotal":"0.13"}],"meta_data":[{"id":4497,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4498,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"SBODYTEST","price":1},{"id":420,"name":"GCF Test 1","product_id":2855,"variation_id":0,"quantity":1,"tax_class":"","subtotal":"1.50","subtotal_tax":"0.20","total":"1.50","total_tax":"0.20","taxes":[{"id":1,"total":"0.195","subtotal":"0.195"}],"meta_data":[{"id":4508,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4509,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"GCFTEST01","price":1.5},{"id":421,"name":"WootestL&M","product_id":2845,"variation_id":0,"quantity":1,"tax_class":"","subtotal":"1.50","subtotal_tax":"0.20","total":"1.50","total_tax":"0.20","taxes":[{"id":1,"total":"0.195","subtotal":"0.195"}],"meta_data":[{"id":4519,"key":"_wwp_wholesale_priced","value":"yes"},{"id":4520,"key":"_wwp_wholesale_role","value":"wholesale_customer"}],"sku":"LNMVIR01","price":1.5}],"tax_lines":[{"id":423,"rate_code":"CA-ON-HST-1","rate_id":1,"label":"HST","compound":false,"tax_total":"0.52","shipping_tax_total":"3.12","meta_data":[]}],"shipping_lines":[{"id":422,"method_title":"Supplier Shipping","method_id":"dokan_product_shipping","total":"24.00","total_tax":"3.12","taxes":[{"id":1,"total":"3.12","subtotal":""}],"meta_data":[]}],"fee_lines":[],"coupon_lines":[],"refunds":[]}];
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
        
/*



"Method: POST
Duration: 1.57146
Headers:
user-agent: WooCommerce/3.1.2 Hookshot (WordPress/4.8.2) content-type: application/json x-wc-webhook-source: https://lnmsupplies.com/ x-wc-webhook-topic: order.created x-wc-webhook-resource: order x-wc-webhook-event: created x-wc-webhook-signature: UwmcOA7RGMj0DKRrtUZoBIwfFp8d/UGkIBhAox8mvGQ= x-wc-webhook-id: 2849 x-wc-webhook-delivery-id: 126Content:
  var body = [{
"id"":2861"
"parent_id":0
"number":"2861"
"order_key":"wc_order_59c97620f274f"
"created_via":"checkout"
"version":"3.1.2"
"status":"on-hold"
"currency":"CAD"
"date_created":"2017-09-25T17:33:20"
"date_created_gmt":"2017-09-25T21:33:20"
"date_modified":"2017-09-25T17:33:21"
"date_modified_gmt":"2017-09-25T21:33:21"
"discount_total":"0.00"
"discount_tax":"0.00"
"shipping_total":"0.00"
"shipping_tax":"0.00"
"cart_tax":"0.03"
"total":"0.23"
"total_tax":"0.03"
"prices_include_tax":false
"customer_id":19
"customer_ip_address":"174.118.153.160"
"customer_user_agent":"mozilla\/5.0 (windows nt 10.0; win64; x64) applewebkit\/537.36 (khtml
 like gecko) chrome\/60.0.3112.113 safari\/537.36"
"customer_note":""
"billing":{"first_name":"Luke"
"last_name":"Marshall"
"company":"The Marshall Chronicles"
"address_1":"2010 Islington Ave"
"address_2":"Suite:2101"
"city":"Toronto"
"state":"ON"
"postcode":"M9P 3S8"
"country":"CA"
"email":"luke@themarshallchronicles.com"
"phone":"(647) 525-6646"}
"shipping":{"first_name":"Luke"
"last_name":"Marshall"
"company":"The Marshall Chronicles"
"address_1":"2010 Islington Ave"
"address_2":"Suite:2101"
"city":"Toronto"
"state":"ON"
"postcode":"M9P 3S8"
"country":"CA"}
"payment_method":"bacs"
"payment_method_title":"EMT - Email Money Transfer"
"transaction_id":""
"date_paid":null
"date_paid_gmt":null
"date_completed":null
"date_completed_gmt":null
"cart_hash":"730c7307b9bdef41fbc0aa5f9be365d7"
"meta_data":[{"id":105737
"key":"has_sub_order"
    "value":"1"}
    {"id":105806
    "key":"_wwpp_order_type"
    "value":"wholesale"}
    {"id":105807
    "key":"_wwpp_wholesale_order_type"
    "value":"wholesale_customer"}
    {"id":105808
    "key":"wwp_wholesale_role"
    "value":"wholesale_customer"}
    {"id":105811
    "key":"_wcpdf_invoice_date"
    "value":"1506375201"}
    {"id":105812
    "key":"_wcpdf_invoice_date_formatted"
    "value":"2017-09-25 17:33:21"}
    {"id":105813
      "key":"_wcpdf_invoice_number"
      "value":"L&M-001034"}
      {"id":105814
      "key":"_wcpdf_invoice_number_data"
      "value":{"number":1034
      "formatted_number":"L&M-001034"
      "prefix":"L&M-"
      "suffix":""
      "document_type":"invoice"
      "order_id":2861
      "padding":"6"}}
      {"id":105845
      "key":"_order_stock_reduced"
      "value":"yes"}]
            "line_items":[{"id":368
            "name":"GCF Test 1"
            "product_id":2855
            "variation_id":0
            "quantity":1
            "tax_class":""
            "subtotal":"0.20"
            "subtotal_tax":"0.03"
            "total":"0.20"
            "total_tax":"0.03"
            "taxes":[{"id":1
            "total":"0.026"
        "subtotal":"0.026"}]
            "meta_data":[{"id":4146
            "key":"_wwp_wholesale_priced"
            "value":"yes"}
            {"id":4147
            "key":"_wwp_wholesale_role"
            "value":"wholesale_customer"}]
            "sku":"GCFTEST01"
            "price":0.2}
            {"id":369
            "name":"WootestL&M"
            "product_id":2845
            "variation_id":0
            "quantity":1
            "tax_class":""
            "subtotal":"0.00"
            "subtotal_tax":"0.00"
            "total":"0.00"
            "total_tax":"0.00"
            "taxes":[{"id":1
            "total":"0"
            "subtotal":"0"}]
        "meta_data":[{
          "id":4157
            "key":"_wwp_wholesale_priced"
            "value":"no"}{
          "id":4158
            "key":"_wwp_wholesale_role"
            "value":"wholesale_customer"}]
            "sku":""
            "price":0}
            ]
        "tax_lines":[
          {"id":371
            "rate_code":"CA-ON-HST-1"
            "rate_id":1
            "label":"HST"
            "compound":false
            "tax_total":"0.03"
            "shipping_tax_total":"0.00"
            "meta_data":[]}
          ]
        "shipping_lines":[
            {"id":370
            "method_title":"Supplier Shipping"
            "method_id":"dokan_product_shipping"
            "total":"0.00"
            "total_tax":"0.00"
            "taxes":[]
            "meta_data":[]}]
        "fee_lines":[]
        "coupon_lines":[]
        "refunds":[]}

Status: HTTP 200 OK: Errorbody {background-color: #fff; margin: 0; padding: 0;}.errorMessage {font-family: Arial
sans-serif; font-size: 12pt; font-weight: bold; line-height: 150%; padding-top: 25px;}ReferenceError: "response" is not defined. (line 3
 file "Code"
" project ""Woo Orders db "")
Headers:
content-type: text/html; charset=utf-8 cache-control: no-cache"
 no-store
 max-age=0
 must-revalidate pragma: no-cache expires: Mon
 01 Jan 1990 00:00:00 GMT date: Mon
 25 Sep 2017 21:33:33 GMT content-encoding: gzip p3p: Array x-content-type-options: nosniff x-xss-protection: 1; mode=block server: GSE set-cookie: Array alt-svc: quic=":443"; ma=2592000; v="39
38
37
"35""Content:
<!DOCTYPE html><html><head><link rel=""shortcut icon"" href=""//ssl.gstatic.com/docs/script/images/favicon.ico""><title>Error</title><style type=""text/css"">body {background-color: #fff; margin: 0; padding: 0;}.errorMessage {font-family: Arial"
sans-serif; font-size: 12pt; font-weight: bold; line-height: 150%; padding-top: 25px;}</style></head><body style="margin:20px"><div><img alt="Google Apps Script" src="//ssl.gstatic.com/docs/script/images/logo.png"></div><div style="text-align:center;font-family:monospace;margin:50px auto 0;max-width:600px">
ReferenceError: "response" is not defined. (line 3
 file "Code"
 project "Woo Orders db ")</div></body></html>
*/

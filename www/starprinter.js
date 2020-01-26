cordova.define("com.star.printer.StarPrinter", function (require, exports, module) {
    function MyPrinter() { }

    MyPrinter.prototype.CheckStatus = function (id, success, error) {
        //cordova.exec(success, error, 'Calendar', 'CheckStatus', [id]);
        cordova.exec(
          success, // success callback function
          error, // error callback function
          'StarPrinter', // mapped to our native Java class called "Calendar"
          'CheckStatus', // with this action name
          [{
             "printer": localPrinter
         }]                 // and this array of custom arguments to create our entry
      );
    };
    MyPrinter.prototype.CheckFirmwareVersion = function (id, success, error) {
        cordova.exec(success, error, 'StarPrinter', 'CheckFirmwareVersion', 
        [{
             "printer": localPrinter
         }]);
    };
    MyPrinter.prototype.PrintSampleReceipt = function (id, success, error) {
        cordova.exec(success, error, 'StarPrinter', 'PrintSampleReceipt', 
        [{
             "printer": localPrinter
         }]);
    };
    
    MyPrinter.prototype.QueryPrinter = function (id, success, error) {
        cordova.exec(function(success){successcb(success);} , error, 'StarPrinter', 'QueryPrinter', 
        [{
             "printer": localPrinter
         }]);        
    };
    
    MyPrinter.prototype.PrintInvoice = function (invoice, sig, invoiceDetail, success, error) {
    cordova.exec(success, error, 'StarPrinter', 'PrintInvoice', 
         [{                  // and this array of custom arguments to create our entry
             "invoice": invoice,
             "sig": sig,
             "invoiceDetail": invoiceDetail,
             "printer": localPrinter
         }]);
    };
    MyPrinter.prototype.PrintSignature = function (id, success, error) {
        cordova.exec(success, error, 'StarPrinter', 'PrintImage', 
        [{
             "printer": localPrinter
         }]);
    };

module.exports = new MyPrinter();
});
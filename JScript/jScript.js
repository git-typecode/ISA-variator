//Standard
var ISAtempDrop = 2;
var ISAtempErr = 2.5;
var STD = 1013;
var ISAtempFL0 = 15;

//variables
//var FL = 50; //360
//var FLtemp = 10; //-57

//if (ISAdiff < 0) {
//  window.alert('ISA variation: ' + ISAdiff + '°C varmare än ISA vilket är: ' + errorPRC + '%fel');
//  window.alert('Höjd med ISA temp avikelse: ' + asdsa + ' fot');
//} else {
//  window.alert('ISA variation: ' + ISAdiff + '°C kallare än ISA\nVilket är: ' + errorPRC + '% fel');
//  window.alert('Höjd med ISA temp avikelse: ' + asdsa + ' fot');
//}

//validateForm();

function validateForm() {
  var FL = parseInt(document.getElementById('FLevel').value); //to get the value of desired box
  var FL = fixFL(FL);
  var FLtemp = parseInt(document.getElementById('FlTemp').value); //to get the value of desired box
  var QNH = parseInt(document.getElementById('QNH').value); //to get the value of desired box
  
  var ISAdiff = ISAtempFL0 - (ISAtempDrop * FL / 10) - FLtemp;
  //var FLdiff = FL * 10 * ISAdiff / 100;
  var errorPRC = ISAdiff / ISAtempErr;
  var FLtempError = FL * 100 * errorPRC / 100;
  var asdsa = FL * 100 - FLtempError;
  
  if (ISAdiff < 0) {
	//window.alert('ISA variation: ' + ISAdiff + '°C varmare än ISA vilket är: ' + errorPRC + '%fel');
	//window.alert('Höjd med ISA temp avikelse: ' + asdsa + ' fot');
	  document.write('<p>ISA avvikelse är: '+ ISAdiff + '°C varmare än ISA\nVilket är: '+ errorPRC + '% fel </p>');
	  document.write('<p>Din verkliga höjd är då: '+asdsa+' fot</p>');
	} else {
	  //window.alert('ISA variation: ' + ISAdiff + '°C kallare än ISA\nVilket är: ' + errorPRC + '% fel');
	  //window.alert('Höjd med ISA temp avikelse: ' + asdsa + ' fot');
	  document.write('<p>ISA avvikelse är: '+ ISAdiff + '°C kallare än ISA\nVilket är: '+ errorPRC + '% fel </p>');
	  document.write('<p>Din verkliga höjd är då: '+asdsa+' fot</p>');
	  document.write('<p>From high to low look out below!</p>');
	}
  
  //var FLevel2 = +document.getElementById(',').value; //to get the value of desired box
  //window.alert(FLevel + ' Denna fick vi tag i');
}

function fixFL(FL) {

	if (FL.toString().length > 3) {
		return FL / 100;
	}
	  else {
		return FL;
	}
}

//window.alert(new Date(Date.now()));
//window.alert(new Date(Date.UTC(Date.now())));
//window.alert(nowDate);
//window.alert(Date.UTC(unixTimestamp);
//window.alert(nowDateUTC);
//window.alert("Hello world!");
//var unixTimestamp = Date.now();
//var unixTimestampUTC = Date.UTC();
//var nowDate = new Date(unixTimestamp);
//var nowDateUTC = new Date(unixTimestampUTC);
//var nowDate = new Date(Date.now());
//window.alert(errorPRC + '% fel!');
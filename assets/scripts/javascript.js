var text = ' {"Vehicle_id": "Dxb 12345", "Vehicle_group": "BMW", "Location": "Dxb", "Date": "dd/mm/yy", "Time": "00:00", "Odometer": "25852", "Driver": "Jon", "Mobile": "000-5559988", "Status": "ON"}';
var obj =JSON.parse(text);

document.getElementById("demo").innerHTML =
  "<h4>VEHICLE ID</h4>" + obj.Vehicle_id + "<br>" +
  obj.Vehicle_group + "<br>" +
  obj.Location + "<br>" +
  obj.Date + "<br>" +
  obj.Time + "<br>" +
  obj.Odometer + "<br>" +
  obj.Driver + "<br>" +
  obj.Mobile + "<br>" +
  obj.Status;

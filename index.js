document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsinput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramoutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kilooutput").innerHTML = lbs / 2.2046;
  document.getElementById("ounceoutput").innerHTML = lbs * 16;
});

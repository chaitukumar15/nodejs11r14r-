function otp(n=3) {
  var otp = "";
  for (var i = 0; i < n; i++) {
    var a = Math.floor(Math.random() * 10);

    console.log(a);
    otp += a;
  }

  return otp;
}


module.exports={otp};

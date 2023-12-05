

  var a;
  function pass(){
      if(a==1)
  
      {
          document.getElementById('password').type='password';
          document.getElementById('pass-icon').src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png";
          a=0;
      }
  
      else
      {
          document.getElementById('password').type='text';
          document.getElementById('pass-icon').src="https://i.pinimg.com/originals/67/d4/4a/67d44a56f6c480f2775016ac7cd035c5.png";
          a=1;
      }
  
      
  }
  function auth(){
          
      var email = document.getElementById("email").value;
      
      var password = document.getElementById("password").value;
      if(email=="kapilbishnoi@90000" && password=="kapilbishnoi@3170582")
     {  window.location.assign ("https://kapilbishnoi90000.github.io/KAPIL/Admin-page-8383.html");
     alert("Logged in successfully ✅.Click ok for Next");
    }

    if(email=="12345" && password=="12345")
     {  window.location.assign ("https://kapilbishnoi90000.github.io/KAPIL/Admin-page-8383.html");
     alert("Logged in successfully ✅.Click ok for Next");
    }

    if(email=="vv@3170581" && password=="vv@3170581")
     {  window.location.assign ("https://kapilbishnoi90000.github.io/KAPIL/Admin-page-8383.html");
     alert("Logged in successfully ✅.Click ok for Next");
    }

    if(email=="mu@0029" && password=="mu@0029")
     {  window.location.assign ("https://kapilbishnoi90000.github.io/KAPIL/Admin-page-8383.html");
     alert("Logged in successfully ✅.Click ok for Next");
    }

    if(email=="rk@90000" && password=="rk@90000")
     {  window.location.assign ("https://kapilbishnoi90000.github.io/KAPIL/Admin-page-8383.html");
     alert("Logged in successfully ✅.Click ok for Next");
    }
    else{
        alert("Invalid ID or Password");
        return;
    }
}











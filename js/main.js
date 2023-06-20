(function($) {
  //Sticky Menu
  $(".header-bottom").each(function () {
    var e = $(this);
    if (e.length > 0) {
      var t = $(document).scrollTop(),
        a = e.offset().top,
        s = e.height(),
        r = a + s + s;
      $(window).scroll(function () {
        var s = $(document).scrollTop();
        s > r ? e.addClass("is-fixed") : (s < a || s <= 0) && e.removeClass("is-fixed"),
          s > t ? e.removeClass("show") : e.addClass("show"), t = s
      })
    }
  })

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});
})(jQuery);

function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var user = {
    username : username,
    email : email,
    password : password,
  }
  if(username == "" || email == "" || password == "") {
    alert("Please enter username, email and password.")
  }
  else {
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Sign up success.");
  }
}
  
function login(e) {
  event.preventDefault();
  var username = document.getElementById("usernamelog").value;
  var email = document.getElementById("emaillog").value;
  var password = document.getElementById("passwordlog").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if(user == null){
    alert("Please enter username and password.")
  }
  else if(username == data.username && email == data.email && password == data.password) {
    alert("Logged in successfully.");
    window.location.href = "/index.html"
  }
  else {
    alert("Login unsuccessful.");
  }
}

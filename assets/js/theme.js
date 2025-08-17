(function(){
  var root = document.documentElement;
  var key = "pref-theme";
  var saved = localStorage.getItem(key);
  if(saved === "dark"){ root.classList.add("dark"); }
  if(saved === "light"){ root.classList.remove("dark"); }
  var btn = document.getElementById("themeToggle");
  if(btn){
    btn.addEventListener("click", function(){
      var isDark = root.classList.toggle("dark");
      localStorage.setItem(key, isDark ? "dark" : "light");
    });
  }
})();

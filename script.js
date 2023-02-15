openNav=()=>{
    var width = window.innerWidth;
    if(width <=900 && width > 800)
    {
      document.getElementById("myNav").style.width = "35%";
    }
    else if(width <=800 && width > 700)
    {
      document.getElementById("myNav").style.width = "40%";
    }
    else if(width <=700 && width > 600)
    {
      document.getElementById("myNav").style.width = "45%";
    }
    else if(width <=600 && width >500)
    {
      document.getElementById("myNav").style.width = "50%";
    }
    else if(width <=500 && width> 400)
    {
      document.getElementById("myNav").style.width = "62%";
    }
    else if(width <=400 && width > 200)
    {
      document.getElementById("myNav").style.width = "75%";
    }
    else if(width <=200 && width > 0)
    {
      document.getElementById("myNav").style.width = "100%";
    }
  }
  closeNav=()=>{
    document.getElementById("myNav").style.width = "0%";
  }
    function shadow(x){
      x.setAttribute('style','box-shadow:0px 3px 12px 2px green;');
    }
    function no_shadow(x){
      x.setAttribute('style','box-shadow:none;');
    }
      window.addEventListener('scroll',function(){
        var a = document.querySelector('.top');
        var b = document.querySelector('.logo img');
        if(window.pageYOffset<=55){
          a.setAttribute('style','box-shadow:none;');
          b.setAttribute('style','box-shadow:none;');
        }else{
          a.setAttribute('style','box-shadow:0px 0px 10px 8px gray;');
          b.setAttribute('style','box-shadow:0px 3px 12px 2px green;');
        }
      });
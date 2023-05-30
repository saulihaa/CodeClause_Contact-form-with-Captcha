(function() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    let captchavalue = "";
  
    function generatecaptcha() {
      let value = "";
      for (let i = 0; i < captchaLength; i++) {
        value += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      captchavalue = value;
    }
  
    function setcaptcha() {
      document.querySelector('.captcha-preview').textContent = captchavalue;
    }
  
    function initcaptcha() {
      document.querySelector("#refresh-captcha").addEventListener("click", function() {
        generatecaptcha();
        setcaptcha();
      });
  
      generatecaptcha();
      setcaptcha();
    }
  
    initcaptcha();
  })();
  
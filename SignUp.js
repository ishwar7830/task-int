document.getElementById("signup-submit").addEventListener("click", function() {
    console.log("click:")
    let username = document.getElementById("username").value ;
    let password = document.getElementById("password").value ;
    const USERNAME_LENGTH= 4;
    const PASSWORD_LENGTH = 6;
    
    // let username= "ishwar"
    // let password = "war"
    document.getElementById("username-error").style.display="block"
    document.getElementById("password-error").style.display="block"
    console.log("username, password : ", username , password)
    document.getElementById("username-error").innerText=""
    document.getElementById("password-error").innerText=""
    if (username.length < USERNAME_LENGTH) {
        console.log("username length less")
        // alert("Username should be more than 4 characters")
        document.getElementById("username").value = ""

        document.getElementById("username-error").style.display="block"
        document.getElementById("username-error").innerText="Please enter a valid username"
        return ;
    }
    if (password.length < PASSWORD_LENGTH) {
        // alert("Password should be more than 6 characters")
        document.getElementById("password").value = ""
        document.getElementById("password-error").style.display="block"
        document.getElementById("password-error").innerText="Password length should be more than 6"
        return ;
    }
    let userobject = {
        username : username, 

        password : password
    }
    sessionStorage.setItem("user-object" , JSON.stringify(userobject))
    window.location.href ="file:///D:/task/jsProject1/jsProject/jsProject/Dashboard.html"
})
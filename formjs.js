function resetform() {

    document.getElementById('form1').reset();


}

function addfeed() {

    var flag = 1; // if all the condition satisfies the flag will be one otherwise if will be zero
    var full2 = document.getElementById("sub6").value; // putting the old printed value in full 2


    var g = "no"; //  this gend value eill be changed if 
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var mn = document.getElementById("mname").value;
    var febas = document.getElementById("feed9").value;
    var d = new Date();

    if (g == "no") { // selecting the gender

        if (M.checked == true) {
            var g = "👦🏻 𝗠𝗿.  →   ";
        }
        if (F.checked == true) {
            var g = "👩🏻 𝗠𝘀.  →   ";
        }
    }

    // putting the current entered value in the full
    var date = "🗓      →  " + d + "\n";
    var full = g + fn.trim() + " " + mn.trim() + " " + ln.trim() + "  " + "\n\n" + "💬 𝗦𝗮𝘆𝘀 → " + febas + "\n________________________________________\n\n";


    full2 = full + full2;
<<<<<<< HEAD
    var n = fn.length;
=======
 var n = fn.length;
>>>>>>> 7b099b21b6b4d6c5c1c981177a1f98af20d58db6
    var n1 = ln.length;
    var n2 = mn.length;







    if (g == "no" || fn == "" || ln == "" || febas == "" || n > 40 || n1 > 40 || n2 > 40) {
        flag = 0;


        if (fn == "") {
            alert("🔴 Enter First Name");
        }
        if (ln == "") {
            alert("🔴 Enter Last Name");
        }
        if (g == "no") {
            alert("🔴 Select Gender");
        }
        if (febas == "") {
            alert("🔴 Give your Feedback");
        }
        if (n > 40) {
            alert("🔴 Lenghth of first name is greater then 40 char.");
        }
        if (n1 > 40) {
            alert("🔴 Lenghth of last name is greater then 40 char.");
        }
        if (n2 > 40) {
            alert("🔴 Lenghth of mid name is greater then 40 char.");
        }
<<<<<<< HEAD


=======
>>>>>>> 7b099b21b6b4d6c5c1c981177a1f98af20d58db6



    } else if (flag == 1) {

        document.getElementById("sub6").value = full2;

        document.getElementById('form1').reset();



    }



}

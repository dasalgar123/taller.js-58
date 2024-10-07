var dineroJuan = parseFloat(prompt("Introduce la cantidad de dinero que tiene Juan:"));
var dineroDavid = dineroJuan / 2;
var dineroJose = (dineroJuan + dineroDavid) / 2;
var promedio = (dineroJuan + dineroDavid + dineroJose) / 3;
alert("Juan tiene: $" + dineroJuan.toFixed(2) + "\nDavid tiene: $" + dineroDavid.toFixed(2) + "\nJosé tiene: $" + dineroJose.toFixed(2) + "\nEl promedio de dinero entre los tres es: $" + promedio.toFixed(2));


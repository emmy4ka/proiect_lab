<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Lumea Parfumurilor</title>
</head>
<body>

<table border="1" width="100%">

    <!-- Header -->
    <tr>
        <td colspan="2" align="center">
            <h1>Lumea Parfumurilor</h1>
            <img src="images/images.png" width="150">
        </td>
    </tr>

    <!-- Meniu + Conținut -->
    <tr>
        <td width="25%" valign="top">
            <h3>Meniu</h3>
            <p><a href="index.php">Acasă</a></p>
            <p><a href="paginihtml/dama.php">Parfumuri damă</a></p>
            <p><a href="paginihtml/barbati.php">Parfumuri bărbați</a></p>
            <p><a href="paginihtml/contact.php">Parfumuri unisex</a></p>
            <p><a href="paginihtml/branduri.php">Branduri</a></p>
        </td>

        <td width="75%" valign="top">
            <h2>Bine ai venit!</h2>
            <p>Parfumul este o combinație de arome care îți încântă simțurile.</p>
            <img src="images/all.png.avif" width="300">
            <p>Descoperă colecțiile noastre pentru femei, bărbați și unisex.</p>

            <h3>Navigare rapidă - Click pe imagini:</h3>
            <div class="quick-nav">
                <div class="nav-item">
                    <a href="paginihtml/dama.php"><img src="images/parfum dame.avif"></a>
                    <p><b>Parfumuri damă</b></p>
                </div>
                <div class="nav-item">
                    <a href="paginihtml/barbati.php"><img src="images/manparfume.jpeg"></a>
                    <p><b>Parfumuri bărbați</b></p>
                </div>
                <div class="nav-item">
                    <a href="paginihtml/contact.php"><img src="images/unisex.jpeg"></a>
                    <p><b>Parfumuri unisex</b></p>
                </div>
            </div>

            <!-- FORMULAR ABONARE - trimis prin AJAX, fără reload -->
            <div class="abonare-box">
                <h3>🌸 Fii primul care află când parfumul tău preferat revine în stoc!</h3>
                <p>Lasă-ne datele tale și te anunțăm imediat.</p>

                <form id="form-abonare">
                    <div class="form-grup">
                        <input type="text" name="nume" placeholder="Numele tău">
                    </div>
                    <div class="form-grup">
                        <input type="email" name="email" placeholder="Email-ul tău">
                    </div>
                    <button type="submit">Abonează-mă</button>
                </form>

                <!-- Mesajul de răspuns apare aici prin JavaScript -->
                <p id="mesaj-ajax" style="display:none;"></p>
            </div>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td colspan="2" align="center">
            <h3>Contact</h3>
            <p>Email: lumea.parfumurilor@gmail.com</p>
            <p>Telefon: +373 000 000</p>
            <p>Edineț, Moldova</p>
        </td>
    </tr>
</table>

<script src="js/script.js"></script>
</body>
</html>

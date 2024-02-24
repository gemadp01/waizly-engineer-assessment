<?php
    // Menerima input bilangan
    echo "Masukkan Input: ";
    $input = fgets(STDIN);

    // Mengubah input menjadi array berdasarkan spasi
    $numbers = explode(" ", $input);

    // Validasi constraints
    // looping array
    foreach ($numbers as $num) {

        // konversi tiap element pada array ke integer
        $num = intval($num);

        // jika input kurang dari 1 atau lebih dari 10^9 dan bukan integer
        if ($num < 1 || $num > 1000000000) {
            echo "Input tidak valid. Bilangan harus dalam rentang 1 hingga 10^9.";
            exit();
        }
    }

    // Mengurutkan array secara ascending
    sort($numbers);

    // Menghitung nilai minimum
    $min_sum = array_sum(array_slice($numbers, 0, 4));

    // Menghitung nilai maksimum
    $max_sum = array_sum(array_slice($numbers, 1, 4));

    // Mencetak nilai minimum dan maksimum
    echo $min_sum . " " . $max_sum;
?>
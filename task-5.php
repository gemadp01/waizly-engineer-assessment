<?php
    // Membaca input dari stdin
    // Menerima input -> menghapus spasi extra (start n end line) dan mengubah input (string) menjadi integer
    echo 'Masukkan ukuran array: ';
    $n = intval(trim(fgets(STDIN)));

    // Menerima input -> menghapus spasi extra (optional) -> pecah array berdasarkan spasi -> mengubah setiap elemen menjadi integer -> mengembalikan array baru dari fungsi array_map()
    echo 'Masukkan element array: ';
    $arr = array_map('intval', explode(' ', trim(fgets(STDIN))));

    // Inisialisasi variabel untuk menghitung jumlah nilai positif, negatif, dan nol
    $positive_count = 0;
    $negative_count = 0;
    $zero_count = 0;

    // Menghitung jumlah nilai positif, negatif, dan nol dalam array
    foreach ($arr as $num) {
        if ($num > 0) {
            $positive_count++;
        } elseif ($num < 0) {
            $negative_count++;
        } else {
            $zero_count++;
        }
    }

    // Menghitung proporsi masing-masing jenis nilai
    $positive_proportion = $positive_count / $n;
    $negative_proportion = $negative_count / $n;
    $zero_proportion = $zero_count / $n;

    // Menampilkan hasil dengan format yang diinginkan
    echo number_format($positive_proportion, 6) . PHP_EOL;
    echo number_format($negative_proportion, 6) . PHP_EOL;
    echo number_format($zero_proportion, 6) . PHP_EOL;
?>
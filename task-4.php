<?php
    function plusMinus($arr) {
        $n = count($arr);
        $positive = 0;
        $negative = 0;
        $zero = 0;

        // Menghitung jumlah positif, negatif, dan nol dalam array
        foreach ($arr as $num) {
            if ($num > 0) {
                $positive++;
            } elseif ($num < 0) {
                $negative++;
            } else {
                $zero++;
            }
        }
        
        // Menghitung rasio dan mencetak hasilnya
        // number_format mengembalikan string, 
        $positiveRatio = number_format($positive / $n, 6);
        $negativeRatio = number_format($negative / $n, 6);
        $zeroRatio = number_format($zero / $n, 6);
        /* 
            cara kerja perhitungan rasio diatas ialah
            jumlah dari bilangan positif, negatif, dan nol
            dibagi masing-masing dengan total bilangan pada $n
            dan arguments kedua pada number_format untuk memastikan
            output memiliki 6 digit dibelakang koma
        */

        echo $positiveRatio . "<br>";
        echo $negativeRatio . "<br>";
        echo $zeroRatio . "<br>";
    }

    $arr = [1, 1, 0, -1, -1];
    plusMinus($arr);
?>
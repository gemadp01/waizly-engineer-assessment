<?php
    function miniMaxSum($arr) {
        // Mengurutkan array secara ascending
        sort($arr);

        // Menentukan nilai minimum dan maksimum
        // Mengambil 4 element pertama dimulai dari index 0
        $minSum = array_sum(array_slice($arr, 0, 4));

        // Mengambil 4 element terakhir dimulai dari index 1
        $maxSum = array_sum(array_slice($arr, 1, 4));

        // Mencetak nilai minimum dan maksimum
        return $minSum . " " . $maxSum;
    }

    $result = miniMaxSum([1, 3, 5, 7, 9]);
    echo $result;

?>
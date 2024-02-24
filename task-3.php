<?php
    function sumExcept($except) {
        $totalSum = 0;

        // Loop angka dari 1 sampai 5
        for ($i = 1; $i <= 5; $i++) {

            // jika value $i tidak sama dengan value $except
            if ($i != $except) {

                // $totalSum = $totalSum + $i;
                $totalSum += $i;
            }
        }
        
        return $totalSum;
    }

    // cetak
    echo "Sum everything except 1, the sum is 2 + 3 + 4 + 5 = " . sumExcept(1) . "<br>";
    echo "Sum everything except 2, the sum is 1 + 3 + 4 + 5 = " . sumExcept(2) . "<br>";
    echo "Sum everything except 3, the sum is 1 + 2 + 4 + 5 = " . sumExcept(3) . "<br>";
    echo "Sum everything except 4, the sum is 1 + 2 + 3 + 5 = " . sumExcept(4) . "<br>";
    echo "Sum everything except 5, the sum is 1 + 2 + 3 + 4 = " . sumExcept(5) . "<br>";
?>
<?php
    function timeConversion($s) {
        // Pisahkan jam, menit, detik
        $time_components = explode(":", substr($s, 0, 8));

        // Ambil AM/PM
        $am_pm = substr($s, -2);
    
        // Ambil jam, menit, dan detik
        /*
            $hour diubah menjadi integer, karena jam sering kali diwakili dengan bilangan bulan (1-12)
            $minute n $second tidak diubah ke integer, karena tidak selalu diwakili sebagai bilangan bulat (0-59)
        */
        $hour = intval($time_components[0]);
        $minute = $time_components[1];
        $second = $time_components[2];
    
        // Periksa apakah waktu adalah AM atau PM
        if ($am_pm === 'AM') {
            // Jika waktu adalah AM dan jam adalah 12, maka konversi menjadi 00
            if ($hour === 12) {
                $hour = 0;
            }
        } else {
            // Jika waktu adalah PM dan jam bukan 12, tambahkan 12 jam
            if ($hour !== 12) {
                $hour += 12;
            }
        }
    
        // Format ulang jam untuk memastikan dua digit
        /*
            % format sebuah nilai.
            0 menambahkan nol di depan .
            2 dua digit untuk nilai yang diformat.
            d nilai yang akan diformat adalah bilangan bulat 
        */
        $hour = sprintf("%02d", $hour);
    
        // Kembalikan waktu dalam format 24 jam
        return "$hour:$minute:$second";
    }
    
    $s = '07:05:45PM';
    echo timeConversion($s); 
?>
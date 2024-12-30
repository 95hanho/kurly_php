<?
    $path = '../../../'; 
    $sub_path = '../../main/'; 
    $sub2_path = '../'; 
    $current_url = $_SERVER['REQUEST_URI'];
    echo "<script>";
    echo "let _path =  '" . $path . "';";
    echo "</script>";

    function isActive($url, $current_url) {
        // 현재 URL에서 쿼리 스트링 제거
        $current_url = strtok($current_url, '?'); // ? 뒤를 제거

        // 경로 비교 (current_url이 url로 끝나는지 확인)
        if (substr($current_url, -6) === substr($url, -6)) {
            return 'active';
        }

        return '';
    }
?>
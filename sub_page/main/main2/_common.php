<?
    error_reporting(E_ALL); // 모든 오류를 보고하도록 설정
    ini_set('display_errors', 1); // 오류 메시지 화면에 표시

    $path = '../../../'; 
    $sub_path = '../';
    $sub2_path = '../../member/';  
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
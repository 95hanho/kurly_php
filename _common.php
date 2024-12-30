<?
    error_reporting(E_ALL); // 모든 오류를 보고하도록 설정
    ini_set('display_errors', 1); // 오류 메시지 화면에 표시

    $path = './'; 
    $sub_path =  './sub_page/main/';   //루트에서 서브페이지로 이동  : 메인
    $current_url = $_SERVER['REQUEST_URI'];
    $sub2_path = './sub_page/member/'; //루트에서 서브페이지로 이동 : 멤버

    echo "<script>";
    echo "let _path =  '" . $path . "';";
    echo "</script>";

    function isActive() {
        return "";
    }
?>
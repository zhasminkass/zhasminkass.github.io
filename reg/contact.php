<?
$email = $_REQUEST['email'];
$psw = $_REQUEST['psw'];
$psw_repeat = $_REQUEST['psw_repeat'];

header("Content-type: text/html; charset=utf-8");

echo "<p>$email";
echo "<p>$psw";
echo "<p>$psw_repeat";
?>
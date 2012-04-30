<?php
	$usename = 'root';
	$password = "1mp0rtant";
	$database = "iamsyl";
	$server = "localhost";
	
	$db_handle = mysql_connect($server, $username, $password) or die('Error : ' . mysql_error());
	$db_found = mysql_select_db($database, $db_handle) or die('Error : ' . mysql_error());
	
	$response_array = array();
	
	if ($db_found){
		//echo 'I exits';
		if (empty($_POST['name'])){
			$response_array['status'] = 'error';
			$response_array['message'] = 'Oops! You forgot your name.';
		}elseif(empty($_POST['comments'])){
			$response_array['status'] = 'error';
			$response_array['message'] = 'Few lines please... Even 2 words should do good';
		}else{
			//echo 'Hello';
			$query = "INSERT INTO contacts (name, email, twitter, comments, rate) VALUES ('". $_POST['name'] ."', '". $_POST['email'] ."', '". $_POST['twitter'] ."', '". $_POST['comments'] ."', '". $_POST['rate'] ."')";
			
			$results = mysql_query($query);
			
			//echo $query;
			
			if ($results == 1){
				$response_array['status'] = 'success';
				$response_array['message'] = 'Email Sent';
			}
		}
	}else{
		$response_array['message'] = 'Not Found';
	}
	
	echo json_encode($response_array);

?>
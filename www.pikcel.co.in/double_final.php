<?php
  $myFile = "input.txt";$fh = fopen($myFile, 'r') or die("Couldn't open file");$theData = fread($fh, filesize($myFile));while(!feof($fh)) { $theData .= fgets($fh, 1024); }fclose($fh);
  $values = explode("\n", $theData);$loopCount = $values[0];start($values);
  function start($values){for ($j = 1; $j <= $values[0] - 1;$j++){$sqrt = gen_sqrt($values[$j]);if (strpos($sqrt,".") !== false) {$sqrt = intval($sqrt);}else{$sqrt = intval($sqrt);}echo main_logic($values[$j],$sqrt). "<br />";}}
  function sqrt_auth($number){if (strpos($number,".") !== false) {return false;}else{return true;}}  
  function gen_sqrt($number){$sq = sqrt($number); return $sq;}
  function main_logic($mNumber, $closeSquare){$count = 0;$Array = array();$arrCount = 0;for ($q=$closeSquare;$q>=0;$q--){$oneQ = $q * $q;$secondQ = $mNumber - $oneQ;$sqrt = gen_sqrt($secondQ); if(sqrt_auth($sqrt)){if ($oneQ > $secondQ){$combination =$secondQ. ":" .$oneQ;}else{$combination =$oneQ. ":" .$secondQ;}if ($q !== $closeSquare){if (!(in_array($combination, $Array))){$count = $count + 1;$Array[$arrCount] = $combination;}}else{$count = $count + 1;$Array[$arrCount] = $combination;}}$arrCount = $arrCount + 1;}return $count;}
?>
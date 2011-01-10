<?php
  $myFile = "input.txt";
  $fh = fopen($myFile, 'r') or die("Couldn't open file");
  $theData = fread($fh, filesize($myFile));
  
  
  while(!feof($fh)) 
  { 
    $theData .= fgets($fh, 1024); 
  }
  
  fclose($fh);
  
  $values = explode("\n", $theData);
  
  $loopCount = $values[0];
  //echo $loopCount;
  
  start($values);
  
  function start($values){
    
    //echo $values[0];
    
    for ($j = 1; $j <= $values[0] - 1;$j++){
      
      
      $sqrt = gen_sqrt($values[$j]);
      //echo $values[16] . "<br />";
      
      
      if (strpos($sqrt,".") !== false) {
        $sqrt = intval($sqrt);
      }else{
        $sqrt = floatval($sqrt);
      }
      echo $values[$j] . " : <strong>" . main_logic($values[$j],$sqrt) . "</strong><br />";
      //echo $values[$j] . " : <strong>" . $sqrt . "</strong><br />";
      //main_logic($values[8],$sqrt);
      
      
    }
    
    
    //for ($i=0; $i <= count($values) - 1;$i++){
    //  echo $values[$i] . "<br />";
    //}
    
    
  }
  
  function sqrt_auth($number){
    if (strpos($number,".") !== false) {
        return false;
      }else{
        return true;
      }
  }
  
  function gen_sqrt($number){$sq = sqrt($number); return $sq;}
  
  function main_logic($mNumber, $closeSquare){
    //echo "b:". $mNumber ."->". $closeSquare . "<br />";
    $count = 0;
    $Array = array();
    $arrCount = 0;
    for ($q=$closeSquare;$q>=0;$q--){
      $oneQ = $q * $q;
      $secondQ = $mNumber - $oneQ;
      
      //echo $oneQ ."->". $secondQ . "<br />";
      
      $sqrt = gen_sqrt($secondQ);
      
      //echo $sqrt . "<br />";
      
      //echo $oneQ. " : " . $secondQ. "<br />" ;
      
      
      
      if(sqrt_auth($sqrt)){
        if ($oneQ > $secondQ){$combination =$secondQ. ":" .$oneQ;}else{$combination =$oneQ. ":" .$secondQ;}        
        
        if ($q !== $closeSquare)
        {
          if (!(in_array($combination, $Array))){
            $count = $count + 1;
            //echo "True<br />";
            $Array[$arrCount] = $combination;
          }
        }else{$count = $count + 1;
            //echo "True<br />";
            $Array[$arrCount] = $combination;
        }
        
        //if (!in_array($combination, $Array) && !in_array(strrev($combination),$Array)){
        //  $count = $count + 1;
        //  echo "True<br />";
        //}
        //echo "Something : ". in_array($combination, $Array). "->" .in_array(strrev($combination),$Array) . "<br />";
      }
      
      $arrCount = $arrCount + 1;
    }
    //foreach($Array as $value) {
    //  print "Array:$value<br>";
    //}
    //echo $count . "<br />:DONE:<br /><br />";
    return $count;
  }
  
?>
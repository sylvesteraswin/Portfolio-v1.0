<?php
//request data from the database
//code here to connect to database and get the data you want

/* Example JSON format 
{
  "item1": "I love jquery4u",
  "item2": "You love jQuery4u",
  "item3": "We love jQuery4u"
}
*/

//return in JSON format

	header('Content-type: application/json');
echo "{";
echo "item1: ", json_encode($item1), "\n";
echo "item2: ", json_encode($item2), "\n";
echo "item3: ", json_encode($item3), "\n";
echo "}";
?>
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use DB;


class apicontroller extends Controller
{
    //
    public function showQuote($quoteCategory){
    	// print_r($quoteCategory);
        $pieces = explode("&", $quoteCategory);
        $maxSize = sizeof($pieces);
        $randomInteger = rand(0,$maxSize-1);       
        // print_r($randomInteger."-----");
        $quotes = DB::table('quotes')->where('type', $pieces[$randomInteger])->get();
        $randomQuoteInteger = rand(0,sizeof($quotes)-1);        
        $quoteArray = (array)$quotes[$randomQuoteInteger];
       
        print_r("{\"quoteText\":\"".$quoteArray['quote']."\"}");
        
    }
    public function userData($emailId){  
    // try {
    //         $checkEmailExists = DB::table('customers')->where('email',$emailId)->first();            
    //         if ($checkEmailExists) {
    //             $getEmailId = DB::table('customers')->where('email',$emailId)->pluck('id');
    //             $emailIdData = (array)$getEmailId;                
    //             print_r("{\"response\":\""."Email already exists"."\",\"responseId\":\"".$emailIdData[0]."\",\"type\":\"0\"}");
    //         }else{                
    //             $t = time();
    //             $timeStamp = date("Y-m-d",$t);
    //             $insertEmail = DB::table('customers')->insert(['email' => $emailId, 'created_at' => $timeStamp, 'updated_at'=>$timeStamp]);                
    //             $getEmailId = DB::table('customers')->where('email',$emailId)->pluck('id');
    //             $emailIdData = (array)$getEmailId;
    //             print_r("{\"response\":\""."Email inserted successfully"."\",\"responseId\":\"".$emailIdData[0]."\",\"type\":\"1\"}");
    //         }
    //     } catch (Exception $e) {
            
    //     }  	
        
        
    }
    public function addLikes($quoteId=null,$cromeId=null){
    	print_r("quote id is".$quoteId);
    }
    public function userFunction(Request $request){
        //post request for inserting user into database
        $data = $request->all();
        $str = $data['id'];        
        $key = pack("H*", "0123456789abcdef0123456789abcdef");
        $iv =  pack("H*", "abcdef9876543210abcdef9876543210");

        //Now we receive the encrypted from the post, we should decode it from base64,
        $encrypted = base64_decode($str);
        $shown = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $encrypted, MCRYPT_MODE_CBC, $iv);
        $finalString = substr($shown,0,strpos($shown,".com"));        
        $emailId = $finalString.".com";
        try {
            $checkEmailExists = DB::table('customers')->where('email',$emailId)->first();            
            if ($checkEmailExists) {
                $getEmailId = DB::table('customers')->where('email',$emailId)->pluck('id');
                $emailIdData = (array)$getEmailId;                
                print_r("{\"response\":\""."Email already exists"."\",\"responseId\":\"".$emailIdData[0]."\",\"type\":\"0\"}");
            }else{                
                $t = time();
                $timeStamp = date("Y-m-d",$t);
                $insertEmail = DB::table('customers')->insert(['email' => $emailId, 'created_at' => $timeStamp, 'updated_at'=>$timeStamp]);                
                $getEmailId = DB::table('customers')->where('email',$emailId)->pluck('id');
                $emailIdData = (array)$getEmailId;
                print_r("{\"response\":\""."Email inserted successfully"."\",\"responseId\":\"".$emailIdData[0]."\",\"type\":\"1\"}");
            }
        } catch (Exception $e) {
            
        }   
    }

    public function testfunction(Request $request){
        $data = $request->all(); 
        print_r($data['id']);
    }
}

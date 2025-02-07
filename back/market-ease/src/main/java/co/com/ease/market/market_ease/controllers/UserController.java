package co.com.ease.market.market_ease.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {


    @GetMapping("/example")
    public ResponseEntity<String> showBasicEndpoint(){

        return new ResponseEntity<>("Correcto",HttpStatus.OK);
    }

}

package co.com.ease.market.market_ease.controllers;

import co.com.ease.market.market_ease.dto.GenericResponse;
import co.com.ease.market.market_ease.dto.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/product")
public class ProductController {

    @GetMapping(value = "")
    public ResponseEntity<GenericResponse> getProduct(){

        return new ResponseEntity<>(new Response<>("Consultado exitosamente","Soy un producto"), HttpStatus.OK);

    }

}

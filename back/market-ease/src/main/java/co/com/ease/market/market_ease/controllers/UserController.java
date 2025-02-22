package co.com.ease.market.market_ease.controllers;

import co.com.ease.market.market_ease.dto.GenericResponse;
import co.com.ease.market.market_ease.dto.Response;
import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.dto.user.UserResponse;
import co.com.ease.market.market_ease.entities.RoleEntity;
import co.com.ease.market.market_ease.entities.UserEntity;
import co.com.ease.market.market_ease.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.com.ease.market.market_ease.dao.UserEntityDao;
import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping(value = "/user",produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=application/json;charset=UTF-8")
@AllArgsConstructor
public class UserController {

    private IUserService userService;

    @GetMapping(value = "/example/{document}")
    @ResponseBody
    public ResponseEntity<GenericResponse> showBasicEndpoint(@PathVariable("document") String document) throws Exception {

        UserEntity userEntity = userService.getUserByDocument(document);
        return new ResponseEntity<>(new Response<>("Usuario traido exitosamente", userEntity), HttpStatus.OK);

    }

    @PostMapping(value = "/register")
    public ResponseEntity<GenericResponse> registerUser(@RequestBody UserRegistrationDto userRegistrationDto) {
        UserEntity userEntity= userService.registerUser(userRegistrationDto);

        return new ResponseEntity<>(new Response<>("Creado exitosamente",userEntity),HttpStatus.CREATED);

    }


}

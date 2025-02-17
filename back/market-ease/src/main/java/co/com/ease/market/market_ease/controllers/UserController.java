package co.com.ease.market.market_ease.controllers;

import co.com.ease.market.market_ease.dto.GenericResponse;
import co.com.ease.market.market_ease.dto.Response;
import co.com.ease.market.market_ease.dto.user.UserResponse;
import co.com.ease.market.market_ease.entities.RoleEntity;
import co.com.ease.market.market_ease.entities.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import co.com.ease.market.market_ease.dao.UserEntityDao;
import lombok.AllArgsConstructor;

import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE, headers = "Accept=application/json;charset=UTF-8")
public class UserController {

    @Autowired
    private UserEntityDao userEntityDao;

    @GetMapping(value = "/example/{document}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ResponseEntity<GenericResponse> showBasicEndpoint(@PathVariable("document") String document) throws Exception {

//       UserEntity userEntity = userEntityDao.findById(document).orElseThrow(() -> new Exception("no encontrado documento"));
List<UserEntity> userEntity = userEntityDao.findAll();
        UserResponse userResponse=new UserResponse();
        userResponse.setName(userEntity.get(0).getFirstName()+" "+userEntity.get(0).getLastName());
        userResponse.setRoles(userEntity.get(0).getRoles().stream().map(RoleEntity::getRole).toList());

        return new ResponseEntity<>(new Response<>("Usuario traido exitosamente",userEntity), HttpStatus.OK);
    }

}

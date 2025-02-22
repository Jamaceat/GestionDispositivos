package co.com.ease.market.market_ease.services;

import co.com.ease.market.market_ease.dto.user.UserLoginDto;
import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.UserEntity;
import com.mongodb.MongoException;
import org.springframework.security.core.Authentication;

public interface IUserService {

    UserEntity getUserByDocument(String document) throws MongoException;

    UserEntity registerUser(UserRegistrationDto userRegistrationDto) throws MongoException;

    String loginUserAuthentication(UserLoginDto userLoginDto) throws MongoException;


}

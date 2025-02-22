package co.com.ease.market.market_ease.services;

import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.UserEntity;
import com.mongodb.MongoException;

public interface IUserService {

    UserEntity getUserByDocument(String document) throws MongoException;

    UserEntity registerUser(UserRegistrationDto userRegistrationDto) throws MongoException;



}

package co.com.ease.market.market_ease.services;

import co.com.ease.market.market_ease.dao.UserEntityDao;
import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.UserEntity;
import com.mongodb.MongoException;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {

 private UserEntityDao userEntityDao;

 private PasswordEncoder passwordEncoder;

    @Override
    public UserEntity getUserByDocument(String document) throws MongoException {
        UserEntity userEntity = userEntityDao.findByDocument(document).orElseThrow(() -> new MongoException("no encontrado documento"));
        return userEntity;
    }

    @Override
    public UserEntity registerUser(UserRegistrationDto userRegistrationDto) throws MongoException {


        return null;
    }
}

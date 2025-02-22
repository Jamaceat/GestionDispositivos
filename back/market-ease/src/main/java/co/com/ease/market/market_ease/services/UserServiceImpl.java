package co.com.ease.market.market_ease.services;

import co.com.ease.market.market_ease.dao.RoleEntityDao;
import co.com.ease.market.market_ease.dao.UserEntityDao;
import co.com.ease.market.market_ease.dto.mappers.PostUserMapper;
import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.RoleEntity;
import co.com.ease.market.market_ease.entities.UserEntity;
import com.mongodb.MongoException;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {

 private UserEntityDao userEntityDao;

 private PasswordEncoder passwordEncoder;

 private RoleEntityDao roleEntityDao;

 private PostUserMapper postUserMapper;

    @Override
    public UserEntity getUserByDocument(String document) throws MongoException {
        return userEntityDao.findByDocument(document).orElseThrow(() -> new MongoException("no encontrado documento"));
    }

    @Override
    public UserEntity registerUser(UserRegistrationDto userRegistrationDto) throws MongoException {
        Set<RoleEntity> roles=roleEntityDao.findRoles(Arrays.stream(userRegistrationDto.getRoles()).toList())
                .orElseThrow(() -> new MongoException("Roles not found"));

        UserEntity userEntity = postUserMapper.userRegistrationDtoToUserEntity(userRegistrationDto);

        userEntity.setRoles(roles.stream().toList());

        userEntity.setPassword(passwordEncoder.encode(userRegistrationDto.getPassword()));

        return userEntityDao.save(userEntity);
    }
}

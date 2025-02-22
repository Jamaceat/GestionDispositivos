package co.com.ease.market.market_ease.services;

import co.com.ease.market.market_ease.constants.ApplicationConstants;
import co.com.ease.market.market_ease.dao.RoleEntityDao;
import co.com.ease.market.market_ease.dao.UserEntityDao;
import co.com.ease.market.market_ease.dto.mappers.PostUserMapper;
import co.com.ease.market.market_ease.dto.user.UserLoginDto;
import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.RoleEntity;
import co.com.ease.market.market_ease.entities.UserEntity;
import com.mongodb.MongoException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.AllArgsConstructor;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements IUserService {

 private UserEntityDao userEntityDao;

 private PasswordEncoder passwordEncoder;

 private RoleEntityDao roleEntityDao;

 private PostUserMapper postUserMapper;

 private AuthenticationManager authenticationManager;

 private Environment env;

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

    @Override
    public String loginUserAuthentication(UserLoginDto userLoginDto) throws MongoException {


            String jwt = "";
            Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(userLoginDto.getEmail(),
                    userLoginDto.getPassword());
            Authentication authenticationResponse = authenticationManager.authenticate(authentication);
            if(null != authenticationResponse && authenticationResponse.isAuthenticated()) {
                if (null != env) {
                    String secret = env.getProperty(ApplicationConstants.JWT_SECRET_KEY,
                            ApplicationConstants.JWT_SECRET_DEFAULT_VALUE);
                    SecretKey secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
                    jwt = Jwts.builder().issuer("Market Ease").subject("JWT Token")
                            .claim("username", authenticationResponse.getName())
                            .claim("authorities", authenticationResponse.getAuthorities().stream().map(
                                    GrantedAuthority::getAuthority).collect(Collectors.joining(",")))
                            .issuedAt(new java.util.Date())
                            .expiration(new java.util.Date((new java.util.Date()).getTime() + 30000000))
                            .signWith(secretKey).compact();
                }
            }

        return jwt;
    }


}

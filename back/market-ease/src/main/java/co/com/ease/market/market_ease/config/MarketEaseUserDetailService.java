package co.com.ease.market.market_ease.config;

import co.com.ease.market.market_ease.dao.UserEntityDao;
import co.com.ease.market.market_ease.entities.RoleEntity;
import co.com.ease.market.market_ease.entities.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class MarketEaseUserDetailService implements UserDetailsService{


    @Autowired
    private UserEntityDao userEntityDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userEntityDao.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found")) ;
        List<SimpleGrantedAuthority> grantedAuthorities = new ArrayList<>(userEntity.getRoles().stream().map(RoleEntity::getRole).map(SimpleGrantedAuthority::new).toList());

        return new User(userEntity.getEmail(),userEntity.getPassword(),grantedAuthorities);
    }
    
}

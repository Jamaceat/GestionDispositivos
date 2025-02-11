package co.com.ease.market.market_ease.config;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class MarketEaseUserDetailService implements UserDetailsService{

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       
        throw new UnsupportedOperationException("Unimplemented method 'loadUserByUsername'");
    }
    
}

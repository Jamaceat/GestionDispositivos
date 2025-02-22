package co.com.ease.market.market_ease.config.authentication;

import co.com.ease.market.market_ease.config.MarketEaseUserDetailService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class MarketEaseUsernamePasswordAuthenticationProvider implements AuthenticationProvider {


    MarketEaseUserDetailService marketEaseUserDetailService;

    PasswordEncoder passwordEncoder;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String username = authentication.getName();
        System.out.println(authentication.getPrincipal());
        String pwd = authentication.getCredentials().toString();
        UserDetails userDetails= marketEaseUserDetailService.loadUserByUsername(username);
        if(passwordEncoder.matches(pwd,userDetails.getPassword())){
            // logica
            return new UsernamePasswordAuthenticationToken(username,pwd,userDetails.getAuthorities());
        }else {
            throw new BadCredentialsException("Invalid password");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
      return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}

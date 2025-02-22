package co.com.ease.market.market_ease.dto.user;

import co.com.ease.market.market_ease.constants.RoleConstant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserRegistrationDto {

    private String document;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String address;
    private RoleConstant[] roles;







}

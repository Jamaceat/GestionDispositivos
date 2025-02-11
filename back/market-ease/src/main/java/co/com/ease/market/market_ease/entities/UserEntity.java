package co.com.ease.market.market_ease.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "cll_user")
public class UserEntity {


    
    @Id
    private Long document;

    @Field("first_name")
    private String firstName;
    
    
    @Field("last_name")
    private String lastName;

    @Email(message = "Email not valid")
    private String email;

    @NotNull(message = "The password can not be empty")
    private String password;

    private String address;

    @DBRef
    private List<RoleEntity> roles;


}

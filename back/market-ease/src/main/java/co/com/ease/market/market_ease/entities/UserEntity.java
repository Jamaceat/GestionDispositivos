package co.com.ease.market.market_ease.entities;

import java.util.List;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document(collection = "cll_user")
public class UserEntity {


    
    @Id
    private String id;

    @Field("document")
    @Indexed(unique = true)
    private String document;

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

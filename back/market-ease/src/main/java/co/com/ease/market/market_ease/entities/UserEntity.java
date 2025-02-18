package co.com.ease.market.market_ease.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;


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

    public UserEntity(String document, String firstName, String lastName, String email, String password, String address, List<RoleEntity> roles) {
        this.document = document;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.roles = roles;
    }

    public UserEntity() {
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public @Email(message = "Email not valid") String getEmail() {
        return email;
    }

    public void setEmail(@Email(message = "Email not valid") String email) {
        this.email = email;
    }

    public @NotNull(message = "The password can not be empty") String getPassword() {
        return password;
    }

    public void setPassword(@NotNull(message = "The password can not be empty") String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }
}

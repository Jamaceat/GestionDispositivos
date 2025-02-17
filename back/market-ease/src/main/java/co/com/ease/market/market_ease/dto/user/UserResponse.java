package co.com.ease.market.market_ease.dto.user;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;


public class UserResponse implements Serializable {

    private String name;

    private List<String> roles;

    public UserResponse(String name, List<String> roles) {
        this.name = name;
        this.roles = roles;
    }

    public UserResponse() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}

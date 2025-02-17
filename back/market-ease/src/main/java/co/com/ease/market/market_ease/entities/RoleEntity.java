package co.com.ease.market.market_ease.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Document(collection = "cll_role")
public class RoleEntity {
    
    @Id
    private String id;

    private String role;

    private String description;

    public RoleEntity() {
    }

    public RoleEntity(String id, String role, String description) {
        this.id = id;
        this.role = role;
        this.description = description;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

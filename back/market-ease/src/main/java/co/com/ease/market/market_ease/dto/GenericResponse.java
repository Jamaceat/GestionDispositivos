package co.com.ease.market.market_ease.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public abstract class GenericResponse {
    private String message;

    public GenericResponse(String message) {
        this.message = message;
    }
}

package co.com.ease.market.market_ease.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Response<T> extends GenericResponse{

private T result;

    public Response(String message, T result) {
        super(message);
        this.result = result;
    }

}

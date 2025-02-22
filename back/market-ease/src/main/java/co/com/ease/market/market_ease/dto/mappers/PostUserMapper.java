package co.com.ease.market.market_ease.dto.mappers;

import co.com.ease.market.market_ease.dto.user.UserRegistrationDto;
import co.com.ease.market.market_ease.entities.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
public interface PostUserMapper {

    @Mapping(target = "roles",ignore = true)
    @Mapping(target = "password",ignore = true)
    UserEntity userRegistrationDtoToUserEntity(UserRegistrationDto userRegistrationDto);

}

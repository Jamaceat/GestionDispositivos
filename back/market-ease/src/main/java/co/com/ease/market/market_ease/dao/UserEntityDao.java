package co.com.ease.market.market_ease.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.com.ease.market.market_ease.entities.UserEntity;

public interface UserEntityDao extends MongoRepository<UserEntity,Long> {

    Optional<UserEntity> findByDocument(Long document);
    
}

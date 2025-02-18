package co.com.ease.market.market_ease.dao;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.com.ease.market.market_ease.entities.UserEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEntityDao extends MongoRepository<UserEntity,String> {

    Optional<UserEntity> findByDocument(String document);

    Optional<UserEntity> findByEmail(String email);
    
}

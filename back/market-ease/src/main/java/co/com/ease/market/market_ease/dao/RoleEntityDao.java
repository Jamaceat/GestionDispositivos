package co.com.ease.market.market_ease.dao;

import co.com.ease.market.market_ease.constants.RoleConstant;
import co.com.ease.market.market_ease.entities.RoleEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface RoleEntityDao extends MongoRepository<RoleEntity, String> {

    @Query("{ 'role': {$in :?0}}")
    Optional<Set<RoleEntity>> findRoles(List<RoleConstant> searchRoles);
}

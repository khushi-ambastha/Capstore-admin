package com.example.main.repository;



import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.example.main.email_token.ConfirmationToken;

import lombok.Data;

@Data
@Repository
@EnableTransactionManagement
@Transactional
public class ConfirmationTokenRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Autowired
	@PersistenceContext
	EntityManager entityManager;
	
	public ConfirmationToken findByConfirmationToken(String confirmationToken)
	{	
		ConfirmationToken confToken=null;
		try {
		TypedQuery<ConfirmationToken> q2 = entityManager
				.createQuery("SELECT ct from ConfirmationToken ct where confirmationToken='"+confirmationToken+"'",ConfirmationToken.class);            
		confToken = (ConfirmationToken)q2.getSingleResult();
		} catch(NoResultException nre) { }
		
		return confToken;
	}
	
	public void save(ConfirmationToken confirmationToken) {
		entityManager.persist(confirmationToken);
		entityManager.flush();
	}
	
}


//@Repository(value="ConfirmationTokenRepository")
//public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Integer>{
//	
//    @Query("SELECT ct from ConfirmationToken ct where ct.confirmationToken= :confirmationToken")
//	 ConfirmationToken findByConfirmationToken(@Param("confirmationToken") String confirmationToken);
//   
//	
//}
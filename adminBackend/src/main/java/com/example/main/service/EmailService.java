package com.example.main.service;

import java.io.UnsupportedEncodingException;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.example.main.dao.AdminDao;
import com.example.main.exception.UserAlreadyExistsException;
import com.example.main.model.MerchantDetails;
import com.example.main.model.User;

@Service("EmailService")
public class EmailService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private AdminDao adminDao;
	
	
	
	SimpleMailMessage mail = new SimpleMailMessage();
	
	
	public void sendInvitationsToUsers(String email) throws MailException{
		
		mail.setTo(email);
		mail.setSubject("Capstore merchant invite");
		mail.setText("Join Capstore as a Merchant. SignUp here now: http://localhost:4200/signup ");
		javaMailSender.send(mail);
		
	}
	
	
    public void sendNotificationToMerchant(MerchantDetails merchant) throws MailException, MessagingException,
                                               UnsupportedEncodingException, UserAlreadyExistsException{
		
		MerchantDetails exist = adminDao.findMerchantByeMail(merchant.getEmail());
		
		if(exist==null) {
		    
			adminDao.addMerchant(merchant);
			
			MimeMessage message = javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			helper.setTo(merchant.getEmail());
			
			String url = "http://localhost:4200/verifyMerchant/"+merchant.getEmail();
			
			helper.setSubject("New Merchant Request");
			  helper.setText("<html><body><h1>Merchant Registration!</h1><br>" +
			  merchant.getName()+"<br><button type='submit'>"
			  		+ "<a href="+url+">Show Details</a></button>" + "<br><body></html>", true);
			  
			  javaMailSender.send(message);
		}
		else {
			throw new UserAlreadyExistsException("Merchant exists with this email id!!!");
		}
	}
	
	
	

}
